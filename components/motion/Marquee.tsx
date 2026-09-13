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
