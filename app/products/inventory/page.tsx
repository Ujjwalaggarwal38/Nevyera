import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = { title: "Inventory" };

export default function Page() {
  return <PageShell eyebrow="Solution 02" title="Vendors bid. You stop ringing round for prices." />;
}
