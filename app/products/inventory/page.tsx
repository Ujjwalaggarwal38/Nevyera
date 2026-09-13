import type { Metadata } from "next";
import { ProductPage } from "@/components/product/ProductPage";
import { inventory } from "@/content/products";

export const metadata: Metadata = {
  title: inventory.metaTitle,
  description: inventory.metaDescription,
};

export default function Page() {
  return <ProductPage product={inventory} />;
}
