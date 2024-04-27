import React from 'react'
import "./footer.css"
import Navigation from './Navigation'
import Description from './Description'
import ContactToday from './ContactToday'
import Services from './Services'
import Menulinks from './Menulinks'
import Sociallinks from './Sociallinks'

const Footer = () => {
  return (
   <footer>
    <Navigation/>
    <Description/>
    <ContactToday/>
    <Services/>
    <Menulinks/>
    <Sociallinks/>
   </footer>
  )
}

export default Footer
