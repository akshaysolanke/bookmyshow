import React from 'react'
import { BsExclamationCircle } from "react-icons/bs";

const ShowCard = ({imgPath,title,background="#ECF5FF"}) => {
  return (
    <div style={{background}} className='a_shows_card text-center'>
      <div className="a_shows_card_img">
        <img src={imgPath} alt="" />
      </div>
      <h4 style={{fontSize:"24px"}} className='fw-bold'>{title}</h4>
      <BsExclamationCircle size={25} className='a_redlite_color2'/>
    </div>
  )
}

export default ShowCard
