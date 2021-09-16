import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Indicator from "../components/Indicator";
import Price from "../components/Price";

const PotatoScreen = () => {
  return (
    <>
      <Container>
        <Row className='py-3 d-flex'>
          <Col className='m-auto   justify-content-center' md={5} >
              <div>
                <h3 className='text-center'>Potato Page</h3>
              </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <Link to='/potato'>
                <Card.Img src='images/potato.jpg' alt='maize.jpg'/>
              </Link>
              <Card.Body>
                <Link to='/potato'>
                  <Card.Title>Gbagede farm I</Card.Title>
                </Link>
                <Card.Text>
                  Amount per unit: N50,000 
                </Card.Text>
                <Card.Text>
                  ROI:40%
                </Card.Text>
                <Indicator/>
                <Price/>
                <Button>Open</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Link to='/potato'>
                <Card.Img src='images/potatoe.jpg'/>
              </Link>
              <Card.Body>
                <Link to='potato'>
                  <Card.Title>Gbagede farm II</Card.Title>
                </Link>
                <Card.Text>
                  Amount per unit: N50,000 
                </Card.Text>
                <Card.Text>
                  ROI:40%
                </Card.Text>
                <Indicator/>
                <Price/>
                <Button>closed</Button>
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

export default PotatoScreen
