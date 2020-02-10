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
                <div className="card-header">The Browning's</div>
                <div className="card-body">
                  <h4 className="card-title">How we got started..</h4>
                  <p className="card-text">
                    Zombie ipsum reversus ab viral inferno, nam rick grimes
                    malum cerebro. De carne lumbering animata corpora quaeritis.
                    Summus brains sit​​, morbo vel maleficia? De apocalypsi
                    gorger omero undead survivor dictum mauris. Hi mindless
                    mortuis soulless creaturas, imo evil stalking monstra
                    adventus resi dentevil vultus comedat cerebella viventium.
                    Qui animated corpse, cricket bat max brucks terribilem
                    incessu zomby. The voodoo sacerdos flesh eater, suscitat
                    mortuos comedere carnem virus. Zonbi tattered for solum
                    oculi eorum defunctis go lum cerebro. Nescio brains an
                    Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth
                    eliv ingdead.
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
