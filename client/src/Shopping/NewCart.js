import React from 'react';
//import PropTypes from 'prop-types';
import Item from '../Shopping/Item';
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import './CartPage.css';

const EmptyCart = () => (
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
  

function CartPage({ items, onAddOne, onRemoveOne }){
return(
    
    items.length === 0 ? <EmptyCart/> :

<div className="CartPage-items">
            <Navbar />
            <Header />
<div className="CartHeader">
    <h2> Your Shopping Cart</h2>  
        <h2 className="CartPage-total">
         {/* Cart Total: ${items.reduce((sum, item) => sum + (item.price * item.count), 0)} */}
            Total Amount: ${(4 * items.length)}.00
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

<div className="CartPage row">
            {items.map(item =>
        <li key={item.id} className="CartPage-item">
            <Item item={item}>
                <div className="CartItem-controls">
                    <button
                        className="CartItem-removeOne"
                        onClick={() => onRemoveOne(item)}>Remove Item
                    </button>
                        {/* <span className="CartItem-count">{item.count}</span> */}
                    <button
                        className="CartItem-addOne"
                        onClick={()=> onAddOne(item)}>Add Item 
                    </button>
                </div>
            </Item>
        </li>
            )}
    </div>
</div>
    );
   
}

// CartPage.propTypes = {
//     items: PropTypes.array.isRequired,
//     onAddOne: PropTypes.func.isRequired,
//     onRemoveOne: PropTypes.func.isRequired
// };

export default CartPage;