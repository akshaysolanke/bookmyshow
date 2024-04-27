import React from 'react'
import "./Carousel.css"
import Flickity from 'react-flickity-component'
import BannerCard from './BannerCard'

const flickityOptions ={
  InitialIndex: 2,
  wrapAround : true

}

const Carousel = () => {
  return (
   <>
   <Flickity 
   className={'carousel'} 
   elementType={'div'} 
   options={flickityOptions} 
   disableImagesLoaded={false} 
   reloadOnUpdate
   static >
    <BannerCard background='#2B3148' imgPath={"https://assets-in.bmscdn.com/static/2021/06/des-lap-sli-six.png"} title={"Introducing an event management tool"} description={"Experience the ease of event creation and publishing"}/>
    <BannerCard background='#9E6D4C' imgPath={"https://assets-in.bmscdn.com/static/2021/06/des-sli-f.jpeg"} title={"Take advantage of our M-ticket feature"} description={"Lets your audience skip the box office queue and head straight to the gate."}/>
    <BannerCard background='#385434' imgPath={"https://assets-in.bmscdn.com/static/2021/06/sli-o.jpeg"} title={"Empower the artist within you"} description={"List your own performances, gigs and more with BookMyShow"}/>
    <BannerCard background='#516C7A' imgPath={"https://assets-in.bmscdn.com/static/2021/06/des-sli-th.jpeg"} title={"Conduct workshops and much more"} description={"Share your skills with people around the world - from home!"}/>
    <BannerCard background='#45443F' imgPath={"https://assets-in.bmscdn.com/static/2021/06/des-sli-fiv.jpeg"} title={"Ticket scanning made easy"} description={"Experience the ease of managing entry at an event."}/>
    
   </Flickity>
   </>
  )
}

export default Carousel
