//import React, { Component } from "react"
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Products from "./pages/Products";
import Home from "./pages/Home";
import About from "./pages/About";
//import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import Nav from './Shopping/Nav';
import ItemPage from './Shopping/ItemPage';
import items  from './Shopping/static-data';
import './App.css';
import CartPage from './Shopping/CartPage';
//import { checkPropTypes } from 'prop-types';
import Admin from "./pages/Admin";

const summarizeCart = cart => {
  const groupedItems = cart.reduce((summary, item) =>{
    summary[item.id]=summary[item.id] || {
      ...item,
      // count:0
    };
    summary[item.id].count++;
    
    return summary;
  }, {});

    return Object.values(groupedItems);
};


const App = () => {
  //const [activeTab, setActiveTab]= useState('items');
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart(prevCart => [...prevCart, item])
    console.log("item-id", item.id)
    console.log("item-price", item.price);
    summarizeCart(cart)
  };
 
  const removeItem = item => {
    let index = cart.findIndex(i => i.id === item.id);
    if(index >=0){
      // alert("Your Item has been deleted");
      setCart(cart => {
        const copy = [...cart];
        copy.splice(index,1);
        return copy;
      })
      summarizeCart(cart)
    }
  };
  return (
    <div className="App">
         <Router>
         <div className="App-Router">
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" render={(props) => (<CartPage {...props} items={cart} onAddOne={addToCart} onRemoveOne={removeItem} />)} />
             <Route exact path="/home" component={Home} />
             <Route path="/about_us" component={About} />
             <Route path="/contact_us" component={Contact} />
             <Route path="/products" render={(props) => (<ItemPage {...props} items={items} onAddToCart={addToCart} />)} />
             <Route path="/register" component={Register} />
             <Route path="/login" component={Login} />
             {/* <Route component={NoMatch} /> */}
           </Switch>
         </div>
       </Router>
    </div>
  );
  
};

export default App;
