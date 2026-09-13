import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = { title: "About" };

export default function Page() {
  return <PageShell eyebrow="About" title="We're new. Here's what you can check." />;
}
