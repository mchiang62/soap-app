import React, { Component } from "react";
import ProductCard from "../Components/ProductCard";
import Wrapper from "../Components/Wrapper"
import Header from "../components/Header";
import Navbar from "../Components/Navbar";
import { Col, Row, Container } from "../components/Grid";
//import "./style.css";

class Product extends Component{
    state = {
        product:[],
        description:"",
        price:"",
        quantity:""
    };


    render() {
        return (
            <Wrapper>
            <Title>Soap</Title>
            {this.state.product.map(product => (
              <FriendCard
                id={product.id}
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </Wrapper>
        );
      }
    
};


export default Product;