import React from "react";
import "./ProductCard.css";
import PurchaseBtn from "../PurchaseButton/PurchaseButton"

function Purchase(e){
  e.preventDefault();
  alert("This worked");
};


function ProductCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Price:</strong> {props.price}
            </li>
            <li>
              <strong>Quantity:</strong> {props.quantity}
            </li>
          </ul>
          <PurchaseBtn onClick={Purchase} />
        </div>
      </div>
    );
  }
  
  export default ProductCard;