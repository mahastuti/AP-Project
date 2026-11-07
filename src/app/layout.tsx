// src/app/layout.tsx
import "./globals.css";
// poppins via fontsource (self-hosted), jadi build tidak butuh akses ke google fonts
// subset latin saja supaya css dan file font lebih kecil
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AuthWrapper from "../components/auth";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Birdstrike Juanda Dashboard",
  description: "Internship Project",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="flex min-h-screen flex-col bg-[#EEF5FF]"
        style={{ fontFamily: "'Poppins', ui-sans-serif, system-ui, sans-serif" }}
        suppressHydrationWarning
      >
        {/* navbar dan footer di luar gate supaya langsung tampil dari html server */}
        <Navbar />
        <main className="flex flex-1 flex-col" suppressHydrationWarning>
          <AuthWrapper>{children}</AuthWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
