import React from 'react';
import './CartPage.css';


const CartPage = (props) => {
    console.log('cart ms', props.stuff)
    return(
        <div>hi!!! {props.stuff}</div>
    )
}
export default CartPage;