import React from "react";
import "./Card.css";

function SoapCard(props) {
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
              <strong>Add to cart button goes here</strong>
          {/* <span onClick={() => props.remove(props.id)} className="add">
        add to cart
      </span> */}
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default SoapCard;
