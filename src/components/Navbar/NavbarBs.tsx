import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarBs() {
  return (
    <Navbar expand="lg" className='sticky-top' style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(103,9,121,1) 35%, rgba(0,212,255,1) 100%)"}}>
      <Container>
        <Navbar.Brand href="#home" className='text-light'><strong>Teste</strong> Impar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBs;