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

        <Parallax
          pic="https://www.sorellahealthandbeauty.com/wp-content/uploads/2017/07/Testimonial-Section-Faded.png"
          height="200px"
        >
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
        </Parallax>

        <div className="homecontainer">
          <HomeCards
            header="Made with natural ingredients"
            soapURL="https://live.staticflickr.com/65535/49439060548_2e9b890f50_b.jpg"
          />

          <Parallax
            pic="https://www.tokkoro.com/picsup/3034494-almost-spring_blown-out_faded_flower.jpg"
            height="400px"
          />

          <div className="row">
            <div className="col-6">
              <br />
              <br />
              <img
                src="https://live.staticflickr.com/65535/49439060548_2e9b890f50_b.jpg"
                alt="barsoaps"
                height="300"
                width="400"
              />
            </div>
            <div className="col-4">
              <br />
              <br />
              <h1>description</h1>
              <br />
            </div>
          </div>

          <Parallax
            pic="https://www.tokkoro.com/picsup/3034494-almost-spring_blown-out_faded_flower.jpg"
            height="400px"
          />

          <HomeCards
            header="made with these oils"
            soapURL="https://live.staticflickr.com/65535/49439532561_201cf71c12_b.jpg"
          />

          <Parallax
            pic="https://www.tokkoro.com/picsup/3034494-almost-spring_blown-out_faded_flower.jpg"
            height="400px"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
