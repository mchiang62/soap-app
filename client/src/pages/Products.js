import React, { Component } from "react";
import ProductCard from "../Components/ProductCard/ProductCard";
import Wrapper from "../Components/Wrapper/Wrapper";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import API from "../Utils/API";
// import { Col, Row, Container } from "../components/Grid";
//import "./style.css";

class Products extends Component{
    state = {
        products: []
    };

    componentDidMount() {
        this.loadSoaps();
      }
    
      loadSoaps = () => {
        API.getSoaps()
          .then(res => {
            this.setState({products: res.data})
            console.log("data" , res.data) }
          )
          .catch(err => console.log(err));
      };




    render() {  
        return (
        <div className ="ProductsClass">
            <Navbar />
            <Header />
            <Wrapper>
        <div className="container">
            <div className="row">
            {this.state.products.map(product => (
              <ProductCard
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
        );
      }
};
export default Products;