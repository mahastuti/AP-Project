// src/app/layout.tsx
import "./globals.css";
// poppins via fontsource (self-hosted), jadi build tidak butuh akses ke google fonts
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
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
  initialScale: 0.7,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{ fontFamily: "'Poppins', ui-sans-serif, system-ui, sans-serif" }}
        suppressHydrationWarning
      >
        <AuthWrapper>
          <Navbar />
          <main suppressHydrationWarning>{children}</main>
          <Footer />
        </AuthWrapper>
      </body>
    </html>
  );
}
