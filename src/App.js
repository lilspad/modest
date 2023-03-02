import React from 'react';
import { useState, useEffect } from 'react';
import './style.scss';
import Wishlist from './components/wishlist.js';
import Basket from './components/basket.js';
import ProductList from './components/product-list.js';
import Product from './components/products/product.js';

function Message() {
  const [message, setMessage] = useState("");
  // check to see if this is a redirect back from Checkout
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Payment successful - thanks!");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order was cancelled."
      );
    }
  }, []);

  return message ? (
    <section className='post-payment'>
      <p>{message}</p><button className="remove" onClick={() => setMessage(null)}> x </button>
    </section>
  ) : ('');
}
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
              {/* show basket amount if not empty */}
              <p>{this.state.basket.amount === 0 ? "" : "(" + this.state.basket.amount + ")"}</p>
            </div>

          </div>

        </header>
        <main id="main">
          <Message />
          <Wishlist favourites={this.state.favourites} />
          <Basket basketStats={this.state.basket} handleClear={() => this.handleClear()} />

          <div className="overlay hidden" id="overlay" onClick={this.handleOverlay}></div>

          <div className="banner" >
            <div className="banner-space"></div>
            <div className="banner-content">
              <h1>No need to be modest!</h1>
              <p>We know you're gorgoues. You just need a little more self-love. Or a little detox. Or just a little pick-me-up.
              Whatever it is, our products deliver it without irritating, breaking or whatsoever changing your already perfect skin. </p>
            </div>
          </div>
          
          <h2 className="products-title">Browse our products: </h2>
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

//hide and show pop-up sections depending on which is already on
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

// hide all pop-up sections
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
    let quantity = 1;

    //quantity input
    const handleChange = (e) => {
      //only handle change if user un-focuses from field
      e.target.addEventListener("focusout", () => {
        if (!e.target.value) {
          e.target.value = quantity;
        } 
        var difference = Math.floor(e.target.value - quantity);
        quantity = e.target.value;
        //update basket state
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
      <div className="product-inbasket" key={"item" + id} id={"item" + id}>
        <Product productId={id} thumbnail={true} handleClick={this.handleOverlay} /> {/* Product click event removes all pop-ups to focus back on product display */}
        <input id={"input" + id} type="number" name="quantity" value={quantity} onChange={handleChange}></input>
        <button className="remove" onClick={(e) => this.handleRemoveFromBasket(e)} id={"rmv-button" + id}> <i className="fa-regular fa-trash-can"></i> </button>
      </div>
    ) 

    const basketItems = this.state.basket.items;

/* To do: there has got to be a better way to do this!!! (???) */
    const isAlready = () => {
      let bool = false;
      basketItems.forEach(element => {
        if (element.key === item.key) {
          bool = true;
        } 
      })
      return bool;
    }
    
    // don't add a new product if it already exists; increase quantity instead
    if (isAlready()) {
      document.getElementById("input" + id).value ++;
    } else {
      basketItems.push(item);
    }

    // update basket
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

  handleRemoveFromBasket(event) {
    const id = Math.floor(event.target.id.replace("rmv-button", ""));
    const price = Math.floor(document.getElementById("price" + id).innerText.match(/\d+/)[0]);
    const value = Math.floor(document.getElementById("input" + id).value);
    const basketItems = this.state.basket.items;

    // find the item in basket array and remove it
    for (let i = 0; i < basketItems.length; i++) {
      if (basketItems[i].props.id === "item" + id) {
        basketItems.splice(i, 1);
      }
    }

    // update basket
    this.setState(
      prevState => ({
        basket: {
          amount: prevState.basket.amount - value,
          items: basketItems,
          total: prevState.basket.total - price*value
        }
      })
    )  
  }

  //reset basket stats
  handleClear() {
    //double check with user
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
