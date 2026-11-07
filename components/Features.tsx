import {
  Calendar,
  Cloud,
  Database,
  Layers,
  Mail,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import SectionHeading from "./SectionHeading";
import { AvatarStack, MiniBars } from "./mockups";

function Card({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <article
      data-reveal
      data-reveal-delay={String(delay)}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-soft transition duration-500 ease-out hover:-translate-y-1 hover:shadow-lift sm:p-8 ${className}`}
    >
      {children}
    </article>
  );
}

function IconChip({ children }: { children: ReactNode }) {
  return (
    <span className="mb-6 flex size-11 items-center justify-center rounded-2xl bg-powder/70 text-azure-ink transition-colors duration-500 group-hover:bg-powder">
      {children}
    </span>
  );
}

function CardText({ title, text }: { title: string; text: string }) {
  return (
    <>
      <h3 className="text-xl font-semibold tracking-[-0.025em] text-ink">
        {title}
      </h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{text}</p>
    </>
  );
}

export default function Features() {
  return (
    <section id="features" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Features"
          title="Everything in one place. Nothing in the way."
          description="Thoughtful tools that stay out of your way, so the work, and the answers, stay in focus."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          <Card className="md:col-span-2">
            <IconChip>
              <Layers className="size-5" aria-hidden="true" />
            </IconChip>
            <CardText
              title="Unified dashboards"
              text="Bring every source into one view. Build it once, share it with anyone, and keep it current without lifting a finger."
            />
            <div className="mt-8 flex-1">
              <MiniBars />
            </div>
          </Card>

          <Card delay={0.08}>
            <IconChip>
              <Zap className="size-5" aria-hidden="true" />
            </IconChip>
            <CardText
              title="Instant insights"
              text="Ask a question in plain language and get a clear, visual answer in seconds."
            />
            <div
              aria-hidden="true"
              className="mt-8 rounded-2xl border border-line bg-surface/70 p-4"
            >
              <p className="text-xs text-muted">Top finding</p>
              <p className="mt-1 text-sm font-medium leading-snug text-ink">
                Sign-ups are up 18% since the new onboarding.
              </p>
            </div>
          </Card>

          <Card>
            <IconChip>
              <ShieldCheck className="size-5" aria-hidden="true" />
            </IconChip>
            <CardText
              title="Secure by default"
              text="Your data stays yours, with sensible protection built in from the first click."
            />
            <ul aria-label="Security features" className="mt-8 flex flex-wrap gap-2">
              {["Encryption", "SSO", "Audit logs"].map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Card>

          <Card delay={0.08}>
            <IconChip>
              <Database className="size-5" aria-hidden="true" />
            </IconChip>
            <CardText
              title="Seamless integrations"
              text="Connect the tools you already use. Setup takes minutes, not sprints."
            />
            <div aria-hidden="true" className="mt-8 flex gap-2.5">
              {[Database, Cloud, Mail, Calendar].map((Icon, i) => (
                <span
                  key={i}
                  className="flex size-11 items-center justify-center rounded-full border border-line bg-white text-muted shadow-soft transition duration-500 group-hover:text-azure-ink"
                >
                  <Icon className="size-[18px]" />
                </span>
              ))}
            </div>
          </Card>

          <Card delay={0.16}>
            <IconChip>
              <Users className="size-5" aria-hidden="true" />
            </IconChip>
            <CardText
              title="Built for teams"
              text="Share, comment, and decide together, in the same place, on the same numbers."
            />
            <div className="mt-8">
              <AvatarStack />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
