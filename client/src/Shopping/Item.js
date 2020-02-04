import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

const Item = ({ item, children }) => (
    <div className="Item card">
        <div className="img-container">
            <img alt={item.name} src={item.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {item.name}
            </li>
            <li>
              <strong>Price:</strong> {item.price}
            </li>
            {/* <li>
              <strong>In Stock:</strong> {item.quantity}
            </li> */}
          </ul>
          {children}
        </div>
        {/* <div className="Item-left">
            <div className="Item-image" />
            <div className="Item-title">
                {item.name}
            </div>
            <div className="Item-description">
                {item.description}
            </div>
            <div className="Item-right">
                <div className="Item-price">
                    ${item.price}
                </div>
                {children}
            </div>
        </div> */}
    </div>
);
Item.propTypes = {
    item: PropTypes.object.isRequired,
    children: PropTypes.node
};

export default Item;