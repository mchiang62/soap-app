import React from "react";
import { Link, Route } from "react-router-dom";
import 

function Contact(props) {
    return (
        <div>
           <h1>Contact Page</h1>
           <p>
             
           </p>
        </div>
    )
}

    render() {
        return(
          <div className="App">
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
           <div className="form-group">
               <label htmlFor="name">Name</label>
               <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
           </div>
           <div className="form-group">
               <label htmlFor="exampleInputEmail1">Email address</label>
               <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
           </div>
           <div className="form-group">
               <label htmlFor="message">Message</label>
               <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
           </div>
           <button type="submit" className="btn btn-primary">Submit</button>
           </form>
           </div>
        );
     }
         
    export default App;