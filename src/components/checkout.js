export default function Checkout(props) {

    const productList = props.items;
    console.log(productList[0])

    return (
        <form action="/create-checkout-session" method="POST">
            <input type="hidden" name="products" value={productList}/>
            <button type="submit" className="checkout">
                Checkout
            </button>
        </form>
    );
}