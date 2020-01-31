import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Wrapper from "../Components/Wrapper/Wrapper";
import API from "../Utils/API";
import {Input, FormBtn} from "../Components/AddSoapForm";
import AdminProductCard from "../Components/AdminProductCard/AdminProductCard";


class Admin extends Component {
    constructor(props){
        super(props);
        this.deleteSoap = this.deleteSoap.bind(this)
        
        this.state = {
            products : [],
            name: "",
            price: "",
            quantity: "",
            image: ""
        }
    }
    

    componentDidMount() {
        this.loadSoaps();
    }

    loadSoaps = () => {
        API.getSoaps()
        .then(res =>
            this.setState({products:res.data})
            )
            .catch(err => console.log(err));
    };

    deleteSoap = id => {
        console.log(id)
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
                <Wrapper>
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
                <div className="container">
                    <div className="row">
                        {this.state.products.map(product => (
                            <AdminProductCard
                                deleteSoap={this.deleteSoap}
                                id={product.id}
                                key={product.id}
                                name={product.name}
                                image={product.image}
                                price={product.price}
                                quantity={product.quantity}
                                />
                        ))}
                    </div>
                </div>

            
            </Wrapper>

            </div>




        )
    }
}

export default Admin;