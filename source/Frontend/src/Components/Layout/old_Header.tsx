import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Cart } from 'react-bootstrap-icons'
import Logo from '../../Assets/logo.png'
import { Image } from 'react-bootstrap';

export const old_Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <Image src={Logo} height={30} alt='Bole and fish logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            {/* <Nav.Link href="/about">About</Nav.Link> */}
          </Nav>
          <Nav className="">
            <Nav.Link href="/cart">
              <Cart/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}