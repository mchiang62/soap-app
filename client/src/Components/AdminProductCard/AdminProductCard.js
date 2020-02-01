import React from "react";
import "./AdminProductCard.css";




function ProductCard(props) {
  console.log({props} )
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
            <li>
              <strong>Id: </strong> {props.id}
            </li>
        </div>
        <span onClick={() => props.deleteSoap(props.id)} className="remove">
        𝘅
      </span>
      </div>
    );
  }
  
  export default ProductCard;