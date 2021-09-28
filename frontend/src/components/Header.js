import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Nav, Container, Navbar, NavDropdown, Image} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {logout} from "../actions/userAction";
const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {user} = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header>
      <Navbar bg="success" expand="lg">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <Image 
                style={{width:'60px', height:'60px'}} 
                src='images/farmbestlogo.png' 
                alt='FarmBests'/>
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
                <LinkContainer to='/investments'>
                  <NavDropdown.Item >ALL farms</NavDropdown.Item>
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
                {user? (
                  <NavDropdown title={user.username} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                  </NavDropdown>
                ):(
                <LinkContainer to='/login'>
                  <Nav.Link>Login</Nav.Link>
               </LinkContainer>)}

               {user && user.role && (
              <NavDropdown title='Admin' id='Adminmenu'>
              <LinkContainer to='/admin/userList'>
                <NavDropdown.Item>Users</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/admin/investmentList'>
                <NavDropdown.Item>Investment</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/admin/orderList'>
                <NavDropdown.Item>Orders</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>     
    </header>
  )
}

export default Header
