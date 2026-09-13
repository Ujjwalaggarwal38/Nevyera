import { GoldRule } from "@/components/motion/GoldRule";
import { Reveal } from "@/components/motion/Reveal";
import { DemoForm } from "@/components/DemoForm";
import { company } from "@/content/site";

export function DemoCta() {
  return (
    <section id="demo" className="section-ink section-cta">
      <div className="hero-glow" aria-hidden="true" />

      <div className="wrap cta-inner">
        <div className="cta-grid">
          <Reveal>
            <GoldRule className="mb-5" />
            <h2 className="cta-heading">Twenty minutes, your own numbers.</h2>
            <p className="t-body cta-body">
              We&rsquo;ll connect your WhatsApp number or load your stock list into a trial
              and walk through your real data. Not a rehearsed account with invented
              customers in it.
            </p>
            <ul className="cta-why">
              <li>No slide deck</li>
              <li>You keep the trial afterwards</li>
              <li>We&rsquo;ll tell you if it isn&rsquo;t a fit</li>
            </ul>
          </Reveal>

          <Reveal>
            <DemoForm replyWindow={company.replyWindow} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
