import React, { Component } from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import LoginCard from "../Components/LoginCard/LoginCard";


class Login extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="Login">
                    <LoginCard />
                </div>
                <br />
                <br />
                <Footer />
            </div>
        );
    }
}

export default Login;