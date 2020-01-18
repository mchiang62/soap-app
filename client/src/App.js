import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// in
// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Wrapper from './Components/Wrapper/Wrapper';
import Card from './Components/Card/Card';
import Navbar from "./Components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
       <div className="App">
        <Navbar />
         {/* <Wrapper> */}
           <Header><p>Welcome to Browning's Soap</p></Header>
          
         <p className="App-intro">
           Awesome Soap App
         </p>

         <Card>
         </Card>

         {/* </Wrapper> */}
       </div>
      </Router>
      
      
    );
  }
}

export default App;