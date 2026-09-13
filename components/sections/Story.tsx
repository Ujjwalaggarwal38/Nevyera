"use client";

import { useEffect, useRef, useState } from "react";
import { CountUp } from "@/components/motion/CountUp";
import { GoldRule } from "@/components/motion/GoldRule";
import { Reveal } from "@/components/motion/Reveal";
import { useSolution } from "@/components/sections/SolutionContext";
import { products } from "@/content/products";
import { stories } from "@/content/stories";

/**
 * A three-beat timeline for whichever solution is selected above.
 *
 * All three stories share a shape — three timestamps and one number — because
 * elapsed time is the argument every time: minutes instead of hours for leads,
 * minutes instead of days for procurement, weeks instead of quarters for a
 * custom build.
 *
 * The switcher is repeated here rather than relying only on the tabs above:
 * a visitor who scrolls straight past the Solutions section would otherwise
 * never learn this section changes.
 */
export function Story() {
  const { active, setActive } = useSolution();
  const story = stories[active] ?? stories[products[0].slug];

  const [reached, setReached] = useState(-1);
  const beatRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Re-observe on story change: the beats are different elements each time.
  useEffect(() => {
    setReached(-1);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReached(story.beats.length - 1);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.beat);
          setReached((prev) => (index > prev ? index : prev));
        });
      },
      { threshold: 0.6 },
    );

    beatRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [active, story.beats.length]);

  return (
    <section id="how" className="section-ink section-story">
      <div className="wrap">
        <div className="head-split">
          <Reveal>
            <GoldRule className="mb-5" />
            <p className="t-mono story-eyebrow">{story.eyebrow}</p>
            <h2>{story.heading}</h2>
          </Reveal>

          <Reveal>
            <p className="t-body head-note">{story.intro}</p>

            <div className="story-switch" role="group" aria-label="Choose a solution">
              {products.map((p) => (
                <button
                  key={p.slug}
                  type="button"
                  className={active === p.slug ? "selected" : ""}
                  aria-pressed={active === p.slug}
                  onClick={() => setActive(p.slug)}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="beats" key={active}>
          <div>
            {story.beats.map((beat, i) => (
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
                <CountUp to={story.payoff.value} />
                <span className="payoff-unit">{story.payoff.unit}</span>
              </div>
              <p className="t-body payoff-note">{story.payoff.note}</p>
            </Reveal>
          </div>

          <div className="pinned">
            <div className="panel">
              {story.beats.map((beat, i) => (
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
                    width: `${((Math.max(reached, -1) + 1) / story.beats.length) * 100}%`,
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
