import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import "./ItemPage.css";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import API from "../Utils/API";

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
      items: [],
      cart: []
    };
  }
  // function ItemPage({ items, onAddToCart }) {
  componentDidMount() {
    this.loadSoaps();
  }
  loadSoaps = () => {
    API.getSoaps()
      .then(res => {
        this.setState({ items: res.data });
        console.log("data", res.data);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <main>
        <div className="ItemPage-items">
          <Navbar />
          <Header />
          <div className="row">
            <Modal show={this.state.show} handleClose={this.hideModal}>
              <p>Modal</p>
              <p>Data</p>
            </Modal>

            {this.state.items.map(item => (
              <li key={item.id} className="ItemPage-item">
                <Item item={item}>
                  <button
                    className="Item-addToCart"
                    onClick={this.props.onAddToCart}
                  >
                    Add to Cart
                  </button>

                  {/* this.showModal needs fire at the same when the item is added to cart - the button below is just to show that it works*/}
                  <button type="button" onClick={this.showModal}>
                    Open Modal
                  </button>
                </Item>
              </li>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

ItemPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired
};
export default ItemPage;
