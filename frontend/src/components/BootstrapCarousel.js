import React from 'react'
import {Carousel, Button} from "react-bootstrap";

const BootstrapCarousel = () => {
  return (
    <>
      <Carousel>
          <Carousel.Item style={{height:'80vh'}}>
            <img
              style={{
                height: '80vh'
              }}
              className="d-block w-100"
              src="images/maize1.jpg"
              alt="First slide"
            />
            <Carousel.Caption className='maincarousel'>
              <div className='carouselbox'>
              <h1>Helping investors live their dreams</h1>
              <p>We do all the homework for you while you sleep confortably.</p> 
              </div>
              <Button variant='success'>Join us</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{height:'80vh'}}>
            <img
              style={{height:'80vh'}}
              className="d-block w-100"
              src="images/maize2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className='maincarousel'>
              <h1><strong>We bring every one together</strong></h1>
              <p>Connect investors to the right farmer is far more than just working it out!
                 We build a relationship.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{height:'80vh'}}>
            <img
              style={{height:'80vh'}}
              className="d-block w-100"
              src="images/maiz.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className='maincarousel'>
              <h1><strong>We are one bridge that crosses all nations</strong></h1>
              <p> We are earnesting all possible strenght to see you smile.</p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    </>
  )
}

export default BootstrapCarousel
