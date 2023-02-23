import './style.scss';
import Product from './components/product.js';

var wishlist = [];

const addToWishlist = (i) => {
    wishlist.push(<li><Product productId={i} thumbnail={true} key={i}/></li>)
}

const removeFromWishlist = (i) => {
    const index = wishlist.indexOf(<li><Product productId={i} thumbnail={true} key={i}/></li>)
    wishlist.splice(index, 1);
}

const handleFavourite = (id) => {

  const product = document.getElementById("product" + id);
  const button = document.getElementsByClassName("favourite")[id];

  if (product.classList.contains("favourited")) {
    product.classList.remove("favourited");
    button.innerHTML = '<i class="fa-solid fa-heart"></i> Favourite';
    removeFromWishlist(id);
    return;
  }
        
  product.classList.add("favourited");
  button.innerHTML = '<i class="fa-solid fa-heart"></i> Remove';
  addToWishlist(id);

}

const handleWishlist = () => {

  const wishlist = document.getElementById("wishlist");
  const overlay = document.getElementById("overlay");

  if (wishlist.classList.contains('hidden')) {
    wishlist.style.display = "block";
    wishlist.classList.remove("hidden");
    overlay.style.display = "block";
  } else {
    wishlist.style.display = "none";
    wishlist.classList.add("hidden");
    overlay.style.display = "none";
  }
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="brand-logo">Modest</h1>
        <div className="header-menu">
          <i className="fa-solid fa-circle-user"></i>
          <div onClick={handleWishlist}><i className="fa-solid fa-heart"></i></div>
          <i className="fa-solid fa-basket-shopping"></i>
        </div>
      </header>
      <main>
        <div className="wishlist hidden" id="wishlist" style={{display: 'none'}}>
          <ul id="wishlist-list">
            
          </ul>
        </div>
        <div className="overlay" id="overlay" style={{display: 'none'}} onClick={handleWishlist}></div>
        <div className="product-layout">

          <Product 
            productId={0}
            handleFavourite={() => handleFavourite(0)}
          />
        
          <Product 
            productId={1}
            handleFavourite={() => handleFavourite(1)}
          />

          <Product 
            productId={2}
            handleFavourite={() => handleFavourite(2)}
          />

          <Product 
            productId={3}
            handleFavourite={() => handleFavourite(3)}
          />

          <Product 
            productId={4}
            handleFavourite={() => handleFavourite(4)}
          />

        </div>
      </main>
      <footer>
        <div className="copyright"><p> © Lily Paczesniak 2023 </p> <p>Photos by <a href="https://www.pexels.com/@ron-lach/" target="blank">Ron Lach</a></p></div>
      </footer>
    </div>
  );
}

export default App;
