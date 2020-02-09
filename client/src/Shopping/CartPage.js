import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Parallax from "../Components/Parallax/Parallax";
import CartItem from "../Shopping/CartItem";
import "./CartPage.css";

class CartPage extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: []
    };
  }

  // EmptyCart(){
  //     <div>
  //             <Navbar />
  //             <Header />
  //         <div className="CartPage-empty">
  //             <br></br>
  //             Your Shopping Cart is empty. That's sad.
  //             <br></br>
  //             Your Cart lives to serve. Give it purpose — fill it with soap, soap, and more soap!
  //         </div>
  //     </div>
  // };

  render() {
    this.state.cart = JSON.parse(sessionStorage.getItem("cart"));
    //console.log("localstor",cart);
    console.log("displayCart", this.state.cart);

    return (
      // this.state.cart.length === 0 ? {EmptyCart} :
      <div className="CartPage-items">
        <Navbar />

        <Parallax
          pic="https://www.sorellahealthandbeauty.com/wp-content/uploads/2017/07/Testimonial-Section-Faded.png"
          height="275px"
        >
          <br />
          <br />
          <br />
          <h1>Your Cart</h1>
        </Parallax>

        <div className="CartHeader">
          <h2> Your Shopping Cart</h2>
          <h2 className="CartPage-total">
            Total Amount: ${4 * this.state.cart.length}.00
          </h2>
          <br></br>
          <div className="checkoutButton">
            <Link to="/cart" className={window.location.pathname === "/cart"}>
              <button
                className="btn btn-primary my-2 my-sm-0"
                href="/cart"
                type="submit"
              >
                Checkout
              </button>
            </Link>
            <Link
              to="/products"
              className={window.location.pathname === "/products"}
            >
              <button
                className="btn btn-primary my-2 my-sm-0"
                href="/cart"
                type="submit"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
          <hr></hr>
        </div>

        <div className="ItemPage-items">
          <div className="row">
            {this.state.cart.map(item => (
              <li key={item.id} className="ItemPage-item">
                <CartItem
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  item={item}
                />
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CartPage;
