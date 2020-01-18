import React, { Component } from "react";
import Header from "../components/Header";
import Navbar from "../Components/Navbar";
import Wrapper from "../Components/Wrapper";
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
          <Container fluid>
            <Row>
              <Col size="md-12">
            
                  <h1>
                    {this.state.book.title} by {this.state.book.author}
                  </h1>
          
              </Col>
            </Row>
          </Container>
        );
      }
    
};


export default Product;