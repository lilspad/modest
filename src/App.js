import './style.scss';
import Product from './components/product.js';
import {cleanser, serum, tonic, oil, moisturiser} from './media/product-media.js';

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
        <div className="banner">
        
        </div>
        <div className="product-layout">

          <Product 
            productId={0}
            productName="Cleanser" 
            productPrice={6} 
            productSize="300ml" 
            productDescription="Gentle, foaming cleanser designed for all skin types." 
            productSrc={cleanser}
          />
        
          <Product 
            productId={1}
            productName="Tonic" 
            productPrice={5} 
            productSize="500ml" 
            productDescription="Refreshing tonic for a clean feel skin." 
            productSrc={tonic}
          />

          <Product 
            productId={2}
            productName="Serum" 
            productPrice={12} 
            productSize="50ml" 
            productDescription="Packed with vitamins and actives, superbly performing serum for all your needs." 
            productSrc={serum}
          />

          <Product 
            productId={3}
            productName="Oil" 
            productPrice={9} 
            productSize="50ml" 
            productDescription="Lightweight and non-sticky moisturisiing oil." 
            productSrc={oil}
          />

          <Product 
            productId={4}
            productName="Moisturiser" 
            productPrice={8} 
            productSize="90ml" 
            productDescription="Quick-absorbing, all-purpose moisturiser sutiable for all skin types." 
            productSrc={moisturiser}
          />

        </div>
      </main>
      <footer>
        <div className="copyright"><p> © Lily Paczesniak 2023 </p></div>
      </footer>
    </div>
  );
}

export default App;
