"use client";

import { useInView } from "./useInView";

export function GoldRule({ className = "" }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 1 });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`gold-rule ${inView ? "in" : ""} ${className}`.trim()}
    />
  );
}
