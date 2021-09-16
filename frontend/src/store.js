import {createStore, combineReducers, applyMiddleware  } from "redux";
import  thunk  from "redux-thunk";
import { composeWithDevTool } from "redux-devtools-extension";


const middleware = [thunk]
const initialState ={}
const reducers= combineReducers({})

const store = createStore(
  reducers, initialState, composeWithDevTool(applyMiddleware(...middleware))

)


