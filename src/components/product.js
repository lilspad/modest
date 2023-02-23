import React from 'react';
import Carousel from './carousel.js';
class Product extends React.Component {

    render() {
        return (
            <div className="product">
                <Carousel productSrc={this.props.productSrc}/>
                <div className="product-header">
                    <h3>{this.props.productName}</h3>
                    <p>£{this.props.productPrice} | {this.props.productSize} </p>
                </div>
                <p className="description">{this.props.productDescription}</p>
                <div className="product-buttons">
                    <button className="product-button"> <i className="fa-solid fa-basket-shopping"></i> Add to basket</button>
                    <button className="product-button"> <i class="fa-solid fa-heart"></i> Favourite</button>
                </div>
            </div>
        )
    }
}

export default Product;