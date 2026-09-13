import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = { title: "Terms" };

export default function Page() {
  return <PageShell eyebrow="Legal" title="Terms of service" />;
}
