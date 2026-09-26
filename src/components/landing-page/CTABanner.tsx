import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="hero-grid relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(255,107,26,0.1),transparent_48%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
          Make the next expert answer available on every shift
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-md leading-7 text-fg-muted">
          Torque serves as a machine operator's path of least resistance from
          problem identification to solution and documentation. Try it for free
          today.
        </p>
        <Link
          href="/login"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-black transition-[filter,box-shadow] hover:brightness-110 hover:shadow-[0_0_24px_rgba(255,107,26,0.25)]"
        >
          Try Torque
          <ArrowRight className="size-4" strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}
