import React, { Component } from "react";
import ProductCard from "../Components/ProductCard/ProductCard";
import Wrapper from "../Components/Wrapper/Wrapper";
// import Header from "../components/Header";
// import Navbar from "../Components/Navbar";
// import { Col, Row, Container } from "../components/Grid";
//import "./style.css";

const soapSeed = [
    {
        name: "Apple Crisp",
        price: 4,
        image: "https://i.imgur.com/2EVc3zE.jpg",
        quantity: 10
    },
    {
        name: "Cherry Almond",
        price: 4,
        image: "https://i.imgur.com/HO2gxm0.jpg",
        quantity: 10
    },
    {
        name: "Coffee",
        price: 4,
        image: "https://i.imgur.com/Gn0RCAh.jpg",
        quantity: 10
    },
    {
        name: "Honeysuckle",
        price: 4,
        image: "https://i.imgur.com/OaHRCTV.jpg",
        quantity: 10
    },
    {
        name: "Lavender Oatmeal",
        price: 4,
        image: "https://i.imgur.com/IepIAjk.jpg",
        quantity: 10
    },
    {
        name: "Sweet Orange",
        price: 4,
        image: "https://i.imgur.com/thHMqPg.jpg",
        quantity: 10
    },
    {
        name: "Peppermint Charcoal",
        price: 4,
        image: "https://i.imgur.com/33BCneS.jpg",
        quantity: 10
    },
  
    {
        name: "Pumpkin Spice",
        price: 4,
        image: "https://i.imgur.com/qwrYfKj.jpg",
        quantity: 10
    },
    {
        name: "Tea Tree",
        price: 4,
        image: "https://i.imgur.com/sJdacBy.jpg",
        quantity: 10
    },
    {
        name: "Unscented",
        price: 4,
        image: "https://i.imgur.com/ZgcaOXW.jpg",
        quantity: 10
    },
    {
        name: "Wildflower Honey",
        price: 4,
        image: "https://i.imgur.com/3EsCPTr.jpg",
        quantity: 10
    }

];

class Products extends Component{
    state = {
        products: soapSeed
    };

    render() {  
        return (
            <Wrapper>
           
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
          </Wrapper>
     
        );
      }
    
};


export default Products;