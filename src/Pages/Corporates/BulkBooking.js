import React from 'react'

const BulkBooking = () => {
  return (
   <div className='my-2 text-white position-relative a_bulk_booking' style={{background:"url(https://assets-in.bmscdn.com/webin/corporate/bulk-booking.png)",height:"286px"}}>
    <div className='position-absolute top-0 start-0 w-100 h-100' style={{background:"rgba(0,0,0,0.5)",zIndex:1}}>
      <div className="row justify-content-between align-items-center position-relative m-5 p-3 " style={{zIndex:2}}>
        <div className="col-12 col-md-5">
          <h6 className='my-3'>Bulk Booking</h6>
          <h2>Exclusive corporate experiences from BookMyShow</h2>
        </div>
        <div className="col-12 col-md-5 ps-">
          <button className='a_button text-center' style={{padding:"12px 110px"}}>Explore now</button>
        </div>
      </div>

    </div>
   </div>
  )
}

export default BulkBooking
