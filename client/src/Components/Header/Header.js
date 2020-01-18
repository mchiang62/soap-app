import React from "react";
import "./Header.css";


// function Header(props) {
//     return <h1 className="header">{props.children}</h1>;
//   }
  
//   export default Header;
  


function Header({ children }) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
    <h1 className="display-4">Browning's Soap</h1>
    <p className="lead">Need to edit jumbotron width and height</p>
  </div>
      {children}
    </div>
  );
}

export default Header;





// style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}