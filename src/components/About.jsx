import React from 'react'
import Navbar from './Navbar'
import plane from '../assets/PLANE.png'
import plane2 from '../assets/plane2.png'

function About() {
  return (
    <>
    <Navbar/>
    <div className="text-center bg-image">
        <div className="container">
          <div>
            <h2 className='pt-5'>About us</h2>
            <p>
            Over 13 years of crafting brands and promoting the best businesses.
            </p>
          </div>

         
        </div>
      </div>
      

      <div className="container">
        <h2>Our Story</h2>
        <p>Coverly is an outstanding and efficient website that helps job seekers to generate cover letters for any position. Applying for different jobs with different cover letters can be tasking, which is why we are here to help job seekers generate outstanding Cover letters for any position.
        </p>
        <div className="mt-5">
            <div className="row">
                <div className="col-md-6" data-aos="fade-up">
                    <img src={plane} alt="" className='img-fluid' />
                </div>
                <div className="col-md-6" data-aos="fade-up">
                    <h3>Mission</h3>
                    <p>Empowering brands to realize their full potential through strategic creativity, cutting-edge design, and unwavering commitment to excellence. We strive to foster meaningful relationships, deliver measurable results, and exceed expectations at every touchpoint, fueling success and shaping the future of branding and advertising.</p>
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-md-6" data-aos="fade-up">
                <h3>Vision</h3>
                <p>To be the leading force in shaping innovative and impactful brand experiences that inspire connection, loyalty, and growth for our clients worldwide</p>
                </div>
                <div className="col-md-6" data-aos="fade-up">
                    <img src={plane2} alt="" className='img-fluid'/>
                </div>
            </div>
        </div>
      </div>

      <div className="bg-warning mt-5" style={{minHeight:'250px', padding:'20px 0'}}>
      <div className="container pt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8" data-aos="fade-up">
          <h2>Elevate your brand message with design and advertising that stands out</h2>
         
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

export default About