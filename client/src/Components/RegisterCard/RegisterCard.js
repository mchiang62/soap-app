import React, { Component } from "react";
import "./RegisterCard.css";
import axios from "axios";

class RegisterCard extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
		console.log('sign-up handleSubmit,name: ')
		// console.log(this.state.name)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/users/', {
			name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
		})
        .then(response => {
				if (!response.data.errmsg) {
                    console.log('successful signup')
                    // console.log(response.data)
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}



    render() {
        return (
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
                            <form>
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input
                                        type="name"
                                        id="name"
                                        name="name"
                                        class="form-control"
                                        placeholder="Enter Name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
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
                                        value={this.state.email}
                                        onChange={this.handleChange}
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
                                        value={this.state.password}
                                        onChange={this.handleChange}
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
                                        value={this.state.password2}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <button type="submit" class="btn btn-primary btn-block" onClick={this.handleSubmit}>
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
}

export default RegisterCard;