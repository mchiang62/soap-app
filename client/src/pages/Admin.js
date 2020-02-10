import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Parallax from "../Components/Parallax/Parallax";
import Footer from "../Components/Footer/Footer";
import API from "../Utils/API";
import { Input, FormBtn } from "../Components/AddSoapForm";
import AdminProductCard from "../Components/AdminProductCard/AdminProductCard";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.deleteSoap = this.deleteSoap.bind(this);

    this.state = {
      name: "",
      price: "",
      quantity: "",
      image: "",
      products: [],
      key: ""
    };
  }

  componentDidMount() {
    this.loadSoaps();
    console.log(this.state);
  }

  loadSoaps = () => {
    API.getSoaps()
      .then(res => {
        //console.log(res.data[0]._id)

        this.setState({
          products: res.data
          //  id: res.data._id,
          //  key: res.data.key
        });

        console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  deleteSoap = id => {
    console.log(id);
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
    if (
      this.state.name &&
      this.state.price &&
      this.state.quantity &&
      this.state.image
    ) {
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

        <Parallax
          pic="https://i.ytimg.com/vi/4FM9r-47ESo/maxresdefault.jpg"
          height="300px"
        >
          <br />
          <br />
          <br />
          <h1>Welcome, Admin. Add new soaps to the database below.</h1>
        </Parallax>

        <br />

        <div className="container">
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
                value={this.state.image}
                onChange={this.handleInputChange}
                name="image"
                placeholder="New Soap Image Link"
              />
              <FormBtn
                disabled={
                  !(
                    this.state.name &&
                    this.state.price &&
                    this.state.quantity &&
                    this.state.image
                  )
                }
                onClick={this.handleFormSubmit}
              >
                Add New Soap
              </FormBtn>
            </form>
            <br />
        </div>
        <Parallax
          pic="https://i.ytimg.com/vi/4FM9r-47ESo/maxresdefault.jpg"
          height="350px"
        >
        </Parallax>

        <br />

        <div className="container">
          <div className="row">
            {this.state.products.map(product => (
              <AdminProductCard
                deleteSoap={this.deleteSoap}
                id={product._id}
                key={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </div>
        </div>
        <Parallax
          pic="https://i.ytimg.com/vi/4FM9r-47ESo/maxresdefault.jpg"
          height="350px"
        >
        </Parallax>
        <Footer />
      </div>
    );
  }
}

export default Admin;
