import React from 'react'

const Button = ({title ,isRounded =false,btnType="solid"}) => {
  switch(btnType) {
    case "outline" :
        return <button className= {`border rounded-2 py-2 ${isRounded?"rounded-pill px-3":""} a_border_red_light bg-white a_h13 px-2  a_redlite_color2 py-1 w-100`}>{title}</button>

        default:
            return (
                <button className= {`border {isRounded ? "rounded-pill px-3" : ""} a_redlite_color2 bg-white rounded-4 a_h13 px-2 py-1`}>{title}</button>
            )
  }
}

export default Button
