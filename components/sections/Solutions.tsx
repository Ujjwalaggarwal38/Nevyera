"use client";

import { useSolution } from "@/components/sections/SolutionContext";
import { GoldRule } from "@/components/motion/GoldRule";
import { Reveal } from "@/components/motion/Reveal";
import { CustomScope } from "@/components/demos/CustomScope";
import { InventoryDemo } from "@/components/demos/InventoryDemo";
import { products } from "@/content/products";

/**
 * The centrepiece, and the fix for an earlier draft that read as a Lead Manager
 * page wearing a company page's nav: all three solutions get equal billing and
 * a working demo each.
 *
 * The Lead Manager pane points up at the hero rather than mounting a second
 * copy of the same widget — running it twice on one page looked like padding.
 */
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
              </div>

              <div>
                {product.slug === "whatsapp-lead-manager" && (
                  <div className="panel">
                    <div className="panel-top">
                      <span>Scroll up — it&rsquo;s in the hero</span>
                      <b>↑</b>
                    </div>
                    <p className="t-body pane-pointer">
                      The Lead Manager demo is the panel at the top of this page. Send a
                      message there and watch it land.
                    </p>
                  </div>
                )}
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
