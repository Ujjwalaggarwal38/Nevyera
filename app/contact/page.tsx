import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { GoldRule } from "@/components/motion/GoldRule";
import { Reveal } from "@/components/motion/Reveal";
import { DemoForm } from "@/components/DemoForm";
import { beforeYouAsk, contactIntro, directContact, whatHappensNext } from "@/content/contact";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Book a demo",
  description:
    "Twenty minutes on your own WhatsApp enquiries or stock list. You keep the 14-day trial either way.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />

      <header className="hero contact-hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <GoldRule />
              <p className="t-mono about-eyebrow">{contactIntro.eyebrow}</p>
              <h1 className="contact-title">{contactIntro.heading}</h1>
              <p className="about-lede">{contactIntro.lede}</p>

              <ul className="contact-assure">
                <li>No slide deck</li>
                <li>You keep the trial afterwards</li>
                <li>We&rsquo;ll tell you if it isn&rsquo;t a fit</li>
              </ul>

              <div className="direct">
                <span className="t-mono">{directContact.note}</span>
                <div className="direct-links">
                  {directContact.channels.map((c) => (
                    <a key={c.label} href={c.href} className="direct-link">
                      <span className="direct-label">{c.label}</span>
                      <span className="direct-value">{c.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              <DemoForm replyWindow={company.replyWindow} />
            </div>
          </div>
        </div>
      </header>

      <section className="section-next">
        <div className="wrap">
          <Reveal className="features-head">
            <GoldRule className="mb-4" />
            <h2>What happens after you press send.</h2>
          </Reveal>

          <div className="next-grid">
            {whatHappensNext.map((s, i) => (
              <Reveal key={s.step} className="next-card" delay={i * 90}>
                <span className="next-when">{s.when}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-faq">
        <div className="wrap">
          <Reveal className="features-head">
            <GoldRule className="mb-4" />
            <h2>Before you ask.</h2>
          </Reveal>
          <div className="faq-list">
            {beforeYouAsk.map((item) => (
              <Reveal key={item.q} className="faq-row">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
