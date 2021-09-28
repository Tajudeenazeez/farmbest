import React, {useState, useEffect} from 'react'
import { Button, Form, Row, Col } from "react-bootstrap";
import Loader from "../components/Loader"
import Message from "../components/Message"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import {login} from "../actions/userAction";
import Particles from '../components/Particles';

const LoginScreen = ({location, history}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {loading, error, user} = userLogin
  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if(user)
     history.push(redirect)
  }, [history, user, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h3 className='text-center text-black my-5'>Login page</h3>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader/>}
      <Particles/>
      <Form onSubmit={submitHandler} style={{height:'60vh'}} className='form-tag'>
        <Form.Group controlId ='email' className='my-3' >
          <Form.Label>
            Email
          </Form.Label>
          <Form.Control 
          type='email' 
          placeholder='enter your email'
          value ={email} 
          onChange = { (e) => setEmail(e.target.value) }
          required/>
        </Form.Group>
        <Form.Group controlId='password' className='my-3'>
          <Form.Label>
            Password
          </Form.Label>
          <Form.Control 
          type='password' 
          placeholder='enter your password'
          value={password}
          onChange = {(e) => setPassword(e.target.value)}
          required/>
        </Form.Group>
        <Row>
         <Col>
          <Button type='submit' className='my-3' variant='success'>
           login
          </Button>
         </Col>
        </Row>
        <Row>
         <Col>
          <p>Dont have an account yet?{' '}
            <Link className ='sign-text' to={redirect ? `/register?redirect=${redirect}` : '/register'}>Sign up</Link></p>
          <p>Forgot your password?<Link className ='sign-text' to={redirect ? '/reset' : '/reset'}>Click here</Link></p>
         </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default LoginScreen
