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
import Modal from "../Components/Modals/Modals";

class ItemPage extends React.Component {
  state = { show: false };
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };

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
    this.setState({ cart: updatedCart });
    this.showModal();
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
          pic="https://media.freestocktextures.com/cache/7c/0b/7c0b7d248141ad087faae0420c8c5182.jpg"
          height="275px"
        >
          <br />
          <br />
          <br />
          <h1 className="ParallaxHead text-dark"><strong>Products</strong></h1>
        </Parallax>

        <div className="container">
          <div className="row">
            <Modal show={this.state.show} handleClose={this.hideModal}>
              <br />
              <h4><strong>Added to Cart</strong></h4>
              <br />
            </Modal>

            {this.state.items.map(item => (
              <li key={item._id} className="ItemPage-item">
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
          pic="https://media.freestocktextures.com/cache/7c/0b/7c0b7d248141ad087faae0420c8c5182.jpg"
          height="350px"
        ></Parallax>

        <Footer />
      </div>
    );
  }
}

export default ItemPage;
