import React from "react";
import "./Header.css";

// function Header(props) {
//     return <h1 className="header">{props.children}</h1>;
//   }

//   export default Header;

function Header({ children }) {
  return (
    <div className="jumbotron" id="jumboHeader">
      <div className="container"></div>
      {children}
    </div>
  );
}

export default Header;

// style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
