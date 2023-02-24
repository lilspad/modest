

function Basket(props) {
    return (
        <div className="basket hidden" id="basket">
            <h2>{props.basketStats.amount === 0 ? "Your basket is empty." : ""}</h2>
            <table id="basket-table">

            </table>
        </div>
    )
}

export default Basket;