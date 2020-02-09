import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from  "@fortawesome/free-solid-svg-icons"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src="https://live.staticflickr.com/65535/49435877052_170647b629_o.png" alt="banner" className="brand-logo"></img>
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

                <ul className="list-inline">
                    <li className="list-inline-item" id="welcome-text">Welcome, </li>
                    <li className="list-inline-item">
                        <Link
                            to="/register"
                            className={window.location.pathname === "register"}>
                            Register
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link
                            to="/login"
                            className={window.location.pathname === "/login"}>
                            Login
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/cart" className={window.location.pathname === "/cart"}>
                            <FontAwesomeIcon className="add-classnames-like-this" icon={faShoppingCart} fixedWidth />
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;
