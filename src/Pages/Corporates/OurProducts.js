import React from 'react'

const OurProducts = () => {
  return (
    <div className='bg-white py-4 my-2 a_our_product'>
     <h6 className='ps-5 mb-4'>OUR PRODUCTS</h6>
     <div className=''>
        <div className="row text-white">
            <div className="col-12 col-md-6 p-0">
                <div className='a_products' style={{background:"url(https://in.bmscdn.com/webin/corporate/movie-voucher.png)"}}>
                   <div style={{width:"60%",fontSize:"20px"}} className='text-center mx-auto text-start mt-5'>
                   <h6 style={{fontSize:"34px",}} className='text-start py-4'>Movie Vouchers</h6>
                   <p style={{fontWeight:"600"}} className='text-start'>Highly customizable, single usage, <br />
                   promotional codes in the form of <br />
                   set amount / value or a percentage <br />
                   of discount on the ticket cost. <br />
                   An ideal suit for movie and product <br />
                   promotions, consumer activation <br />
                   and countless more!</p>
                   <div className='text-start'>
                   <button className='a_buttons'>Enquire</button>
                   </div>
                   </div>
                </div>
            </div>
            <div className="col-12 col-md-6 p-0">
                <div className='a_products' style={{background:"url(https://in.bmscdn.com/webin/corporate/gift-voucher.png)"}}>
                   <div style={{width:"60%",fontSize:"20px"}} className='text-center mx-auto text-start mt-5 a_box'>
                   <h6 style={{fontSize:"34px",}} className='text-start py-4'>Gift Vouchers</h6>
                   <p style={{fontWeight:"600"}} className='text-start'>Amazing little pre-loaded cash cards<br />
                   which can be used to purchase tickets<br />
                   set amount / value or a percentage <br />
                   across all categories for 6 months.<br />
                   Be it employee rewards, trade channel<br />
                   promotions, consumer activation <br />
                   a gift voucher fits all.</p>
                   <div className='text-start'>
                   <button className='a_buttons'>Enquire</button>
                   </div>
                   </div>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default OurProducts
