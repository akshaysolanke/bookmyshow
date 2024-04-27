import React from 'react'

const Records = () => {

    const data = [
        {
            title: "1000+",
            desc: "Cities",
        },
        {
            title: "6000",
            desc: "Screens",
        },
        {
            title: "1000+",
            desc: <span>COPORATES <br /> WHO TRUST US</span>,
        },
        {
            title: "15 MILLION+",
            desc: <span>TICKETS SOLD <br /> PER MONTHS</span>,
        },
        {
            title: "4 Billion",
            desc: <span>PAGE VIEWS <br /> PER MONTH</span>,
        },
    ];
  return (
   <div className="container px-5 my-5">
    <div className="row">
        {data.map(({title,desc} ,Index) => {
            return <div key={Index} className='text-center' style={{width:"19%"}}>
                <h4>{title}</h4>
                <p style={{letterSpacing:"1px"}} className='a_h14 mt-2'>{desc}</p>
            </div>
        })}
    </div>
   </div>
  )
}

export default Records
