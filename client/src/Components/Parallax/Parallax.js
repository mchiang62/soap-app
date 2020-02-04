// import React from "react";
// import "./Parallax.css";

// function Parallax (props) {
//     return <h1 className="parallax">{props.children}</h1>;
//   }
  
//   export default Parallax;


import React from 'react';
import { Parallax as ReactParallax } from 'react-parallax';


const Parallax = (props) => (
    <ReactParallax
      bgImage={props.pic}
      bgImageAlt="the cat"
      strength={200}
    >
    {props.children}
      <div style={{ height:props.height }} />
      </ReactParallax>
    );

export default Parallax;
