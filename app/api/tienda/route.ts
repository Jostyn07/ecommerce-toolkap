// Ruta en el repo: app/api/tienda/route.ts
//
// Única puerta entre el e-commerce y Fincil. El navegador y el middleware
// solo conocen /api/tienda; la URL y la key de Fincil viven solo aquí,
// en el servidor (variables SIN prefijo NEXT_PUBLIC_, nunca llegan al cliente).
//
// Genérico para cualquier empresa: resuelve por host, nunca por empresa fija.

import { NextRequest, NextResponse } from "next/server";

const FINCIL_API_URL = process.env.FINCIL_API_URL; // ej. https://xxxx.supabase.co/functions/v1/tienda-publica
const FINCIL_API_KEY = process.env.FINCIL_API_KEY; // anon key del proyecto Fincil (solo servidor)

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const host = (req.nextUrl.searchParams.get("host") ?? "").toLowerCase().trim();

  if (!host) {
    return NextResponse.json({ error: "Falta el parámetro host" }, { status: 400 });
  }

  if (!FINCIL_API_URL || !FINCIL_API_KEY) {
    console.error("Faltan FINCIL_API_URL / FINCIL_API_KEY en el servidor");
    return NextResponse.json({ error: "Servicio no configurado" }, { status: 503 });
  }

  let res: Response;
  try {
    res = await fetch(`${FINCIL_API_URL}?host=${encodeURIComponent(host)}`, {
      headers: { apikey: FINCIL_API_KEY, Authorization: `Bearer ${FINCIL_API_KEY}` },
      // Cache corto: el catálogo cambia poco, evita golpear Fincil en cada visita
      next: { revalidate: 60 },
    });
  } catch (err) {
    console.error("No se pudo contactar a Fincil:", err);
    return NextResponse.json({ error: "Servicio no disponible" }, { status: 502 });
  }

  if (res.status === 404) {
    return NextResponse.json({ error: "Tienda no encontrada" }, { status: 404 });
  }

  if (!res.ok) {
    console.error("Fincil respondió", res.status, await res.text());
    return NextResponse.json({ error: "Servicio no disponible" }, { status: 502 });
  }

  const data = await res.json();

  // Solo campos seguros hacia afuera. Nunca se expone usuario_id ni nada
  // interno de Fincil, aunque la función de origen lo devuelva.
  return NextResponse.json({
    tienda: {
      slug: data.tienda.slug,
      config_tema: data.tienda.config_tema ?? {},
    },
    productos: (data.productos ?? []).map((p: any) => ({
      id: p.id,
      nombre: p.nombre,
      precio: p.precio_venta,
      foto_url: p.foto_url,
      categoria_id: p.categoria_id,
      categoria: p.categoria_nombre,
    })),
  });
}