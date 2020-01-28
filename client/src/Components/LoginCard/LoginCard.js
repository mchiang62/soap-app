import React from "react";
import "./LoginCard.css";

function LoginCard() {
    return (
        <div class="row mt-5">
            <div class="col-md-12 m-auto">
                <div class="card login-card">
                    <div className="logo">
                        <img src="https://live.staticflickr.com/65535/49435877052_170647b629_o.png" class="login-card-img" alt="soap-logo"></img>
                    </div>
                    <h3 class="text-center mb-3">
                        Login
                    </h3>
                    <div className="card-body">
                        <form action="/users/login" method="POST">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    class="form-control"
                                    placeholder="Enter Email"
                                    value=""
                                />
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input
                                    type="text"
                                    id="password"
                                    name="password"
                                    class="form-control"
                                    placeholder="Enter Password"
                                    value=""
                                />
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Login</button>
                        </form>
                        <p class="lead mt-4">
                            No Account? <a href="/register">Register</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginCard;

// import React, { Component } from 'react'
// import { Redirect} from 'react-router-dom'
// import axios from 'axios'
// class Login extends Component {
//     constructor() {
//         super()
//         this.state = {
//             username: '',
//             password: '',
//             redirectTo: null
//         }
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }
//     handleSubmit(event) {
//         event.preventDefault()
//         console.log('handleSubmit')
//         axios
//             .post('/user/login', {
//                 username: this.state.username,
//                 password: this.state.password
//             })
//             .then(response => {
//                 console.log('login response: ')
//                 console.log(response)
//                 if (response.status === 200) {
//                     // update App.js state
//                     this.props.updateUser({
//                         loggedIn: true,
//                         username: response.data.username
//                     })
//                     // update the state to redirect to home
//                     this.setState({
//                         redirectTo: '/'
//                     })
//                 }
//             }).catch(error => {
//                 console.log('login error: ')
//                 console.log(error);
                
//             })
//     }
//     render() {
//         if (this.state.redirectTo) {
//             return <Redirect to={{ pathname: this.state.redirectTo }} />
//         } else {
//             return (
//                 <div>
//                     <h4>Login</h4>
//                     <form className="form-horizontal">
//                         <div className="form-group">
//                             <div className="col-1 col-ml-auto">
//                                 <label className="form-label" htmlFor="username">Username</label>
//                             </div>
//                             <div className="col-3 col-mr-auto">
//                                 <input className="form-input"
//                                     type="text"
//                                     id="username"
//                                     name="username"
//                                     placeholder="Username"
//                                     value={this.state.username}
//                                     onChange={this.handleChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-group">
//                             <div className="col-1 col-ml-auto">
//                                 <label className="form-label" htmlFor="password">Password: </label>
//                             </div>
//                             <div className="col-3 col-mr-auto">
//                                 <input className="form-input"
//                                     placeholder="password"
//                                     type="password"
//                                     name="password"
//                                     value={this.state.password}
//                                     onChange={this.handleChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-group ">
//                             <div className="col-7"></div>
//                             <button
//                                 className="btn btn-primary col-1 col-mr-auto"
                               
//                                 onClick={this.handleSubmit}
//                                 type="submit">Login</button>
//                         </div>
//                     </form>
//                 </div>
//             )
//         }
//     }
// }
// export default Login