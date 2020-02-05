import React from "react";

function PayPal() {
  return (
    <div className="paypal">
        paypal.Buttons().render('#paypal-button-container');
    </div>
  );
}

export default PayPal;