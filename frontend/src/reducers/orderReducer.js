import { 
  ORDER_CREATE_FAIL, 
  ORDER_CREATE_REQUEST, 
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILED_REQUEST,
  ORDER_DETAILED_SUCCESS,
  ORDER_DETAILED_FAIL, 
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL
} from "../constants/orderConstants";

  export const orderCreateReducer = (state ={}, action) => {
    switch (action.type) {
      case ORDER_CREATE_REQUEST:
        return {loading: true}
      case ORDER_CREATE_SUCCESS:
        return {loading: false, order: action.payload}
      case ORDER_CREATE_FAIL:
        return {loading:false, error: action.payload} 
      default:
        return state;
    }
  }

  export const orderDetailedReducer = (state ={order:[]}, action) => {
    switch (action.type) {
      case ORDER_DETAILED_REQUEST:
        return {...state, loading: true}
      case ORDER_DETAILED_SUCCESS:
        return {loading: false, success:true, order: action.payload}
      case ORDER_DETAILED_FAIL:
        return {loading:false, error: action.payload} 
      default:
        return state;
    }
  }

  export const orderPayReducer = (state ={}, action) => {
    switch (action.type) {
      case ORDER_PAY_REQUEST:
        return {loading: true}
      case ORDER_PAY_SUCCESS:
        return {loading: false, success:true, order: action.payload}
      case ORDER_PAY_FAIL:
        return {loading:false, error: action.payload} 
      default:
        return state;
    }
  }