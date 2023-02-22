import './style.scss';
import Product from './components/product.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="brand-logo">Modest</h1>
        <div>
          <i className="fa-solid fa-circle-user"></i>
          <i className="fa-solid fa-basket-shopping"></i>
        </div>
      </header>
      <main>
        <div className="banner">
        
        </div>
        <div className="product-layout">
          <Product 
            productName="Tonic" 
            productPrice={5} 
            productSize="500ml" 
            productDescription="Refreshing tonic for a clean feel skin." 
            imgSrc="" />
        </div>
      </main>
    </div>
  );
}

export default App;
