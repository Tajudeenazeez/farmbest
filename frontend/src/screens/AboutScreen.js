import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";


const AboutScreen = () => {
  return (
    <>
    
      <Row className='bg-image'>
        <h3 className='text-center text-white my-auto'>At FarmBest...<br/>
        We are your bestfriend</h3>
       
      </Row>
      <Container className='about-div'>

      <Row className='text-success my-5'>
        <Col  xs={12}>
            <h3 className='text-success'>
              What we do
            </h3>
            <p className='text-white'>Farmbest is an Agric-Tech company that use modern technologies 
              to help improve farm yields, livestock production and mitigating 
              pest attack using best farm practice.
            </p>
        </Col>
        <Col >
        <h3 className='text-success'>Trio investment</h3>
        <p className='text-white'>FarmBest investment platform is an initiative of farmBest
         Agric-Tech company to help farmers, investors and offtakers to profit from  quality farm 
         produce.Our farmers are well trained by experts in each field to ensure use 
         of best farm practice. Money from our investment platform are use to empower the
          farmers to increase their farming strength in areas of improved seedlings,
           fertilizer procurement, pesticide and modern farm equipment.</p>  
        </Col>
      </Row>
      <Row>
        <h3 className='text-success my-3'>Farming program</h3>
        <p className='text-white'> In FarmBest, planting and cultivation of high yield crops with improved
           technology gives us the best result in all our farming activities
        </p>   
           <h3 className='text-success my-3'>Maize Crop</h3>
        <p className='text-white'>We choose maize planting among other selected plant because of its highly industrial 
          demand and unfortunate low supply in the market. Maize has continuously increase its 
          demand over the years due to increase in animal feed production and food production 
          company creation in the last one decade. It was estimated that animal feed production 
          only consumes 2/3 of maize produce in the country annually leaving the remaining 1/3 for
           food production and other consumptions. 
        </p>
        <p className='text-white my-3'>
          FarmBest seek to assist farmers in maize production meet up the demand supply chain 
          through its investment platform by providing all participating farmers with finance 
          and expert advice needed to increase their farm yield.
          </p>
          

      </Row>
      </Container>
      <Row className='bg-image1 my-3'>
        <Col className='my-auto' md={5}>
        <h3 className='text-center text-white'>Our Mission</h3>
        <p className='text-center text-white'>To use technological advances to 
        improve farm produce while bridging the gap between farmers and investors interested 
        in investing in the agricultural produce. </p>  
        </Col>
        <Col className='my-auto' md={5}>
        <h3 className='text-center text-white' >Our Vision</h3>
        <p className='text-center text-white' >Our vision is to increase food supply chain by empowering local farmers to 
          become mechanized farmers within a short period of time. </p>
        </Col>
        <Col className='my-auto' md={5}>
        <h3 className='text-center text-white' >Our Core value</h3>
        <p className='text-center text-white' >
             Food supply shortage,
             agric-investment, crop improvement, Empowerment and Research.
          </p>
        </Col>
      </Row>

      <Container className='wrapper'>
      <Row>
        <h3 className='text-center'>Meet our Team</h3>
        <p className='text-center'>For every standing tree that withstand a strong storm hid its root deep in the soil</p>
        <Col >
          <div className='mx-3'>
            <img className='img-holder' src='images/maize1.jpg' alt='me'/>
          </div>
          <div>
          <span ><Link to='#'><i className='fab fa-facebook'></i></Link></span>   
          <span><Link to='#'><i className='fab fa-instagram'></i></Link></span>   
          <span><Link to='#'><i className='fab fa-twitter'></i></Link></span>   
          <span><Link to='#'><i className='fab fa-linkedin-in'></i></Link></span>     
          </div>
          <div>
            <h3>OPELOYERU KOLAWOLE</h3>
            <h4>Director</h4>
          </div>
        </Col>
        <Col >
          <div className='mx-3'>
            <img className='img-holder' src='images/maize1.jpg' alt='me'/>
          </div>
          <div>
          <span ><Link to='#'><i className='fab fa-facebook'></i></Link></span>   
          <span><Link to='#'><i className='fab fa-instagram'></i></Link></span>   
          <span><Link to='#'><i className='fab fa-twitter'></i></Link></span>   
          <span><Link to='#'><i className='fab fa-linkedin-in'></i></Link></span>   
          </div>
          <div>
            <h3>OPELOYERU KOLAWOLE</h3>
            <h4>Coordinating Executive</h4>
          </div>
        </Col>
        <Col>
          <div className='mx-3'>
            <img className='img-holder' src='images/maize1.jpg' alt='me'/>
          </div>
          <div>
          <span ><Link to='#'><i className='fab fa-facebook'></i></Link></span>   
          <span><Link to='#'><i className='fab fa-instagram'></i></Link></span>   
          <span><Link to='#'><i className='fab fa-twitter'></i></Link></span>   
          <span><Link to='#'><i className='fab fa-linkedin-in'></i></Link></span>     
          </div>
          
          <div>
            <h3>OPELOYERU KOLAWOLE</h3>
            <h4>Farm Manager</h4>
          </div>
        </Col>
      </Row>
      </Container>
      
    </>
  )
}

export default AboutScreen
