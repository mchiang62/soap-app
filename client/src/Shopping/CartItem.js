import React from "react";
import './ItemPage.css';
import '../App.js';

function CartItem(props){
 //console.log({props}, "props")
  return(
    <div className="Item card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Price:</strong> {props.price}.00
            </li>
            {/* <button
              className="Item-remove"
              onClick={() => this.triggerDelete(props.id)}>Remove Item
            </button> */}
          </ul>
        </div>
  </div>
  )
};

export default CartItem;
