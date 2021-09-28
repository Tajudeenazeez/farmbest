import React, {useEffect} from 'react'
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { investmentListAction } from "../actions/investmentAction";
import Investment from "../components/Investment";

const CombinationScreen = () => {
  const dispatch = useDispatch()
  const investmentList = useSelector(state => state.investmentList)
  const {loading, error, investments} = investmentList
  

  useEffect(() => {
    dispatch(investmentListAction())
  
  }, [dispatch])

  return (
    <>
    <h3>Farm available</h3>
      {loading ? (<Loader/>) :
      error ? (<Message variant='danger'>{error}</Message>)
    :(
      <Row>
        {investments.map((investment) => (
        <Col key={investment._id} xs={12} md={6} lg={3}>
            <Investment investment={investment}/> 
          </Col>
          ))}

      </Row>
    ) }   
    </>
  )
}

export default CombinationScreen
