import React from "react";
import { Route } from "react-router-dom";
import CartPage from "../Shopping/CartPage";
//import PropTypes from 'prop-types';
import Item from "./Item";
import "./ItemPage.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Parallax from "../Components/Parallax/Parallax";
import API from "../Utils/API";

class ItemPage extends React.Component {
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
  }

  addToCart = cartItem => {
    const updatedCart = this.state.cart;
    updatedCart.push(cartItem);
    sessionStorage.setItem("cart", JSON.stringify(this.state.cart));
    this.setState({ cart: updatedCart }, () =>
      console.log("cart:", this.state.cart)
    );
  };

  // function ItemPage({ items, onAddToCart }) {
  componentDidMount() {
    this.loadSoaps();
  }

  loadSoaps = () => {
    API.getSoaps()
      .then(res => {
        this.setState({
          items: res.data
          //  }, () => console.log('all products:', this.state.items))
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="ItemPage-items">
        <Navbar />
        <Parallax
          pic="https://www.sorellahealthandbeauty.com/wp-content/uploads/2017/07/Testimonial-Section-Faded.png"
          height="275px"
        >
          <br />
          <br />
          <br />
          <h1>Products</h1>
        </Parallax>

        <div className="container">
          <div className="row">
            {this.state.items.map(item => (
              <li key={item.id} className="ItemPage-item">
                <Item
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  item={item}
                  addToCart={this.addToCart}
                />
              </li>
            ))}
          </div>
        </div>


        <Parallax
          pic="https://www.sorellahealthandbeauty.com/wp-content/uploads/2017/07/Testimonial-Section-Faded.png"
          height="300px"
        >
        </Parallax>


        <Footer />
      </div>
    );
  }
}

export default ItemPage;
