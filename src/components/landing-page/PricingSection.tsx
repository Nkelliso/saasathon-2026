import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Line",
    price: "Free",
    detail: "per month · 1 machine",
    description: "A focused starting point for the machine your operation cannot afford to lose.",
    features: [
      "One critical machine",
      "Machine technical library",
      "50 facility knowledge entries",
    ],
  },
  {
    name: "Plant",
    price: "$249",
    detail: "per month · up to 50 machines",
    description:
      "For teams that need the complete operations memory on every shift.",
    features: [
      "Up to 50 machines",
      "Unlimited facility knowledge",
      "Priority source ingestion",
    ],
    featured: true,
  },
  {
    name: "Network",
    price: "$499",
    detail: "per month · multi-site coverage",
    description:
      "For operations teams standardizing knowledge across facilities.",
    features: [
      "Unlimited machines",
      "Multi-site controls",
      "Dedicated onboarding",
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
          // Deployment options
        </p>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          Start with the line that hurts most to stop.
        </h2>
        <p className="mt-5 text-sm leading-7 text-fg-muted">
          Put Torque on the critical asset first. Expand coverage as your
          operating record proves its value across the plant.
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {plans.map(
          ({ name, price, detail, description, features, featured }) => (
            <article
              key={name}
              className={`flex min-h-[440px] flex-col rounded-lg border p-6 ${featured ? "border-accent bg-surface" : "border-line bg-surface"}`}
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em]">
                <span className={featured ? "text-accent" : "text-fg-muted"}>
                  {name}
                </span>
                {featured && <span className="text-accent">Recommended</span>}
              </div>
              <p className="mt-8 font-mono text-4xl font-medium tracking-tight tabular-nums text-fg">
                {price}
              </p>
              <p className="mt-2 text-xs text-fg-muted">{detail}</p>
              <p className="mt-7 text-sm leading-6 text-fg-muted">
                {description}
              </p>
              <ul className="mt-8 space-y-3 border-t border-line pt-6">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-fg-muted"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-ok"
                      strokeWidth={1.5}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/login"
                className={`mt-auto inline-flex items-center justify-center gap-2 rounded-md px-3.5 py-2.5 text-sm font-medium transition-[filter,box-shadow,border-color] ${featured ? "bg-accent text-black hover:brightness-110 hover:shadow-[0_0_20px_rgba(255,107,26,0.22)]" : "border border-line bg-surface-2 text-fg hover:border-line-strong"}`}
              >
                {featured
                  ? "Access Plant"
                  : name === "Line"
                    ? "Access Line"
                    : "Plan your rollout"}
                <ArrowRight className="size-4" strokeWidth={1.5} />
              </Link>
            </article>
          ),
        )}
      </div>
    </section>
  );
}
