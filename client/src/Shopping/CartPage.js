import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Shopping/Item';
import './CartPage.css';
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";

function CartPage({ items, onAddOne, onRemoveOne, count }){
    return(
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
                        onClick={() => onRemoveOne(item)}>-</button>
                    <span className="CartItem-count">{item.count}</span>
                    <button
                        className="CartItem-addOne"
                        onClick={()=> onAddOne(item)}>+</button>
                </div>
                </Item>
                </li>
            )}
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