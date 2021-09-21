import {createStore, combineReducers,compose, applyMiddleware  } from "redux";
import  thunk  from "redux-thunk";
import { composeWithDevTool } from "redux-devtools-extension";
import {userLoginReducer, userRegisterReducer } from "./reducers/userLoginReducer";


const reducer= combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
}
);
const middleware = [thunk];
const store = createStore( reducer, compose(applyMiddleware(...middleware)))
;

export default store