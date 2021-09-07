import React from 'react'
import { Nav, Container, Navbar, NavDropdown} from "react-bootstrap";


const Header = () => {
  return (
    <header>
        <Navbar bg="success" expand="lg" >
        <Container>
            <Navbar.Brand href="#home">FarmBest</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='mx-auto'>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <NavDropdown title="Crop investment" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Maize</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Cassava</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Soya</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Potatoes</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Combination</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Collaboration" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#farmer">farmer</NavDropdown.Item>
                  <NavDropdown.Item href="#investor">investor</NavDropdown.Item>
                  <NavDropdown.Item href="#offtaker">offtaker</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#Help">Help?</Nav.Link>
                <Nav.Link href="#Login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>     
    </header>
  )
}

export default Header
