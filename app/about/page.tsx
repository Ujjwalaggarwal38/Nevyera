import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { GoldRule } from "@/components/motion/GoldRule";
import { Reveal } from "@/components/motion/Reveal";
import { DemoForm } from "@/components/DemoForm";
import { aboutIntro, facts, principles, story, wontDo } from "@/content/about";
import { company, noTestimonialsNote } from "@/content/site";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nevyera is a small team in India building lead management, inventory and custom software for businesses that run on WhatsApp and spreadsheets.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />

      <header className="hero about-hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="wrap">
          <GoldRule />
          <p className="t-mono about-eyebrow">{aboutIntro.eyebrow}</p>
          <h1 className="about-title">{aboutIntro.heading}</h1>
          <p className="about-lede">{aboutIntro.lede}</p>
        </div>
      </header>

      <section className="section-facts">
        <div className="wrap">
          <dl className="facts-grid">
            {facts.map((f, i) => (
              <Reveal key={f.label} className="fact" delay={(i % 4) * 70}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-editorial">
        <div className="wrap">
          <div className="editorial-grid">
            <Reveal>
              <GoldRule className="mb-4" />
              <p className="t-mono">Why we started</p>
            </Reveal>
            <Reveal className="editorial-columns">
              {story.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-features">
        <div className="wrap">
          <Reveal className="features-head">
            <GoldRule className="mb-4" />
            <h2>How we work.</h2>
          </Reveal>
          <div className="feature-blocks">
            {principles.map((p, i) => (
              <Reveal key={p.title} className="feature-block" delay={(i % 2) * 90}>
                <span className="feature-n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-ink section-wont">
        <div className="wrap">
          <div className="head-split">
            <Reveal>
              <GoldRule className="mb-5" />
              <h2>Things we won&rsquo;t do.</h2>
            </Reveal>
            <Reveal>
              <p className="t-body head-note">
                Worth writing down, because every one of them is tempting for a company
                our size.
              </p>
            </Reveal>
          </div>

          <ul className="wont-list">
            {wontDo.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 70}>
                {item}
              </Reveal>
            ))}
          </ul>

          <Reveal as="p" className="wont-note">
            {noTestimonialsNote}
          </Reveal>
        </div>
      </section>

      <section className="section-others">
        <div className="wrap">
          <Reveal className="features-head">
            <GoldRule className="mb-4" />
            <h2>What we build.</h2>
          </Reveal>
          <div className="other-grid other-grid-3">
            {products.map((p) => (
              <Reveal key={p.slug}>
                <Link href={p.href} className="other-card">
                  <span className="other-n">Solution {p.index}</span>
                  <h3>{p.name}</h3>
                  <p>{p.short}</p>
                  <span className="other-go">See it →</span>
                </Link>
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
              <h2 className="cta-heading">Talk to the people who built it.</h2>
              <p className="t-body cta-body">
                Twenty minutes on your real data, not a rehearsed demo account. We&rsquo;ll
                tell you if it isn&rsquo;t a fit.
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
