import Logo from "./Logo";

const links = [
  { href: "#features", label: "Features" },
  { href: "#workflow", label: "Workflow" },
  { href: "#insights", label: "Insights" },
  { href: "#stories", label: "Stories" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted">
            Clarity for every decision.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
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
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-line pt-6 text-xs text-muted">
        © {new Date().getFullYear()} Aero. All rights reserved.
      </p>
    </footer>
  );
}
