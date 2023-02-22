import React from 'react';
import Carousel from './carousel.js';
import {tonic} from '../media/product-media.js';


class Product extends React.Component {

    render() {
        return (
            <div className="product">
                <Carousel productSrc={tonic} />
                <div className="product-header">
                    <h3>{this.props.productName}</h3>
                    <p>£{this.props.productPrice} | {this.props.productSize} </p>
                </div>
                <p className="description">{this.props.productDescription}</p>
                <div className="product-buttons">
                    <button className="product-button">Add to basket</button>
                    <button className="product-button">Favourite</button>
                </div>
            </div>
        )
    }
}

export default Product;