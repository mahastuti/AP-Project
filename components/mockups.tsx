import {
  LayoutDashboard,
  Plug,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const linePath =
  "M0 150 C 40 140, 70 118, 110 124 S 180 152, 220 108 S 300 58, 340 84 S 420 132, 460 80 S 540 30, 600 44";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-powder/70 px-2 py-0.5 text-[11px] font-medium text-azure-ink">
      {children}
    </span>
  );
}

export function ChartCard({
  uid,
  className = "",
}: {
  uid: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-line bg-white p-4 sm:p-5 ${className}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-muted">Revenue</p>
          <p className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-ink">
            $48,230
          </p>
        </div>
        <Chip>+12.4% this week</Chip>
      </div>

      <div className="relative mt-4">
        <svg
          viewBox="0 0 600 200"
          preserveAspectRatio="none"
          className="h-36 w-full sm:h-44"
          role="presentation"
        >
          <defs>
            <linearGradient id={`${uid}-fill`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4DA8E8" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#4DA8E8" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[40, 80, 120, 160].map((y) => (
            <line
              key={y}
              x1="0"
              x2="600"
              y1={y}
              y2={y}
              stroke="#E8EDF2"
              strokeDasharray="4 6"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          <path d={`${linePath} L600 200 L0 200 Z`} fill={`url(#${uid}-fill)`} />
          <path
            d={linePath}
            fill="none"
            stroke="#4DA8E8"
            strokeWidth="2.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* highlighted point */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: "56.7%", top: "42%" }}
        >
          <span className="block size-3.5 rounded-full border-[3px] border-white bg-azure shadow-[0_0_0_5px_rgba(77,168,232,0.18)]" />
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl border border-line bg-white px-2.5 py-1.5 text-[11px] font-medium text-ink shadow-soft">
            Thu · $6,420
          </span>
        </div>
      </div>

      <div className="mt-2 flex justify-between text-[11px] text-muted">
        {days.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
    </div>
  );
}

const sidebar = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Performance", icon: TrendingUp },
  { label: "Teams", icon: Users },
  { label: "Sources", icon: Plug },
  { label: "Settings", icon: Settings },
];

const stats = [
  { label: "Active users", value: "12,840", delta: "+4.1%" },
  { label: "Conversion", value: "3.6%", delta: "+0.8%" },
  { label: "Avg. session", value: "6m 24s", delta: "+9.2%" },
];

export function DashboardMockup({ uid }: { uid: string }) {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-[20px] border border-line bg-white shadow-float sm:rounded-[28px]"
    >
      <div className="flex items-center gap-2 border-b border-line bg-surface/70 px-4 py-3">
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <div className="mx-auto flex h-7 w-full max-w-xs items-center justify-center rounded-full border border-line bg-white text-xs text-muted">
          app.aero.com/overview
        </div>
        <span className="hidden w-[46px] sm:block" />
      </div>

      <div className="grid md:grid-cols-[188px_1fr]">
        <div className="hidden border-r border-line bg-surface/50 p-4 md:block">
          <ul className="space-y-1">
            {sidebar.map(({ label, icon: Icon, active }) => (
              <li
                key={label}
                className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-[13px] ${
                  active
                    ? "bg-powder/70 font-medium text-azure-ink"
                    : "text-muted"
                }`}
              >
                <Icon className="size-4" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 text-left sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted">Good morning, Maya</p>
              <p className="text-lg font-semibold tracking-tight text-ink">
                Overview
              </p>
            </div>
            <div className="flex rounded-full border border-line bg-surface p-0.5 text-[11px] font-medium">
              <span className="rounded-full bg-white px-3 py-1 text-ink shadow-soft">
                7d
              </span>
              <span className="px-3 py-1 text-muted">30d</span>
              <span className="hidden px-3 py-1 text-muted sm:block">90d</span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-line bg-white p-3 sm:p-4"
              >
                <p className="truncate text-[11px] text-muted sm:text-xs">
                  {s.label}
                </p>
                <p className="mt-1 truncate text-base font-semibold tracking-[-0.02em] text-ink sm:text-xl">
                  {s.value}
                </p>
                <div className="mt-1.5">
                  <Chip>{s.delta}</Chip>
                </div>
              </div>
            ))}
          </div>

          <ChartCard uid={uid} className="mt-3 sm:mt-4" />
        </div>
      </div>
    </div>
  );
}

export function MiniBars() {
  const bars = [38, 56, 44, 72, 52, 88, 64, 96, 70, 82];
  return (
    <div
      aria-hidden="true"
      className="flex h-28 items-end gap-2 rounded-2xl border border-line bg-surface/70 p-4"
    >
      {bars.map((h, i) => (
        <span
          key={i}
          style={{ height: `${h}%` }}
          className={`flex-1 rounded-md transition-colors duration-500 ${
            i === 7 ? "bg-azure" : "bg-powder group-hover:bg-azure/40"
          }`}
        />
      ))}
    </div>
  );
}

export function AvatarStack() {
  const people = [
    { i: "M", c: "bg-powder text-azure-ink" },
    { i: "R", c: "bg-azure text-ink" },
    { i: "A", c: "bg-white text-ink" },
    { i: "+8", c: "bg-surface text-muted" },
  ];
  return (
    <div aria-hidden="true" className="flex -space-x-2.5">
      {people.map((p) => (
        <span
          key={p.i}
          className={`flex size-10 items-center justify-center rounded-full border-2 border-white text-xs font-semibold shadow-soft ${p.c}`}
        >
          {p.i}
        </span>
      ))}
    </div>
  );
}
