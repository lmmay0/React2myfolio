import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Marvin Maynard Game Designer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://drive.google.com/file/d/1Jq0MbpNCgJwokg6hBmCnjBWAXtypYiuD/view?usp=sharing" >Resume</Nav.Link>
            
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://github.com/lmmay0">GitHub</NavDropdown.Item>
              
              <NavDropdown.Item href="https://www.marvinmaynard.com/contact">Contact Me</NavDropdown.Item>
              <NavDropdown.Divider />
                          </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;