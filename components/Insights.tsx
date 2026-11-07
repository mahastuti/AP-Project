import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { ChartCard } from "./mockups";
import { btnOutline } from "./buttons";

const points = [
  "A calm overview that surfaces what changed",
  "One click to drill into any number",
  "Clear, shareable views for the whole team",
];

export default function Insights() {
  return (
    <section id="insights" className="px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Insights"
            title="See the whole picture, then zoom in."
            description="Start with the big view. When something stands out, go deeper in a single click, without losing your place."
          />
          <ul className="mt-8 space-y-4">
            {points.map((p, i) => (
              <li
                key={p}
                data-reveal
                data-reveal-delay={String(0.16 + i * 0.07)}
                className="flex items-start gap-3 text-[15px] text-ink"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-powder text-azure-ink">
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div data-reveal data-reveal-delay="0.4" className="mt-10">
            <a href="#cta" className={btnOutline}>
              Explore Aero
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div
          data-reveal
          data-reveal-delay="0.15"
          className="relative rounded-[32px] border border-line bg-linear-to-br from-powder/60 via-white to-surface p-4 sm:p-8"
        >
          <div
            aria-hidden="true"
            data-parallax="0.12"
            className="absolute -right-4 -top-4 size-56 rounded-full bg-[radial-gradient(closest-side,rgba(77,168,232,0.25),transparent)] blur-2xl"
          />
          <div className="relative" role="img" aria-label="Line chart showing weekly revenue rising to $48,230">
            <ChartCard uid="insights" className="shadow-float" />
          </div>
        </div>
      </div>
    </section>
  );
}
