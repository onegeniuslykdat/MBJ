import { Navbar, Nav, Container } from 'react-bootstrap';
import { Cart3 } from 'react-bootstrap-icons'
import './header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
//import config from '../../config.json'

export const Header = () => {
  //const logoUrl = process.env.PUBLIC_URL + config.Company.LogoUrl;
  const cartContext = useContext(CartContext);

  return (
    <Navbar className='navbar' expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/MBJ" className='navbar-brand-logo'>
          🍽️ Mary's Joint
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: '#4e342e' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to='/MBJ' className='nav-link' style={{ color: '#4e342e' }}>Home</Link>
            <Link to='/MBJ/shop' className='nav-link' style={{ color: '#4e342e' }}>Shop</Link>
            <Link to='/MBJ/about' className='nav-link' style={{ color: '#4e342e' }}>About</Link>
            <Link to='/MBJ/cart' className='nav-link' style={{ color: '#4e342e', borderRadius: '50%', backgroundColor: 'deepskyblue' }}>
              <Cart3 />
              {
                (cartContext !== undefined && (cartContext.cart?.products !== undefined && cartContext.cart?.products.length > 0)) && <span className='badge badge-info'>
                  {cartContext.cart?.products.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
              }
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

