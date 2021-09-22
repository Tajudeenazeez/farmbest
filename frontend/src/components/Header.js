import React from 'react'
import { Nav, Container, Navbar, NavDropdown, Image} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
        <Navbar bg="success" expand="lg">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <Image style={{width:'60px', height:'60px'}} src='images/farmbestlogo.png' alt='FarmBests'/>
            </Navbar.Brand>
          </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='mx-auto'>
                <LinkContainer to='/'>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to= '/about'>
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Crop investment" id="basic-nav-dropdown">
                  <LinkContainer to='/maize'>
                    <NavDropdown.Item >Maize</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/cassava'>
                    <NavDropdown.Item >Cassava</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/potatoe'>
                    <NavDropdown.Item >Potatoe</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/soya'>
                    <NavDropdown.Item >Soya</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                <NavDropdown title="Collaboration" id="basic-nav-dropdown">
                <LinkContainer to='/farmer'>
                    <NavDropdown.Item >Farmer</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/investor'>
                    <NavDropdown.Item >Investor</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/offtaker'>
                    <NavDropdown.Item >Offtaker</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                <LinkContainer to='/contact'>
                  <Nav.Link>Help?</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>     
    </header>
  )
}

export default Header
