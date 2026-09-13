import type { Metadata } from "next";
import { ProductPage } from "@/components/product/ProductPage";
import { whatsappLeadManager } from "@/content/products";

export const metadata: Metadata = {
  title: whatsappLeadManager.metaTitle,
  description: whatsappLeadManager.metaDescription,
};

export default function Page() {
  return <ProductPage product={whatsappLeadManager} />;
}
