import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { GoldRule } from "@/components/motion/GoldRule";
import { Reveal } from "@/components/motion/Reveal";
import { StoryTimeline } from "@/components/sections/StoryTimeline";
import { DemoForm } from "@/components/DemoForm";
import { LeadDemo } from "@/components/demos/LeadDemo";
import { InventoryDemo } from "@/components/demos/InventoryDemo";
import { CustomScope } from "@/components/demos/CustomScope";
import { company } from "@/content/site";
import { products, type Product } from "@/content/products";
import { stories } from "@/content/stories";

function Demo({ slug }: { slug: string }) {
  if (slug === "whatsapp-lead-manager") return <LeadDemo />;
  if (slug === "inventory") return <InventoryDemo />;
  return <CustomScope />;
}

export function ProductPage({ product }: { product: Product }) {
  const story = stories[product.slug];
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <Nav />

      <header className="hero product-hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="wrap">
          <div className="product-hero-grid">
            <div>
              <GoldRule />
              <p className="t-mono product-eyebrow">
                Solution {product.index} · {product.status}
              </p>
              <h1 className="product-title">{product.name}</h1>
              <p className="product-promise">{product.heroPromise}</p>
              <div className="hero-cta">
                <Link href="/contact" className="btn btn-primary">
                  Book a demo
                </Link>
                <Link href="/pricing" className="btn btn-ghost">
                  See pricing
                </Link>
              </div>
            </div>

            <div className="product-demo">
              <p className="t-mono product-demo-label">Running live — try it</p>
              <Demo slug={product.slug} />
            </div>
          </div>
        </div>
      </header>

      <section className="section-problem">
        <div className="wrap">
          <div className="problem-grid">
            <Reveal>
              <GoldRule className="mb-4" />
              <p className="t-mono">The problem</p>
              <h2 className="problem-heading">{product.problem.heading}</h2>
            </Reveal>
            <Reveal>
              <p className="problem-body">{product.problem.body}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-features">
        <div className="wrap">
          <Reveal className="features-head">
            <GoldRule className="mb-4" />
            <h2>{product.headline}</h2>
          </Reveal>

          <div className="feature-blocks">
            {product.featureBlocks.map((block, i) => (
              <Reveal key={block.title} className="feature-block" delay={(i % 2) * 90}>
                <span className="feature-n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{block.title}</h3>
                <p>{block.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {story && (
        <section className="section-ink section-story">
          <div className="wrap">
            <div className="head-split">
              <Reveal>
                <GoldRule className="mb-5" />
                <p className="t-mono story-eyebrow">{story.eyebrow}</p>
                <h2>{story.heading}</h2>
              </Reveal>
              <Reveal>
                <p className="t-body head-note">{story.intro}</p>
              </Reveal>
            </div>
            <StoryTimeline story={story} />
          </div>
        </section>
      )}

      <section className="section-faq">
        <div className="wrap">
          <Reveal className="features-head">
            <GoldRule className="mb-4" />
            <h2>Questions we get asked.</h2>
          </Reveal>

          <div className="faq-list">
            {product.faq.map((item) => (
              <Reveal key={item.q} className="faq-row">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-others">
        <div className="wrap">
          <Reveal className="features-head">
            <GoldRule className="mb-4" />
            <h2>The other two.</h2>
          </Reveal>
          <div className="other-grid">
            {others.map((p) => (
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
              <h2 className="cta-heading">See {product.name} on your own numbers.</h2>
              <p className="t-body cta-body">
                Twenty minutes, your real data, no slide deck. We&rsquo;ll tell you if it
                isn&rsquo;t a fit.
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
