import React from "react";
import logo from "../Images/logo.png";
import  "./about.css";

function About() {
  return (
    <a href="/" >
    <div class="page">
      <div class="bs">Browning's Soap</div>

      <div class="np"> Naturally Pure</div>
      <div class="nc"> Naturally Clean</div>

      <img src={logo} class="mx-auto d-block img"   /> 

    </div></a>
  );
}

export default About;