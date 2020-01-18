import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
                 Brownings Soap
             </Link>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarColor03">
                 <ul className="navbar-nav mr-auto">
                     <li className="nav-item">
                         <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/home" ? "nav-;ink active" : "nav-link"}>Home
                         </Link>
                     </li>
                     <li className="nav-item">
                         <Link
                             to="/about_us"
                             className={window.location.pathname === "/about_us" ? "nav-link active" : "nav-link"}>
                             About Us
                         </Link>
                     </li>
                     <li className="nav-item">
                         <Link
                             to="/products"
                             className={window.location.pathname === "/products" ? "nav-link active" : "nav-link"}>
                                 Products
                         </Link>
                     </li>
                     <li className="nav-item">
                         <Link
                             to="/contact_us"
                             className={window.location.pathname === "/contact_us" ? "nav-link active" : "nav-link"}>
                             Products
                         </Link>
                     </li>
                 </ul>
                <button className="btn btn-primary my-2 my-sm-0" type="submit">Login</button>  
            </div>
        </nav>
    );
}
  
export default Navbar;