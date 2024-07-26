import React from 'react'
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image4 from '../assets/4.png'
import image5 from '../assets/5.png'
import image6 from '../assets/6.png'

import Service from './Service'
import Testimonial from './Testimonial'
import Navbar from './Navbar'
import Hero from './Hero'


function Home() {
  return (
    <>
    <div className="background">
    <Navbar/> 
    <Hero/> 
    </div>
    <div className='text-center'>
        <h2 className='mt-4'>Brands we have worked with</h2>
        <h4 >we help clients achieve their business goals by providing tailored solutions and expert guidiance</h4>
        <div className="marquee-container">
              <div className="marquee-content">
                <img src={image1} alt="" className='me-3' style={{height:'100px'}}/>
                <img src={image2} alt="" className='me-3' style={{height:'100px'}}/>
                <img src={image3} alt="" className='me-3' style={{height:'100px'}}/>
                <img src={image4} alt="" className='me-3' style={{height:'100px'}}/>
                <img src={image5} alt="" className='me-3' style={{height:'100px'}}/>
                <img src={image6} alt="" className='me-3' style={{height:'100px'}}/>

            </div>
        </div>

    </div>
    <div className="container mt-5">
        <h2 data-aos="fade-right" data-aos-duration="3000">We are the all-in-one agency for your branding,</h2>
       <h2 data-aos="fade-right" data-aos-duration="3000">printing and advertising needs</h2>
    </div>
    <Service />
    <Testimonial/>
    <div className="bg-warning mt-5" style={{minHeight:'250px', padding:'20px 0'}}>
      <div className="container pt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8" data-aos="fade-up">
          <h2>We help brands stand out and share their message no matter their market or industry.</h2>
          <p>Real estate | Education | Retail | Events | Conferences | Non-profit | Technology | SMEs
          </p>
        </div>
        <div className="col-md-4 text-md-end text-sm-start" data-aos="fade-up">
          <a href="" className="btn btn-dark fw-bold">Work with us</a>
        </div>
      </div>
      </div>
    </div>


    </>
  )
}

export default Home