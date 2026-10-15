import React, { useState } from "react";

export default function GiftCardReveal({
  cardNumber = "6366400057525021",
  pin = "1730",
  amount = 25.0,
  currency = "USD",
}) {
  const [revealed, setRevealed] = useState({ number: false, pin: false });
  const [copied, setCopied] = useState({ number: false, pin: false });

  const handleReveal = (key) =>
    setRevealed((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleCopy = async (value, key) => {
    try {
      await navigator.clipboard.writeText(value.replace(/\s/g, ""));
      setCopied((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => setCopied((prev) => ({ ...prev, [key]: false })), 1800);
    } catch (_) {}
  };

  const formattedAmount = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

  return (
    <div className="card-shell">
      <div className="card-header">
        <div className="saks-logo-wrap">
          <img src="/logo.png" alt="Saks Fifth Avenue" className="header-logo" />
        </div>
        <p className="header-brand">Saks Fifth Avenue</p>
      </div>

      <div className="seam" />

      <div className="card-body">
        <p className="gift-received">You've received a gift!</p>

        <div className="amount-section">
          <p className="amount-value">${formattedAmount}</p>
          <p className="amount-currency">{currency}</p>
        </div>

        <div className="copy-rows">
          <MaskedRow
            label="Gift Card Number"
            value={cardNumber}
            revealed={revealed.number}
            copied={copied.number}
            onToggle={() => handleReveal("number")}
            onCopy={() => handleCopy(cardNumber, "number")}
          />
          <MaskedRow
            label="PIN"
            value={pin}
            revealed={revealed.pin}
            copied={copied.pin}
            onToggle={() => handleReveal("pin")}
            onCopy={() => handleCopy(pin, "pin")}
          />
        </div>
      </div>
    </div>
  );
}

function MaskedRow({ label, value, revealed, copied, onToggle, onCopy }) {
  const masked = "*".repeat(value.length);
  return (
    <div className="copy-row">
      <div className="copy-row-info" onClick={onToggle} style={{ cursor: "pointer" }}>
        <p className="copy-row-label">{label}:</p>
        <p className="copy-row-value">{revealed ? value : masked}</p>
      </div>
      <button
        type="button"
        onClick={onCopy}
        aria-label={`Copy ${label}`}
        className={`copy-btn${copied ? " copied" : ""}`}
      >
        {copied ? (
          <>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="1" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Copy
          </>
        )}
      </button>
    </div>
  );
}
