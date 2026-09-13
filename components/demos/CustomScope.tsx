"use client";

import { useState } from "react";

const SCOPES = {
  clinic: {
    label: "Clinic",
    items: [
      ["Appointments", "Bookings, WhatsApp reminders, and no double-booked slots"],
      ["Patient records", "History, prescriptions and reports in one place"],
      ["Recalls", "Automatic follow-up for vaccinations and review visits"],
      ["Billing", "GST invoices and a daily collection summary"],
    ],
  },
  dealer: {
    label: "Car dealership",
    items: [
      ["Lead pipeline", "Every enquiry from every source, with a named owner"],
      ["Test drives", "Scheduling, reminders, and what came of them"],
      ["Vehicle stock", "On the floor, promised, and sold"],
      ["Finance follow-up", "Loan status tracked against each buyer"],
    ],
  },
  coach: {
    label: "Coaching centre",
    items: [
      ["Admissions", "Enquiry to enrolment, with follow-up that actually happens"],
      ["Batches & attendance", "Who is in which batch, and who stopped coming"],
      ["Fees", "Instalments, reminders and receipts"],
      ["Parent updates", "Progress sent out without anyone typing it"],
    ],
  },
  retail: {
    label: "Retail shop",
    items: [
      ["Counter billing", "Fast billing with GST and daily cash reconciliation"],
      ["Stock", "What sells, what is dead, what to reorder"],
      ["Customer list", "Who buys what, and when they last came in"],
      ["Offers", "Sent to the people it applies to, not everyone"],
    ],
  },
} as const;

type ScopeKey = keyof typeof SCOPES;

export function CustomScope() {
  const [active, setActive] = useState<ScopeKey>("clinic");

  return (
    <div className="panel">
      <div className="panel-top">
        <span>Rough scope</span>
        <b>Pick a business</b>
      </div>

      <div className="picker">
        {(Object.keys(SCOPES) as ScopeKey[]).map((key) => (
          <button
            key={key}
            type="button"
            className={active === key ? "selected" : ""}
            aria-pressed={active === key}
            onClick={() => setActive(key)}
          >
            {SCOPES[key].label}
          </button>
        ))}
      </div>

      <div className="blueprint">
        {SCOPES[active].items.map(([title, detail], i) => (
          <div key={title} className="blueprint-row" style={{ animationDelay: `${i * 70}ms` }}>
            <span className="blueprint-n">{String(i + 1).padStart(2, "0")}</span>
            <span className="blueprint-text">
              <b>{title}</b>
              {detail}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
