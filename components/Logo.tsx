export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className="flex size-7 items-center justify-center rounded-[9px] bg-linear-to-br from-[#8ccdf5] to-azure shadow-[0_6px_16px_-6px_rgba(77,168,232,0.8)]"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none">
          <path
            d="M5.5 16c2.3-5.6 4-8 6.5-8s4.2 2.4 6.5 8"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="text-[17px] font-semibold tracking-[-0.03em] text-ink">
        Aero
      </span>
    </span>
  );
}
