import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Parallax from "../Components/Parallax/Parallax";
//import  "./about.css"

class About extends Component {
  render() {
    return (
      <div className="about">
        <Navbar />
        <Parallax
          pic="https://live.staticflickr.com/65535/49439532676_e1279b9603.jpg"
          height="400px"
        />

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card mb-3 w-75 about-info">
                {/* <div className="card-header">About Us</div> */}
                <div className="card-body">
                  <h4 className="card-title">How we got started....</h4>
                  <p className="card-text">
                    In 2016, we decided that we were not satisfied with the quality of beauty and household products that were available to our family. 
                    All of the artifical chemicals and fillers were very barsh and often caused rashes and breakouts on our skin. It also did not help that 
                    we live in a very small town in Northwest Georgia, so our accessibility to the nearest all-natural, organic healthfood store was limited. 
                    So, we decided to do it ourselves!
                  </p>
                  <p>
                    After extensive research on the best natural ingredients, we formulated our first bar of soap  in our kitchen. And, as they say, the rest is history! Our soaps are 
                    made with coconut oil, essential oils, and love. We are proud to be a small family run business, providing families like ours with products that you can feel good about. 
                    From our family to yours!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Parallax
          pic="https://live.staticflickr.com/65535/49439060693_6245ea1b04.jpg"
          height="400px"
        />
        <Footer />
      </div>
    );
  }
}

export default About;
