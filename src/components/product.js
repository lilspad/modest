import React from 'react';

import Carousel from './carousel.js';
import {cleanserInfo, serumInfo, tonicInfo, oilInfo, moisturiserInfo} from './product-info.js';

function Product(props) {

    const productId = "product" + props.productId;
    let info;

    switch (props.productId) {
        case 0:
            info = cleanserInfo;
            break;
        case 1:
            info = tonicInfo;
            break;
        case 2:
            info = serumInfo;
            break;
        case 3:
            info = oilInfo;
            break;
        case 4:
            info = moisturiserInfo;
            break;
        default:
            info = cleanserInfo;
    }

    const productName = info.name;
    const productPrice = info.price;
    const productSize = info.size;
    const productDesc = info.description;
    const productSrc = info.media;

        /*if (this.props.productThumbnail) {
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
            <Carousel productSrc={productSrc} productId={props.productId}/>
            <div className="product-header">
                <h3>{productName}</h3>
                <p>£{productPrice} | {productSize} </p>
            </div>
            <p className="description">{productDesc}</p>
            <div className="product-buttons">
                <button className="product-button basket" onClick={props.handleBasket}> <i className="fa-solid fa-basket-shopping"></i> Add to basket</button>
                <button className="product-button favourite" onClick={props.handleFavourite}> <i className="fa-solid fa-heart"></i> Favourite</button>
            </div>
        </div>
    )
}

export default Product;