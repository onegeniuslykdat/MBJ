import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Header } from './Components/Layout/Header';
import { Home } from './Pages/Home';
import { Shop } from './Pages/Shop';
import { About } from './Pages/About';
import { Cart } from './Pages/Cart';
import { Checkout } from './Pages/Checkout';
import { ProductDetails } from './Pages/ProductDetails';
import { Footer } from './Components/Layout/Footer';
import { Terms } from './Pages/Terms';
import { Privacy } from './Pages/Privacy';
import { CartContextProvider } from './Context/CartContext';
import './App.css';

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <div className='container-fluid'>
          <BrowserRouter>
          <Header />
            <Routes>
              <Route path='/MBJ' element={<Home />} />
              <Route index element={<Home />} />
              <Route path='/MBJ/shop' element={<Shop />} />
              <Route path='/MBJ/about' element={<About />} />
              <Route path='/MBJ/cart' element={<Cart />} />
              <Route path='/MBJ/checkout' element={<Checkout />} />
              <Route path='/MBJ/shop/products/:id' element={<ProductDetails />} />
              <Route path='/MBJ/terms' element={<Terms />} />
              <Route path='/MBJ/privacy' element={<Privacy />} />
            </Routes>
          </BrowserRouter>
          <hr />
          <Footer />
        </div>
      </div>
    </CartContextProvider>
  );
}

export default App;
