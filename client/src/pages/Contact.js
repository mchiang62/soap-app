import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Wrapper from "../Components/Wrapper/Wrapper";
import API from "../Utils/API";
import {Input, TextArea, FormBtn} from "../Components/AddMessageForm";

class Contact extends Component {
    state = {
        name: "",
        email: "",
        noteText: ""
    }
    //If we want to load other messages on this page we can add them here
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.email && this.state.note) {
            API.saveNote({
                name: this.state.name,
                email: this.state.email,
                noteText: this.state.noteText
            })
            //potentially add a load messages after this if we want to load messages
        }
    };

    render() {
        return (
            <div className="App">
                <Navbar />
                <Header><p>Please leave us a message to tell us anything!</p></Header>
                <Wrapper>
                <form>
                    <Input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="Name"
                        />
                    <Input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Email Address"
                        />
                    <TextArea  
                        value={this.state.noteText}
                        onChange={this.handleInputChange}
                        name="noteText"
                        placeholder="Type your message here!"
                        />
                    <FormBtn
                        disabled={!(this.state.name && this.state.email && this.state.note)}
                        onClick={this.handleFormSubmit}>
                            Send your message!
                        </FormBtn>
                </form>
                </Wrapper>
            </div>
        )
    }
}





   
export default Contact;