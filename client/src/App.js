import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// import Header from "./Components/Header/Header";
// import Wrapper from './Components/Wrapper/Wrapper';
// import Card from './Components/Card/Card';
// import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home"

class App extends Component {
  render() {
    return (
      <Router>
       <div className="App">
       <Home />

       </div>
    </Router>
    );
  }
}

export default App;


// add routes to this page