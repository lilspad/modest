import Checkout from "./checkout.js";

function Basket(props) {
    const amount = props.basketStats.amount;
    const items = props.basketStats.items;
    const total = props.basketStats.total;

    console.log('basket', items)
    
    return (
        <div className="basket hidden" id="basket">
            <h2>{amount === 0 ? "Your basket is empty." : "Items in the basket (" + amount + ")"}</h2>
            <ul id="basket-list">
                {items}
            </ul>
            <p style={amount === 0 ? {display: "none"} : {}}>Total: £{total} 
            <br></br> <span className="shipping">Shipping calculated at checkout</span></p> 
            <div className="basket-buttons" style={amount === 0 ? {display: "none"} : {}}>
                <Checkout items={items} />
                <button className="clear" onClick={props.handleClear}> Clear basket </button>
            </div>
        </div>
    )
}

export default Basket;