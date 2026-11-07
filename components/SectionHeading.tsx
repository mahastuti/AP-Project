type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p
        data-reveal
        className="mb-4 text-sm font-medium tracking-[0.02em] text-azure-ink"
      >
        {eyebrow}
      </p>
      <h2
        data-reveal
        data-reveal-delay="0.06"
        className="text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p
          data-reveal
          data-reveal-delay="0.12"
          className="mt-5 text-pretty text-base leading-relaxed text-muted sm:text-lg"
        >
          {description}
        </p>
      )}
    </div>
  );
}
