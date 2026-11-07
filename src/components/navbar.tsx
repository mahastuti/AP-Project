"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane, Database, ChartColumn } from "lucide-react";

const items = [
  { label: "Dashboard", href: "/dashboard", icon: ChartColumn },
  { label: "Data", href: "/data", icon: Database },
  { label: "Tentang", href: "/about", icon: Plane },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path || (path !== "/" && !!pathname?.startsWith(path));

  // tutup menu mobile saat pindah halaman atau tekan escape
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 shadow-[0_2px_12px_rgba(0,0,0,0.12)] backdrop-blur-md">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto grid h-[68px] max-w-screen-xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-8 md:h-20"
      >
        {/* logo */}
        <a
          href="https://www.injourneyairports.id/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="InJourney Airports (buka situs di tab baru)"
          className="col-start-1 justify-self-start"
        >
          <Image
            src={assets.logo}
            alt="InJourney Airports"
            priority
            sizes="160px"
            className="h-10 w-auto object-contain sm:h-12 md:h-14"
          />
        </a>

        {/* menu desktop */}
        <ul className="col-start-2 hidden items-center gap-8 md:flex lg:gap-12">
          {items.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`relative inline-block py-1 text-base transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-linear-to-r after:from-[#72BB34] after:to-[#40A3DC] after:transition-transform after:duration-300 lg:text-lg ${
                    active
                      ? "font-semibold text-black after:scale-x-100"
                      : "text-gray-700 after:scale-x-0 hover:text-black hover:after:scale-x-100"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* tombol menu mobile */}
        <div className="col-start-3 justify-self-end md:hidden">
          <Button
            size="icon"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="size-10 bg-[#83C8EC] text-white hover:bg-[#6fbbe6]"
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </nav>

      {/* menu mobile */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-t border-gray-200 bg-white shadow-lg md:hidden"
        >
          <ul className="space-y-1 p-3">
            {items.map(({ label, href, icon: Icon }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-3 rounded-lg px-3 py-3 text-lg font-medium transition-colors ${
                      active
                        ? "bg-green-50 text-[#5a9a22]"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="size-6" />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
