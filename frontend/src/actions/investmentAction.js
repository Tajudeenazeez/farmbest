import axios from "axios";
import { 
  INVESTMENT_LIST_REQUEST, 
  INVESTMENT_LIST_SUCCESS, 
  INVESTMENT_LIST_FAIL,
  INVESTMENT_DETAILED_SUCCESS, 
  INVESTMENT_DETAILED_REQUEST, 
  INVESTMENT_DETAILED_FAIL 
} from "../constants/investmentsConstant";

export const investmentListAction = () => async(dispatch) => {
const baseURL ='https://farmbest-backend.herokuapp.com'
 
  try {
    dispatch({type:INVESTMENT_LIST_REQUEST})
    const {data} = await axios.get(
      `${baseURL}/investments`
    )
    dispatch({type:INVESTMENT_LIST_SUCCESS, payload: data.investments})
  } catch (error) {
    dispatch({
      type:INVESTMENT_LIST_FAIL, 
      payload: error.message
    })
  } 
}

//INVESTMENT DETAILED
export const investmentDetailedAction = (id) => async(dispatch) => {
  const baseURL ='https://farmbest-backend.herokuapp.com'
  try {
    dispatch({type:INVESTMENT_DETAILED_REQUEST})
    
    const {data} = await axios.get(
      `${baseURL}/investments/${id}`
    )
    dispatch({
      type:INVESTMENT_DETAILED_SUCCESS, 
      payload: data
    })
  } catch (error) {
    dispatch({
      type:INVESTMENT_DETAILED_FAIL, 
      payload: error.message
    })
  } 
}