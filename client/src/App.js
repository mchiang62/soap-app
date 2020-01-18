import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Login from './pages/Login';
import Contact from "./pages/Contact"
import Navbar from "./Components/Navbar/navbar";

function App() {
  return(
    <Router>
        <div>
       <Navbar />
       <Route exact path="/" component={Home} />
       <Route exact path="/about" component={About} />
       <Route exact path="/products" component={Products} />
       <Route exact path="/login" component={Login} />
       <Route exact path="/contact" component={Contact} />
       </div>
     </Router>
  );
}
  


export default App;


// add routes to this page