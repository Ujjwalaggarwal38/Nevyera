import { Reveal } from "@/components/motion/Reveal";

/**
 * A full-bleed typographic statement with no eyebrow and no grid — the one
 * section that stops the page and says something in the brand's own voice.
 */
export function Statement() {
  return (
    <section className="section-statement">
      <div className="wrap">
        <Reveal as="p" className="statement-line">
          A business shouldn&rsquo;t run on one person&rsquo;s <em>memory</em> and a phone
          that goes home at night.
        </Reveal>

        <Reveal className="statement-attrib">
          <span className="t-mono">Why we started</span>
          <p>
            Both of our products came out of watching small businesses lose money to admin,
            not to competitors. Neither was designed in a workshop. They were built because
            somebody needed them on a Tuesday.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
