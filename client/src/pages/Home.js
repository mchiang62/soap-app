import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import HomeCards from "../Components/HomeCards/HomeCards";
import Footer from "../Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Header><p>Welcome to Browning's Soap</p></Header>


        <p className="App-intro">
          Awesome Soap App
           </p>


        <div className="container">
          <div className="row">


            <div className="col-4">
              <HomeCards />
            </div>
            <div className="col-4">
              <HomeCards />
            </div>
            <div className="col-4">
              <HomeCards />
            </div>
  
           

          </div>
        </div>
        <Footer />
      </div>

      
        
        
      );
  }
}

export default App;


//   add jumbotron to header
// add three cards - homecard component - need to insert to this page / col-4