import React from 'react'
import "./movies.css"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FilterComp from '../../Components/Filter/FilterComp';
import Button from '../../Components/Buttons/Button';
import AppliedFilter from '../../Components/Filter/AppliedFilter';
import Hbanner from '../../Components/Banner/Hbanner';
import MyCard from '../../Components/Card/MyCard';

const MoviesData =[
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-OTUuOUsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00109952-dnjwgbnpzq-portrait.jpg",
    movieName: "Maidaan",
    movieCertificate: "UA",
    language: "Hindi",
  },
  {
    src: "./Images/Movies/Shaitan.avif",
    movieName: "Shaitaan",
    movieCertificate: "UA",
    language: "Hindi",
  },
  {
    src: "./Images/Movies/creaw.avif",
    movieName: "Crew",
    movieCertificate: "UA",
    language: "Hindi",
  },
  {
    src: "./Images/Movies/gorila.avif",
    movieName: "Godzilla x Kong: The New Empire",
    movieCertificate: "UA",
    language: "English, Hindi, Tamil, Telugu",
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA1Mi41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00330062-afywqbrlrl-portrait.jpg",
    movieName: "Swatantrya Veer Savarkar",
    movieCertificate: "UA",
    language: "Hindi,Marathi",
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICAyNC4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00341317-tfhyqcxzpt-portrait.jpg",
    movieName: "Madgaon Express",
    movieCertificate: "UA",
    language: "Hindi",
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTMuNEsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00382581-aghgfemjrv-portrait.jpg",
    movieName: "The First Omen",
    movieCertificate: "A",
    language: "English",
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-OTUuOUsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00109952-dnjwgbnpzq-portrait.jpg",
    movieName: "Maidaan",
    movieCertificate: "UA",
    language: "Hindi",
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny40LzEwICAxLjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00390188-nfctyrtfqe-portrait.jpg",
    movieName: "Alibaba Ani Chalishitale Chor",
    movieCertificate: "UA",
    language: "Marathi",
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICAzMi4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379741-ldvdcezrcn-portrait.jpg",
    movieName: "Kung Fu Panda 4",
    movieCertificate: "UA",
    language: "English, Hindi, Tamil, Telugu",
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NzAuOEsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00373701-lumczvutmm-portrait.jpg",
    movieName: "The Family Star",
    movieCertificate: "UA",
    language: "Telugu, Tamil",
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICA1NS42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00038685-vvhkfgnayq-portrait.jpg",
    movieName: "Aadujeevitham - The Goat Life",
    movieCertificate: "UA",
    language: "Malayalam, Telugu, Tamil, Hindi, Kannada",
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICAyOS41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00351955-tcxdlwyksa-portrait.jpg",
    movieName: "Laapataa Ladies",
    movieCertificate: "UA",
    language: "Hindi",
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Mi43SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386315-ftxxccsfzk-portrait.jpg",
    movieName: "Love Lies Bleeding",
    movieCertificate: "UA",
    language: "English",
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAxMjguNUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384444-ddrheqdnqs-portrait.jpg",
    movieName: "Article 370",
    movieCertificate: "UA",
    language: "Hindi",
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgMTE4LjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384234-namrszxlsp-portrait.jpg",
    movieName: "Shaitaan",
    movieCertificate: "UA",
    language: "Hindi",
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTAuMksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00355637-kppthtmnes-portrait.jpg",
    movieName: "Ek Kori Prem Katha",
    movieCertificate: "UA",
    language: "Hindi",
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MjIwIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00392207-xynenkjthn-portrait.jpg",
    movieName: "The Lost Girl",
    movieCertificate: "UA",
    language: "Hindi",
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICA2Mi4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00343267-ucfqbyhxcu-portrait.jpg",
    movieName: "Tillu Square",
    movieCertificate: "UA",
    language: "telugu",
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA1NzcgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00350112-eecggbwbht-portrait.jpg",
    movieName: "Kalvan",
    movieCertificate: "UA",
    language: "Telegu",
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAzMC40SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00000652-rpsctzasjy-portrait.jpg",
    movieName: "Dilwale Dulhania Le Jayenge",
    movieCertificate: "U",
    language: "Hindi",
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NC4xSyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00391914-trtrygdgjh-portrait.jpg",
    movieName: "The Defective Detectives",
    movieCertificate: "A",
    language: "English",
  },
  
]

const carouselData = ["https://assets-in.bmscdn.com/promotions/cms/creatives/1706383776906_web.jpg", "https://assets-in.bmscdn.com/promotions/cms/creatives/1711973393211_rlpoorthingsweb.jpg", "https://assets-in.bmscdn.com/promotions/cms/creatives/1712129836695_dfvefe.jpg"] 
const Movies = () => {
  const data = [
    {
      title : "Language",
      buttons:["Marathi","Hindi","Malayan","Telugu","Gujarati","Japanese","Multi Language","Tamil"]
    },
    {
      title: "Genres",
      buttons: ["Drama", "Comedy", "Action", "Adventure", "Family", "Romantic", "Thriller", "Animation", "Crime", "Political", "Supernatural","Biographic","Classic"]
    },
    {
      title: "Formate",
      buttons: ["2D", "3D","4DX 3D","MX4D 3D","IMAX 2D","3D SCREEN X","IMAX 3D"]
    },
  ]
  return (
    <section  className='bg-light'>
      <Carousel autoPlay interval={4000} infiniteLoop={true} showStatus={false} showThumbs={false} className='p-3'>
        {carouselData.map((value, index) => {
          return <div key={index}>
            <img className='rounded-3' src={value} alt='' />
          </div>
        })}
      </Carousel>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-3 ps-0">
            <h4>Filters</h4>
            {data.map((value) => {
              return <FilterComp key={value.title} buttons={value.buttons} title={value.title}/>
            })}
            <Button  btnType="outline" title={"Browse by Cinemas"}/>
          </div>

          <div className="col-12 col-md-9">
            <div>
              <AppliedFilter title={"Movies In Pune"} buttons={["Hindi", "Marathi", "English","Multi Language","Telugu","Malayalam","Gujarati","Japanese","Tamil"]} />
            </div>
            <div>
              <Hbanner title2={"Explore Upcomming Movies"} 
                title={"Comming Soon"}
              />
            </div>
            <div className="row">
              {MoviesData.map((value ,index) => {
                return <div className="col-12 col-lg-4 col-xl-3 col-md-6 col-sm-12">
                  <MyCard  src={value.src} name={value.movieName} title1={value.movieCertificate} title2={value.language}/>

                </div>
              })}
            </div>

          </div>
        </div>
        
      </div>
    
    </section>
  )
}
export default Movies