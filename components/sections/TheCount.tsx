import { Reveal } from "@/components/motion/Reveal";

/**
 * The "before". An oversized numeral against an offset list — deliberately
 * structured unlike any other section on the page.
 *
 * ⚠ The dealership, the names and the quotes are illustrative placeholders.
 */

const MISSED = [
  {
    who: "Rohit Kumar",
    question: "“Is the Creta 2022 still available?”",
    when: "READ · 4 HRS",
  },
  {
    who: "Anjali Sharma",
    question: "“What’s the down payment on the i20?”",
    when: "READ · 2 DAYS",
  },
  {
    who: "Mahesh Verma",
    question: "“Can I come see the car tomorrow?”",
    when: "BOUGHT ELSEWHERE",
  },
] as const;

export function TheCount() {
  return (
    <section className="section-count">
      <div className="wrap">
        <div className="count-grid">
          <Reveal>
            <div className="big-numeral">
              3<span>.</span>
            </div>
            <p className="t-mono numeral-label">Enquiries · Saturday</p>
          </Reveal>

          <Reveal className="missed">
            <p className="t-body missed-intro">
              A dealership gets most of its enquiries on WhatsApp now. Not the landline,
              not the website form — WhatsApp. Those messages go to whoever&rsquo;s phone
              the number is registered on. Here are three from one Saturday.
            </p>

            {MISSED.map((m, i) => (
              <div key={m.who} className={`missed-row fade-${i}`}>
                <span className="missed-who">{m.who}</span>
                <span className="missed-question">{m.question}</span>
                <span className="missed-when">{m.when}</span>
              </div>
            ))}

            <p className="t-body missed-outro">
              By Monday nobody could say which of the three were lost. Nothing had recorded
              that they existed.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
