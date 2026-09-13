import Link from "next/link";
import { GoldRule } from "@/components/motion/GoldRule";
import { Reveal } from "@/components/motion/Reveal";
import {
  formatPrice,
  includedInEvery,
  pricingIntro,
  showPrices,
  tiers,
} from "@/content/pricing";

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
          {tiers.map((tier, i) => (
            <Reveal
              key={tier.code}
              className={`tier ${tier.featured ? "featured" : ""}`}
              delay={i * 80}
            >
              {tier.badge && <span className="tier-badge">{tier.badge}</span>}

              <div className="tier-name">{tier.name}</div>
              <p className="tier-tagline">{tier.tagline}</p>

              <div className="tier-price">{formatPrice(tier)}</div>
              {showPrices && <div className="tier-period">{tier.period}</div>}

              <ul>
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <Link
                href={tier.cta.href}
                className={`btn ${tier.featured ? "btn-primary" : "btn-outline"}`}
              >
                {tier.cta.label}
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="included">
          <span className="t-mono included-label">In every plan</span>
          <ul>
            {includedInEvery.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="pricing-foot">
          <Link href="/pricing" className="btn btn-outline">
            Compare the plans in full
          </Link>
          <p className="pricing-caveat t-mono">
            Placeholder figures — they live in content/pricing.ts
          </p>
        </Reveal>
      </div>
    </section>
  );
}
