"use client";

import { useEffect, useRef, useState } from "react";
import { CountUp } from "@/components/motion/CountUp";
import { GoldRule } from "@/components/motion/GoldRule";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The same Saturday, told twice. This is the "after" to the count section's
 * "before" — one lead followed through three beats while a pinned panel keeps
 * pace on the right.
 *
 * ⚠ Sharma Motors, Rohit, Priya and the times are illustrative.
 */

const BEATS = [
  {
    clock: "09:14",
    title: "It lands somewhere real",
    body: "Rohit's message reaches the business number and becomes a lead on its own — his name, his number, and what he asked. Nobody wrote anything down.",
    marker: { label: "Rohit Kumar", detail: "Captured as a lead" },
  },
  {
    clock: "09:15",
    title: "Priya owns it",
    body: "Assigned, with her name on it, visible to the team. It stops being everybody's problem and therefore nobody's.",
    marker: { label: "Assigned to Priya", detail: "Owner set · team notified" },
  },
  {
    clock: "09:22",
    title: "It closes",
    body: "She replies from the shared inbox and books the test drive for 11:40. The conversation is still readable next year.",
    marker: { label: "Test drive booked", detail: "11:40 · lead closed" },
  },
] as const;

export function Story() {
  const [reached, setReached] = useState(-1);
  const beatRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReached(BEATS.length - 1);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.beat);
          if (entry.isIntersecting) setReached(index);
        });
      },
      { threshold: 0.6 },
    );

    beatRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how" className="section-ink section-story">
      <div className="wrap">
        <div className="head-split">
          <Reveal>
            <GoldRule className="mb-5" />
            <h2>The same Saturday, eight minutes long.</h2>
          </Reveal>
          <Reveal>
            <p className="t-body head-note">
              Nothing clever happens here. The enquiry just has somewhere to land and a name
              attached to it.
            </p>
          </Reveal>
        </div>

        <div className="beats">
          <div>
            {BEATS.map((beat, i) => (
              <div
                key={beat.clock}
                data-beat={i}
                ref={(el) => {
                  beatRefs.current[i] = el;
                }}
                className={`beat ${reached >= i ? "on" : ""}`}
              >
                <div className="beat-clock">{beat.clock}</div>
                <h3>{beat.title}</h3>
                <p>{beat.body}</p>
              </div>
            ))}

            <Reveal className="payoff">
              <div className="payoff-number">
                <CountUp to={8} />
              </div>
              <p className="t-body payoff-note">
                Minutes, start to finish. The version without software took four hours and
                lost two of the three.
              </p>
            </Reveal>
          </div>

          <div className="pinned">
            <div className="panel">
              {BEATS.map((beat, i) => (
                <div key={beat.clock} className={`marker ${reached >= i ? "on" : ""}`}>
                  <span className="marker-time">{beat.clock}</span>
                  <span className="marker-detail">
                    <b>{beat.marker.label}</b>
                    <span>{beat.marker.detail}</span>
                  </span>
                </div>
              ))}
              <div className="marker-bar">
                <i
                  style={{
                    width: `${((Math.max(reached, -1) + 1) / BEATS.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
