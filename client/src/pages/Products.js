import React, { Component } from "react";


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
            // <Wrapper>
            {/* <Title>Soap</Title> */}
            // {this.state.product.map(product => (
            //   <div
            //     id={product.id}
            //     key={product.id}
            //     name={product.name}
            //     description={product.description}
            //     price={product.price}
            //     quantity={product.quantity}
            //  > </div> 
            // ))}
          // </Wrapper>
        );
      }
    
};


export default Product;