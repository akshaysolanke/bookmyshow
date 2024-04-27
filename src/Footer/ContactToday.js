import React from 'react'
import { FaGithub } from "react-icons/fa";

const ContactToday = () => {
  return (
   <div style={{backgroundColor:"#313035"}}>
    <section className= " text-white">
    <div className="container py-4">
        <div className="row gap-2 align-items-center">
            <div className="col-12 col-md-8">
                <div className="d-flex flex-wrap gap-3 align-items-center ">
                <FaGithub size={30} className='mb-2'/>
                <h6>List Your Show</h6>
                 <h6 className='fw-normal'>Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</h6>
                </div>
            </div>
            <div className="col-12 col-md-2 text-end  ms-auto">
                <button className='a_btn'>Contact Today!</button>
            </div>
        </div>
    </div>

   </section>
   </div>
  )
}

export default ContactToday
