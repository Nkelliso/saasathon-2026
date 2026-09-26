import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Database,
  FileText,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import BackgroundGears from "../graphics/BackgroundGears";

const workflow = [
  {
    number: "01",
    icon: Search,
    title: "Capture the signal",
    body: "Start with what the operator can see: an error code, an alarm, a sound, or a failed motion.",
  },
  {
    number: "02",
    icon: Database,
    title: "Trace the evidence",
    body: "Torque checks manufacturer sources alongside the repair history and site notes your team has captured.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Take the next safe step",
    body: "Get a concise procedure, its supporting sources, and the checks to complete before restarting.",
  },
];

function RegistrationMarks() {
  return (
    <>
      <span className="absolute left-3 top-3 size-4 border-l border-t border-line-strong" />
      <span className="absolute right-3 top-3 size-4 border-r border-t border-line-strong" />
      <span className="absolute bottom-3 left-3 size-4 border-b border-l border-line-strong" />
      <span className="absolute bottom-3 right-3 size-4 border-b border-r border-line-strong" />
    </>
  );
}

export default function ContentBlock() {
  return (
    <section id="system" className="hero-grid px-5 py-24 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(255,107,26,0.1),transparent_48%)]" />
      <div className="text-center mx-auto grid gap-12">
        <div className="max-w-xl mx-auto">
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Keep critical knowledge within your team's reach
          </h2>
          <p className="mt-5 leading-7 text-fg-muted">
            Torque turns organisation specific machine operating knowledge into
            a direct, source-backed information system for maintaining and
            diagnosing industry equipment.
          </p>
        </div>
      </div>
    </section>
  );
}
