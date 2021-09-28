import {  INVESTMENT_DETAILED_FAIL, INVESTMENT_DETAILED_REQUEST, INVESTMENT_DETAILED_SUCCESS, INVESTMENT_LIST_FAIL, INVESTMENT_LIST_REQUEST, INVESTMENT_LIST_SUCCESS } from '../constants/investmentsConstant';

export const investmentListReducers = (state ={investments:[]}, action) => {
  switch (action.type) {
    case INVESTMENT_LIST_REQUEST:
      return { loading: true}
    case INVESTMENT_LIST_SUCCESS:
      return { loading: false, investments:action.payload}
    case INVESTMENT_LIST_FAIL:
        return { loading: false, error:action.payload} 
    default:
      return state;
  }

}

export const investmentDetailedReducers = (state ={investments:[]}, action) => {
  switch (action.type) {
    case INVESTMENT_DETAILED_REQUEST:
      return { loading: true}
    case INVESTMENT_DETAILED_SUCCESS:
      return { loading: false, investments:action.payload}
    case INVESTMENT_DETAILED_FAIL:
        return { loading: false, error:action.payload} 
    default:
      return state;
  }

}

