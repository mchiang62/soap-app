import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Parallax from "../Components/Parallax/Parallax";
import CartItem from "../Shopping/CartItem";
import "./CartPage.css";

class CartPage extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      name: "",
      price: "",
      image: "",
      key: "",
      items: [],
      cart: []

    };
};

//   handleSubmit(e) {
//     e.preventDefault();
//   };

componentDidMount(){
    this.state.cart = JSON.parse(sessionStorage.getItem("cart"));
    console.log("fromstorage", this.state.cart);

    this.setState({
        cart: this.state.cart
    }, () => console.log(this.state.cart, "newcartstate"))
}
  
 
removeItem = item =>{
    this.setState({
        cart: this.state.cart.splice(this.state.cart.indexOf(item),1)
    })
    console.log(item, "item")
  }
 
  render() {
    return (
      // this.state.cart.length === 0 ? {EmptyCart} :
      
      <div className="CartPage-items">
        <Navbar />

        <Parallax
          pic="https://www.tovarnaorganika.si/files/507a47762fb29abf05826b44b72e79f3/products/ade898fb4bbd221e757cb5644faaa8ae/soaps-ingredients.jpg"
          height="450px"
        />

        <div className="CartHeader">
            <br></br>
          <h2> My Shopping Cart</h2>
          <h2 className="CartPage-total">
            Total Amount: ${4 * this.state.cart.length}.00
          </h2>
          <br></br>
          <div className="checkoutButton">
            <Link
              to="/cart"
              className={
                window.location.pathname === "/cart"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <button
                className="btn btn-dark my-2 my-sm-0"
                href="/cart"
                type="submit">
                Checkout
              </button>
            </Link>
            <Link
              to="/products"
              className={
                window.location.pathname === "/products"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <button
                className="btn btn-dark my-2 my-sm-0"
                href="/cart"
                type="submit">
                Continue Shopping
              </button>
            </Link>
          </div>
          <hr></hr>
        </div>

        <div className="container">
          <div className="ItemPage-items">
            <div className="row">
              {this.state.cart.map((item,index) => (
                <li key={index} className="ItemPage-item">
                  <CartItem
                    id={item._id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    item={item}
                    removeItem={this.removeItem}
                  />  
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default CartPage;
