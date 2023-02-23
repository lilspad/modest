import './style.scss';
import Product from './components/product.js';
import {cleanserInfo, serumInfo, tonicInfo, oilInfo, moisturiserInfo} from './product-info.js';

const handleFavourite = (id) => {

  const product = document.getElementById(id);
  const wishlist = document.getElementById("wishlist-list");

  if (product.classList.contains("favourited")) {
    product.classList.remove("favourited");
    return;
  }
        
  product.classList.add("favourited");
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="brand-logo">Modest</h1>
        <div className="header-menu">
          <i className="fa-solid fa-circle-user"></i>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-basket-shopping"></i>
        </div>
      </header>
      <main>
        <div className="wishlist">
          <ul id="wishlist-list">

          </ul>
        </div>
        <div className="banner">
        
        </div>
        <div className="product-layout">

          <Product 
            productId={0}
            productInfo={cleanserInfo}
            handleFavourite={() => handleFavourite("product0")}
          />
        
          <Product 
            productId={1}
            productInfo={tonicInfo} 
            handleFavourite={() => handleFavourite("product1")}
          />

          <Product 
            productId={2}
            productInfo={serumInfo}
            handleFavourite={() => handleFavourite("product2")}
          />

          <Product 
            productId={3}
            productInfo={oilInfo}
            handleFavourite={() => handleFavourite("product3")}
          />

          <Product 
            productId={4}
            productInfo={moisturiserInfo}
            handleFavourite={() => handleFavourite("product4")}
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
