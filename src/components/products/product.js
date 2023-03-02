import React from 'react';

import Carousel from './carousel.js';
import {defaultInfo, cleanserInfo, serumInfo, tonicInfo, oilInfo, creamInfo, maskInfo} from './product-info.js';

function Product(props) {

    let info;
    const id = props.productId;

    switch (id) {
        case 0:
            info = tonicInfo;
            break;
        case 1:
            info = serumInfo;
            break;
        case 2:
            info = cleanserInfo;
            break;
        case 3:
            info = creamInfo;
            break;
        case 4:
            info = maskInfo;
            break;
        case 5: 
            info = oilInfo;
            break;
        default:
            info = defaultInfo;
    }

    const productName = info.name;
    const productPrice = info.price;
    const productSize = info.size;
    const productDesc = info.description;
    const productSrc = info.media;

    const productId = "product" + id;

        if (props.thumbnail) {
            return (
                <div className="product">
                    <div className="img-container"><img src={productSrc[0].src} alt={productSrc[0].alt} /></div>
                    <div className="product-header">
                        <h4 onClick={props.handleClick} >{productName}</h4>
                        <p>£{productPrice}</p>
                    </div>
                    {props.button ? props.button : ""}
                </div>
            )
        }

    return (
        <div className="product" id={productId}>
            {info === defaultInfo ? "" : <Carousel productSrc={productSrc} productId={id} />}
            <div className="product-header">
                <h3>{productName}</h3>
                <p id={"price" + id} style={info === defaultInfo ? {display: 'none'} : {}} >£{productPrice} | {productSize} </p>
            </div>
            <p className="description">{productDesc}</p>
            <div className="product-buttons" style={info === defaultInfo ? {display: 'none'} : {}}>
                <button className="product-button addToBasket" id={"atbsk-button" + id} onClick={props.productHandlers[1]}> <i className="fa-solid fa-basket-shopping"></i> Add to basket</button>
                <button className="product-button favourite" id={"fav-button" + id} onClick={props.productHandlers[0]}> <i className="fa-solid fa-heart"></i> Favourite</button>
            </div>
        </div>
    );
}

export default Product;