

function Basket(props) {
    return (
        <div className="basket hidden" id="basket">
            <h2>{props.basketStats.amount === 0 ? "Your basket is empty." : "Items in the basket (" + props.basketStats.amount + ")"}</h2>
            <ul id="basket-list">
                {props.basketStats.items}
            </ul>
            <p>Total: £{props.basketStats.total}</p> 
            <div className="basket-buttons">
                <button className="checkout"> Checkout </button>
                <button className="clear"> Clear basket </button>
            </div>
        </div>
    )
}

export default Basket;