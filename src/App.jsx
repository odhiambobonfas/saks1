import React from "react";
import GiftCardReveal from "./GiftCardReveal";

export default function App() {
  return (
    <div className="page">
      <GiftCardReveal
        cardNumber="6366400057525021"
        pin="1730"
        amount={25.0}
        currency="USD"
      />
    </div>
  );
}
