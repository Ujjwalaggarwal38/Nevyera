import Link from "next/link";
import { GoldRule } from "@/components/motion/GoldRule";
import { Reveal } from "@/components/motion/Reveal";
import { formatPrice, pricingIntro, showPrices, tiers } from "@/content/pricing";

/**
 * The featured tier breaks upward out of the row — one more place where the
 * grid is deliberately violated.
 *
 * Every figure comes from content/pricing.ts. Flip `showPrices` there to hide
 * all of them site-wide without touching this file.
 */
export function PricingPreview() {
  return (
    <section id="pricing" className="section-pricing on-light">
      <div className="wrap">
        <div className="head-split">
          <Reveal>
            <GoldRule className="mb-5" />
            <h2>Priced for a shop.</h2>
          </Reveal>
          <Reveal>
            <p className="t-body head-note">{pricingIntro}</p>
          </Reveal>
        </div>

        <div className="tiers">
          {tiers.map((tier) => (
            <Reveal key={tier.code} className={`tier ${tier.featured ? "featured" : ""}`}>
              <div className="tier-name">{tier.name}</div>
              <div className="tier-price">{formatPrice(tier)}</div>
              {showPrices && <div className="tier-period">{tier.period}</div>}

              <ul>
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <Link
                href={tier.cta.href}
                className={`btn ${tier.featured ? "btn-primary" : "btn-ghost"}`}
              >
                {tier.cta.label}
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="pricing-caveat t-mono">
          Placeholder figures — they live in content/pricing.ts behind a showPrices flag.
        </Reveal>
      </div>
    </section>
  );
}
