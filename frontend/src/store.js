import {createStore, combineReducers, applyMiddleware  } from "redux";
import  thunk  from "redux-thunk";
import { composeWithDevTool } from "redux-devtools-extension";
import userLoginReducer from "./reducers/userLoginReducer";

const middleware = [thunk]
const initialState ={}
const reducers= combineReducers({
  userLogin: userLoginReducer
})

const store = createStore(
  reducers, 
  initialState, 
  composeWithDevTool(applyMiddleware(...middleware))

)


export default store