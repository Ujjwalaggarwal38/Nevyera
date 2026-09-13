import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = { title: "Pricing" };

export default function Page() {
  return <PageShell eyebrow="Pricing" title="Priced for a shop." />;
}
