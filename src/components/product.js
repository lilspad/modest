import React from 'react';
import Carousel from './carousel.js';
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favourited: false
        };
    }

    render() {
        const productId = "product" + this.props.productId;
        return (
            <div className="product" id={productId}>
                <Carousel productSrc={this.props.productSrc} productId={this.props.productId}/>
                <div className="product-header">
                    <h3>{this.props.productName}</h3>
                    <p>£{this.props.productPrice} | {this.props.productSize} </p>
                </div>
                <p className="description">{this.props.productDescription}</p>
                <div className="product-buttons">
                    <button className="product-button"> <i className="fa-solid fa-basket-shopping"></i> Add to basket</button>
                    <button className="product-button favourite" onClick={() => this.handleFavourite(productId)}> <i className="fa-solid fa-heart"></i> Favourite</button>
                </div>
            </div>
        )
    }

    handleFavourite(id) {
        
        this.setState({
            favourited: true
        })
        document.getElementById(id).classList.add("favourited");
    }
}

export default Product;