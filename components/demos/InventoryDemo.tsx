"use client";

// ⚠ vendor names and ₹ figures are placeholders
import { useEffect, useRef, useState } from "react";

type LogEntry = {
  id: number;
  at: string;
  message: string;
  amount?: string;
  winner?: boolean;
};

const VENDORS = [
  { name: "Apex Auto Parts", price: "₹184 / unit" },
  { name: "Bharat Spares", price: "₹179 / unit" },
  { name: "Shakti Traders", price: "₹171 / unit" }, // lowest bid wins
] as const;

const REORDER_POINT = 20;
const ISSUE_QTY = 5;
const ORDER_QTY = 200;

const clock = () =>
  new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

export function InventoryDemo() {
  const [warehouseA, setWarehouseA] = useState(42);
  const [warehouseB, setWarehouseB] = useState(17);
  const [inTransit, setInTransit] = useState(0);
  const [log, setLog] = useState<LogEntry[]>([]);
  const [bidding, setBidding] = useState(false);
  const [flash, setFlash] = useState<string | null>(null);

  const idRef = useRef(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  const later = (fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, ms));
  };

  const write = (message: string, amount?: string, winner?: boolean) =>
    setLog((l) => [{ id: idRef.current++, at: clock(), message, amount, winner }, ...l]);

  const pulse = (key: string) => {
    setFlash(key);
    later(() => setFlash(null), 700);
  };

  const issueStock = () => {
    if (warehouseA >= ISSUE_QTY) {
      const next = warehouseA - ISSUE_QTY;
      setWarehouseA(next);
      pulse("A");
      write(`QR scanned · ${ISSUE_QTY} issued from Warehouse A`, `−${ISSUE_QTY}`);
      if (next <= REORDER_POINT) write("Reorder point reached on BP-4417");
    } else if (warehouseB >= ISSUE_QTY) {
      setWarehouseB(warehouseB - ISSUE_QTY);
      pulse("B");
      write(`QR scanned · ${ISSUE_QTY} issued from Warehouse B`, `−${ISSUE_QTY}`);
    } else {
      write("Stock exhausted — request vendor bids");
    }
  };

  const requestBids = () => {
    setBidding(true);
    write(`Bid request sent to ${VENDORS.length} vendors · ${ORDER_QTY} units`);

    VENDORS.forEach((vendor, i) => {
      const isWinner = i === VENDORS.length - 1;
      later(
        () => {
          write(
            isWinner ? `${vendor.name} wins — lowest bid` : `${vendor.name} bid`,
            vendor.price,
            isWinner,
          );

          if (isWinner) {
            later(() => {
              setInTransit((t) => t + ORDER_QTY);
              pulse("T");
              write(`Order placed · ${ORDER_QTY} units in transit`, `+${ORDER_QTY}`);
              setBidding(false);
            }, 800);
          }
        },
        700 + i * 750,
      );
    });
  };

  const stores = [
    { key: "A", label: "Warehouse A", value: warehouseA },
    { key: "B", label: "Warehouse B", value: warehouseB },
    { key: "T", label: "In transit", value: inTransit },
  ];

  return (
    <div className="panel">
      <div className="panel-top">
        <span>Brake pads, set of 4</span>
        <b>SKU BP-4417</b>
      </div>

      <div className="stock-row">
        {stores.map((s) => (
          <div key={s.key} className="stock">
            <div className="stock-label">{s.label}</div>
            <div className={`stock-value ${flash === s.key ? "flash" : ""}`}>{s.value}</div>
          </div>
        ))}
      </div>

      <div className="demo-actions">
        <button type="button" onClick={issueStock}>
          Scan QR · issue {ISSUE_QTY}
        </button>
        <button type="button" onClick={requestBids} disabled={bidding}>
          {bidding ? "Bids open…" : "Request vendor bids"}
        </button>
      </div>

      <div className="ledger">
        {log.length === 0 ? (
          <div className="ledger-row">
            <span className="ledger-time">—</span>
            <span className="ledger-message">Press a button. The ledger is real.</span>
          </div>
        ) : (
          log.map((entry) => (
            <div key={entry.id} className={`ledger-row ${entry.winner ? "winner" : ""}`}>
              <span className="ledger-time">{entry.at}</span>
              <span className="ledger-message">{entry.message}</span>
              {entry.amount && <span className="ledger-amount">{entry.amount}</span>}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
