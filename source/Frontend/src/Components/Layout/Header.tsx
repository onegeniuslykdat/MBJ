import { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Cart3 } from 'react-bootstrap-icons'
import './header.css';
import { CartContext } from '../../Context/CartContext'
import { CartStatus } from '../../Models/CartStatus';
import { Link } from 'react-router-dom';
import { CartServices } from '../../Services/CartServices';
import Cart from '../../Models/Cart';
//import config from '../../config.json'

export const Header = () => {
  //const logoUrl = process.env.PUBLIC_URL + config.Company.LogoUrl;
  const cartContext = useContext(CartContext);

  // const test = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   cartContext?.setCart({
  //     id: 2,
  //     products: [],
  //     status: CartStatus.CART,
  //     customer: {
  //       id: 1,
  //       email: 'email',
  //       phone: 'phone',
  //       firstName: 'fname',
  //       lastName: 'lname',
  //       addressLine: 'address',
  //       suburb: 'suburb',
  //       postcode: '4115',
  //       state: 'QLD'
  //     }
  //   })
  //   console.log('new state: ', cartContext);
  // }

  //   const test2 = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   cartContext?.setCart(CartServices.EditCart(cartContext.cart as Cart, {
  //     id: 2,
  //     products: [],
  //     status: CartStatus.CART,
  //     customer: {
  //       id: 1,
  //       email: 'email',
  //       phone: 'phone',
  //       firstName: 'fname',
  //       lastName: 'lname',
  //       addressLine: 'address',
  //       suburb: 'suburb',
  //       postcode: '4115',
  //       state: 'QLD'
  //     }
  //   }))
  //   cartContext?.setCart({
  //     id: 2,
  //     products: [],
  //     status: CartStatus.CART,
  //     customer: {
  //       id: 1,
  //       email: 'email2',
  //       phone: 'phone2',
  //       firstName: 'fname2',
  //       lastName: 'lname2',
  //       addressLine: 'address2',
  //       suburb: 'suburb2',
  //       postcode: '41152',
  //       state: 'QLD2'
  //     }
  //   })
  //   console.log('new state: ', cartContext);
  // }

  return (
    <Navbar className='navbar' expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/" className='navbar-brand-logo'>
          🍽️ Mary's Joint
          {/* <img src={logoUrl} height={30} alt='Logo' /> */}
          {/* [{cartContext?.cart?.status}] - [{cartContext?.cart?.customer?.firstName}]
          <button onClick={test}>test</button>
          <button onClick={test2}>test2</button> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: '#4e342e' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to='/' className='nav-link' style={{ color: '#4e342e' }}>Home</Link>
            <Link to='/shop' className='nav-link' style={{ color: '#4e342e' }}>Shop</Link>
            <Link to='/about' className='nav-link' style={{ color: '#4e342e' }}>About</Link>
            <Link to='/cart' className='nav-link' style={{ color: '#4e342e' }}><Cart3 /></Link>   
            {/* <Nav.Link href="/" style={{ color: '#4e342e' }}>Home</Nav.Link>
            <Nav.Link href="/shop" style={{ color: '#4e342e' }}>Shop</Nav.Link>
            <Nav.Link href="/about" style={{ color: '#4e342e' }}>About Us</Nav.Link>
            <Nav.Link href="/cart" style={{ color: '#4e342e' }}><Cart3 /></Nav.Link>
            <Nav.Link href="/contact" style={{ color: '#4e342e' }}>Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

