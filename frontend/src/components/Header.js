import React  from 'react'
import { Nav, Navbar, NavDropdown} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  
  return (
    <header>
        <Navbar className="bg-success" expand="lg" >
          <LinkContainer to='/'>
            <Navbar.Brand>FarmBest</Navbar.Brand>
          </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='mx-auto'>
                <LinkContainer to='/'>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/about'>
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>

                <NavDropdown title="Crop investment" id="basic-nav-dropdown">

                  <LinkContainer to='/maize'>
                    <NavDropdown.Item>Maize</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='/cassava'>
                    <NavDropdown.Item>Cassava</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='/soya'>
                    <NavDropdown.Item>Soya</NavDropdown.Item>
                  </LinkContainer> 

                  <LinkContainer to='/potato'>
                    <NavDropdown.Item>Potato</NavDropdown.Item>
                  </LinkContainer>

                </NavDropdown>
                
                <NavDropdown title="Collaboration" id="basic-nav-dropdown">
                <LinkContainer to='/farmer'>
                    <NavDropdown.Item>active farmer</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/investor'>
                    <NavDropdown.Item>Investor</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/offtaker'>
                    <NavDropdown.Item>Offtaker</NavDropdown.Item>
                  </LinkContainer> 
                </NavDropdown>
                <LinkContainer to='/help'>
                  <Nav.Link>Help?</Nav.Link>
                </LinkContainer>
                 
                <LinkContainer to='/login'>
                <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
      
        </Navbar>     
    </header>
  )
}

export default Header
