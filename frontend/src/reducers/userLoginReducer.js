import React from 'react'
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../constants/userContant';

export const userLoginReducer = (state = {}, action) => {
      switch (action.type) {
        case USER_LOGIN_REQUEST:
          return {loading:true };
        case USER_LOGIN_SUCCESS:
            return { loading:false};
        case USER_LOGIN_FAIL:
            return {loading:false};
        default:
          state;
}
}