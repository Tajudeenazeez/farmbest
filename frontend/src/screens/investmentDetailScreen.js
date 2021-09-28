import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector}  from 'react-redux';
import {Row, Col, Image, ListGroup} from 'react-bootstrap';
import  Loader  from "../components/Loader";
import  Message  from "../components/Message";
import {investmentDetailAction} from "../actions/investmentAction"

const InvestmentDetailScreen = ({ match }) => {
   const dispatch = useDispatch()
   const investmentDetail = useSelector(state => state.investmentDetail)
   const { loading, error, investment } = investmentDetail

  useEffect(() => {
    dispatch(investmentDetailAction(match.params.id))
  }, [dispatch, match, investment]
  )
  
  return (
    <>
  <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
        {loading ? (<Loader/>) : 
        error ? (<Message variant='danger'>{error}</Message>) : (
      <Row>
        <Col md={6}>
          <Image src={`https://res.cloudinary.com/dequo8fxt/image/upload/v1632501483/${investment.images[0]}`} 
          alt={investment.images[0]} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item><h2>{investment.name}</h2></ListGroup.Item>
            <ListGroup.Item>Price: N{investment.price}</ListGroup.Item>
            <ListGroup.Item>Decription:{investment.description}</ListGroup.Item>
            <ListGroup.Item>{investment.address}</ListGroup.Item>
            <ListGroup.Item>Price: N{investment.paymentClosingDate}</ListGroup.Item>
            <ListGroup.Item>Decription:{investment.plantingDate}</ListGroup.Item>
            <ListGroup.Item>{investment.maturityDate}</ListGroup.Item>
            <ListGroup.Item>Price: N{investment.harvestingDate}</ListGroup.Item>
            <ListGroup.Item>Decription:{investment.rating}</ListGroup.Item>
          </ListGroup>
      </Col>
      </Row>)} 
    </>
       )}

export default InvestmentDetailScreen