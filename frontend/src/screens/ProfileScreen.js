import React, {useState, useEffect}  from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button, Form} from "react-bootstrap";
import  Message from "../components/Message";
import  Loader  from "../components/Loader";
import { userUpdateProfile} from "../actions/userAction";
import FormContainer from '../components/FormContainer';

const ProfileScreen = ({location, history}) => {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, user } = userLogin
  const userUpdate = useSelector(state => state.userUpdate)
  const { success } = userUpdate

  useEffect(() => {
    if(!user) {
      history.push(`/login`)
    } else{
        setUserName(user.username)
        setEmail(user.email)        
    }
  }, [dispatch, history, user])

   const submitHandler = (e) => {
     e.preventDefault()
     if (password !== confirmPassword) {
       setMessage('Password do not match')
     } else {
       //dispatch update profile
       dispatch(userUpdateProfile({id:user.id,username, email,password}))

     }
   }

 return (
 <FormContainer>
   <Row>

      <Col md={5}>
        <h2 className='text-black'> User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && <Message variant='success'>profile Updated</Message>}
        {loading && <Loader/>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='username'>
          <Form.Label>User Name</Form.Label>
          <Form.Control 
          type='username' 
          placeholder='Enter user name'
          value ={username} 
          onChange= {(e) => setUserName(e.target.value)} >
          </Form.Control>
      </Form.Group>

      <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control 
          type='email' 
          placeholder='Enter email'
          value ={email} 
          onChange= {(e) => setEmail(e.target.value)} >
          </Form.Control>
      </Form.Group>

      <Form.Group controlId ='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type='password' 
          placeholder='Enter password'
          value ={password} 
          onChange= {(e) => setPassword(e.target.value)} >
          </Form.Control>
      </Form.Group>

        <Form.Group controlId ='confirmPassword'>
            <Form.Label>Confirm Password </Form.Label>
            <Form.Control 
            type='password' 
            placeholder='confirm password'
            value ={confirmPassword} 
            onChange= {(e) => setConfirmPassword(e.target.value)} >
              </Form.Control>
          </Form.Group>

          <Button className='my-3'  type='submit' variant='success'>
            Update
          </Button>
      </Form>
    </Col>



  </Row>   

 </FormContainer>
 )
}
       

export default ProfileScreen
