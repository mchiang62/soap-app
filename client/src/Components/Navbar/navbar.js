import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src="https://i.imgur.com/CYtEeyjs.jpg?1" alt="banner"></img>
             </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>Home
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
                            Contact Us
                         </Link>
                    </li>
                </ul>

                <ul class="list-inline">
                    <li class="list-inline-item">Welcome,</li>
                    <li class="list-inline-item">
                        <Link 
                            to="/register" 
                            className={window.location.pathname === "register"}>
                            Register    
                        </Link>
                    </li>
                    <li class="list-inline-item">
                        <Link 
                            to="/login" 
                            className={window.location.pathname === "/login"}>
                            Login    
                        </Link>
                    </li>
                    <li class="list-inline-item">
                        <button className="btn btn-primary my-2 my-sm-0" href="/cart" type="submit">Shopping Cart</button>
                    </li>
                </ul>
                
            </div>
        </nav>
    );
}

export default Navbar;