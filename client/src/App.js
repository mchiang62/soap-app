import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
// import Products from "./pages/Products"

class App extends Component {
  render() {
    return (
      <Router>
       <div className="App">

       <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/contact_us" component={Contact} />
          {/* <Route component={NoMatch} /> */}
        </Switch>

       </div>
     </Router>
  );
}
  


export default App;


// add routes to this page