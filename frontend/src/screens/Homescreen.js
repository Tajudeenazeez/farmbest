import React from 'react'
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import BootstrapCarousel from "../components/BootstrapCarousel";



const HomeScreen = () => {
  return (
    <>
    <Row className='header py-3'>
      <h1 style={{color:'green'}}>We help  you make a great living through Farm investment</h1>    
      <BootstrapCarousel></BootstrapCarousel>
    </Row>
        <Row>
          <Col>
          <Button variant='secondary' className='m-3'>
        New to farmBest? Start here
      </Button>
          </Col>
        </Row>
    <Container>
      <Row className='justify-content-md-center'>
        <Col className='my-auto' >
          <h3 className='text-success'>Connecting agricultural investors across the globe</h3>
          <p className='text-success'>We are connecting investors with the active farmers to achieve common objectives, more food more money, happy society
            Over 60 percent of agricultural produce are from offshore with less fertile land but earness large investment.
            Africa has the largest most fertile land per land mass, while most farmers practice subsistence farming,
          </p>
        </Col>
      </Row>
      <Row>
        <Col className='my-auto'>
        <h3 className='text-success'>Trio investment</h3>
        <p className='text-success'>FarmBest investment platform is an initiative of farmBest
         Agric-Tech company to help farmers, investors and offtakers to profit from  quality farm 
         produce.Our farmers are well trained by experts in each field to ensure use 
         of best farm practice. Money from our investment platform are use to empower the
          farmers to increase their farming strength in areas of improved seedlings,
           fertilizer procurement, pesticide and modern farm equipment.</p>  
        
        </Col>
      </Row>
    </Container>
    <Row>
      <Col>

    <Card>
      <Card.Body>
        <Card.Text>
        FarmBest investment platform is an initiative of farmBest
         Agric-Tech company to help farmers, investors and offtakers to profit from  quality farm 
         produce.Our farmers are well trained by experts in each field to ensure use 
         of best farm practice. 
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
    </Row>

    </>
  )
}

export default HomeScreen
