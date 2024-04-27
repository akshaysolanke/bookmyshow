import React from 'react'
import MyCard from '../../Components/Card/MyCard'
import FilterComp from '../../Components/Filter/FilterComp'
import Button from '../../Components/Buttons/Button'
import AppliedFilter from '../../Components/Filter/AppliedFilter'


const EventsData = [
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAxNiBNYXkgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00392681-rtndnlygde-portrait.jpg",
    name: "Matilda The Musical",
    title1: "Grand Theatre, Nita Mukesh Ambani Cultural Centre",
    title2: "English",
    description:"₹ 1200 onwards"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMyBBcHIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00376688-mqfmhazlcb-portrait.jpg",
    name: "HUMARE RAM Ft Ashutosh Rana and Rahull R Bhuchar",
    title1: "St. Andrews Auditorium: Mumbai",
    title2: "Hindi",
    description:"₹ 799 onwards"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAxMCBBcHIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00077795-ublkcfraec-portrait.jpg",
    name: "Fats TheArts Shikhandi",
    title1: "Prithvi Theatre",
    title2: "English",
    description:"₹ 500 onwords"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCA5IEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00354941-uqptssernp-portrait.jpg",
    name: "Karun Gelo Gaon",
    title1: "Mahakavi Kalidas Natyamandir: Mulund",
    title2: "Marathi",
    description:"₹ 300 onwords"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyNSBBcHIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00364523-vchkhckwqy-portrait.jpg",
    name: "Jar Tar Chi Goshta",
    title1: "Dinanath Mangeshkar Natyagruha: Vile Parle",
    title2: "Marathi",
    description:"₹ 200 onwords"
  },
  
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNCBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00390232-jkqaarwwdk-portrait.jpg",
    name: "Chanakya",
    title1: "Tata Theatre: NCPA",
    title2: "Hindi",
    description:"₹ 300 onwords"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAxMSBBcHIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00051378-dqyurwcfyg-portrait.jpg",
    name: "Punha Sahi Re Sahi",
    title1: "Dinanath Mangeshkar Natyagruha: Vile Parle",
    title2: "Marathi",
    description:"₹ 300 onwords"
  },
  {
    src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAxMSBBcHIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00358841-ukwgkcdxzb-portrait.jpg",
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

const Plays = () => {
  const data = [
    {
      title: "Date",
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
    }
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
            <AppliedFilter title={"Plays in Mumbai"} buttons={["Theatre","Storytelling","Interactive Theatre"]}/>
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

export default Plays
