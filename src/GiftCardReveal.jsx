import React, { useState } from "react";

export default function GiftCardReveal({
  cardNumber = "6366400057525021",
  pin = "1730",
  amount = 25.0,
  currency = "USD",
}) {
  const [copied, setCopied] = useState({ number: false, pin: false });

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
        <p className="header-brand">SAKS FIFTH AVENUE</p>
      </div>

      <div className="seam" />

      <div className="card-body">
        <p className="gift-received">You've received a gift!</p>

        <div className="amount-section">
          <p className="amount-value">${formattedAmount}</p>
          <p className="amount-currency">{currency}</p>
        </div>

        <div className="copy-rows">
          <div className="copy-row">
            <div className="copy-row-info">
              <p className="copy-row-label">Gift Card Number:</p>
              <p className="copy-row-value">{cardNumber}</p>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(cardNumber, "number")}
              aria-label="Copy Gift Card Number"
              className={`copy-btn${copied.number ? " copied" : ""}`}
            >
              {copied.number ? (
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

          <div className="copy-row">
            <div className="copy-row-info">
              <p className="copy-row-label">PIN:</p>
              <p className="copy-row-value">{pin}</p>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(pin, "pin")}
              aria-label="Copy PIN"
              className={`copy-btn${copied.pin ? " copied" : ""}`}
            >
              {copied.pin ? (
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
        </div>
      </div>
    </div>
  );
}
