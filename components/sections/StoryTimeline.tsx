"use client";

import { useEffect, useRef, useState } from "react";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import type { Story } from "@/content/stories";

export function StoryTimeline({ story }: { story: Story }) {
  const [reached, setReached] = useState(-1);
  const beatRefs = useRef<(HTMLDivElement | null)[]>([]);

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
  }, [story]);

  return (
    <div className="beats">
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
            <i style={{ width: `${((Math.max(reached, -1) + 1) / story.beats.length) * 100}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
