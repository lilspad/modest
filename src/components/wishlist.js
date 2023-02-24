
function Wishlist(props) {
    return (
        <div className="wishlist hidden" id="wishlist" style={{display: 'none'}}>
            <h2>{props.favourites.length === 0 ? "You don't have any favourites :(" : "Your favourites:"}</h2>
            <ul id="wishlist-list">
              {props.favourites}
            </ul>
        </div>
    )
}

/* To do: scroll is dodgy, as it mostly interacts with the rest of the page, also cannot see info of the last product even if scrolled */

export default Wishlist;