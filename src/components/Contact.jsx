import React from 'react'
import Navbar from './Navbar'
import phone from '../assets/phone.svg'
import sms from '../assets/sms.png'
import whatsapp from '../assets/whatsapp.png'
import "bootstrap-icons/font/bootstrap-icons.css";

function Contact() {
  return (
    <>
    <Navbar/>
    <div className="text-center bg-image">
        <div className="container">
          <div>
            <h2 className='pt-5'>Contact Us</h2>
            <p>
            Reach Us @ givatechkreations@gmail.com for branding and advertising agency for businesses, organizations and non-profits.
            </p>
          </div>
        </div>
      </div>
      <div className="container mb-5"> 
        <div className="mt-2">
            <div className="row">
            <div className="col-md-6">
                <h2>How can we help?</h2>
                <p><i className="bi bi-phone me-3"></i>+2347019919730</p>
                <p><i className="bi bi-whatsapp me-3"></i>+2347019919730</p>
                <p><i className="bi bi-envelope me-3"></i>givatechkreations@gmail.com</p>
            </div>
            <div className="col-md-6">
              <div className='input-group'>
              <input type="text" placeholder='Name...' className='form-control me-3' />
              <input type="text" placeholder='Subject...' className='form-control' />
              </div>
              <div className='input-group mt-3'>
              <input type="email" placeholder='Email...' className='form-control me-3' />
              <input type="text" placeholder='Phone number...' className='form-control' />
              </div>
              <div className="mt-3">
                <textarea name="messsage" rows={7} id="" placeholder='Enter your message here' className='form-control'></textarea>
              </div>
              <div className="mt-3">
              <input type="button" value="Submit" className='btn btn-dark' />
              </div>

            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact