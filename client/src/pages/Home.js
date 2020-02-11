import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import HomeCards from "../Components/HomeCards/HomeCards";
import Footer from "../Components/Footer/Footer";
import Parallax from "../Components/Parallax/Parallax";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <Navbar />

        <Parallax
          pic="https://www.lifeinbalanceservices.com/wp-content/uploads/2015/12/bright-leaves-fade.jpg"
          height="125px"
        >
          <br />
          <br />
          <h1>
            <strong>Browning's Soap</strong>
          </h1>
          <br />
          <h2>Made with natural beauty oils</h2>
          <br />
          <h3>
            <i>On sale for a limited time!</i>
          </h3>
          <br />
          <i>Sign up to start shopping and to receive amazing deals!</i>
          <br />
          <Link
            to="/register"
            className={
              window.location.pathname === "/register"
                ? "nav-link active"
                : "nav-link"
            }
          >
            <button
              className="btn btn-dark my-2 my-sm-0"
              href="/register"
              type="submit"
            >
              Create Account
            </button>
          </Link>
        </Parallax>

        <div className="homecontainer">
          <HomeCards
            header="All natural soaps made with saponified coconut oil and olive oil, essential or fragrance oils, and natural colorants "
            soapURL="https://live.staticflickr.com/65535/49439060548_2e9b890f50_b.jpg"
          />
          <br />
          <Parallax
            pic="https://www.sorellahealthandbeauty.com/wp-content/uploads/2017/07/Testimonial-Section-Faded.png"
            height="400px"
          />

          <div className="row">
            <div className="col-6">
              <br />
              <br />
              <br />
              <img
                src="https://live.staticflickr.com/65535/49439060678_6f96ebb95b.jpg"
                alt="barsoaps"
                height="450"
                width="375"
              />
            </div>
            <div className="col-4">
              <br />
              <br />
              <br />
              <h2>100% handmade using natural ingredients that leaves your skin gentle and healthy</h2>
              <br />
              <img
                src="https://live.staticflickr.com/65535/49439757797_e4785320f0_b.jpg"
                alt="barsoaps"
                height="350"
                width="325"
              />
            </div>
          </div>

          <Parallax
            pic="https://www.tokkoro.com/picsup/3034494-almost-spring_blown-out_faded_flower.jpg"
            height="400px"
          />

          <HomeCards
            header="Artisan quality soap made with the finest ingredients, right in Atlanta's backyard.  A little bit of Southern Hospitality, from our home to yours"
            soapURL="https://live.staticflickr.com/65535/49439532561_201cf71c12_b.jpg"
          />

          <Parallax
            pic="https://www.sorellahealthandbeauty.com/wp-content/uploads/2017/07/Testimonial-Section-Faded.png"
            height="400px"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
