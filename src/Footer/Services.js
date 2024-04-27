import React from 'react'
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiTicket } from "react-icons/gi";
import { FaEnvelopeOpenText } from "react-icons/fa";
const Services = () => {
    const data = [
        {
            icon:<RiCustomerService2Fill size={50} />,
            title: "24/7 CUSTOMER CARE",
        },
        {
            icon:<GiTicket size={50} />,
            title: "RESEND BOOKING CONFORMATIONS",
        },
        {
            icon:<FaEnvelopeOpenText size={50}/>,
            title: "SUBSCRIBE TO THE NEWSLETTERS",
        },
    ]
  return (
    <section className='a_light_dark text-white'>
        <div className="container py-2">
           <div className="row">
            {data.map((value,index)=>{
                return <div key={index} className="col-12 col-md-4 text-center a_service_box a_pointer">
                    {value.icon}
                    <p className='mt-2 a_h12'>{value.title}</p>
                </div>

              
            })}
           </div>
        </div>
    </section>
  )
}

export default Services
