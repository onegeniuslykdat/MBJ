import { Navbar, Nav, Container } from 'react-bootstrap';
import { Cart3 } from 'react-bootstrap-icons'
import './header.css';
import { Link } from 'react-router-dom';
//import config from '../../config.json'

export const Header = () => {
  //const logoUrl = process.env.PUBLIC_URL + config.Company.LogoUrl;

  return (
    <Navbar className='navbar' expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/" className='navbar-brand-logo'>
          🍽️ Mary's Joint
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

