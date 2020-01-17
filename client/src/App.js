import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Wrapper from './Components/Wrapper/Wrapper';
import Card from './Components/Card/Card'

class App extends Component {
  render() {
    return (

      <div className="App">
        <Wrapper>
          <Header><p>Welcome to Browning's Soap</p></Header>
          
        <p className="App-intro">
          Awesome Soap App
        </p>

        <Card>
        </Card>

        </Wrapper>
      </div>
    );
  }
}

export default App;
