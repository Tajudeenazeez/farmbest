import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Indicator from "../components/Indicator";
import Price from "../components/Price";

const CassavaScreen = () => {
  return (
    <>
      <Container>
        <Row className='py-3 d-flex'>
          <Col className='m-auto   justify-content-center' md={5} >
              <div>
                <h3 className='text-center'>Cassava Page</h3>
              </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <Link to='/cassava'>
                <Card.Img src='images/cassava.jpg' alt='cassava.jpg'/>
              </Link>
              <Card.Body>
                <Link to='/cassava'>
                  <Card.Title>Gbagede farm I</Card.Title>
                </Link>
                <Card.Text>
                  Amount per unit: N70,000 
                </Card.Text>
                <Card.Text>
                  ROI:45%
                </Card.Text>
                <Indicator/>
                <Price/>
                <Button>Open</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Link to='/cassava'>
                <Card.Img src='images/cassava2.jpg'/>
              </Link>
              <Card.Body>
                <Link to='cassava'>
                  <Card.Title>Gbagede farm II</Card.Title>
                </Link>
                <Card.Text>
                  Amount per unit: N70,000 
                </Card.Text>
                <Card.Text>
                  ROI:45%
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

export default CassavaScreen
