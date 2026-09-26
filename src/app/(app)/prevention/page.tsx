import type { Metadata } from "next";
import { PreventionConsole } from "@/components/prevention/prevention-console";

export const metadata: Metadata = {
  title: "Prevention",
  description: "Spot recurring machine incidents and review preventive actions before the next breakdown.",
};

export default function PreventionPage() {
  return <PreventionConsole />;
}
