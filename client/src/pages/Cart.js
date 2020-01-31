import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import Cart from "../Components/ShoppingCart/Cart";
import ItemPage from '../Shopping/ItemPage';
import CartPage from '../Shopping/CartPage';
import items from '../Shopping/static-data';

// const soapSeed = [
//     {
//         name: "Apple Crisp",
//         price: 4,
//         image: "https://i.imgur.com/2EVc3zE.jpg",
//         quantity: 10
//     },
//     {
//         name: "Cherry Almond",
//         price: 4,
//         image: "https://i.imgur.com/HO2gxm0.jpg",
//         quantity: 10
//     },
//     {
//         name: "Coffee",
//         price: 4,
//         image: "https://i.imgur.com/Gn0RCAh.jpg",
//         quantity: 10
//     },
//     {
//         name: "Honeysuckle",
//         price: 4,
//         image: "https://i.imgur.com/OaHRCTV.jpg",
//         quantity: 10
//     },
//     {
//         name: "Lavender Oatmeal",
//         price: 4,
//         image: "https://i.imgur.com/IepIAjk.jpg",
//         quantity: 10
//     },
//     {
//         name: "Sweet Orange",
//         price: 4,
//         image: "https://i.imgur.com/thHMqPg.jpg",
//         quantity: 10
//     },
//     {
//         name: "Peppermint Charcoal",
//         price: 4,
//         image: "https://i.imgur.com/33BCneS.jpg",
//         quantity: 10
//     },
  
//     {
//         name: "Pumpkin Spice",
//         price: 4,
//         image: "https://i.imgur.com/qwrYfKj.jpg",
//         quantity: 10
//     },
//     {
//         name: "Tea Tree",
//         price: 4,
//         image: "https://i.imgur.com/sJdacBy.jpg",
//         quantity: 10
//     },
//     {
//         name: "Unscented",
//         price: 4,
//         image: "https://i.imgur.com/ZgcaOXW.jpg",
//         quantity: 10
//     },
//     {
//         name: "Wildflower Honey",
//         price: 4,
//         image: "https://i.imgur.com/3EsCPTr.jpg",
//         quantity: 10
//     }

// ];
// const summarizeCart = cart => {
//     const groupedItems = cart.reduce((summary, item) =>{
//       summary[item.id]=summary[item.id] || {
//         ...item,
//         count:0
//       };
//       summary[item.id].count++;
      
//       return summary;
//     }, {});
  
//       return Object.values(groupedItems);
//   };
  
class ShopCart extends React.Component {
    
    // state = {
    //     products: soapSeed
    // };
    // const [cart, setCart] = useState([]);

    // const addToCart = item => {
    //     setCart(prevCart => [...prevCart, item])
    //     console.log(item.price);
    // };
 
    // const removeItem = item => {
    //     let index = cart.findIndex(i => i.id === item.id);
    //     if(index >=0){
    //     // alert("Your Item has been deleted");
    //     setCart(cart => {
    //         const copy = [...cart];
    //         copy.splice(index,1);
    //         return copy;
    //     })
    //     }
    // };

    render() {
        return (
            <div className="App">
                <Navbar />
                <Header />
                {/* {this.state.products.map(product => (
                <Cart
                      id={product.id}
                      key={product.id}
                      name={product.name}
                      image={product.image}
                      price={product.price}
                      quantity={product.quantity}
                />
                ))} /> */}
                 <Content  
                    onAddToCart={this.props.addToCart}
                    onRemoveItem={this.props.removeItem}
                    cart={this.props.summarizeCart(this.state.cart)}
                />
            </div>
        )
    }
}


const Content = ({ onAddToCart, onRemoveItem, cart }) => {
    
          return (
            <CartPage 
            items={cart} 
            onAddOne={onAddToCart}
            onRemoveOne={onRemoveItem}
          />);
  };
  
  
  
export default ShopCart;
