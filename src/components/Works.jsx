import Navbar from './Navbar'
import React from 'react'
import t1 from '../assets/t1.png'
import t2 from '../assets/t2.png'
import t3 from '../assets/t3.png'
import t4 from '../assets/t4.png'
import t5 from '../assets/t5.png'
import t6 from '../assets/t6.png'



function works() {
  const cardData = [
    {image: t1},
    {image: t2},
    {image: t3},
    {image: t4},
    {image: t5},
    {image: t6}
    ]
  return (
    <>
    <Navbar/>
    <div className="text-center bg-image">
        <div className="container">
          <div>
            <h2 className='pt-5'>Our Work</h2>
            <p>
            Every project reminds us of how much we love our work.
            </p>
          </div>

         
        </div>
      </div>

      <div className="container">
      <div className='mb-5'>
            <div className="row">
        {cardData.map((card, index) => (

              <div className="col-md-4 mt-5" data-aos="fade-up" data-aos-duration="3000"  key={index}>
                
                <img src={card.image} alt="" className='img-fluid' style={{maxWidth: '18rem',maxHeight:'200px'}}/>
                
              </div>
              ))}

            </div>
          </div>
      </div>

    </>
  )
}

export default works