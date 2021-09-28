import React from 'react'
import { ProgressBar } from "react-bootstrap";
const Indicator = () => {
  
  return (
    <>
    Total unit sold
    <ProgressBar animated now={45} />     
    </>
  )
}

export default Indicator
