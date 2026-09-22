// Ruta en el repo: app/layout.tsx

import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-fraunces",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Semilla Propósito",
  description: "Flores y detalles con propósito, desde Barranquilla.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${manrope.variable}`}>
      <body style={{ margin: 0, fontFamily: "var(--font-manrope), system-ui, sans-serif", color: "#30263A" }}>
        {children}
      </body>
    </html>
  );
}