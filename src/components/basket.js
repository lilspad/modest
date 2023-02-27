import Checkout from "./checkout.js";

function Basket(props) {
    
    return (
        <div className="basket hidden" id="basket">
            <h2>{props.basketStats.amount === 0 ? "Your basket is empty." : "Items in the basket (" + props.basketStats.amount + ")"}</h2>
            <ul id="basket-list">
                {props.basketStats.items}
            </ul>
            <p style={props.basketStats.amount === 0 ? {display: "none"} : {}}>Total: £{props.basketStats.total} 
            <br></br> <span className="shipping">Shipping calculated at checkout</span></p> 
            <div className="basket-buttons" style={props.basketStats.amount === 0 ? {display: "none"} : {}}>
                <Checkout />
                <button className="clear" onClick={props.handleClear}> Clear basket </button>
            </div>
        </div>
    )
}

export default Basket;