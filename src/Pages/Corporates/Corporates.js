import React from 'react'
import Banner from './Banner'
import Partner from './Partner'
import Records from './Records'
import Promotions from './Promotions'
import Solutions from './Solutions'
import "./Corporates.css"
import Campigions from './Campigions'
import OurProducts from './OurProducts'
import BulkBooking from './BulkBooking'
import TestiMonials from './TestiMonials'
import Questions from './Questions'

const Corporates = () => {
  return (
    <div>
     <Banner/>
   <div  style={{backgroundColor:"#F5F5F5"}}>
   <div className="container">
      <Partner/>
      <Records/>  
      <Promotions/>
      <Solutions/>
      <div className='a_background my-3 p-5 d-flex align-items-center justify-content-between'>
        <p style={{fontSize:"18px"}} className='m-0'>Get priority support from the experts in the entertainment industry.</p>
        <button className='a_button'>Access the complete suite</button>
      </div>
      <Campigions/>
      <OurProducts/>
      <BulkBooking/>
      <TestiMonials/>
      <Questions/>
     </div>
   </div>
    </div>
  )
}

export default Corporates
