"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { products } from "@/content/products";

/**
 * Which solution the visitor is currently looking at.
 *
 * Shared between the Solutions tabs and the Story section so the narrative
 * below always matches the product above. Without this they drift: the tabs
 * offer three solutions while the story only ever tells the lead-management
 * one, which is what made the whole page read as a Lead Manager page.
 */
type SolutionContextValue = {
  active: string;
  setActive: (slug: string) => void;
};

const SolutionContext = createContext<SolutionContextValue | null>(null);

export function SolutionProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<string>(products[0].slug);

  return (
    <SolutionContext.Provider value={{ active, setActive }}>
      {children}
    </SolutionContext.Provider>
  );
}

export function useSolution() {
  const ctx = useContext(SolutionContext);
  if (!ctx) {
    throw new Error("useSolution must be used inside <SolutionProvider>");
  }
  return ctx;
}
