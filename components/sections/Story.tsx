"use client";

import { GoldRule } from "@/components/motion/GoldRule";
import { Reveal } from "@/components/motion/Reveal";
import { StoryTimeline } from "@/components/sections/StoryTimeline";
import { useSolution } from "@/components/sections/SolutionContext";
import { products } from "@/content/products";
import { stories } from "@/content/stories";

export function Story() {
  const { active, setActive } = useSolution();
  const story = stories[active] ?? stories[products[0].slug];

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

        <StoryTimeline key={active} story={story} />
      </div>
    </section>
  );
}
