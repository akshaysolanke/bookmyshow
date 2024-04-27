import React from 'react'

const Partner = () => {

    const data = ["p1.avif","p2.avif","p3.avif","p4.avif","p5.avif"]
  return (
    <div className='container bg-white my-3 py-5 text-center a_partner'>
     <h6 style={{color:"#333333"}}>OUR PARTNERS</h6>
     <div className="row justify-content-center mt-5">
        {data.map((ele, index) => {
            return <div key={index} style={{width:"17%"}}>
                <div>
                    <img src={`Images/corporates/${ele}`} alt="" />
                </div>
            </div>

        })}
     </div>
    </div>
  )
}

export default Partner
