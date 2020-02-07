import React from 'react';
//import PropTypes from 'prop-types';
import Item from './Item';
import './ItemPage.css';
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import API from "../Utils/API";

class ItemPage extends React.Component {
    constructor(props){
        super(props) 
           this.state = {
            name:"",
            price: "",
            image:"",
            key:"",
            items: [],
            cart: []
        }
     
    }

// function ItemPage({ items, onAddToCart }) {
    componentDidMount() {
        this.loadSoaps();
      }
    
      loadSoaps = () => {
        API.getSoaps()
          .then(res => {
            this.setState({items: res.data})
            }
          )
          .catch(err => console.log(err));
      };

    

    render () {  
        return (
        <div className="ItemPage-items">
            <Navbar />
            <Header />
            <div className="row">
            {this.state.items.map(item => (
                <li className="ItemPage-item">
                    <Item 
                       id={item._id}
                       key={item.id}
                       name={item.name}
                       image={item.image}
                       price={item.price}
                       />
                    {/* item={item}> */}
                        {/* <button
                            className="Item-addToCart"
                            onClick={this.props.onAddToCart}>Add to Cart 
                        </button> */}
                    {/* </Item> */}
                </li>
             ) )}
        </div>
        </div>
    )}
};

// ItemPage.propTypes = {
//     items: PropTypes.array.isRequired,
//     onAddToCart:PropTypes.func.isRequired
// };

export default ItemPage;