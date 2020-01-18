import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Brownings Soap
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor03">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/home"
                                    ? "nav-;ink active"
                                    : "nav-link"
                            }>
                            Home
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link
                            to="/about_us"
                            className={window.location.pathname === "/about_us" ? "nav-link active" : "nav-link"}>
                            About Us
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link
                            to="/products"
                            className={window.location.pathname === "/products" ? "nav-link active" : "nav-link"}>
                            Products
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link
                            to="/contact_us"
                            className={window.location.pathname === "/contact_us" ? "nav-link active" : "nav-link"}>
                            Products
                        </Link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search">
                        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;