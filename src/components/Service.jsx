import React from 'react'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.png'
import pic6 from '../assets/pic6.png'

function Service() {
    const cardData = [
        {image: pic1,title:'Design', content:'Our design team crafts visually stunning solutions tailored to elevate your brands identity and captivate your audience. Whether its logo design, brand collateral, or digital assets, we blend creativity with strategy to deliver designs that leave a lasting impression.'},
        {image: pic2,title:'Printing', content:'Our state-of-the-art printing services ensure your brand materials are brought to life with precision and vibrancy. From business cards to large-scale banners, we offer high-quality printing solutions that amplify your brands presence and message.'},
        {image: pic3,title:'Ad Creatives', content:'Engage and inspire your audience with captivating ad creatives designed to drive results. Our team combines storytelling prowess with strategic thinking to craft compelling advertisements across various platforms, helping your brand stand out in a crowded marketplace.'},
        { image: pic4, title: 'Product Packaging', content: 'Elevate your products appeal and shelf presence with eye-catching packaging designs that communicate your brands values and essence. We specialize in creating packaging solutions that not only protect your product but also enhance its perceived value and desirability.' },
        { image: pic5, title: 'T-shirt Production', content: 'Make a statement with custom-designed t-shirts that reflect your brands personality and style. From concept to creation, we offer seamless t-shirt production services, ensuring your brand message is boldly showcased on high-quality apparel that resonates with your audience' },
        { image: pic6, title: 'Consulting', content: 'Gain strategic insights and actionable recommendations tailored to propel your brand forward. Our consulting services provide expert guidance on branding, marketing, and design, helping you navigate challenges and seize opportunities in todays dynamic business landscape.' },
    ]
  return (
    <div className='container mt-5'>
        <div className="row">
        {cardData.map((card, index) => (
            <div className="col-md-4 mb-3" data-aos="fade-up" data-aos-duration="3000"  key={index}>
            <div class="card" style={{Width: '18rem'}}>
            <img src={card.image} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h3 class="card-title">{card.title}</h3>
                <p class="card-text">{card.content}</p>
            </div>
            </div>
            </div>
              ))}
        </div>
    </div>
  )
}

export default Service