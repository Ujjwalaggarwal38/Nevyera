import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = { title: "Privacy policy" };

export default function Page() {
  return <PageShell eyebrow="Legal" title="Privacy policy" />;
}
