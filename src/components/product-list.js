import Product from "./products/product.js";

function ProductList(props) {
    const productArr = [];

    for (let i = 0; i < props.productsAmount; i++) {
        productArr.push(<Product productId={i} handleFavourite={() => props.handleFavourite(i)} />);
    }

    return productArr;

}

export default ProductList;