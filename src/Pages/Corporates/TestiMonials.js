import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const TestiMonials = () => {
  return (
    <div className='my-4'>
     <h5 className='my-3 text-center'>Testimonials</h5>
     <Carousel  showStatus={false}>
            <div  className='border shadow'>
                <div className="row text-dark bg-white p-3" >
                    <div className="col-12 col-md-3">
                        <div className="a_img_box">
                            <img src="https://in.bmscdn.com/webin/corporate/mastercard-logo.jpg" alt="" />
                        </div>
                

                    </div>
                    <div className="col-12 col-md-9  text-start border-start border-2 ps-4 py-4">
                    <p className='a_h13 text-start'>“Through our partnership, we have been able to create waves of excitement and interest amongst our customers. It has helped us to build a long lasting relationship & a special bond with our clients as movies is something that appeals to everyone. Thank you, BookMyShow!“</p>
                    <h6 className='text-start a_h16 text-secondary mt-4'>Vikas Verma<br />Executive Director<br />MasterCard (South Asia)</h6>
                    </div>
                </div>
            </div>
            <div>
                <div className="row text-dark bg-white p-3" >
                    <div className="col-12 col-md-3">
                        <div className="a_img_box">
                            <img src="https://in.bmscdn.com/webin/corporate/cm-logo.png" alt="" />
                        </div>
                

                    </div>
                    <div className="col-12 col-md-9  text-start border-start border-2 ps-4 py-4">
                    <p className='a_h13 text-start'>“Through our partnership, we have been able to create waves of excitement and interest amongst our customers. It has helped us to build a long lasting relationship & a special bond with our clients as movies is something that appeals to everyone. Thank you, BookMyShow!“</p>
                    <h6 className='text-start a_h16 text-secondary mt-4'>Vikas Verma<br />Executive Director<br />MasterCard (South Asia)</h6>
                    </div>
                </div>
            </div>
            <div>
                <div className="row text-dark bg-white p-3" >
                    <div className="col-12 col-md-3">
                        <div className="a_img_box">
                            <img src="https://in.bmscdn.com/webin/corporate/cm-logo.png" alt="" />
                        </div>
                

                    </div>
                    <div className="col-12 col-md-9  text-start border-start border-2 ps-4 py-4">
                    <p className='a_h13 text-start'>“Through our partnership, we have been able to create waves of excitement and interest amongst our customers. It has helped us to build a long lasting relationship & a special bond with our clients as movies is something that appeals to everyone. Thank you, BookMyShow!“</p>
                    <h6 className='text-start a_h16 text-secondary mt-4'>Vikas Verma<br />Executive Director<br />MasterCard (South Asia)</h6>
                    </div>
                </div>
            </div>
        </Carousel>
        <div className="text-center pb-4">
            <button type="button" class="btn btn-outline-danger px-5 py-2 fw-bold a_bt">Partner With Us</button>
            </div>
    </div>
  )
}

export default TestiMonials
