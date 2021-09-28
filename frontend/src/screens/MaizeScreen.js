import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Indicator from "../components/Indicator";
import Price from "../components/Price";

const MaizeScreen = () => {
  return (
    <>
      <Container>
        <Row className='py-3 d-flex'>
          <Col className='m-auto   justify-content-center' md={5} >
              <div>
                <h3 className='text-center text-black'>Maize Page</h3>
              </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <Link to='/maize'>
                <Card.Img style={{width:'100%', height:'60vh'}} src='images/maiz.jpg' alt='maize.jpg'/>
              </Link>
              <Card.Body>
                <Link to='/maize'>
                  <Card.Title className='text-success card-text'>Gbagede farm I</Card.Title>
                </Link>
                <Card.Text>
                  Amount per unit: N50,000 
                </Card.Text>
                <Card.Text>
                  ROI:40%
                </Card.Text>
                <Indicator/>
                <Price/>
                <Button disabled>Open</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Link to='/maize'>
                <Card.Img style={{width:'100%', height:'60vh'}}  src='images/maize3.jpg'/>
              </Link>
              <Card.Body>
                <Link to='maize'>
                  <Card.Title className='text-success'>Gbagede farm II</Card.Title>
                </Link>
                <Card.Text>
                  Amount per unit: N50,000 
                </Card.Text>
                <Card.Text>
                  ROI:40%
                </Card.Text>
                <Indicator/>
                <Price/>
                <Button  disabled>closed</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Content page
            </p>
          
          </Col>
        </Row>
            
      </Container> 
    </>
  )
}

export default MaizeScreen
