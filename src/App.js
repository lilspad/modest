import React from 'react';
import './style.scss';
import Wishlist from './components/wishlist.js';
import Basket from './components/basket.js';
import ProductList from './components/product-list.js';
import Product from './components/products/product.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsAmount: 5,
      favourites: [],
      basket: {
        amount: 0,
        items: [],
        total: 0
      }
    }
  }

  render() {

    const productHandlers = [(e) => this.handleFavourite(e)];

    return (
      <div className="App">
        <header className="App-header">

          <h1 className="brand-logo">Modest</h1>

          <div className="header-menu" id="header-menu">

            <i className="fa-solid fa-circle-user"></i>

            <div onClick={(e) => this.handleMenuEvent(e)}>
              <i className="fa-solid fa-heart" id="wishlist-icon"></i>
            </div>

            <div onClick={(e) => this.handleMenuEvent(e)}>
              <i className="fa-solid fa-basket-shopping" id="basket-icon" ></i>
            </div>

          </div>

        </header>
        <main id="main">

          <Wishlist favourites={this.state.favourites} />
          <Basket basketStats={this.state.basket} />

          <div className="overlay hidden" id="overlay" onClick={() => this.handleOverlay}></div>

          <div className="product-layout">

            <ProductList productsAmount={this.state.productsAmount} productHandlers={productHandlers} />

          </div>

        </main>
        <footer>

          <div className="copyright">
            <p> © Lily Paczesniak 2023 </p> <p>Photos by <a href="https://www.pexels.com/@ron-lach/" target="blank">Ron Lach</a></p>
          </div>

        </footer>
      </div>
    );
  }

  addToWishlist(i) {
    const wishlist = this.state.favourites;
    const product = document.getElementById("product" + i);
    const button = document.getElementById("fav-button" + i);
    
    wishlist.push(<li key={i} id={"item" + i}><Product productId={i} thumbnail={true} handleRemove={() => this.removeFromWishlist(i)}/></li>)

    this.setState({
      favourites: wishlist
    })

    product.classList.add("favourited");
    button.innerHTML = '<i class="fa-solid fa-heart"></i> Remove';
  }

  removeFromWishlist(i) {
    const wishlist = this.state.favourites;
    const product = document.getElementById("product" + i);
    const button = document.getElementById("fav-button" + i);

    for (let j = 0; j < wishlist.length; j++) {
      if (wishlist[j].props.id === "item" + i) {
        wishlist.splice(j, 1);
      }
    }

    this.setState({
      favourites: wishlist
    })

    product.classList.remove("favourited");
    button.innerHTML = '<i class="fa-solid fa-heart"></i> Favourite';
  }

  handleFavourite(event) {

    const id = Math.floor(event.target.id.replace("fav-button", ""));
    console.log(id)

    const product = document.getElementById("product" + id);

    if (product.classList.contains("favourited")) {
      this.removeFromWishlist(id);
      return;
    }
        
    this.addToWishlist(id);
  }

  handleMenuEvent(event) {
    
    const menu = document.getElementById("header-menu");
    const element = document.getElementById(event.target.id.replace("-icon", ""));
    const overlay = document.getElementById("overlay");
    
    if (menu.classList.contains('menuOn')) {
      switch (element.id) {
        case "wishlist":
          document.getElementById("basket").classList.add('hidden');
          break;
        case "basket":
          document.getElementById("wishlist").classList.add('hidden');
          break;
        default:
          break;
      }
    }
    
    if (element.classList.contains('hidden')) {
      menu.classList.add("menuOn");
      element.classList.remove("hidden");
      overlay.classList.remove("hidden");
    } else {
      menu.classList.remove("menuOn");
      element.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  }
  
}

export default App;
