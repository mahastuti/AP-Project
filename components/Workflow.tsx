import { Link2, Share2, SlidersHorizontal } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    n: "01",
    icon: Link2,
    title: "Connect your sources",
    text: "Link the tools and data you already rely on. Aero keeps everything in sync automatically.",
  },
  {
    n: "02",
    icon: SlidersHorizontal,
    title: "Shape your view",
    text: "Choose what matters and arrange it your way. Clean defaults mean you start with something good.",
  },
  {
    n: "03",
    icon: Share2,
    title: "Share the clarity",
    text: "Invite your team and keep everyone on the same page, with the same numbers, in real time.",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="border-y border-line bg-surface px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Workflow"
          title="From scattered to simple in three steps."
          description="No lengthy setup, no steep learning curve. Just a calm path from data to decisions."
        />

        <ol className="relative mt-16 grid gap-5 md:grid-cols-3">
          {/* connecting line behind the cards */}
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-[3.25rem] hidden h-px bg-linear-to-r from-transparent via-azure/40 to-transparent md:block"
          />
          {steps.map(({ n, icon: Icon, title, text }, i) => (
            <li
              key={n}
              data-reveal
              data-reveal-delay={String(i * 0.1)}
              className="relative rounded-3xl border border-line bg-white p-7 shadow-soft transition duration-500 ease-out hover:-translate-y-1 hover:shadow-lift sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-full border border-line bg-white text-sm font-semibold text-azure-ink shadow-soft">
                  {n}
                </span>
                <Icon className="size-5 text-azure" aria-hidden="true" />
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-[-0.025em] text-ink">
                {title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted">
                {text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
