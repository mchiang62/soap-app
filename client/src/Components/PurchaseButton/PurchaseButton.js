import React from "react";
import "./PurchaseButton.css";
import Modals from "../Modals/Modals"


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function PurchaseBtn(props) {
  return (
    <div>
    <button onClick=
    {e=> {
      this.toggleModal(e);
    }} className="purchase-btn" {...props} tabIndex="0">
      Purchase Item
    </button>
    </div>
  );
}

export default PurchaseBtn;