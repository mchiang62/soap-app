import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import API from "../../../routes/api/API";
import {Input, FormBtn} from "../Components/AddSoapForm";


class Admin extends Component {

    state = {
        Soaps : [],
        name: "",
        price: "",
        quantity: "",
        image: ""
    }

    componentDidMount() {
        this.loadSoaps();
    }

    loadSoaps = () => {
        API.getSoaps()
        .then(res =>
            this.setState({ Soaps: res.data, name: "", price: "", quantity: "", image: ""})
            )
            .catch(err => console.log(err));
    };

    deleteSoap = id => {
        API.deleteSoap(id)
            .then(res => this.loadSoaps())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.price && this.state.quantity && this.state.image) {
            API.saveSoap({
                name: this.state.name,
                price: this.state.price,
                quantity: this.state.quantity,
                image: this.state.image
            })
                .then(res => this.loadSoaps())
                .catch(err => console.log(err));
        }
    };


    render() {
        return (
            <div className="App">
                <Navbar />

                <Header><p>Welcome, Admin. Add new soaps to the database below.</p></Header>

                <form>
                    <Input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="New Soap Name"
                    />
                    <Input
                        value={this.state.price}
                        onChange={this.handleInputChange}
                        name="price"
                        placeholder="New Soap Price"
                    />
                    <Input
                        value={this.state.quantity}
                        onChange={this.handleInputChange}
                        name="quantity"
                        placeholder="New Soap Quantity"
                    />
                    <Input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="image"
                        placeholder="New Soap Image Link"
                    />
                    <FormBtn
                        disabled={!(this.state.name && this.state.price && this.state.quantity && this.state.image)}
                        onClick={this.handleFormSubmit}
                    >
                        Add New Soap
                    </FormBtn>
                </form>
            
            
            <Footer/>
            </div>




        )
    }
}

export default Admin;