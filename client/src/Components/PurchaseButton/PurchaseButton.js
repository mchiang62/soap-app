import React from "react";
import "./PurchaseButton.css";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function PurchaseBtn(props) {
  return (
    <span className="purchase-btn" {...props} role="button" tabIndex="0">
      Purchase Item
    </span>
  );
}

export default PurchaseBtn;