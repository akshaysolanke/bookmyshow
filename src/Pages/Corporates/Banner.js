import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";



function AppInput({label, placeholder, type="text"}) {
    return (
        <div className="mb-3">
            <label htmlFor="name" className="a_h12"><span className="text-danger">*</span>{label}</label> <br />
            <input type={type} style={{padding:"6px 10px",outline:"none"}} className="border rounded-1 mt-1 w-100" placeholder={placeholder} />
        </div>
    )
}

const Banner = () => {
  return (
    <div
      style={{
        background:
          "url(https://assets-in.bmscdn.com/webin/corporate/corp-banner-bg.jpg)",
        height: "500px",
      }}
      className="position-relative text-white"
    >
      <div
        className="h-100 w-100 position-absolute top-0 left-0"
        style={{ background: " rgba(0,0,0,0.7)", zIndex: 1 }}
      >
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row text-white">
            <div
              className="col-12 col-md-7 text-center"
              style={{ marginTop: "100px" }}
            >
              <h1>Entertainment you can gift.</h1>
              <p className="my-3 a_h19">
                A variety of solutions to skyrocket your business with vouchers,
                <br /> promotions, loyalty, employee recognition & rewards.
              </p>
              <div
                style={{ width: "55%" }}
                className=" mx-auto d-flex align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center gap-2">
                  <FaRegCirclePlay size={20} />
                  <h5 className="mt-2">Watch Video</h5>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <IoMdDownload size={20} />
                  <h5 className="mt-2">Download Brochure</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <form action="" className="bg-white p-4 w-75 mx-auto rounded-1 text-dark m-4">
                <AppInput label={"Full Name"} placeholder={"Name"}/>
                <AppInput label={"Company Email"} placeholder={"Company Email"} type="email"/>
                <AppInput label={"Company Name"} placeholder={"Company Name"}/>
                <AppInput label={"Mobile Number"} placeholder={"eg.80102xxxxx"}  type="number"/>
               <button style={{backgroundColor:"#E1E1E1"}} className='btn w-100 py-3 fw-bold mt-2'>Received a Callback</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
