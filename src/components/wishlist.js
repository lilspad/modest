
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

export default Wishlist;