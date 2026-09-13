"use client";

import Link from "next/link";

import { useSolution } from "@/components/sections/SolutionContext";
import { GoldRule } from "@/components/motion/GoldRule";
import { Reveal } from "@/components/motion/Reveal";
import { CustomScope } from "@/components/demos/CustomScope";
import { LeadDemo } from "@/components/demos/LeadDemo";
import { InventoryDemo } from "@/components/demos/InventoryDemo";
import { products } from "@/content/products";

export function Solutions() {
  const { active, setActive } = useSolution();

  return (
    <section id="solutions" className="section-ink section-solutions">
      <div className="wrap">
        <div className="head-split">
          <Reveal>
            <GoldRule className="mb-5" />
            <h2>Use them here, before you speak to anyone.</h2>
          </Reveal>
          <Reveal>
            <p className="t-body head-note">
              These three panels are not screenshots or videos. They run in your browser.
              Click between them and press the buttons.
            </p>
          </Reveal>
        </div>

        <div className="tabs" role="tablist" aria-label="Nevyera solutions">
          {products.map((product) => (
            <button
              key={product.slug}
              role="tab"
              type="button"
              aria-selected={active === product.slug}
              aria-controls={`pane-${product.slug}`}
              className="tab"
              onClick={() => setActive(product.slug)}
            >
              {product.name}
              <span className="tab-status">{product.status}</span>
            </button>
          ))}
        </div>

        {products.map((product) => {
          if (product.slug !== active) return null;

          return (
            <div
              key={product.slug}
              id={`pane-${product.slug}`}
              role="tabpanel"
              className="pane"
            >
              <div>
                <h3>{product.headline}</h3>
                <p className="pane-body">{product.body}</p>
                <div className="feature-list">
                  {product.features.map((f) => (
                    <span key={f}>{f}</span>
                  ))}
                </div>

                <Link href={product.href} className="btn btn-ghost pane-link">
                  Everything about {product.name}
                </Link>
              </div>

              <div>
                {/* second instance; the hero has one too, state is per-instance */}
                {product.slug === "whatsapp-lead-manager" && <LeadDemo />}
                {product.slug === "inventory" && <InventoryDemo />}
                {product.slug === "custom" && <CustomScope />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
