import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { GoldRule } from "@/components/motion/GoldRule";
import { Reveal } from "@/components/motion/Reveal";
import { DemoForm } from "@/components/DemoForm";
import {
  comparison,
  formatPrice,
  includedInEvery,
  pricingFaq,
  pricingIntro,
  showPrices,
  tiers,
} from "@/content/pricing";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Nevyera pricing: every plan includes the whole product. Tiers change how many people and how many records, never which features you get.",
};

export default function PricingPage() {
  return (
    <>
      <Nav />

      <header className="hero pricing-hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="wrap">
          <GoldRule />
          <p className="t-mono about-eyebrow">Pricing</p>
          <h1 className="about-title">Priced for a shop, not an enterprise.</h1>
          <p className="about-lede">{pricingIntro}</p>
        </div>
      </header>

      <section className="section-pricing on-light pricing-page-tiers">
        <div className="wrap">
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
        </div>
      </section>

      <section className="section-compare">
        <div className="wrap">
          <Reveal className="features-head">
            <GoldRule className="mb-4" />
            <h2>Side by side.</h2>
          </Reveal>

          <div className="compare-scroll">
            <table className="compare">
              <caption className="sr-only">Plan comparison</caption>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only">Feature</span>
                  </th>
                  {tiers.map((t) => (
                    <th key={t.code} scope="col" className={t.featured ? "is-featured" : ""}>
                      {t.name}
                      <span>{formatPrice(t)}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {row.values.map((v, i) => (
                      <td key={i} className={tiers[i]?.featured ? "is-featured" : ""}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-faq">
        <div className="wrap">
          <Reveal className="features-head">
            <GoldRule className="mb-4" />
            <h2>Questions about money.</h2>
          </Reveal>
          <div className="faq-list">
            {pricingFaq.map((item) => (
              <Reveal key={item.q} className="faq-row">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-ink section-cta">
        <div className="hero-glow" aria-hidden="true" />
        <div className="wrap cta-inner">
          <div className="cta-grid">
            <Reveal>
              <GoldRule className="mb-5" />
              <h2 className="cta-heading">Not sure which one?</h2>
              <p className="t-body cta-body">
                Tell us how many people answer messages and how many enquiries you get in a
                week. We&rsquo;ll tell you which plan fits — including if that&rsquo;s the
                free one.
              </p>
            </Reveal>
            <Reveal>
              <DemoForm replyWindow={company.replyWindow} />
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
