import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Header } from './Components/Layout/Header'
import { Home } from './Pages/Home'
import { Shop } from './Pages/Shop'
import { About } from './Pages/About'
import { Cart } from './Pages/Cart'
import { Checkout } from './Pages/Checkout'
import { ProductDetails } from './Pages/ProductDetails'
import { Footer } from './Components/Layout/Footer'
import { Terms } from './Pages/Terms'
import { Privacy } from './Pages/Privacy'
import { CartContextProvider } from './Context/CartContext'

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <div className='container-fluid'>
          <BrowserRouter>
          <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="about" element={<About />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="shop/products/:id" element={<ProductDetails />} />
              <Route path="terms" element={<Terms />} />
              <Route path="privacy" element={<Privacy />} />
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
