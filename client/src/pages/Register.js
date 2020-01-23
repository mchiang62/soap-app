import React, { Component } from "react";
import RegisterCard from "../Components/RegisterCard/RegisterCard";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";


class Register extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <RegisterCard />
                <Footer />
            </div>
        );
    }
}

export default Register;