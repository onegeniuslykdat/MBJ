import { Navbar, Nav, Container } from 'react-bootstrap';
import { Cart3 } from 'react-bootstrap-icons'
import './header.css';
import { Link } from 'react-router-dom';
//import { useContext } from 'react';
//import { CartContext } from '../../Context/CartContext';
//import config from '../../config.json'

export const Header = () => {
  //const logoUrl = process.env.PUBLIC_URL + config.Company.LogoUrl;
  //const cartContext = useContext(CartContext);

  return (
    <Navbar className='navbar navbar-expand-lg' expand="lg" variant="dark">
      <Container>
        {/* <Navbar.Brand href="/MBJ" className='navbar-brand-logo'>
          🍽️ Mary's Joint
        </Navbar.Brand> */}
        <Link className='navbar-brand' to="/MBJ">🍽️ Mary's Joint</Link>
        {/* <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
          <span className='navbar-toggler-icon bg-light rounded'></span>
        </button> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: '#4e342e' }} />
        <Navbar.Collapse id="basic-navbar-nav" className=''>
          <Nav className="ms-auto">
            <Link to='/MBJ' className='nav-link'>Home</Link>
            <Link to='/MBJ/shop' className='nav-link'>Shop</Link>
            <Link to='/MBJ/about' className='nav-link'>About</Link>
            <Link to='/MBJ/cart' className='nav-link'>
              <Cart3 className='navCartIcon' />
              {/* {
                (cartContext !== undefined && (cartContext.cart?.products !== undefined && cartContext.cart?.products.length > 0)) && <span className='badge badge-info'>
                  {cartContext.cart?.products.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
              } */}
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/* <div className='collapse navbar-collapse' id='divNavbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'><Link className='nav-link' to='/MBJ'>Home</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/MBJ/shop'>Shop</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/MBJ/about'>About</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/MBJ/cart'>
              <Cart3 className='navCartIcon' />
            </Link></li>
          </ul>
        </div> */}
      </Container>
    </Navbar>
  );
};

// <nav class="navbar navbar-expand-lg">
//   <div class="container">
//     <a class="navbar-brand" href="#">PH Bole</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//       <span class="navbar-toggler-icon bg-light rounded"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav ms-auto">
//         <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
//         <li class="nav-item"><a class="nav-link" href="#">Menu</a></li>
//         <li class="nav-item"><a class="nav-link" href="#">Order</a></li>
//         <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
//       </ul>
//     </div>
//   </div>
// </nav>