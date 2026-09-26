// Ruta en el repo: middleware.ts (raíz del proyecto, junto a package.json)
//
// Ya NO habla con Supabase/Fincil. Solo le pregunta a la API propia
// (/api/tienda) si el host corresponde a una tienda publicada.

import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    // Excluye /api para no llamarse a sí mismo en bucle, y los assets estáticos
    "/((?!api|_next/static|_next/image|favicon.ico|images|tienda-no-encontrada).*)",
  ],
};

export async function middleware(req: NextRequest) {
  const host = req.headers.get("host") ?? "";

  // En local no hay subdominio real: ?dev_host=semilla-proposito.toolkap.cloud
  const hostEfectivo =
    process.env.NODE_ENV === "development"
      ? req.nextUrl.searchParams.get("dev_host") ?? host
      : host;

  let res: Response;
  try {
    res = await fetch(
      new URL(`/api/tienda?host=${encodeURIComponent(hostEfectivo)}`, req.url)
    );
  } catch (err) {
    console.error("Error llamando a /api/tienda:", err);
    return NextResponse.next();
  }

  if (res.status === 404) {
    return NextResponse.rewrite(new URL("/tienda-no-encontrada", req.url));
  }

  if (!res.ok) {
    // API caída o sin configurar: no tumbar el sitio
    return NextResponse.next();
  }

  const { tienda } = await res.json();

  const headers = new Headers(req.headers);
  headers.set("x-tienda-slug", tienda.slug);
  headers.set("x-tienda-host", hostEfectivo);

  return NextResponse.next({ request: { headers } });
}