"use client";

import { useState } from "react";
import { contactDestination } from "@/content/site";

/**
 * The demo request form.
 *
 * ⚠ NOT WIRED UP. `contactDestination` in content/site.ts is still null — the
 * decision between "send to an email address" and "POST into the Lead Manager,
 * so Nevyera is its own first customer" hasn't been made yet (spec §11).
 *
 * Until it is, the form validates and gives honest feedback rather than
 * pretending to submit. A form that silently swallows a real enquiry is worse
 * than one that admits it isn't connected.
 */

const NEEDS = [
  "Lead management",
  "Inventory",
  "Both",
  "Something custom",
] as const;

export function DemoForm({ replyWindow }: { replyWindow: string }) {
  const [submitted, setSubmitted] = useState(false);

  const wired = contactDestination !== null;

  return (
    <form
      className="demo-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="field">
        <label htmlFor="df-name">Your name</label>
        <input id="df-name" name="name" required autoComplete="name" />
      </div>

      <div className="field">
        <label htmlFor="df-business">Business</label>
        <input id="df-business" name="business" required autoComplete="organization" />
      </div>

      <div className="field">
        <label htmlFor="df-whatsapp">WhatsApp number</label>
        <input
          id="df-whatsapp"
          name="whatsapp"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="+91"
        />
      </div>

      <div className="field">
        <label htmlFor="df-need">What do you need</label>
        <select id="df-need" name="need" defaultValue={NEEDS[0]}>
          {NEEDS.map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary form-submit" disabled={submitted}>
        {submitted ? "Not connected yet" : "Book a demo"}
      </button>

      <p className="form-fine" role="status">
        {submitted && !wired
          ? "This form isn't connected to anything yet — nothing was sent."
          : `We reply on WhatsApp within ${replyWindow}.`}
      </p>
    </form>
  );
}
