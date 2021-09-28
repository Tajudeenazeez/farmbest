import React from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const ContactScreen = () => {
  return (
    <FormContainer>
      <Row >
        <Col className='m-3'>
        <h3 className='text-center text-black'>Contact
       Page</h3>
        </Col>
      </Row>
    <Row className='bg-secondary my-2' md={2}>
      <Col >
      
      <p>Head Office<br/>
            30 WESTERN RESERVOIUR ROAD <br/>
            OLOHUNSHOGO ILORIN<br/>
            KWARA STATE <br/>
            +2348-0719-65540 or +2348-16796-3525</p>

      </Col>
      <Col> 
   
     
      <Form>
      <Form.Group controlId='formBasicText'>
          <Form.Label>
            Your Name
          </Form.Label>
          <Form.Control type='text' placeholder='Enter your Name' required/>
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>
           Your Email
          </Form.Label>
          <Form.Control type='email' placeholder='enter your email' required/>
        </Form.Group>
        <Form.Group controlId='formBasicSubject'>
          <Form.Label>
            Subject
          </Form.Label>
          <Form.Control type='subject'/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
         <Form.Label>Leave your comment</Form.Label>
         <Form.Control as="textarea" placeholder='leave your comment here' rows={3} />
        </Form.Group>
        <Button className='mb-3' variant='success'>
          Submit
        </Button>
      </Form>
      </Col>
    </Row>
    </FormContainer>
  )
}

export default ContactScreen
