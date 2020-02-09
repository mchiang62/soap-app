import React, { Component } from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import RegisterCard from "../Components/RegisterCard/RegisterCard";


class Register extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="Register">
                    <RegisterCard />
                </div>
                <br />
                <br />
                <Footer />
            </div>
        );
    }
}

export default Register;