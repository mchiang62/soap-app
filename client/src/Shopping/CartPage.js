import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Shopping/Item';
import './CartPage.css';
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";

const EmptyCart = () => (
<div>
        <Navbar />
        <Header />
    <div className="CartPage-empty">
        Your cart is empty.
      <br/>
        Why not add some products to it?
    </div>
</div>   
  );
  
function CartPage({ items, onAddOne, onRemoveOne }){
    return(
        items.length === 0 ? <EmptyCart/> :

        <div className="CartPage-items">
            <Navbar />
            <Header />
            <div className="row">
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
                        onClick={()=> onAddOne(item)}>Add Another
                    </button>
                </div>
            </Item>
            </li>
            )}
              <li className="CartPage-item CartPage-total">
                 Cart Total: ${items.reduce((sum, item) => sum + (item.price * item.count), 0)}
               </li>
            </div>
        </div>
    );
}

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;