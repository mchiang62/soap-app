import React, { useState } from "react";
//import ProductCard from "../Components/ProductCard/ProductCard";
import Item from '../Shopping/Item';
import Wrapper from "../Components/Wrapper/Wrapper";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import API from "../Utils/API";
import items from '../Shopping/static-data';
import ItemPage from '../Shopping/ItemPage';


function Products() {
    // state = {
    //     products: [],
    //     cart: [],
    //     setCart: []
    // };

    // componentDidMount() {
    //     this.loadSoaps();
    //   }
    
      // loadSoaps = () => {
      //   API.getSoaps()
      //     .then(res => {
      //       this.setState({products: res.data})
      //       console.log("data" , res.data) }
      //     )
      //     .catch(err => console.log(err));
      // };

      const [cart, setCart] = useState([]);

      const addToCart = item => {
        setCart(prevCart => [...prevCart, item])
        console.log(item.price);
    };


    
        return (
        <div className ="ProductsClass">
            <Navbar />
            <Header />
            <Wrapper>
        <div className="container">
            <div className="row">
            {/* {this.state.products.map(product => (
              <Item
                id={product.id}
                key={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                quantity={product.quantity}
              />
            ))} */}
            <RenderItem onAddToCart={addToCart} />
            </div>
        </div>
          </Wrapper>
        </div>
        );
      };

      const RenderItem = ({ onAddToCart}) => {
              return (
              <ItemPage 
                  items={items} 
                  onAddToCart={onAddToCart}  
                />
              );
            
      };

export default Products;