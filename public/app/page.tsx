// Ruta en el repo: app/page.tsx

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", background: "#FFFBEF" }}>
      {/* ===== Header ===== */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "22px 72px",
          background: "#FFFFFF",
          borderBottom: "1px solid #E9E0D2",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="#7650A8" strokeWidth="1.6" />
            <path
              d="M16 9c1.5 2 3 3.5 3 5.5a3 3 0 1 1-6 0c0-2 1.5-3.5 3-5.5Z"
              fill="#7650A8"
            />
          </svg>
          <div
            style={{
              fontSize: 18,
              fontFamily: "var(--font-fraunces), Georgia, serif",
              lineHeight: 1.15,
              color: "#30263A",
            }}
          >
            Semilla
            <br />
            Propósito
          </div>
        </div>

        <nav style={{ display: "flex", gap: 36 }}>
          <Link href="/" style={{ ...navLink, opacity: 1, fontWeight: 600 }}>
            Inicio
          </Link>
          <Link href="/flores" style={navLink}>
            Flores
          </Link>
          <Link href="/ocasiones" style={navLink}>
            Ocasiones
          </Link>
          <Link href="/regalos" style={navLink}>
            Regalos
          </Link>
          <Link href="/nosotros" style={navLink}>
            Nosotros
          </Link>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <button aria-label="Buscar" style={iconBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#30263A" strokeWidth="1.6">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button aria-label="Favoritos" style={iconBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#30263A" strokeWidth="1.6">
              <path d="M12 20s-7-4.4-9.5-8.8C.7 8 2.4 4.5 6 4.5c2 0 3.4 1.1 4 2.3.6-1.2 2-2.3 4-2.3 3.6 0 5.3 3.5 3.5 6.7C19 15.6 12 20 12 20Z" />
            </svg>
          </button>
          <button aria-label="Mi cuenta" style={iconBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#30263A" strokeWidth="1.6">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
            </svg>
          </button>
          <button aria-label="Carrito" style={{ ...iconBtn, position: "relative" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#30263A" strokeWidth="1.6">
              <path d="M3 6h2l2.4 12.2a2 2 0 0 0 2 1.8h8.2a2 2 0 0 0 2-1.6L21 8H6" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="18" cy="21" r="1" />
            </svg>
            <span
              style={{
                position: "absolute",
                top: 2,
                right: 2,
                width: 15,
                height: 15,
                background: "#7650A8",
                color: "#fff",
                fontSize: 9,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              2
            </span>
          </button>
        </div>
      </header>

      {/* ===== Hero: la foto manda, la interfaz acompaña ===== */}
      <section style={{ display: "flex", alignItems: "center", gap: 56, padding: "88px 72px" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#D9A72A",
              fontWeight: 700,
            }}
          >
            ✦ Colección primavera
          </div>
          <h1
            style={{
              fontSize: 50,
              lineHeight: 1.14,
              color: "#30263A",
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontWeight: 600,
              margin: 0,
            }}
          >
            Flores que hacen
            <br />
            momentos especiales
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#756C7D", maxWidth: 380, margin: 0 }}>
            Ramos frescos y arreglos hechos a mano, para regalar lo que las palabras no
            alcanzan a decir.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
            <Link href="/flores" style={btnPrimary}>
              Ver productos →
            </Link>
            <Link href="/nosotros" style={btnSecondary}>
              Conocer más
            </Link>
          </div>
        </div>

        <div style={{ flex: 1.3, height: 500, borderRadius: 24, overflow: "hidden", position: "relative" }}>
          <Image
            src="/images/ramo-novia-girasoles.jpg"
            alt="Ramo de girasoles con cinta Para la novia más linda"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </section>

      {/* ===== Barra de confianza ===== */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "28px 72px",
          borderTop: "1px solid #E9E0D2",
          borderBottom: "1px solid #E9E0D2",
        }}
      >
        <TrustItem
          label="Flores frescas siempre"
          path="M12 3C9 6 6 9 6 13a6 6 0 0 0 12 0c0-4-3-7-6-10Z"
        />
        <TrustItem
          label="Envíos a toda la ciudad"
          path="M3 7h11v9H3zM14 10h4l3 3v3h-7z"
        />
        <TrustItem
          label="Pagos seguros y confiables"
          path="M4 12a8 8 0 0 1 16 0M4 12v3a2 2 0 0 0 2 2h1v-5H4ZM20 12v3a2 2 0 0 1-2 2h-1v-5h3Z"
        />
        <TrustItem
          label="Atención personalizada"
          path="M4 20c0-4 3.6-6 8-6s8 2 8 6"
        />
      </section>

      {/* ===== Categorías ===== */}
      <section style={{ padding: "80px 72px" }}>
        <h2
          style={{
            fontSize: 28,
            marginBottom: 32,
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontWeight: 600,
          }}
        >
          Compra por ocasión
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 20 }}>
          <CategoryCard label="Cumpleaños" background="#F4EFE0" />
          <CategoryCard label="Amor y amistad" background="#F4C542" />
          <CategoryCard label="Aniversario" background="#E4D9F0" />
          <CategoryCard label="Condolencias" background="#DCE3D4" />
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer
        style={{
          borderTop: "1px solid #E9E0D2",
          padding: "48px 72px",
          display: "flex",
          justifyContent: "space-between",
          background: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 280 }}>
          <div style={{ fontSize: 18, fontFamily: "var(--font-fraunces), Georgia, serif" }}>
            Semilla Propósito
          </div>
          <p style={{ fontSize: 13, color: "#756C7D", lineHeight: 1.6, margin: 0 }}>
            Flores y detalles con propósito, desde Barranquilla.
          </p>
        </div>
        <div style={{ display: "flex", gap: 80 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Tienda</div>
            <Link href="/flores" style={navLink}>Flores</Link>
            <Link href="/ocasiones" style={navLink}>Ocasiones</Link>
            <Link href="/regalos" style={navLink}>Regalos</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Empresa</div>
            <Link href="/nosotros" style={navLink}>Nosotros</Link>
            <Link href="/contacto" style={navLink}>Contacto</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TrustItem({ label, path }: { label: string; path: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: "#756C7D", fontWeight: 500 }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#738A62" strokeWidth="1.8">
        <path d={path} />
      </svg>
      {label}
    </div>
  );
}

function CategoryCard({ label, background }: { label: string; background: string }) {
  return (
    <div
      style={{
        height: 190,
        borderRadius: 18,
        background,
        display: "flex",
        alignItems: "flex-end",
        padding: 16,
      }}
    >
      <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: 16 }}>{label}</span>
    </div>
  );
}

const navLink: React.CSSProperties = { color: "#30263A", opacity: 0.75, fontSize: 15, textDecoration: "none" };

const iconBtn: React.CSSProperties = {
  background: "none",
  border: "none",
  padding: 8,
  display: "flex",
  borderRadius: "50%",
  cursor: "pointer",
};

const btnPrimary: React.CSSProperties = {
  background: "#7650A8",
  color: "#FFFFFF",
  padding: "15px 32px",
  borderRadius: 14,
  fontSize: 15,
  fontWeight: 600,
  border: "none",
  textDecoration: "none",
  display: "inline-block",
};

const btnSecondary: React.CSSProperties = {
  background: "transparent",
  color: "#7650A8",
  padding: "14px 30px",
  borderRadius: 14,
  fontSize: 15,
  fontWeight: 600,
  border: "1.4px solid #7650A8",
  textDecoration: "none",
  display: "inline-block",
};