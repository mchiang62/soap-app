import React, { Component } from "react";
import RegisterCard from "../Components/RegisterCard/RegisterCard";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";


class Register extends Component {
    constructor() {
        state = {
            name: "",
            email: "",
            password: "",
            password2: "",
        };
    }

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    handleRegisterForm = event => {
        event.preventDefault();
        if (this.state.name && this.state.email && this.state.password && this.state.password2) {
            API.saveUser({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                password2: this.state.password2
            })
            .then();
            .catch(err => console.log(err));
        }
    };

    

    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="Register">
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <div className="card register-card shadow-lg">
                                <div className="logo">
                                    <img src="https://live.staticflickr.com/65535/49435877052_170647b629_o.png" className="register-card-img" alt="soap-logo"></img>
                                </div>
                                <h3 class="text-center mb-3">
                                    Register
                        </h3>
                                <div className="card-body">
                                    <form action="/users/register" method="POST">
                                        <div className="form-group">
                                            <label for="name">Name</label>
                                            <input
                                                type="name"
                                                id="name"
                                                name="name"
                                                class="form-control"
                                                placeholder="Enter Name"
                                                onChange={}
                                                value={this.state.name}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label for="email">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                class="form-control"
                                                placeholder="Enter Email"
                                                onChange={}
                                                value={this.state.email}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label for="password">Password</label>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                class="form-control"
                                                placeholder="Create Password"
                                                onChange={}
                                                value={this.state.password}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label for="password2">Confirm Password</label>
                                            <input
                                                type="password"
                                                id="password2"
                                                name="password2"
                                                class="form-control"
                                                placeholder="Confirm Password"
                                                onChange={}
                                                value={this.state.password2}
                                            />
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-block">
                                            Register
                            </button>
                                    </form>
                                    <p className="lead mt-4">Have An Account? <a href="/login">Login</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Register;