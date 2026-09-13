import type { Metadata } from "next";
import { ProductPage } from "@/components/product/ProductPage";
import { customSoftware } from "@/content/products";

export const metadata: Metadata = {
  title: customSoftware.metaTitle,
  description: customSoftware.metaDescription,
};

export default function Page() {
  return <ProductPage product={customSoftware} />;
}
