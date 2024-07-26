import React from 'react'
import Logo from '../assets/givatech.png'
import Phone from "../assets/phone.svg";
import Whatsapp from "../assets/whatsapp.png";
import Mail from "../assets/sms.png";


function Footer() {
  const currentYear = new Date().getFullYear();
  return (

       <div className="bg-dark text-light container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-5 mb-5">
              <img src={Logo} alt="" className="logo img-fluid" style={{height:'30px'}} />
              <p className="mt-3">
              We offer the best Branding and IT services in Nigeria. At Iykemedia, we are dedicated to delivering exceptional service tailored to meet your unique business needs
              </p>
            </div>
            <div className="col-md-4 mt-5 mb-5">
              <h3>Quick Links</h3>
              <div className="nav-links">
                <div className="mt-3">
                  <a href="/our-work" className='text-decoration-none list-style-none text-light'>Our Work</a>
                </div>
                <div className="mt-3">
                  <a href="/about" className='text-decoration-none list-style-none text-light'>About Us</a>
                </div>
                <div className="mt-3">
                  <a href="/contact" className='text-decoration-none list-style-none text-light'>Contact Us</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5 mb-5">
              <h3>Contact</h3>
              <div className="nav-links">
                <div className="mb-3 li">
                  <a href="tel:09137029216" className='text-decoration-none list-style-none text-light'>
                    <span className="me-3">
                    <i className="bi bi-phone me-3"></i>
                    </span>
                    +234 9137029216
                  </a>
                </div>
                <div className="mt-3 li">
                  <a href="https://wa.me/+2349137029216" className='text-decoration-none list-style-none text-light'>
                    <span className="me-3">
                    <i className="bi bi-whatsapp me-3"></i>
                    </span>
                    +234 9137029216
                  </a>
                </div>
                <div className="mt-3 li">
                  <a href="mailto:info@digitechlab.com" className='text-decoration-none list-style-none text-light'>
                    <span className="me-3">
                    <i className="bi bi-envelope me-3"></i>
                    </span>
                    contact@givatech.net
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <hr />
            <div className="text-center py-3">
            Copyright   &copy; Givatech {currentYear}. All Rights Reserved.
            </div>
      </div>
  )
}

export default Footer