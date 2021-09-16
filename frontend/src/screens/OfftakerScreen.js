import React from 'react'
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const OfftakerScreen = () => {
  return (
    <FormContainer>
      <h3 className='text-center'>Offtaker registration
       page</h3>
      <Form>
      <Form.Group>
          <Form.Label>
            Name
          </Form.Label>
          <Form.Control type='text' placeholder='Enter your Name' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Email
          </Form.Label>
          <Form.Control type='email' placeholder='enter your email' required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Phone number
          </Form.Label>
          <Form.Control type='number' placeholder='Enter your Phone number'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Produce of interest
          </Form.Label>
          <Form.Control type='text' placeholder='Produce of interest' required/>
        </Form.Group>
        <Button className='my-3' variant='success'>
          Submit
        </Button>
      </Form>
    </FormContainer>
  )
}

export default OfftakerScreen
