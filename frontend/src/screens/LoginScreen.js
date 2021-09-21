import React, {useState, useEffect} from 'react'
import { Button, Form, Row, Col } from "react-bootstrap";
import Loader from "../components/Loader"
import Message from "../components/Message"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import {login} from "../actions/userAction";
import { Redirect } from "react-router-dom";

const LoginScreen = ({location, history}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {loading, error, userInfo} = userLogin
  //const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if(userInfo)
     history.push('/')
    
  }, [history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }


  return (
    <FormContainer>
      {userInfo ? <Redirect to='/'/> : null}
      <h3 className='text-center'>Login page</h3>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader/>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId = 'email'>
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
        <Form.Group controlId='password'>
          <Form.Label>
            password
          </Form.Label>
          <Form.Control 
          type='password' 
          placeholder='enter your password'
          value={password}
          onChange = {(e) => setPassword(e.target.value)}
          required/>
        </Form.Group>
        <Button type='submit' className='my-3' variant='success'>
          login
        </Button>
         {/* <Row>
           <Col>
            <p>Dont have an account yet?{' '}
              <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Sign up</Link></p>
            <p>Forgot your password?<Link to={redirect ? '/reset' : '/reset'}>Click here</Link></p>
          </Col>
         </Row> */}
      </Form>
    </FormContainer>
  )
}

export default LoginScreen
