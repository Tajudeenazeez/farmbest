import React from 'react'
import { Button, Form, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import FormContainer from "../components/FormContainer";


const RegisterScreen = () => {
  
  return (
    <FormContainer>
      <h3 className='text-center'>Register page</h3>
      <Form>
      <Form.Group>
          <Form.Label>
            Full Name
          </Form.Label>
          <Form.Control type='text' placeholder='Enter your name' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Email
          </Form.Label>
          <Form.Control type='email' placeholder='enter your email' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            password
          </Form.Label>
          <Form.Control type='password' placeholder='enter your password'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Confirm password
          </Form.Label>
          <Form.Control type='password' placeholder='enter your password'/>
        </Form.Group>
        <Button className='my-3' variant='success'>
          Submit
        </Button>
        <Row>
          <Col>
            <p>Already have an account?<Link to='/login'>Login</Link></p>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default RegisterScreen
