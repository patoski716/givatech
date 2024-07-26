import React from 'react'
import test1 from '../assets/test1.png';
import test2 from '../assets/test2.png'
import test3 from '../assets/test3.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024, // breakpoint for desktop
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768, // breakpoint for tablet/mobile
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
    const cardData = [
        {image: test1,title:'Designer Bamifemi', subtitile:'CEO, Bamifemi Arts',content:'We are thrilled with Givatech rebranding work. They took the time to understand our business and created a brand that perfectly reflects our values and mission. The new logo, color scheme, and overall brand identity have given us a competitive edge. Givatech dedication and creativity are impressive.'},
        {image: test2,title:'Cresent Daniel', subtitile:'Product Manager, Clique Life',content:'The team at Givatech exceeded our expectations. From the initial consultation to the final delivery, their professionalism and expertise were evident. They crafted a compelling brand story that resonates with our target audience. The feedback from our clients has been overwhelmingly positive, and we are happy with the results.'},
        {image: test3,title:'James Erica', subtitile:'CEO, Spato Media',content:'Choosing Givatech for our brand overhaul was one of the best decisions we have made. They brought fresh, innovative ideas and executed them flawlessly. The new branding has given our company a modern look that stands out. Their strategic approach and creative flair have been instrumental in our recent growth.'},
        // { image: test4, title: 'Babalawo Iguana', subtitile:'CEO, Digitechlab',content: 'We are thrilled with the rebranding work done by Givatech. Their team understood our business and created a brand that reflects our values and mission. The new logo, color scheme, and overall brand identity have given us a competitive edge. Their dedication and creativity are impressive, and we look forward to continuing our partnership.' },
        
    ]
  return (
    <div>
        <div className="container mt-5">
            <div className="text-center mb-4" data-aos="fade-up" data-aos-duration="3000">
                <h4>Testimonial</h4>
                <h2>What our beneficiaries say about us</h2>
            </div>

            <div className="row">
            <Slider {...settings}>
            {cardData.map((card, index) => (
                <div className="col-md-4 mb-3"  key={index}>
                    <div className="card" style={{width:'18rem'}}>
                    <p class="card-text px-3 pe-3 pt-3">
                    {card.content}
                    </p>
                    <div className="mt-4 px-3 pe-3 pt-3 pb-3">
                        <img src={card.image} alt="" className='rounded' />
                        <p className='fw-bold mt-3'>{card.title}</p>
                        <p >{card.subtitile}</p>
                    </div>
                    </div>
                </div>
              ))}
              </Slider>

            </div>
        </div>
    </div>
  )
}

export default Testimonial