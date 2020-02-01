import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './ItemPage.css';
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";


function ItemPage({ items, onAddToCart }) {
    return(
        <div className="ItemPage-items container">
            <Navbar />
            <Header />
            <div className="row">
            {items.map(item =>
                <li key={item.id} className="ItemPage-item">
                <Item item={item}>
                    <button
                        className="Item-addToCart"
                        onClick={() => onAddToCart(item)}>Add to Cart 
                </button>
                </Item>
                </li>
            )}
        </div>
        </div>
    );
};
ItemPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddToCart:PropTypes.func.isRequired
};

export default ItemPage;