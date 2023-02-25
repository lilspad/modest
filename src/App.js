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
      productsAmount: 6,
      favourites: [],
      basket: {
        amount: 0,
        items: [],
        total: 0
      }
    }
  }

/* To do: pre-load media? it's awful slow sometimes */
  render() {

    const productHandlers = [(e) => this.handleFavourite(e), (e) => this.handleAddToBasket(e)];

    return (

      <div className="App">
        <header className="App-header">

          <h1 className="brand-logo">Modest</h1>

          <div className="header-menu" id="header-menu">

            <div>
              <i className="fa-solid fa-circle-user"></i>
            </div>

            <div onClick={(e) => this.handleMenuEvent(e)}>
              <i className="fa-solid fa-heart" id="wishlist-icon"></i>
            </div>

            <div onClick={(e) => this.handleMenuEvent(e)}>
              <i className="fa-solid fa-basket-shopping" id="basket-icon" ></i>
              <p>{this.state.basket.amount === 0 ? "" : "(" + this.state.basket.amount + ")"}</p>
            </div>

          </div>

        </header>
        <main id="main">

          <Wishlist favourites={this.state.favourites} />
          <Basket basketStats={this.state.basket} handleClear={() => this.handleClear()} />

          <div className="overlay hidden" id="overlay" onClick={this.handleOverlay}></div>

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

  handleMenuEvent(event) {
    
    const menu = document.getElementById("header-menu");
    const element = document.getElementById(event.target.id.replace("-icon", ""));
    const overlay = document.getElementById("overlay");
    
    if (menu.classList.contains("menuOn")) { 
      switch (element.id) {
        case "wishlist":
          document.getElementById("basket").classList.add("hidden");
          break;
        case "basket":
          document.getElementById("wishlist").classList.add("hidden");
          break;
        default:
          break;
      }
    }
    
    if (element.classList.contains("hidden")) {
      menu.classList.add("menuOn");
      element.classList.remove("hidden");
      overlay.classList.remove("hidden");
    } else {
      menu.classList.remove("menuOn");
      element.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  }

  handleOverlay() {
    const arr = []

    arr.push(document.getElementById("wishlist"))
    arr.push(document.getElementById("basket"))   
    arr.push(document.getElementById("overlay"))

    arr.forEach((item) => item.classList.add("hidden"));
  }

  addToWishlist(i) {
    const wishlist = this.state.favourites;
    const product = document.getElementById("product" + i);
    const button = document.getElementById("fav-button" + i);
    
    wishlist.push(
      <li key={i} id={"item" + i}>
        <Product productId={i} thumbnail={true} button={<button className="remove" onClick={() => this.removeFromWishlist(i)}> x </button>} handleClick={this.handleOverlay} />
        <button className="product-button addToBasket" id={"atbsk-button" + i} onClick={(e) => this.handleAddToBasket(e)}> <i className="fa-solid fa-basket-shopping"></i></button>
      </li>)

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
    const product = document.getElementById("product" + id);

    if (product.classList.contains("favourited")) {
      this.removeFromWishlist(id);
      return;
    }
        
    this.addToWishlist(id);
  }

  handleAddToBasket(event) {
    const id = Math.floor(event.target.id.replace("atbsk-button", ""));
    const price = Math.floor(document.getElementById("price" + id).innerText.match(/\d+/)[0]);
    let quantity;

    const handleChange = (e) => {
      e.target.addEventListener("focusout", () => {
        if (!e.target.value) {
          e.target.value = quantity;
        } 
        var difference = Math.floor(e.target.value - quantity);
        quantity = e.target.value;
        this.setState(
          prevState => ({
            basket: {
              amount: prevState.basket.amount + difference,
              items: prevState.basket.items,
              total: prevState.basket.total + (price * difference)
            }
          })
        )
      })
    }
    
    const item = (
      <div className="product-inbasket" key={"item" + id} >
        <Product productId={id} thumbnail={true} handleClick={this.handleOverlay} />
        <input id={"input" + id} type="number" name="quantity" value={quantity} onChange={handleChange}></input>
        <button className="remove"> <i className="fa-regular fa-trash-can"></i> </button>
      </div>
    )

    const basket = this.state.basket;
    const basketItems = basket.items;

/* To do: there has got to be a better way to do this!!! */
    const isAlready = () => {
      let bool = false;
      basketItems.forEach(element => {
        if (element.key === item.key) {
          bool = true;
        } 
      })
      return bool;
    }
    
    if (isAlready()) {
      document.getElementById("input" + id).value ++;
    } else {
      quantity = 1;
      basketItems.push(item);
    }

    this.setState(
      prevState => ({
        basket: {
          amount: prevState.basket.amount + 1,
          items: basketItems,
          total: prevState.basket.total + price
        }
      })
    )
  }

  handleClear() {
    if (!window.confirm("Are you sure?")) {
      return;
    }
    this.setState({
      basket: {
        amount: 0,
        items: [],
        total: 0
      }
    })
  }

}

export default App;
