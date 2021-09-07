import React from 'react'
import {Carousel, Button} from "react-bootstrap";

const BootstrapCarousel = () => {
  return (
    <div>
      <Carousel>
          <Carousel.Item style={{height:'400px'}}>
            <img
              style={{
                height: '400px'
              }}
              className="d-block w-100"
              src="images/maize1.jpg"
              alt="First slide"
            />
            <Carousel.Caption className='carousel'>
              <h1><strong>Helping investors live their dreams</strong></h1>
              <p>We do all the homework for you while you sleep confortably.</p> 
              <Button variant='success'>Join us</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{height:'400px'}}>
            <img
              style={{height:'400px'}}
              className="d-block w-100"
              src="images/maize2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className='carousel'>
              <h1><strong>We bring every one together</strong></h1>
              <p>Connect investors to the right farmer is far more than just working it out!
                 We build a relationship.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{height:'400px'}}>
            <img
              style={{height:'400px'}}
              className="d-block w-100"
              src="images/maiz.jpg"
              alt="Third slide"
            />

            <Carousel.Caption className='carousel'>
              <h1><strong>We are one bridge that crosses all nations</strong></h1>
              <p> We are earnesting all possible strenght to see you smile.</p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default BootstrapCarousel
