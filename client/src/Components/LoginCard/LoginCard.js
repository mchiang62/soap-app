import React, { Component } from "react";
import "./LoginCard.css";

class LoginCard extends Component {
    constructor() {
        super()
            this.state = {
                email: "",
                password: "",
                redirectTo: null
            }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="col-md-12 m-auto">
                    <div className="card login-card" id="login-card">
                        <div className="logo">
                            <img src="https://live.staticflickr.com/65535/49435877052_170647b629_o.png" class="login-card-img" alt="soap-logo"></img>
                        </div>
                        <h3 className="text-center mb-3">
                            Login
                        </h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        class="form-control"
                                        placeholder="Enter Email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input
                                        type="text"
                                        id="password"
                                        name="password"
                                        class="form-control"
                                        placeholder="Enter Password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </form>
                            <p className="lead mt-4">
                                No Account? <a href="/register">Register</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginCard;