import React from 'react';

class Product extends React.Component {

    render() {
        return (
            <div className="product">
                <img src={this.props.imgSrc} alt={this.props.productName + "image"} />
                <div className="product-header">
                    <h3>{this.props.productName}</h3>
                    <p>£{this.props.productPrice} | {this.props.productSize} </p>
                </div>
                <p>{this.props.productDescription}</p>
                <div className="product-buttons">
                    <button>Add to basket</button>
                    <button>Favourite</button>
                </div>
            </div>
        )
    }
}

export default Product;