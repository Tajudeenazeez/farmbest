import React from 'react'
import FormContainer  from "../components/FormContainer";
import {Form, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const FarmerScreen = () => {
  return (
    <FormContainer>
      <h3 className='text-center text-black'>Farmer's page</h3>
      <Form>
      <Form.Group>
          <Form.Label>
            Name
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
            Phone Number
          </Form.Label>
          <Form.Control type='number' placeholder='Enter your phone number'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            BVN
          </Form.Label>
          <Form.Control type='number' placeholder='Enter your BVN' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            City
          </Form.Label>
          <Form.Control type='text' placeholder='Enter your City' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Country
          </Form.Label>
          <Form.Control type='text' placeholder='Enter your Country'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Farm location
          </Form.Label>
          <Form.Control type='text' placeholder='Enter your Farm Location' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            No. of acres
          </Form.Label>
          <Form.Control type='number' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Crops planted
          </Form.Label>
          <Form.Control type='text' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Years of farm experience
          </Form.Label>
          <Form.Control type='number'  required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            What do you hope to benefit
          </Form.Label>
          <Form.Control type='text' required/>
        </Form.Group>
        <Button className='my-3' variant='success'>
          Submit
        </Button>
        <Row>
          <Col>
            <p>Dont have an account yet?<Link to='/signup'>Sign up</Link></p>
            <p>Forgot your password?<Link to='/reset'>Click here</Link></p>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default FarmerScreen
