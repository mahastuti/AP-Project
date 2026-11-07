const metrics = [
  { value: "99.9%", label: "Uptime, every month" },
  { value: "12k+", label: "Teams working in Aero" },
  { value: "4.9/5", label: "Average customer rating" },
];

export default function Metrics() {
  return (
    <section aria-label="Aero in numbers" className="px-6 pb-8 pt-20 sm:pt-28">
      <dl className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            data-reveal
            data-reveal-delay={String(i * 0.08)}
            className={`text-center ${
              i > 0 ? "sm:border-l sm:border-line" : ""
            }`}
          >
            <dd className="text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
              {m.value}
            </dd>
            <dt className="mt-2 text-sm text-muted">{m.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
