// Ruta en el repo: middleware.ts (raíz del proyecto Next.js del e-commerce)

import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const config = {
  matcher: [
    // Corre en todo excepto assets estáticos y rutas internas de Next
    "/((?!_next/static|_next/image|favicon.ico|api/health).*)",
  ],
};

export async function middleware(req: NextRequest) {
  const host = req.headers.get("host") ?? "";

  // En local (localhost:3000) no hay subdominio real: permite forzar
  // uno por query param para probar, ej. ?dev_host=semilla-proposito.toolkap.cloud
  const hostEfectivo =
    process.env.NODE_ENV === "development"
      ? req.nextUrl.searchParams.get("dev_host") ?? host
      : host;

  const res = await fetch(
    `${SUPABASE_URL}/functions/v1/tienda-publica?host=${encodeURIComponent(hostEfectivo)}`,
    { headers: { apikey: SUPABASE_ANON_KEY } }
  );

  if (!res.ok) {
    // Tienda no encontrada / no publicada / dominio sin conectar todavía
    return NextResponse.rewrite(new URL("/tienda-no-encontrada", req.url));
  }

  const { tienda } = await res.json();

  // Inyecta el contexto de la tienda como header interno para que las
  // páginas/route handlers lo lean sin volver a resolver el host.
  // No se toca cookies ni nada sensible del visitante.
  const headers = new Headers(req.headers);
  headers.set("x-tienda-slug", tienda.slug);
  headers.set("x-tienda-usuario-id", tienda.usuario_id ?? "");

  return NextResponse.next({ request: { headers } });
}