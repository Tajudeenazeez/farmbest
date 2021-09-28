import axios  from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT, 
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET
} from "../constants/userContant";
const baseURL ='https://farmbest-backend.herokuapp.com'

//USER LOGIN
export const login = (email, password ) => async(dispatch) => {
  try {
    dispatch({type: USER_LOGIN_REQUEST})
    const config = {
      headers:{
        'Content-Type': 'application/json'
      }
    } 
    const {data} = await axios.post(
      `${baseURL}/users/login`,
      {email, password},
      config
    )
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.user
    })
    localStorage.setItem('user', JSON.stringify(data.user))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('user')
  dispatch({ type: USER_LOGOUT})
  dispatch({ type: USER_DETAILS_RESET})
  window.location.href = '/';
  
}

//USER REGISTRATION
export const register = (username, email, password ) => async(dispatch) =>{
  try {
    dispatch({type: USER_REGISTER_REQUEST})
    const config = {
      headers:{
        'Content-Type': 'application/json'
      }
    } 
    const {data} = await axios.post(
      `${baseURL}/users/register`,
      {username,email, password},
      config
    )
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.user
    })
    localStorage.setItem('user', JSON.stringify(data.user))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.message 
    })
  }
}

//USER UPDATE PROFILE
export const userUpdateProfile = (id) => async(dispatch, getState ) => {
  try {
    dispatch({type: USER_UPDATE_REQUEST})
    const {userLogin : {user}} = getState()
    const config = {
      headers:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      }
    } 
    const {data} = await axios.put(
      `${baseURL}/users/${id}`, config
    )
    dispatch(
      {
      type: USER_UPDATE_SUCCESS,
      payload: data.user
    }
    )
    //console.log(data.user)
  } catch (error) {
      dispatch({
        type: USER_UPDATE_FAIL,
        payload: error.message
      })
  }
}

//USER DETAIL
export const getUserDetailAction = (id) => async(dispatch, getState) => {
  try {
    dispatch({type: USER_DETAILS_REQUEST})
    const {userLogin: {user} } = getState
    
    const config = {
      headers:{
        'Content-Type': 'application/json',
        Authorization : `Bearer ${user.token}`
      }
    } 
    const {data} = await axios.get(
      `${baseURL}/users/${id}`,config
      )
     // console.log(data)
    dispatch(
      {
      type: USER_DETAILS_SUCCESS,
      payload: data
    }
    )
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.message
    })
  }
}
