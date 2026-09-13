import { GoldRule } from "@/components/motion/GoldRule";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Two columns of plain prose with a drop cap.
 *
 * This section exists because a page where every block lands a clever one-liner
 * reads as generated. Real writing has paragraphs that just explain something.
 * Resist the urge to tighten this into bullet points.
 */
export function Editorial() {
  return (
    <section className="section-editorial">
      <div className="wrap">
        <div className="editorial-grid">
          <Reveal>
            <GoldRule className="mb-4" />
            <p className="t-mono">On being new</p>
          </Reveal>

          <Reveal className="editorial-columns">
            <p>
              Nevyera is a few months old. We have two products running, no customer logos
              to show you, and no intention of borrowing anybody else&rsquo;s.
            </p>
            <p>
              That&rsquo;s an awkward thing to lead with on a website. The convention is to
              put up a row of grey company marks and a quote from a Director of Operations
              who may or may not exist. We&rsquo;d rather tell you what we actually are and
              let you decide.
            </p>
            <p>
              <b>What we are is two working products and a small team that answers its own
              phone.</b>{" "}
              The Lead Manager is built on Meta&rsquo;s official WhatsApp Business API,
              which matters because the unofficial route eventually gets business numbers
              banned. Inventory handles stock by QR across warehouses, runs vendor bidding
              on purchases, and bills through Zoho.
            </p>
            <p>
              If you need something neither of them does, that&rsquo;s the third thing we
              sell — the same people, building to your process rather than ours.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
