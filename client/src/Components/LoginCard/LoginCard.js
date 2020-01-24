import React from "react";
import "./LoginCard.css";

function LoginCard() {
    return (
        <div class="row mt-5">
            <div class="col-md-6 m-auto">
                <div class="card">
                    <div className="logo">
                        <img src="https://i.imgur.com/CYtEeyjt.jpg?1" class="card-img" alt="soap-logo"></img>
                    </div>
                    <h1 class="text-center mb-3">
                        Login
                    </h1>
                    <div className="card-body">
                        <form action="/users/login" method="POST">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    class="form-control"
                                    placeholder="Enter Email"
                                />
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    class="form-control"
                                    placeholder="Enter Password"
                                />
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Login</button>
                        </form>
                        <p class="lead mt-4">
                            No Account? <a href="/users/register">Register</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginCard;