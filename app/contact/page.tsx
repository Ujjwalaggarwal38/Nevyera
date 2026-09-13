import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = { title: "Book a demo" };

export default function Page() {
  return <PageShell eyebrow="Contact" title="Twenty minutes, your own numbers." />;
}
