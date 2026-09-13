"use client";

import { useInView } from "./useInView";

/**
 * The signature. A gold hairline that draws itself to 84px as a section head
 * arrives, repeated at every section on the site.
 *
 * This is the single element that makes the page read as one design rather
 * than a stack of unrelated ideas — it is doing more work than it looks like.
 */
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
