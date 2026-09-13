import { Fragment } from "react";
import Link from "next/link";
import { GoldRule } from "@/components/motion/GoldRule";
import { LeadDemo } from "@/components/demos/LeadDemo";
import { company } from "@/content/site";

const HEADLINE = ["The", "software", "your", "business", "runs", "on."] as const;

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-glow" aria-hidden="true" />

      <div className="wrap">
        <div className="hero-grid">
          <div>
            <GoldRule />
            <p className="t-mono hero-place">
              {company.name} · {company.city}
            </p>

            {/* space must sit outside the span: inline-block eats it */}
            <h1 className="hero-headline">
              {HEADLINE.map((word, i) => (
                <Fragment key={word}>
                  <span
                    className="hero-word"
                    style={{ animationDelay: `${150 + i * 75}ms` }}
                  >
                    {i === HEADLINE.length - 1 ? <em>{word}</em> : word}
                  </span>
                  {i < HEADLINE.length - 1 ? " " : null}
                </Fragment>
              ))}
            </h1>

            <p className="hero-sub">
              We make two things and sell a third: software for handling enquiries,
              software for handling stock, and the time of the people who built both.
            </p>

            <div className="hero-cta">
              <Link href="/#solutions" className="btn btn-primary">
                See what we build
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Book a demo
              </Link>
            </div>
          </div>

          <div className="hero-breakout">
            <LeadDemo />
          </div>
        </div>
      </div>
    </header>
  );
}
