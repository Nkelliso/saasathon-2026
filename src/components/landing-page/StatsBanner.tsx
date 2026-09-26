const stats = [
  {
    value: "$6,000/hr",
    label: "A critical production line can cost when stopped",
  },
  { value: "2.5 hr", label: "Distance to the specialist who knows the fix" },
  { value: "1 search", label: "From a documented next step for the operator" },
];

export default function StatsBanner() {
  return (
    <section id="coverage" className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-7 px-5 py-10 sm:grid-cols-3 lg:px-8">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={index > 0 ? "sm:border-l sm:border-line sm:pl-7" : ""}
          >
            <p className="text-3xl font-light tracking-tight tabular-nums text-fg">
              {stat.value}
            </p>
            <p className="mt-2 max-w-48 text-sm leading-5 text-fg-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
