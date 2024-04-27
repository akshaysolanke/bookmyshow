import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { TiSocialInstagram } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const iconsData = [<FaFacebookF />,<RiTwitterXLine />,<TiSocialInstagram />,<FaYoutube />,<FaPinterestP />,<FaLinkedinIn />]
const SocialLinks = () => {
  return (
   <section className='a_bg_light2 py-5'>
    <div className="b_bookmyshow_border position-relative">
      <div className="a_bottom_logo d-flex justify-content-center mb-2 position-absolute w-100">
        <div className="a_bg_light2 px-4">
          <img  
          src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" />
        </div>

      </div>

    </div>
    <div className="container text-white">
      <div className="a_top_section">
        {iconsData.map(function (value,index) {
          return <div key={index} className="a_icons">
          
          {value}
          </div>

        })}
      </div>

    </div>
    <div className=" a_copyright text-center a_h11"> 
      <p>Copyright 2024  © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
      <p>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and  <br />no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>

    </div>

   </section>
  )
}

export default SocialLinks
