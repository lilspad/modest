import Product from "./products/product.js";

function ProductList(props) {
    const productArr = [];

    for (let i = 0; i <= props.productsAmount; i++) {
        productArr.push(<Product productId={i} productHandlers={props.productHandlers} key={i} />);
    }

    return productArr;
}

export default ProductList;