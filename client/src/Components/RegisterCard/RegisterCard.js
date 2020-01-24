import React from "react";
import "./RegisterCard.css";

function RegisterCard() {
    return (
        <div className="row mt-5">
            <div className="col-md-12">
                <div className="card">
                    <div className="logo">
                        <img src="https://i.imgur.com/CYtEeyjt.jpg?1" class="card-img" alt="soap-logo"></img>
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
                                    value=""
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
                                    value=""
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
                                    value=""
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
                                    value=""
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
    )
}

export default RegisterCard;