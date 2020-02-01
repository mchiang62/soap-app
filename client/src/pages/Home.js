import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import HomeCards from "../Components/HomeCards/HomeCards";
import Footer from "../Components/Footer/Footer";
import Parallax from "../Components/Parallax/Parallax";
// import Modals from "../Components/Modals/Modals"

class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <Navbar />

        <Header>
          <br />
          <br />
          <h1>
            <strong>Browning's Soap</strong>
          </h1>
          <br />
          <h2>With natural beauty oils</h2>
          <br />
          <h3>
            <i>On sale for a limited time!</i>
          </h3>
          <br />
          <button>Order now!</button>
        </Header>

        <div className="homeontainer">
          <div className="row">
            <div className="col-6">
              <br />
              <br />
              <h1>Made with natural ingredients</h1>
            </div>
            <div className="col-4">
              <HomeCards>
                <img
                  src="https://live.staticflickr.com/65535/49439060548_2e9b890f50_b.jpg"
                  alt="placeholder"
                  height="300"
                  width="400"
                />
              </HomeCards>
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Parallax />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
//   add jumbotron to header
// add three cards - homecard component - need to insert to this page / col-4
