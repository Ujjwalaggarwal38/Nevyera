"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { products } from "@/content/products";

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
