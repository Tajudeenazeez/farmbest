import React from 'react'
import { Row, Col,  Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className='bg-black' md={5}>
      
      <Row className='bg-success text-center'>
        <h3>Share this page:</h3> 
      </Row>
      <Row className='bg-success'>
        <Col className='text-center'>
          <span ><Link to='#'><i className='fab fa-facebook'></i></Link></span>   
          <span><Link to='#'><i className='fab fa-instagram'></i></Link></span>   
          <span><Link to='#'><i className='fab fa-twitter'></i></Link></span>   
          <span><Link to='#'><i className='fab fa-linkedin-in'></i></Link></span>   
          <span><Link to='#'><i className='fa fa-envelope'></i></Link></span>   
        </Col>
      </Row>
      <Row>
          <Col className='text-center m-3'>
          <p>Begin investing in farming and enjoy the life of an enriched Farmer!</p>
          </Col>
          <Col>
            <Button type='submit' className='my-2' variant='warning'>
              Learn more
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>
            <Form className='mx-auto' style={{width:'60%'}}>
              <Form.Group >
                <Form.Control type='search' placeholder='Enter search'/>
              </Form.Group>
            </Form>
          <Button type='input' variant='light'>
              Search
          </Button>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>
            <h3 className='text-success'>About</h3>
            <ul>
              <li><Link className='text-secondary' to='/about'>About farmBest</Link></li>
              <li><Link className='text-secondary' to='/about'>Testimonial</Link></li>
              <li><Link className='text-secondary' to='/about'>Meet our Expert</Link></li>
              <li><Link className='text-secondary' to='/about'>Meet our Team</Link></li>
            </ul>
          </Col>

          <Col className='text-center py-3'>
          <h3 className='text-success' >Crop investment</h3>
          <ul>
              <li><Link className='text-secondary' to='/maize'>Maize</Link></li>
              <li><Link className='text-secondary' to='/cassava'>Cassava</Link></li>
              <li><Link className='text-secondary' to='/potatoe'>Potatoe</Link></li>
              <li><Link className='text-secondary' to='/soya'>Soya</Link></li>
            </ul>
          </Col>
          <Col className='text-center py-3'>
          <h3 className='text-success'>Collaborators</h3>
          <ul>
              <li><Link className='text-secondary' to='/farmer'>Farmer</Link></li>
              <li><Link className='text-secondary' to='/investor'>Investor</Link></li>
              <li><Link className='text-secondary' to='/offtaker'>Offtaker</Link></li>
            </ul>
          </Col>
          <Col className='text-center py-3'>
          <h3 className='text-success'>Help</h3>
          <ul>
              <li><Link className='text-secondary' to='/contact'>Contact Us</Link></li>
              <li><Link className='text-secondary' to='/faq'>FAQ</Link></li>
              <li><Link className='text-secondary' to='/faq'>How it works</Link></li>
            </ul>
          </Col>
          <Col className='text-center py-3'>
          <h3 className='text-success'>Join Us</h3>
          <ul>
              <li><Link className='text-secondary' to='/login'>login</Link></li>
              <li><Link className='text-secondary' to='/register'>Register</Link></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
          
          <p>FARMBEST<br/>
            30 WESTERN RESERVOIUR ROAD <br/>
            OLOHUNSHOGO ILORIN<br/>
            KWARA STATE <br/>
            +2348-0719-65540 or +2348-16796-3525</p>
          </Col>
          <Col className=''>
          <span ><Link to='#'><i className='fab fa-facebook'></i></Link></span>   
          <span><Link to='#'><i className='fab fa-instagram'></i></Link></span>   
          <span><Link to='#'><i className='fab fa-twitter'></i></Link></span>   
          <span><Link to='#'><i className='fab fa-linkedin-in'></i></Link></span>   
          <span><Link to='#'><i className='fa fa-envelope'></i></Link></span> 
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>
          Copyright &copy; FarmBest Reserved 2021.
          </Col>
        </Row>
    </footer>
  )
}

export default Footer
