

function Basket(props) {
    return (
        <div className="basket hidden" id="basket">
            <h2>{props.basketStats.amount === 0 ? "Your basket is empty." : "Items in the basket (" + props.basketStats.amount + ")"}</h2>
            <ul id="basket-list">
                {props.basketStats.items}
            </ul>
        </div>
    )
}

export default Basket;