"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { company, nav } from "@/content/site";

/**
 * Fixed nav. Transparent over the hero, solid obsidian once scrolled.
 *
 * Solid — not blurred. There is no backdrop-filter anywhere on this site;
 * mixed transparent and solid surfaces was the thing that read as accidental.
 */
export function Nav() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`site-nav ${stuck ? "stuck" : ""}`}>
      <div className="wrap">
        <Link href="/" className="wordmark" aria-label={`${company.name} home`}>
          Nevyera<span>.</span>
        </Link>

        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="btn btn-primary">
          Book a demo
        </Link>
      </div>
    </nav>
  );
}
