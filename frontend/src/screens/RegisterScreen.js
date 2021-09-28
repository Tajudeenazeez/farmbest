import React, {useState, useEffect} from 'react'
import { Button, Form, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useSelector, useDispatch } from "react-redux";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userAction";
import AlertMessage  from "../components/AlertMessage";

const RegisterScreen = ({location, history}) => {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, user} = userRegister
  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if(user)
    history.push(redirect)
  }, [history, redirect, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
        setMessage(<AlertMessage/>)
  } else{
    dispatch(register(username, email, password))
  }
  }
  
  return (
    <FormContainer>
      <h3 className='text-center'>Registration page</h3>
      {message && <Message>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader/>}
      <Form onSubmit ={submitHandler}>
        <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control 
            type='name' 
            placeholder='Enter your name'
            value= {username}
            onChange={(e)=>setUserName(e.target.value)} 
            required/>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>
            Email
          </Form.Label>
          <Form.Control 
          type='email' 
          placeholder=' Enter your email' 
          value = {email}
          onChange= {(e) =>setEmail(e.target.value)}
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
          onChange = {(e)=>setPassword(e.target.value)}
          required/>
        </Form.Group>
        <Form.Group controlId='confirmPassword'>
          <Form.Label>
            Confirm password
          </Form.Label>
          <Form.Control 
          type='password' 
          placeholder='enter your password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required/>
        </Form.Group>
        <Button type='submit' className='my-3' variant='success'>
          Register
        </Button>
        <Row>
          <Col>
            <p>Already have an account?{' '}
              <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link></p>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default RegisterScreen
