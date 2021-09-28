import React from 'react'
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import BootstrapCarousel from "../components/BootstrapCarousel";
import Testimonial from '../components/Testimonial';

const HomeScreen = () => {
  return (
    <>
      <Row className='header py-3'>
        <h1 
        className='mx-3' 
        style={{color:'green'}}
        >We help  you make a great living through Farm investment
        </h1>    
        <BootstrapCarousel/>
      </Row>
      <Row className='justify-content-md-center mb-5 mx-5'>
        <Col className=''>
         <h4 className='text-black'>New to farmBest?</h4>
         <Link to='/register'>
           <Button type='submit' variant='warning'>
              Start here
           </Button>
          </Link>          
        </Col>
      </Row>
      <Row className='connect-div'>
        <Col className='my-auto' md={5}>
          <h3 className='text-success py-3' style={{fontSize:'1.5em'}}>Connecting agricultural investors across the globe</h3>
          <p className='text-light'>We are connecting investors with the active farmers to achieve common objectives, more food more money, happy society
              Over 60 percent of agricultural produce are from offshore with less fertile land but earness large investment.
              Africa has the largest most fertile land per land mass, while most farmers practice subsistence farming,
          </p>
        </Col>
      </Row>
      <Row className='trio-div my-5'>
        <Col className='my-auto' md={5}>
          <h3 className='text-success '>Trio investment</h3>
          <p className='text-dark'>FarmBest investment platform is an initiative of farmBest
            Agric-Tech company to help farmers, investors and offtakers to profit from  quality farm 
            produce.Our farmers are well trained by experts in each field to ensure use 
            of best farm practice. Money from our investment platform are use to empower the
            farmers to increase their farming strength in areas of improved seedlings,
            fertilizer procurement, pesticide and modern farm equipment.
          </p>  
        </Col>
      </Row>
      <Row >
        <Col className='text-center'>
          <h1 className='text-success'>Testimonials</h1>
          <p>Don't just take it from us, let our clients do the talking</p>
        </Col>
      </Row>
      <Row>
        <Col>
         <Testimonial/>
        </Col>
      </Row>
    </>
  )
}

export default HomeScreen
