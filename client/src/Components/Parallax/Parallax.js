import React from 'react';
import { Parallax as ReactParallax } from 'react-parallax';


const Parallax = (props) => (
    <ReactParallax
      bgImage={props.pic}
      bgImageAlt="scenery"
      strength={200}
    >
    {props.children}
      <div style={{ height:props.height }} />
      </ReactParallax>
    );

export default Parallax;


