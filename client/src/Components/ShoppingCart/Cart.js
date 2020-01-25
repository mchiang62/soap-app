import React from "react";
import "./Cart.css";

function plus(e){
        e.preventDefault();
        var input = e.target.closest('div');
        var value = parseInt(input);

        if (value < 100) {
          value = value + 1;
        } else {
            value =100;
        }
        input.val(value);
    };  


function Cart (props) {
    console.log("props", props)
    return (
    <div>
        <div className="shopping-cart">
            {/* <div className="title">
                Shopping Cart
            </div> */}
        </div>
  
        <div className="item">
          <div className="buttons">
            <span className="delete-btn"></span>
          </div>
  
          <div className="description">
            <span>Name</span> {props.name}
          </div>
          <div className="quantity">
            <button className="plus-btn" type="button" name="button" onClick={plus}>
              <img src="plus.png" alt="" />
            </button>
            <input type="text" name="name" value={props.quantity}></input>
            <button className="minus-btn" type="button" name="button">
              <img src="minus.svg" alt="" />
            </button>
          </div>
  
          <div className="total-price"><span>Price: </span>{props.price}</div>
        </div>
      </div>
    );
  }
  
  export default Cart;