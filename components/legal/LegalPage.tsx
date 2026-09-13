import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { GoldRule } from "@/components/motion/GoldRule";
import { Reveal } from "@/components/motion/Reveal";
import { legalDraftNotice, type LegalSection } from "@/content/legal";

type Doc = {
  title: string;
  updated: string;
  intro: string;
  sections: readonly LegalSection[];
};

export function LegalPage({ doc }: { doc: Doc }) {
  return (
    <>
      <Nav />

      <header className="hero legal-hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="wrap">
          <GoldRule />
          <p className="t-mono about-eyebrow">Legal · Last updated {doc.updated}</p>
          <h1 className="legal-title">{doc.title}</h1>
          <p className="about-lede">{doc.intro}</p>
        </div>
      </header>

      <section className="section-legal">
        <div className="wrap">
          <p className="legal-notice">{legalDraftNotice}</p>

          <div className="legal-body">
            <nav className="legal-toc" aria-label="On this page">
              <span className="t-mono">On this page</span>
              <ul>
                {doc.sections.map((s) => (
                  <li key={s.heading}>
                    <a href={`#${slug(s.heading)}`}>{s.heading}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="legal-sections">
              {doc.sections.map((s) => (
                <Reveal key={s.heading} as="section" className="legal-section">
                  <h2 id={slug(s.heading)}>{s.heading}</h2>
                  {s.paras.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </Reveal>
              ))}

              <Reveal as="p" className="legal-foot">
                Questions about any of this? <Link href="/contact">Ask us</Link> — we reply
                within one working day.
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
