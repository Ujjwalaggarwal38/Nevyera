"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The stay-on-page mechanic: a visitor types a message as the customer and
 * watches it become a lead in Nevyera — captured, assigned, replied.
 *
 * This is the single most valuable element on the site. Nobody else in this
 * market lets you use the product before handing over a phone number, and it
 * does the selling a screenshot can't.
 *
 * Entirely self-contained. No network, no backend, no data leaves the browser.
 */

const NAMES = [
  "Rohit Kumar",
  "Anjali Sharma",
  "Mahesh Verma",
  "Deepa Nair",
  "Imran Qureshi",
] as const;

const AGENTS = ["Priya", "Arjun", "Sana"] as const;

const REPLIES = [
  "Yes, it's available. Shall I book you a test drive?",
  "Happy to help — sending the full details now.",
  "Of course. What time suits you tomorrow?",
  "Let me confirm that and come straight back to you.",
] as const;

const SUGGESTIONS = [
  "Is the Creta 2022 available?",
  "Down payment on the i20?",
] as const;

type Status = "NEW" | "ASSIGNED" | "REPLIED";

type Lead = {
  id: number;
  name: string;
  agent: string;
  message: string;
  at: string;
  status: Status;
  repliedAt?: string;
};

type Message = { id: number; text: string; incoming: boolean };

const clock = () =>
  new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

export function LeadDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [count, setCount] = useState(126);
  const [draft, setDraft] = useState("");

  const sentRef = useRef(0);
  const threadRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Every timeout is tracked so unmounting can't leave one firing into a dead
  // component — this panel sits in a tab that gets switched away from.
  const later = (fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, ms));
  };

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const el = threadRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const send = (text: string) => {
    const body = text.trim();
    if (!body) return;

    const n = sentRef.current++;
    const id = Date.now() + n;
    const name = NAMES[n % NAMES.length];
    const agent = AGENTS[n % AGENTS.length];

    setMessages((m) => [...m, { id, text: body, incoming: false }]);
    setLeads((l) => [
      { id, name, agent, message: body, at: clock(), status: "NEW" },
      ...l,
    ]);
    setCount((c) => c + 1);

    const setStatus = (status: Status, repliedAt?: string) =>
      setLeads((l) =>
        l.map((lead) => (lead.id === id ? { ...lead, status, repliedAt } : lead)),
      );

    later(() => setStatus("ASSIGNED"), 900);
    later(
      () =>
        setMessages((m) => [
          ...m,
          { id: id + 0.5, text: REPLIES[n % REPLIES.length], incoming: true },
        ]),
      2000,
    );
    later(() => setStatus("REPLIED", clock()), 2500);
  };

  // Seed one lead so the panel is never dead on arrival.
  useEffect(() => {
    const t = setTimeout(() => {
      if (sentRef.current === 0) send("Is the Creta 2022 available?");
    }, 1800);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="panel">
      <div className="panel-top">
        <span>Sharma Motors · shared inbox</span>
        <b>Live</b>
      </div>

      <div className="demo-duo">
        {/* the customer */}
        <div className="demo-col">
          <div className="col-head">
            <span>You · the customer</span>
          </div>

          <div className="thread" ref={threadRef}>
            {messages.map((m) => (
              <div key={m.id} className={`bubble ${m.incoming ? "incoming" : ""}`}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="chips">
            {SUGGESTIONS.map((s) => (
              <button key={s} type="button" className="chip" onClick={() => send(s)}>
                {s}
              </button>
            ))}
          </div>

          <form
            className="composer"
            onSubmit={(e) => {
              e.preventDefault();
              send(draft);
              setDraft("");
            }}
          >
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Write a message…"
              autoComplete="off"
              aria-label="Message the dealership"
            />
            <button type="submit" aria-label="Send message">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>

        {/* what the business sees */}
        <div className="demo-col">
          <div className="col-head">
            <span>In Nevyera</span>
            <span className="tally">{count}</span>
          </div>

          <div className="leads">
            {leads.length === 0 ? (
              <p className="leads-empty">
                <b>Nothing here yet</b>
                Type a message on the left.
              </p>
            ) : (
              leads.map((lead) => (
                <article key={lead.id} className="lead">
                  <div className="lead-row">
                    <span className="lead-name">{lead.name}</span>
                    <span className="lead-time">{lead.at}</span>
                    <span className={`lead-pill status-${lead.status.toLowerCase()}`}>
                      {lead.status}
                    </span>
                  </div>
                  <p className="lead-message">{lead.message}</p>
                  {lead.status !== "NEW" && (
                    <p className="lead-foot">
                      {lead.status === "ASSIGNED"
                        ? `Owner · ${lead.agent}`
                        : `${lead.agent} replied at ${lead.repliedAt}`}
                    </p>
                  )}
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
