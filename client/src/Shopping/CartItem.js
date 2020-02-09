//import React from 'react';
import React, { useState } from "react";
import './ItemPage.css';
import '../App.js';


// function CartItem(props) {
//   const [cart, setCart] = useState([]);

  // const removeItem = props => {
  //   let index = cart.findIndex(i => i.id === props.id);
  //   if (index >= 0) {
  //     // alert("Your Item has been deleted");
  //     setCart(cart => {
  //       const copy = [...cart];
  //       copy.splice(index, 1);
  //       return copy;
  //     });
  //     //summarizeCart(cart);
  //   }
  // };
  // console.log("cartprops", {props})


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
            <button
              className="Item-remove"
              onClick={() => removeItem(props.id)}>Remove Item
            </button>
          </ul>
        </div>
  </div>
  )
};

export default CartItem;
