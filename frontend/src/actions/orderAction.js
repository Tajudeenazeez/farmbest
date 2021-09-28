import { 
  ORDER_CREATE_FAIL, 
  ORDER_CREATE_REQUEST, 
  ORDER_CREATE_SUCCESS, 
  ORDER_DETAILED_FAIL, 
  ORDER_DETAILED_REQUEST,
  ORDER_DETAILED_SUCCESS
} from "../constants/orderConstants";
import axios from "axios";

//CREATE ORDER
export const orderCreateAction = (order) => async(dispatch, getState)=> {
  const baseURL ='https://farmbest-backend.herokuapp.com'
  try {
    dispatch({type:ORDER_CREATE_REQUEST})
    const {userLogin :{user}} =getState()
  const config = {
    header:{
      'Content-Type' : 'application/json',
      Authorization: `Bearer ${user.token}`
    }
  }
  const {data} = await axios.post(
    `${baseURL}/order`,order, config
  ) 
  dispatch({
    type: ORDER_CREATE_SUCCESS,
    payload: data
  })
  } catch (error) {
    dispatch({
      type:ORDER_CREATE_FAIL,
      payload: error.message
    })
  }
}

//ORDER DETAIL
export const orderDetailedAction = (id) => async(dispatch, getState)=> {
  const baseURL ='https://farmbest-backend.herokuapp.com'
  try {
    dispatch({type:ORDER_DETAILED_REQUEST})
    const {userLogin :{user}}
    const config = {
    header:{
      'Content-Type' : 'application/json',
      Authorization: `Bearer ${user.token}`
    }
  }
  const {data} = await axios.post(
    `${baseURL}/order/${id}`, config
  ) 
  dispatch({
    type: ORDER_DETAILED_SUCCESS,
    payload: data
  })
  } catch (error) {
    dispatch({
      type:ORDER_DETAILED_FAIL,
      payload: error.message
    })
  }
}

