import { GoldRule } from "@/components/motion/GoldRule";
import { Reveal } from "@/components/motion/Reveal";
import {
  noTestimonialsNote,
  proofHeading,
  proofIntro,
  proofPoints,
} from "@/content/site";

export function Proof() {
  return (
    <section id="about" className="section-proof">
      <div className="wrap">
        <div className="head-split">
          <Reveal>
            <GoldRule className="mb-5" />
            <h2>{proofHeading}</h2>
          </Reveal>
          <Reveal>
            <p className="t-body head-note">{proofIntro}</p>
          </Reveal>
        </div>

        <div className="proof-grid">
          {proofPoints.map((point, i) => (
            <Reveal key={point.n} className="proof-card" delay={(i % 2) * 90}>
              <span className="proof-n">{point.n}</span>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="proof-note">
          <b>There are no testimonials on this page.</b> {noTestimonialsNote}
        </Reveal>
      </div>
    </section>
  );
}
