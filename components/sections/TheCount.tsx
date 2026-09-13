// ⚠ names, figures and the business are placeholders
import { GoldRule } from "@/components/motion/GoldRule";
import { Reveal } from "@/components/motion/Reveal";

const LOSSES = [
  {
    domain: "Enquiry",
    who: "Rohit Kumar",
    at: "9:14 AM",
    what: "“Is the Creta 2022 still available?”",
    quote: true,
    cost: "Read · never answered",
    state: "waiting",
  },
  {
    domain: "Purchase",
    who: "Apex Auto Parts",
    at: "11:20 AM",
    what: "200 brake pads ordered at ₹184 a unit",
    quote: false,
    cost: "₹2,600 overpaid",
    state: "late",
  },
  {
    domain: "Process",
    who: "Front desk",
    at: "4:32 PM",
    what: "Service reminders, still kept in a notebook",
    quote: false,
    cost: "No system for it",
    state: "lost",
  },
] as const;

export function TheCount() {
  return (
    <section className="section-count">
      <div className="wrap">
        <Reveal className="count-head">
          <GoldRule className="mb-4" />
          <p className="t-mono">One business · one Saturday</p>
          <h2 className="count-heading">Three ways a day leaks money.</h2>
        </Reveal>

        <div className="missed-list">
          {LOSSES.map((row, i) => (
            <Reveal key={row.domain} className={`missed-row state-${row.state}`} delay={i * 90}>
              <span className="missed-who">
                <span className="missed-domain">{row.domain}</span>
                <span className="missed-at">
                  {row.who} · {row.at}
                </span>
              </span>
              <span className={`missed-what ${row.quote ? "is-quote" : ""}`}>
                {row.what}
              </span>
              <span className="missed-outcome">{row.cost}</span>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="count-close">
          Nobody was careless. There was simply nothing recording any of it —{" "}
          <b>and that is the whole of what we build.</b>
        </Reveal>
      </div>
    </section>
  );
}
