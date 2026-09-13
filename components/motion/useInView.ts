"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fires once when the element enters the viewport, then stops observing.
 *
 * One observer contract for the whole site — every entrance animation goes
 * through this, so timing stays consistent and we never end up with elements
 * that animate on different triggers.
 */
export function useInView<T extends HTMLElement>(
  options: { threshold?: number; rootMargin?: string } = {},
) {
  const { threshold = 0.14, rootMargin = "0px 0px -50px" } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Someone who asked for reduced motion gets the final state immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
}
