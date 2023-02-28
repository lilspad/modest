export default function Checkout(props) {
    let stripePricesKeys = [];
    const items = props.items;
    const quantity = 1;

    for (let i = 0; i < items.length; i++) {
        var item = items[i].key;
        switch (item) {
            case 'item0':
                stripePricesKeys.push('price_1MgDd0GrxL0zd9YA1UeCn71e');
                break;
            case 'item1':
                stripePricesKeys.push('price_1MgEvGGrxL0zd9YAATKif1dZ');
                break;
            case 'item2':
                stripePricesKeys.push('price_1MgEvUGrxL0zd9YAmB63XjDw')
                break;
            case 'item3':
                stripePricesKeys.push('price_1MgEvlGrxL0zd9YAnVOLD80R')
                break;
            case 'item4':
                stripePricesKeys.push('price_1MgEvwGrxL0zd9YANPKkUMMG')
                break;
            case 'item5':
                stripePricesKeys.push('price_1MgEw9GrxL0zd9YAqVnFD0ja')
                break;
        }
    }

    const stripePrices = stripePricesKeys.map(price => {
        return {
            price: price,
            quantity: quantity
        }
    })

    console.log('checkout', stripePricesKeys, stripePrices);

    return (
        <section>
        <form method="POST" action="/" className="basket-buttons" >
                <input type="hidden" name="test" value={JSON.stringify(stripePrices)}/>
                <button type="submit" className="checkout">TEST</button>
        </form>
        <form action="/create-checkout-session" method="POST">
            <input type="hidden" name="prices" value={JSON.stringify(stripePrices)}/>
            <button type="submit" className="checkout">
                Checkout
            </button>
        </form>
        </section>
    );
}