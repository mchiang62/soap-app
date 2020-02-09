//import React, { Component } from "react"
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ItemPage from './Shopping/ItemPage';
import items  from './Shopping/static-data';
import './App.css';
import CartPage from './Shopping/CartPage';
import Admin from "./pages/Admin";


const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="App-Router fullWidth">
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={CartPage} />
            {/* <Route exact path="/cart" render={(props) => (<CartPage {...props} items={cart} onAddOne={addToCart} onRemoveOne={removeItem} />)} /> */}
             <Route exact path="/home" component={Home} />
             <Route path="/about_us" component={About} />
             <Route path="/contact_us" component={Contact} />
             <Route path="/products" component={ItemPage} />
             {/* <Route path="/products" render={(props) => (<ItemPage {...props} items={items} onAddToCart={addToCart} />)} /> */}
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