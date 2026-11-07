import { ArrowRight, ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";
import { btnGhost, btnPrimary } from "./buttons";
import { AvatarStack, DashboardMockup } from "./mockups";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-36 sm:pt-44">
      {/* atmospheric gradient layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          data-parallax="0.18"
          className="absolute left-1/2 top-[-14%] h-[640px] w-[980px] max-w-none -translate-x-1/2"
        >
          <div className="h-full w-full animate-drift-a rounded-full bg-[radial-gradient(closest-side,rgba(77,168,232,0.34),rgba(217,238,250,0.5)_55%,transparent)] blur-2xl" />
        </div>
        <div
          data-parallax="0.3"
          className="absolute -right-[12%] top-[22%] h-[460px] w-[620px] max-w-none"
        >
          <div className="h-full w-full animate-drift-b rounded-full bg-[radial-gradient(closest-side,rgba(217,238,250,0.9),transparent)] blur-2xl" />
        </div>
        <div
          data-parallax="0.24"
          className="absolute -left-[14%] top-[34%] h-[420px] w-[560px] max-w-none"
        >
          <div className="h-full w-full animate-drift-b rounded-full bg-[radial-gradient(closest-side,rgba(77,168,232,0.16),transparent)] blur-2xl" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-56 bg-linear-to-b from-transparent to-white" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        <a
          href="#features"
          data-reveal
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 py-1.5 pl-2 pr-4 text-[13px] text-muted shadow-soft backdrop-blur transition duration-300 hover:text-ink"
        >
          <span className="flex items-center gap-1 rounded-full bg-powder px-2 py-0.5 font-medium text-azure-ink">
            <Sparkles className="size-3" aria-hidden="true" />
            New
          </span>
          Aero 2.0 is here
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </a>

        <h1
          data-reveal
          data-reveal-delay="0.08"
          className="mx-auto mt-8 max-w-4xl text-balance text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.045em] text-ink sm:text-7xl lg:text-[5.5rem]"
        >
          Clarity for
          <br />
          <span className="bg-linear-to-r from-ink via-azure-ink to-azure bg-clip-text text-transparent">
            every decision.
          </span>
        </h1>

        <p
          data-reveal
          data-reveal-delay="0.16"
          className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
        >
          Aero brings your metrics, teams, and workflows into one calm
          workspace, so you can focus on what matters next.
        </p>

        <div
          data-reveal
          data-reveal-delay="0.24"
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href="#cta" className={btnPrimary}>
            Get started free
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a href="#workflow" className={btnGhost}>
            See how it works
            <ArrowUpRight
              className="size-4 text-muted transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
              aria-hidden="true"
            />
          </a>
        </div>
        <p
          data-reveal
          data-reveal-delay="0.3"
          className="mt-5 text-sm text-muted"
        >
          Free for 14 days · No credit card required
        </p>
      </div>

      {/* product centerpiece */}
      <div
        data-reveal
        data-reveal-delay="0.34"
        className="relative mx-auto mt-16 max-w-5xl px-4 sm:mt-20 sm:px-6"
      >
        <div className="animate-float">
          <DashboardMockup uid="hero" />
        </div>

        <div
          aria-hidden="true"
          data-parallax="0.35"
          className="absolute -left-[7.25rem] bottom-[18%] hidden xl:block"
        >
          <div className="rounded-2xl border border-line bg-white/90 p-3 shadow-float backdrop-blur">
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-xl bg-powder text-azure-ink">
                <TrendingUp className="size-4" />
              </span>
              <div className="text-left">
                <p className="text-xs text-muted">Weekly growth</p>
                <p className="text-base font-semibold tracking-tight text-ink">
                  +24.8%
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          data-parallax="0.2"
          className="absolute -right-[7.5rem] top-[30%] hidden xl:block"
        >
          <div className="rounded-2xl border border-line bg-white/90 p-3 shadow-float backdrop-blur">
            <p className="mb-2.5 text-left text-xs text-muted">
              Working together
            </p>
            <AvatarStack />
          </div>
        </div>
      </div>
    </section>
  );
}
