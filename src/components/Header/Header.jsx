import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
      <Navbar
      bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><h4>knowledge Cafe</h4></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Create Post">Create Post</Nav.Link>
            <Nav.Link href="#Log In">Log In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
  );
}

export default Header;
