import { ArrowRight } from "lucide-react";
import { btnOutline, btnPrimary } from "./buttons";

export default function Cta() {
  return (
    <section id="cta" className="px-6 py-24 sm:py-32">
      <div
        data-reveal
        className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-line bg-surface px-6 py-20 text-center sm:px-12 sm:py-28"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div
            data-parallax="0.15"
            className="absolute left-1/2 top-1/2 h-[520px] w-[860px] max-w-none -translate-x-1/2 -translate-y-1/2"
          >
            <div className="h-full w-full animate-drift-a rounded-full bg-[radial-gradient(closest-side,rgba(77,168,232,0.3),rgba(217,238,250,0.55)_60%,transparent)] blur-2xl" />
          </div>
        </div>

        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold leading-[1.06] tracking-[-0.04em] text-ink sm:text-5xl">
          Ready for a calmer way to work?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-pretty text-base text-ink/70 sm:text-lg">
          Start free today. Set up in minutes, and see the difference by the
          end of the week.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#top" className={btnPrimary}>
            Get started free
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a href="#features" className={btnOutline}>
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
}
