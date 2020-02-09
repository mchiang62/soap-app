import React from 'react';
import './CartPage.css';
//import PropTypes from 'prop-types';
import ItemPage from '../Shopping/ItemPage';
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import './CartPage.css';
import API from "../Utils/API";

class CartPage extends React.Component{
    constructor(props){
        super(props) 
          this.state = {
           name:"",
           price: "",
           image:"",
           key:"",
           items: [],
           cart: []
        }
}

  componentDidMount() {
    const cart = localStorage.getItem(cart);
    this.setState({ cart });
  }

// loadSoaps = ()  => {
//     API.getSoaps()
//       .then(res => {
//         this.setState({
//             items: res.data
//             //  }, () => console.log('all products:', this.state.items))
//              })
//         }, 
//       )
//       .catch(err => console.log(err));
//   };

    EmptyCart = () => (
    <div>
            <Navbar />
            <Header />
        <div className="CartPage-empty">
            <br></br>
            Your Shopping Cart is empty. That's sad. 
            <br></br>
            Your Cart lives to serve. Give it purpose — fill it with soap, soap, and more soap!
        </div>
    </div>   
  );

    render(){
         console.log('cart ms', this.props);
    return(
        //items.length === 0 ? <EmptyCart/> :
        <div className="CartPage-items">
                    <Navbar />
                    <Header />
        <div className="CartHeader">
            <h2> Your Shopping Cart</h2>  
                <h2 className="CartPage-total">
                 {/* Total Amount: ${(4 * items.length)}.00 */}
                </h2> 
                <br></br>
            <div className="checkoutButton">
                <Link to="/cart" className={window.location.pathname === "/cart"}>
                    <button className="btn btn-primary my-2 my-sm-0" href="/cart" type="submit">Checkout</button>
                </Link>
                <Link to="/products" className={window.location.pathname === "/products"}>
                    <button className="btn btn-primary my-2 my-sm-0" href="/cart" type="submit">Continue Shopping</button>
                </Link>
            </div>
            <hr></hr>
        </div>
    </div>

    )
    };
};
export default CartPage;