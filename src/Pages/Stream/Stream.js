import React from 'react'
import "./Stream.css"
import { Carousel } from 'react-responsive-carousel'
import PromotedBanner from './PromotedBanner'
import MultiMovieCard from '../../Components/Multimovie/MultiMovieCard'

const streamData =[
  {
    description: "A clumsy panda bear named Po becomes an unlikely kung fu hero when a treacherous enemy spreads chaos throughout the countryside.",
    language: "English",
    slug: "2h 8m • Crime, Mystery, Thriller • UA",
    movieName: "Kung Fu Panda",
    title: "Brand new releases every Friday",
    imgcardpath: "Images/Streamsbanner/kunfu panda.jpg",
    path: "url(Images/Streamsbanner/kunfu_panda1.jpg)"
  },
  {
    description: "Set in the underbelly of the Mumbai underworld, the story revolves around the succession battle of mafia don Nawab Khan, who is suffering from blood cancer and has only a few days to live. Who is the Aazam of this battle of defeat and victory?",
    language: "Hindi",
    slug: "1h 32m • Adventure, Animation, Comedy • U",
    movieName: "Aazam",
    title: "Brand new releases every Friday",
    imgcardpath: "Images/Streamsbanner/et00343041-lasrumkllk-portrait.avif",
    path: "url(Images/Streamsbanner/Azar1.avif)"
  },
  {
    description: "Kong is on a journey to find his true home but gets in the way of an enraged Godzilla. The epic clash is only the beginning of the mystery that lies within the core of the Earth.",
    language: "English",
    slug: "1h 53m • Action, Sci-Fi, Thriller • 13+",
    movieName: "Godzilla vs. Kong",
    title: "Brand new releases every Friday",
    imgcardpath: "Images/Streamsbanner/gorila.avif",
    path: "url(Images/Streamsbanner/gorila1.avif)"
  },
  {
    description: "A curmudgeonly instructor at a New England prep school remains on campus during Christmas break to babysit a handful of students with nowhere to go. He soon forms an unlikely bond with a brainy but damaged troublemaker, and with the school's head cook, a woman who just lost a son in the Vietnam War.",
    language: "English",
    slug: "2h 14m • Comedy, Drama • A",
    movieName: "The Holdovers",
    title: "Brand new releases every Friday",
    imgcardpath: "Images/Streamsbanner/holdovers.avif",
    path: "url(Images/Streamsbanner/holdovers1.avif)"
  },
  {
    description: "Watch the first 10 minutes of Madame Web for free. The full film Madame Web is available to buy or rent now.",
    language: "English",
    slug: "10m • Action, Adventure, Sci-Fi • UA",
    movieName: "Madame Web",
    title: "Brand new releases every Friday",
    imgcardpath: "Images/Streamsbanner/web.avif",
    path: "url(Images/Streamsbanner/web1.avif)"
  },
]

const Stream = () => {
  return (
    <section className='a_promoted_banner'> 
    <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false} className="h-100">
    {streamData.map((value, index) => {
          return <PromotedBanner key={index} description={value.description} language={value.language} slug={value.slug} movieName={value.movieName} title={value.title} isPremiere imgcardpath={value.imgcardpath} path={value.path} />
        })}
    </Carousel>
    <div className="container">
    <MultiMovieCard title={"Premiere of the week"} srcData={[
      "Images/StreamMovieCard/1.avif",
      "Images/StreamMovieCard/2.avif",
      "Images/StreamMovieCard/3.avif",
      "Images/StreamMovieCard/4.avif",
      "Images/StreamMovieCard/5.avif",
      "Images/StreamMovieCard/6.avif",
      "Images/StreamMovieCard/7.avif",
    
      
    ]}/>
    <MultiMovieCard title={"New on Stream"} isShowAll srcData={[

"Images/StreamMovieCard/11.avif",
"Images/StreamMovieCard/12.avif",
"Images/StreamMovieCard/13.avif",
"Images/StreamMovieCard/14.avif",
"Images/StreamMovieCard/15.avif",
"Images/StreamMovieCard/16.avif",
"Images/StreamMovieCard/17.avif",
"Images/StreamMovieCard/18.avif",
"Images/StreamMovieCard/19.avif",
"Images/StreamMovieCard/20.avif",
    ]}/>
    <MultiMovieCard title={"Top 10 TV Shows"} isShowAll srcData={[

"Images/StreamMovieCard/21.avif",
"Images/StreamMovieCard/22.avif",
"Images/StreamMovieCard/23.avif",
"Images/StreamMovieCard/24.avif",
"Images/StreamMovieCard/25.avif",
"Images/StreamMovieCard/26.avif",
"Images/StreamMovieCard/27.avif",
"Images/StreamMovieCard/28.avif",
"Images/StreamMovieCard/29.avif",
"Images/StreamMovieCard/30.avif",
    ]}/>
    <MultiMovieCard title={"Top 10 TV Shows"} isShowAll srcData={[

"Images/StreamMovieCard/21.avif",
"Images/StreamMovieCard/22.avif",
"Images/StreamMovieCard/23.avif",
"Images/StreamMovieCard/24.avif",
"Images/StreamMovieCard/25.avif",
"Images/StreamMovieCard/26.avif",
"Images/StreamMovieCard/27.avif",
"Images/StreamMovieCard/28.avif",
"Images/StreamMovieCard/29.avif",
"Images/StreamMovieCard/30.avif",
    ]}/>

    </div>
    <div className="div a_bgmovie text-white">
    <div className="container py-1">
    <div className="div">
      <div className="a_img">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/exclusives-banner-web-collection-202208191200.png" alt="" />
      </div>
    </div>
    <MultiMovieCard isShowAll srcData={[
      "Images/StreamMovieCard/31.avif",
      "Images/StreamMovieCard/32.avif",
      "Images/StreamMovieCard/33.avif",
      "Images/StreamMovieCard/34.avif",
      "Images/StreamMovieCard/35.avif",
      "Images/StreamMovieCard/36.avif",
      "Images/StreamMovieCard/37.avif",
      "Images/StreamMovieCard/38.avif",
      "Images/StreamMovieCard/39.avif",
      "Images/StreamMovieCard/40.avif",

    ]}/>
    </div>
    </div>
    <div className="container">
    <MultiMovieCard title={"Indian Cinema"} isShowAll srcData={[
      "Images/StreamMovieCard/11.avif",
      "Images/StreamMovieCard/12.avif",
      "Images/StreamMovieCard/13.avif",
      "Images/StreamMovieCard/14.avif",
      "Images/StreamMovieCard/15.avif",
      "Images/StreamMovieCard/16.avif",
      "Images/StreamMovieCard/17.avif",
      "Images/StreamMovieCard/18.avif",
      "Images/StreamMovieCard/19.avif",
      "Images/StreamMovieCard/20.avif",

    ]}/>
    </div>
    <div className="div a_bgmovie text-white py-3">
      <div className="container">
      <div className="div my-5">
        <h4>Browse by price range</h4>
        <div className="a_btn_box d-flex gap-2 py-2">
          <button>रु0-रु50</button>
          <button>रु51-रु100</button>
          <button>रु101-रु200</button>
          <button>रु201-रु250</button>
          <button>रु251-रु350</button>
          <button>रु351-रु450</button>
          <button>रु451-रु550</button>
        </div>
      </div>
      <div className="div my-5">
        <h4>Browse movies by Languages</h4>
        <div className="a_btn_box d-flex gap-2 py-2">
          <button>English</button>
          <button>Hindi</button>
          <button>Reginal</button>
          <button>Foreign</button>
         
        </div>   
         </div>
      <div clasName="div my-5">
        <h4>Browse movies by collections</h4>
        <div className="a_btn_box d-flex gap-2 py-2">
          <button>All Time Favourites</button>
          <button>Festival Favourites</button>
          <button>Editor's Choice</button>
          <button>Award Winning Movies</button>
          
        </div>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Stream
