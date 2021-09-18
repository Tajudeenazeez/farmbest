import React from 'react'
import { Nav, Container, Navbar, NavDropdown, Image} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
        <Navbar bg="success" expand="lg" >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <Image style={{width:'90px', height:'90px'}} src='images/farmbestlogo.png' alt='FarmBests'/>
            </Navbar.Brand>
          </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='mx-auto'>
                <LinkContainer to='/'>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
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
