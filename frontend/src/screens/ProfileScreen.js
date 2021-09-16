import React, {useState, useEffect} from 'react'
import { Button, Form, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import FormContainer from "../components/FormContainer";
import userInfo from "../screens/users";
const ProfileScreen = () => {
  const [email, setEmail] = useState(userInfo.email)
  const [password, setPassword] = useState(userInfo.password)

  return (
    <FormContainer>
      <h3 className='text-center'>Login page</h3>
      <Form>
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
        <Button className='my-3' variant='success'>
          Submit
        </Button>
       
      </Form>
    </FormContainer>
  )
}

export default ProfileScreen
