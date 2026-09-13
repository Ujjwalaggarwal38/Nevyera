import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { terms } from "@/content/legal";

export const metadata: Metadata = {
  title: terms.title,
  description: "The agreement between Nevyera and the business using its software.",
};

export default function Page() {
  return <LegalPage doc={terms} />;
}
