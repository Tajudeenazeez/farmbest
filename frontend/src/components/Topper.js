import React from 'react'
import { Row, Col } from "react-bootstrap";
import { MdCall } from "react-icons/md";
const Topper = () => {
  return (
<Row className='text-center bg-secondary text-success'>
  <Col >
  
      <span className='mx-5 py-3' style={{fontSize:'20px'}} >We use islamic principles and guidelines</span>
      <MdCall />
      <span className= 'py-3' style={{fontSize:'15px'}}>Helpline? +2348071965540</span>
      
  
  </Col>
</Row>
    
  )
}

export default Topper
