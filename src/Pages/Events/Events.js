import React from 'react'
import "./Event.css"
import FilterComp from '../../Components/Filter/FilterComp'
import Button from '../../Components/Buttons/Button'
import AppliedFilter from '../../Components/Filter/AppliedFilter'
import MyCard from '../../Components/Card/MyCard'


const EventsData = [
  {
    src: "Images/Events/1.avif",
    name: "FISHER - Live in Mumbai",
    title1: "Dome, NSCI, SVP Stadium, Worli: Mumbai",
    title2: "Concerts",
    description:"₹ 1249 onwards"
  },
  {
    src: "Images/Events/2.avif",
    name: "Rambo Circus Mumbai",
    title1: "Phoenix Marketcity: Mumbai",
    title2: "Circus",
    description:"₹ 500 onwards"
  },
  {
    src: "Images/Events/3.avif",
    name: "Kisi Ko Batana Mat Ft. Anubhav Singh Bassi ",
    title1: "Nehru Centre: Mumbai",
    title2: "Stand up Comedy",
    description:"₹ 799 onwords"
  },
  {
    src: "Images/Events/4.avif",
    name: "Mumbai Comic Con 2024",
    title1: "Jio World Convention Centre: Mumbai",
    title2: "Comics",
    description:"₹ 999 onwords"
  },
  {
    src: "Images/Events/5.avif",
    name: "Finix Circus - Mulund",
    title1: "Mahakavi Kalidas Natyamandir: Mulund",
    title2: "Circus",
    description:"₹ 200 onwords"
  },
  
  {
    src: "Images/Events/6.avif",
    name: "Liminal Gaps",
    title1: "Art House, Nita Mukesh Ambani Cultural Centre",
    title2: "Music",
    description:"₹ 1000 onwords"
  },
  {
    src: "Images/Events/7.avif",
    name: "Mumbai Comic Con 2024",
    title1: "Jio World Convention Centre: Mumbai",
    title2: "Comics",
    description:"₹ 999 onwords"
  },
  {
    src: "Images/Events/8.avif",
    name: "The Jai Hind College Grand Reunion ",
    title1: "Jai Hind College: Mumbai",
    title2: "Comics",
    description:"₹ 999 onwords"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNCBBcHIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00357779-edphazagbe-portrait.jpg",
    name: "Zakir Khan Live",
    title1: "Birla Matoshree Sabhagriha: Mumbai",
    title2: "Stand up Comedy",
    description:"₹ 499 onwords"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMiBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00387268-zzpwvkgrws-portrait.jpg",
    name: "FISHER - Live in Mumbai",
    title1: "Dome, NSCI, SVP Stadium, Worli: Mumbai",
    title2: "Concerts ",
    description:"₹ 999 onwords"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAzMCBKdW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00392009-wqwdejludm-portrait.jpg",
    name: "Adnan Sami Live In Concert",
    title1: "Shanmukhananda Hall: Mumbai",
    title2: "Concerts",
    description:"₹ 999 onwords"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA3IEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00370883-hfhvartcat-portrait.jpg",
    name: "Tonight In Juhu - A Standup Comedy Show",
    title1: "The J Spot, Juhu: Mumbai",
    title2: "Stand up Comedy",
    description:"₹ 499 onwords"
  },
]


const Events = () => {
  const data = [
    {
      title :"Date",
      buttons: ["Today", "Tomorrom", "This Weekend"]
    },
    {
      title: "Language",
      buttons: ["English", "Hindi", "Telugu", "Marathi", "Panjabi",]
    },
    {
      title: "Categories",
      buttons: ["Workshops", "Online Streaming Events", "Comedy Shows", "Kids", "Music Shows", "Performances"]
    },
    {
      title: "More Filters",
      buttons: ["Online Streaming", "Fast Filling", "Outdoor Events", "Must Attend", "Unmissable Events", "Offers For You"]
    },
    {
      title: "Price",
      buttons: ["Free", "0-500", "501-2000", "Above 2000"]
    },
  ]
  return (
    <section className='bg-light'>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-3 ps-0">
            <h4>Filters</h4>
            {data.map((value) => {
              return <FilterComp key={value.title} buttons={value.buttons} title={value.title}/>
            })}
            <Button  btnType="outline" title={"Browse by Venues"}/>
          </div>
          <div className="col-12 col-md-9">
            <div>
              <AppliedFilter title={"Events in Mumbai"} buttons={["Workshops", "Online Streaming Events", "Comedy Shows", "Kids", "Music Shows", "Performances","Meetup","Screening","Exhibition","Conferences","Talks","Spirituality","Cruises"]}/>
            </div>
            <div className="row">
              {EventsData.map((value) => {
                return <div className="col-12 col-lg-4 col-xl-3 col-md-6 col-sm-12">
                  <MyCard src={value.src} name={value.name} title1={value.title1} title2={value.title2} description={value.description}/>
                </div>
              })}
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Events
