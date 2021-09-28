import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from "react-responsive-carousel";
import { Image } from "react-bootstrap";


const Testimonial = () => {
  return (
    <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={6100}
    >
      
      <div>
        <Image src='images/maize1.jpg'/>
        <div className='myCarousel'>
          <h3>Olanipekun Jamiu</h3>
          <h4>Farmer</h4>
          <p className='legend'>
            My friend introduce farmbest to me, i was convinced about what they do,
            so i enrol in their program as a farmer, i was trained on using modern technology for 
            all or most of my farm activities. i am able to manage almost triple of my farmland with greater yield.
            farmbest is the best</p>
        </div>
      </div>
      <div>
        <Image src='images/maize1.jpg'/>
        <div className='myCarousel'>
          <h3>Olanipekun Jamiu</h3>
          <h4>Farmer</h4>
          <p className='legend'>
            My friend introduce farmbest to me, i was convinced about what they do,
            so i enrol in their program as a farmer, i was trained on using modern technology for 
            all or most of my farm activities. i am able to manage almost triple of my farmland with greater yield.
            farmbest is the best</p>
        </div>
      </div>
      <div>
        <Image src='images/maize1.jpg'/>
        <div className='myCarousel'>
          <h3>Olanipekun Jamiu</h3>
          <h4>Farmer</h4>
          <p className='legend'>
            My friend introduce farmbest to me, i was convinced about what they do,
            so i enrol in their program as a farmer, i was trained on using modern technology for 
            all or most of my farm activities. i am able to manage almost triple of my farmland with greater yield.
            farmbest is the best</p>
        </div>
      </div>
    </Carousel>
  )
}

export default Testimonial
