/**
 * A horizontal band that interrupts the vertical stack.
 *
 * Structural, not decorative: six sections flowing top-to-bottom at the same
 * rhythm is what made an earlier version read as machine-generated. This
 * breaks the column.
 *
 * Items are duplicated once so the -50% translate loops seamlessly. No client
 * JS needed — it's a CSS animation, so this stays a server component.
 */
export function Marquee({
  items,
  seconds = 46,
}: {
  items: readonly string[];
  seconds?: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee">
      <div className="marquee-track" style={{ animationDuration: `${seconds}s` }}>
        {doubled.map((item, i) => (
          <span key={i}>
            {item}
            <i> ·</i>
          </span>
        ))}
      </div>
    </div>
  );
}
