"use client";

import type { ElementType, ReactNode } from "react";
import { useInView } from "./useInView";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger within a group. Keep under ~4 steps — longer queues feel sluggish. */
  delay?: number;
};

/**
 * The only entrance animation on this site: 26px up, one easing curve.
 *
 * If you find yourself wanting a different distance or curve here, that's the
 * thing the design review rejected twice as "random" — fix the layout instead.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={`rv ${inView ? "in" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
