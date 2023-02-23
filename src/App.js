import React from 'react';
import './style.scss';
import Product from './components/products/product.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlist: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="brand-logo">Modest</h1>
          <div className="header-menu">
            <i className="fa-solid fa-circle-user"></i>
            <div onClick={this.handleWishlist}><i className="fa-solid fa-heart"></i></div>
            <i className="fa-solid fa-basket-shopping"></i>
          </div>
        </header>
        <main>
          <div className="wishlist hidden" id="wishlist" style={{display: 'none'}}>
            <ul id="wishlist-list">
              
            </ul>
          </div>
          <div className="overlay" id="overlay" style={{display: 'none'}} onClick={this.handleWishlist}></div>
          <div className="product-layout">

            <Product 
              productId={0}
              handleFavourite={() => this.handleFavourite(0)}
            />
          
            <Product 
              productId={1}
              handleFavourite={() => this.handleFavourite(1)}
            />

            <Product 
              productId={2}
              handleFavourite={() => this.handleFavourite(2)}
            />

            <Product 
              productId={3}
              handleFavourite={() => this.handleFavourite(3)}
            />

            <Product 
              productId={4}
              handleFavourite={() => this.handleFavourite(4)}
            />

          </div>
        </main>
        <footer>
          <div className="copyright"><p> © Lily Paczesniak 2023 </p> <p>Photos by <a href="https://www.pexels.com/@ron-lach/" target="blank">Ron Lach</a></p></div>
        </footer>
      </div>
    );
  }

  addToWishlist(i) {
    const wishlist = this.state.wishlist;
    wishlist.push(<li><Product productId={i} thumbnail={true} key={i}/></li>)
  }

  removeFromWishlist(i) {
    const wishlist = this.state.wishlist;
    const index = wishlist.indexOf(<li><Product productId={i} thumbnail={true} key={i}/></li>)
    wishlist.splice(index, 1);
  }

  handleFavourite(id) {

    const product = document.getElementById("product" + id);
    const button = document.getElementsByClassName("favourite")[id];

    if (product.classList.contains("favourited")) {
      product.classList.remove("favourited");
      button.innerHTML = '<i class="fa-solid fa-heart"></i> Favourite';
      this.removeFromWishlist(id);
      return;
    }
          
    product.classList.add("favourited");
    button.innerHTML = '<i class="fa-solid fa-heart"></i> Remove';
    this.addToWishlist(id);

  }

  handleWishlist() {

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
}

export default App;
