"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { btnPrimarySm } from "./buttons";

const links = [
  { href: "#features", label: "Features" },
  { href: "#workflow", label: "Workflow" },
  { href: "#insights", label: "Insights" },
  { href: "#stories", label: "Stories" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-3xl items-center justify-between rounded-full border bg-white/75 py-2 pl-5 pr-2 backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? "border-line shadow-soft"
            : "border-white/70 shadow-none"
        }`}
      >
        <a href="#top" aria-label="Aero home" className="rounded-full">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link text-sm text-muted transition-colors duration-300 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <a href="#cta" className={`${btnPrimarySm} hidden sm:inline-flex`}>
            Get started
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface md:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-3xl rounded-3xl border border-line bg-white/95 p-3 shadow-soft backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-[15px] text-ink transition-colors hover:bg-surface"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-1 p-1">
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className={`${btnPrimarySm} w-full py-3`}
              >
                Get started
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
