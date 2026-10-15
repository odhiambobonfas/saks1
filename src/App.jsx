import React from "react";
import GiftCardReveal from "./GiftCardReveal";

export default function App() {
  return (
    <div className="page">
      <GiftCardReveal
        brand="Saks Fifth Avenue"
        amount={100.0}
        currency="USD"
        cardNumber="6366400057525021"
        pin="1730"
        asOf={new Date()}
        balanceUrl="#"
        message="Thank you for your loyalty!"
      />
    </div>
  );
}
