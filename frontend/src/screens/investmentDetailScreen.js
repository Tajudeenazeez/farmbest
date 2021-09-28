import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector}  from 'react-redux';
import {Row, Col, Image, ListGroup} from 'react-bootstrap';
import  Loader  from "../components/Loader";
import  Message  from "../components/Message";

const InvestmentDetailScreen = ({ match }) => {
   const dispatch = useDispatch()
   const investmentDetail = useSelector(state => state.investmentDetail)
   const { loading, error, investment } = investmentDetail

  useEffect(() => {
    dispatch(investmentDetail(match.params.id))
  }, [dispatch, match]
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
          <Image src={investment.images[0]} alt={investment.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item><h2>{investment.name}</h2></ListGroup.Item>
            <ListGroup.Item>Price: N{investment.price}</ListGroup.Item>
            <ListGroup.Item>Decription:{investment.description}</ListGroup.Item>
            <ListGroup.Item>{investment.name}</ListGroup.Item>
            <ListGroup.Item>Price: N{investment.price}</ListGroup.Item>
            <ListGroup.Item>Decription:{investment.description}</ListGroup.Item>
          </ListGroup>
      </Col>
      </Row>)} 
    </>
       )}

export default InvestmentDetailScreen