import React from 'react'
import { MdChevronRight } from "react-icons/md";
const Hbanner = ({title,title2}) => {
  return (
    <div>
      <div className='bg-white py-4 px-5 a_cursor_pointer shadow-sm flex-wrap d-flex justify-content-between rounded-3 mt-4 align-items-center'>
      <h5>{title}</h5>
      <h6 className='a_h15 a_redlite_color2 '>{title2}<MdChevronRight  size={20}/></h6>
    </div>
    </div>
  )
}

export default Hbanner
