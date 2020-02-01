import React from "react";
import "./Parallax.css";

function Parallax (props) {
    return <h1 className="parallax">{props.children}</h1>;
  }
  
  export default Parallax;