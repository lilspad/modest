import React from 'react';
import Carousel from './carousel.js';
class Product extends React.Component {

    render() {
        const productId = "product" + this.props.productId;
        const info = this.props.productInfo;
        const productName = info.name;
        const productPrice = info.price;
        const productSize = info.size;
        const productDesc = info.description;
        const productSrc = info.media;

        /*if (!this.props.productDescription) {
            return (
                <div className="product in-list">
                    <div className="img-container"><img src={this.props.productSrc[0].src} alt={this.props.productSrc[0].alt} /></div>
                    <div className="product-header">
                        <button className="remove" onClick={this.props.handleRemove}> - </button>
                        <h3>{productName}</h3>
                        <p>£{productPrice} | {productSize} </p>
                    </div>
                </div>
            )
        }*/

        return (
            <div className="product" id={productId}>
                <Carousel productSrc={productSrc} productId={this.props.productId}/>
                <div className="product-header">
                    <h3>{productName}</h3>
                    <p>£{productPrice} | {productSize} </p>
                </div>
                <p className="description">{productDesc}</p>
                <div className="product-buttons">
                    <button className="product-button basket" onClick={this.props.handleBasket}> <i className="fa-solid fa-basket-shopping"></i> Add to basket</button>
                    <button className="product-button favourite" onClick={this.props.handleFavourite}> <i className="fa-solid fa-heart"></i> Favourite</button>
                </div>
            </div>
        )
    }
}

export default Product;