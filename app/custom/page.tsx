import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = { title: "Custom software" };

export default function Page() {
  return <PageShell eyebrow="Solution 03" title="We map what you do, then build to that." />;
}
