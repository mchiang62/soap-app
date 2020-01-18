import React from "react";
import "./ProductCard.css";


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
          <button>Purchase this item</button>
        </div>
      </div>
    );
  }
  
  export default ProductCard;