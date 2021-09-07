import React from 'react'
import { Button, Container, Row, Col } from "react-bootstrap";
import BootstrapCarousel from "../components/BootstrapCarousel";
//import Testmonial from '../components/Testmonial';

const HomeScreen = () => {
  return (
    <>
    <Row className='header py-3'>
      <h1>We help  you make a great living through Farm investment</h1>    
    </Row>
      <BootstrapCarousel></BootstrapCarousel>
    <Container>
        <Row>
          <Col>
          <Button variant='success' className='my-3'>
        New to farmBest? Start here
      </Button>
          </Col>
        </Row>
    
      <Row className='justify-content-md-center'>
        <Col xs={8} lg className=' py-3'>
          <h3>Connecting agricultural investors across the globe</h3>
          <p>We are connecting investors with the active farmers to achieve common objectives, more food more money, happy society
            Over 60 percent of agricultural produce are from offshore with less fertile land but earness large investment.
            Africa has the largest most fertile land per land mass, while most farmers practice subsistence farming,

          </p>
        </Col>
      </Row>
    </Container>
  
    </>
  )
}

export default HomeScreen
