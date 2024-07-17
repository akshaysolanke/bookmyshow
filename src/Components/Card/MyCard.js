import React from 'react'
import "./MyCard.css"
import { useNavigate } from 'react-router-dom'


const MyCard = ({src, name, title1, title2,description, isTitle1Slice = true, isNameSlice = true }) => {
  const navigate = useNavigate()

  const redirectUrlHandler = () => {
    navigate("/details")
  }
  return (
    <div onClick={redirectUrlHandler} style={{cursor:"pointer"}}>
      <div className="a_top_card mt-5">
        <div className="a_movie_card a_cursor_pointer">
            <img src={src} alt="" />
        </div>
      </div>
      <div className="a_bottom_card mt-3 ps-2">
        <h5 className='a_h19'>{(name?.length < 24 || !isNameSlice) ? name : `${name.slice(0, 40)}...`}</h5>
        <h6 className=' a_h16 my-1 text-muted'>{(title1?.length < 18 || !isTitle1Slice) ? title1 : `${title1.slice(0, 18)}...`}</h6>
        {title2 && <h6 className=' a_h14 text-muted'>{title2}</h6>}
        <h6 className=' b_h14 text-muted'>{description}</h6>

      </div>
    </div>
  )
}

export default MyCard
