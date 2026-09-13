import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = { title: "WhatsApp Lead Manager" };

export default function Page() {
  return <PageShell eyebrow="Solution 01" title="Every enquiry gets a name on it." />;
}
