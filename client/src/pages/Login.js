import React, { Component } from "react";
import LoginCard from "../Components/LoginCard/LoginCard";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";


class Login extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="Login">
                    <LoginCard />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Login;