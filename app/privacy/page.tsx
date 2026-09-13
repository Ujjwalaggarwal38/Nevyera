import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { privacy } from "@/content/legal";

export const metadata: Metadata = {
  title: privacy.title,
  description: "What Nevyera collects, why, who it is shared with, and how to get it back.",
};

export default function Page() {
  return <LegalPage doc={privacy} />;
}
