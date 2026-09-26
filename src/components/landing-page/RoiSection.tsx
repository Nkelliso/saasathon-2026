import { Clock3, TrendingUp } from "lucide-react";

const savings = [
  {
    label: "Specialist travel time",
    value: "2.5 hr",
    detail: "Before hands-on support arrives",
  },
  {
    label: "Cost while waiting",
    value: "$6,000",
    detail: "Average cost / hour",
  },
  {
    label: "Potentially recovered",
    value: "$10,800",
    detail: "At 1.8 hours saved",
  },
];

export default function RoiSection() {
  return (
    <section id="roi" className="border-y border-line">
      <div className="mx-auto bg-surface grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:px-8 lg:py-32">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
            // 03 / Return on response
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Every unresolved alarm starts an expensive clock.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-fg-muted">
            Give the person at the machine a documented first response while
            specialist support is still on the way.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-line bg-bg p-5 sm:p-7">
          <span className="absolute left-3 top-3 size-4 border-l border-t border-line-strong" />
          <span className="absolute right-3 top-3 size-4 border-r border-t border-line-strong" />
          <div className="flex items-center justify-between border-b border-line pb-4 font-mono text-[10px] uppercase tracking-[0.13em]">
            <span className="text-fg-muted">Incident recovery model</span>
            <span className="flex items-center gap-1.5 text-ok">
              <span className="size-1.5 bg-ok" />
              System online
            </span>
          </div>
          <div className="mt-6 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
            {savings.map(({ label, value, detail }, index) => (
              <div key={label} className="bg-surface p-4">
                <div className="flex items-center justify-between">
                  {index === 2 ? (
                    <TrendingUp
                      className="size-4 text-accent"
                      strokeWidth={1.5}
                    />
                  ) : (
                    <Clock3
                      className="size-4 text-fg-muted"
                      strokeWidth={1.5}
                    />
                  )}
                  <span className="font-mono text-[10px] text-fg-dim">
                    0{index + 1}
                  </span>
                </div>
                <p
                  className={`mt-9 font-mono text-2xl tabular-nums ${index === 2 ? "text-accent" : "text-fg"}`}
                >
                  {value}
                </p>
                <p className="mt-2 text-sm text-fg-muted">{label}</p>
                <p className="mt-1 text-xs text-fg-dim">{detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-muted">
            Illustrative model: one critical-line incident, 1.8 hours saved;
            excludes parts and labor
          </p>
        </div>
      </div>
    </section>
  );
}
