import React from 'react'
import { Row, Col,  Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className='bg-black'>
      
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
            <Button className='my-2' variant='secondary'>
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
              <li><Link className='text-secondary' to='/about-farmbest'>about farmBest</Link></li>
              <li><Link className='text-secondary' to='/about-farmbest'>about farmBest</Link></li>
              <li><Link className='text-secondary' to='/about-farmbest'>about farmBest</Link></li>
              <li><Link className='text-secondary' to='#about farmbest'>about farmBest</Link></li>
            </ul>
          </Col>

          <Col className='text-center py-3'>
          <h3 className='text-success' >About</h3>
          <ul>
              <li><Link className='text-secondary' to='/about-farmbest'>about farmBest</Link></li>
              <li><Link className='text-secondary' to='/about-farmbest'>about farmBest</Link></li>
              <li><Link className='text-secondary' to='/about-farmbest'>about farmBest</Link></li>
              <li><Link className='text-secondary' to='#about farmbest'>about farmBest</Link></li>
            </ul>
          </Col>
          <Col className='text-center py-3'>
          <h3 className='text-success'>About</h3>
          <ul>
              <li><Link className='text-secondary' to='/about-farmbest'>about farmBest</Link></li>
              <li><Link className='text-secondary' to='/about-farmbest'>about farmBest</Link></li>
              <li><Link className='text-secondary' to='/about-farmbest'>about farmBest</Link></li>
              <li><Link className='text-secondary' to='#about farmbest'>about farmBest</Link></li>
            </ul>
          </Col>
          <Col className='text-center py-3'>
          <h3 className='text-success'>About</h3>
          <ul>
              <li><Link className='text-secondary' to='/about-farmbest'>about farmBest</Link></li>
              <li><Link className='text-secondary' to='/about-farmbest'>about farmBest</Link></li>
              <li><Link className='text-secondary' to='/about-farmbest'>about farmBest</Link></li>
              <li><Link className='text-secondary' to='#about farmbest'>about farmBest</Link></li>
            </ul>
          </Col>
          <Col className='text-center py-3'>
          <h3 className='text-success'>About</h3>
          <ul>
              <li><Link className='text-secondary' to='/about-farmbest'>about farmBest</Link></li>
              <li><Link className='text-secondary' to='/about-farmbest'>about farmBest</Link></li>
              <li><Link className='text-secondary' to='/about-farmbest'>about farmBest</Link></li>
              <li><Link className='text-secondary' to='#about farmbest'>about farmBest</Link></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
          
          <p>OFFAFARM<br/>
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
