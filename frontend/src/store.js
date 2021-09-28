import {createStore, combineReducers, applyMiddleware  } from "redux";
import  thunk  from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer, userUpdateReducer, getUserDetailReducer } from "./reducers/userReducer";
import {investmentDetailedReducers, investmentListReducers} from "./reducers/investmentReducers";
import { orderCreateReducer, orderPayReducer } from "./reducers/orderReducer";

const reducer= combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  getUserDetail: getUserDetailReducer,
  investmentList: investmentListReducers,
  investmentDetail: investmentDetailedReducers,
  orderCreate: orderCreateReducer,
  orderDetailed: orderCreateReducer,
  orderPay: orderPayReducer,
}
);

const userFromStorage = localStorage.getItem('user') ?
 JSON.parse(localStorage.getItem('user')) : null

const initialState = {
   userLogin : {user: userFromStorage }
}

const middleware = [thunk];
const store = createStore( 
  reducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware)))
;

export default store