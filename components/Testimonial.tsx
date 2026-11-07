export default function Testimonial() {
  return (
    <section
      id="stories"
      className="border-y border-line bg-surface px-6 py-24 sm:py-32"
    >
      <figure className="mx-auto max-w-3xl text-center">
        <blockquote
          data-reveal
          className="text-balance text-2xl font-medium leading-[1.25] tracking-[-0.03em] text-ink sm:text-4xl"
        >
          “Aero replaced five tools and a weekly spreadsheet ritual. For the
          first time, our whole team looks at the same numbers.”
        </blockquote>
        <figcaption
          data-reveal
          data-reveal-delay="0.12"
          className="mt-10 flex items-center justify-center gap-3.5"
        >
          <span
            aria-hidden="true"
            className="flex size-11 items-center justify-center rounded-full bg-powder text-sm font-semibold text-azure-ink"
          >
            ML
          </span>
          <span className="text-left">
            <span className="block text-[15px] font-medium text-ink">
              Maya L.
            </span>
            <span className="block text-sm text-muted">Head of Operations</span>
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
