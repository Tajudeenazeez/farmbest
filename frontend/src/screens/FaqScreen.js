import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

const   FaqScreen = () => {
  return (
    <>
     
      <Container className='faq-div' xs>
      <h3 className='text-black mt-3'>Frequently asked questions</h3>
      <Row className='text-success my-3'>
        <Col  xs={12}>
        
            <h3 className='text-success'>What we do</h3>
        
            <p className='text-black'>Farmbest is an Agric-Tech company that use modern technologies 
              to help improve farm yields, livestock production and mitigating 
              pest attack using best farm practice.
              The agricultural sector of Sub-Saharan Africa has several challenges top of which is 
              paucity in farm financing and market access for traceable produce. Our future-centric
              technology platform, E-farms is positioned to transform the entire Africa into the
              hub that feeds the world by matching active small holder farmers and would-be farmers,
              with the finance and skills to practice sustainable agriculture; bringing together
              different interest groups whose interests are aligned, from farm-investors who want
              some return on investment, active small holder farmers who want to expand their farm 
              holdings but can't access timely farm financing, produce offtakers and exporters who
              source quality traceable produce, and potential graduate farmers passionate about 
              agriculture but with neither the skills nor funds to do so. The happiness that resonates
              among all stakeholders when they pull together is because together everyone achieves more.
            </p>
        </Col>

        <Col >
        <h3 className='text-success'>Trio investment</h3>
        <p className='text-black'>FarmBest investment platform is an initiative of farmBest
         Agric-Tech company to help farmers, investors and offtakers to profit from  quality farm 
         produce.Our farmers are well trained by experts in each field to ensure use 
         of best farm practice. Money from our investment platform are use to empower the
          farmers to increase their farming strength in areas of improved seedlings,
           fertilizer procurement, pesticide and modern farm equipment.
        </p>  
        </Col>
      </Row>

      <Row>
        <Col>
        <h3 className='text-success'  >Who can invest</h3>
        <p className='text-black'>
        The process of investment is carried out online through our website and Investment 
        opportunity is open to both individuals and corporate organizations, 
        Nigerians living in Nigeria or in the Diaspora, as well as non-Nigerians. 
        It doesn’t matter if you are in a paid employment, or self-employed; as long as 
        you are passionate about the agricultural sector or have some investible funds,
        you are highly eligible!
        </p>
       </Col>
      </Row>

      <Row>
        <Col>
        <h3 className='text-success' >How much can i invest</h3>
        <p className='text-black'>
        Each of our farm projects has a cost-effective cost structure, and you can invest as 
        much as you are able to in the selected farm project. You can invest in two or more 
        farms, whether for the same farm, or a combination of farms. Explore our farms to see 
        in detail how our farms are structured.
        </p>
        </Col>
      </Row>

      <Row>
      <Col>
        <h3 className='text-success' >How long can i invest</h3>
        <p className='text-black'>
        It depend on the chosen investment type. check our investment page for more details
        </p>
        </Col>
      </Row>


      <Row>
      <Col>
        <h3 className='text-success'>How much do i make as an investor</h3>
        <p className='text-black'>
        How much you make is dependent on the farm project you invest in.
         This is because different farm projects have different Return on 
         Investment ROI, Contract Period, and Investment Cost. The investor 
         gets back his investment plus an ROI commensurate to the farm project 
         he bought into. Explore our farms for further details
        </p>
        </Col>
      </Row>

      <Row>
      <Col>
        <h3 className='text-success' >What is the minimum investment amount?</h3>
        <p className='text-black'>
        Each of our farm projects has a minimum investment amount.
         To see the minimum amount for each farm project, explore our farms.
        </p>
        </Col>
      </Row>

      <Row>
      <Col>
        <h3 className='text-success'>How is the project managed</h3>
        <p className='text-black'>
        farmbest manages the different farm projects on behalf of all the investors;
         ensuring that agricultural best practices is followed, for optimal yield
        </p>
        </Col>
      </Row>

      <Row>
      <Col>
        <h3 className='text-success' >How do we make our money</h3>
        <p className='text-black'>
        We make money, when you make money! We share in the percentage of the profit,
         after our investors and farmers have taken theirs.
        </p>
        </Col>
      </Row>

     <Row>
      <Col>
        <h3 className='text-success'>What if their is disaster</h3>
        <p className='text-black'>
        To guarantee the safety of every investor’s funds, all farm projects would be insured. 
        We run a tripled layer investment protection – agricultural insurance, investment
         insurance and physical insurance.

        </p>
        </Col>
      </Row>

      <Row>
      <Col>
        <h3 className='text-success' >Can foreigners invest?</h3>
        <p className='text-black'>
        Everyone, from every country of the world, is eligible to invest. 
        Our platform offers ease of payment online for the selected farm project.
        </p>
        </Col>
      </Row>

      <Row>
      <Col>
        <h3 className='text-success'>How do i get back my funds after the tenure of investment is completed</h3>
        <p>
        Both the initial capital invested and the ROI are duly sent directly to the
         submitted account details of the Farm investor.
      </p>
        </Col>
      </Row>

      
      <Row>
        <Col>
        
        <h3 className='text-success my-3'>Farming program</h3>
        <p className='text-black'> In FarmBest, planting and cultivation of high yield crops with improved
           technology gives us the best result in all our farming activities
        </p>   
           <h3 className='text-success my-3'>Maize Crop</h3>
        <p className='text-black'>We choose maize planting among other selected plant because of its highly industrial 
          demand and unfortunate low supply in the market. Maize has continuously increase its 
          demand over the years due to increase in animal feed production and food production 
          company creation in the last one decade. It was estimated that animal feed production 
          only consumes 2/3 of maize produce in the country annually leaving the remaining 1/3 for
           food production and other consumptions. 
        </p>
        <p className='text-black my-3'>
          FarmBest seek to assist farmers in maize production meet up the demand supply chain 
          through its investment platform by providing all participating farmers with finance 
          and expert advice needed to increase their farm yield.
          </p>
          </Col>   

      </Row>
    
      </Container>
    </>
  )
}

export default  FaqScreen
