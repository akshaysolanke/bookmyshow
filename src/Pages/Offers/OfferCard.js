import React from 'react'
import { CiLaptop } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";

const OfferCard = ({backgroundImgUrl,logoUrl,description,title,date}) => {
  return (
    <div className='bg-white a_card my-3 border'>
    <div className="a_top">
        <div className="a_img_box">
            <img src={backgroundImgUrl} alt="" />
        </div>
        <div className='a_hover_content_overlay'></div>
        <div className="a_hover_content">
            <h6 className='pt-3 pb-2'>ABOUT OFFER</h6>
            <p>{description}</p>
            <div>
            <small className='a_h11 a_white text-white'>AVAILABLE FOR</small>
        <div className='d-flex gap-3 align-items-center text-center justify-content-center mt-2'>
            <div>
                <div className="a_icon rounded-pill">
                <CiLaptop  size={20}/>
                </div>
                <small className='a_h9'>WEB</small>
            </div>
            <div>
                <div className='a_icon rounded-pill'>
                <CiMobile1 size={20}/>
                </div>
                <small className='a_h9'>MOBILE</small>
            </div>

        </div>
            </div>
        </div>
        <div className="a_logo">
            <img src={logoUrl} alt="" />
        </div>
       
    </div>
    <div className="a_bottom bg-white p-2">
        <h6>
        {title?.length > 26 ? `${title?.toUpperCase()?.slice(0, 23)}...` : title?.toUpperCase()}
        </h6>
        <div className="a_date_range">
        <span>Valid till <span className='roboto-regular'>{date}</span></span>
        </div>
    </div>
    </div>
  )
}

export default OfferCard
