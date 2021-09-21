import { axios } from "axios";
import {  
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT, 
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
} from "../constants/userContant";

//USER LOGIN
export const login = (email, password ) => async(dispatch) =>{
  try {
    dispatch({type: USER_LOGIN_REQUEST})

    const config = {
      headers:{
        'Content-Type': 'application/json'
      }
    } 
    const {data} = await axios.post(
      'api/users/login',
      {email, password},
      config
    )
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })

    localStorage.setItem('user', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: console.error(error)
    })
    dispatch({type: USER_LOGOUT,
    payload: {}
    })
  }

}

//USER REGISTRATION
export const register = (name, email, password ) => async(dispatch) =>{
  try {
    dispatch({type: USER_REGISTER_REQUEST})

    const config = {
      headers:{
        'Content-Type': 'application/json'
      }
    } 
    const {data} = await axios.post(
      'api/users',
      {name,email, password},
      config
    )
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    })

    localStorage.setItem('user', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: console.error(error)
    })
  }

}

