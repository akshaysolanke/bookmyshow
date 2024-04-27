import React from 'react'
import MultiCarousel from 'react-multi-carousel';


const Campigions = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
  },
  desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
  },
  tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
  },
  mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
  }
  };

  const data = [
    {
      imgPath:"https://in.bmscdn.com/webin/corporate/hp-offer.jpg"
    },
    {
      imgPath:"https://in.bmscdn.com/webin/corporate/addidas-offer.jpg"
    },
    {
      imgPath:"https://in.bmscdn.com/webin/corporate/zivame-offer.jpg"
    },
    {
      imgPath:"https://in.bmscdn.com/webin/corporate/acuvue-offer.jpg"
    },
    {
      imgPath:"https://in.bmscdn.com/webin/corporate/vijay-sales-promotions.png"
    },
    {
      imgPath:"https://in.bmscdn.com/webin/corporate/test-drive-generation.png"
    },
    {
      imgPath:"https://in.bmscdn.com/webin/corporate/movie-promotions.png"
    },
    {
      imgPath:"https://in.bmscdn.com/webin/corporate/lenovo-generation.png"
    },
    {
      imgPath:"https://in.bmscdn.com/webin/corporate/croma-promotions.png"
    },
  ]
  return (
    <div className='a_movies_carousel' >
     <div className='py-4 bg-white'>
      <h6 className='ms-4 mb-2'>CAMPAIGNS WE’RE PROUD OF</h6>
      <div>
      <MultiCarousel responsive={responsive}>
        {data.map(({imgPath},index) => {
          return <div key={index} className='ps-2 mt-3'>
            <img src={imgPath} alt="" />
          </div>
        })}
      </MultiCarousel>
      </div>

     </div>
    </div>
  )
}

export default Campigions
