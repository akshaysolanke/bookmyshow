import React from 'react'
import "./Sports.css"
import FilterComp from '../../Components/Filter/FilterComp'
import Button from '../../Components/Buttons/Button'
import AppliedFilter from '../../Components/Filter/AppliedFilter'
import MyCard from '../../Components/Card/MyCard'

const EventsData = [
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAxMSBBcHIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00390427-ltejckupmq-portrait.jpg",
    name :"Mumbai Indians - IPL 2024 ",
    title1:"Multiple Venues",
    title2:"T20",
    description:"₹ 990 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAzIE1heQ%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00392853-jyxdjqrzky-portrait.jpg",
    name :"Mumbai Indians vs Kolkata Knight Riders",
    title1:"Wankhede Stadium: Mumbai",
    title2:"T20",
    description:"₹ 990 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNyBNYXk%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00392855-mkteznkgdv-portrait.jpg",
    name :"Mumbai Indians vs Lucknow Super Giants",
    title1:"Multiple Venues",
    title2:"T20",
    description:"₹ 990 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAxMSBBcHIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00390427-ltejckupmq-portrait.jpg",
    name :"Mumbai City FC vs Odisha FC ",
    title1:"Mumbai Football Arena: Andheri West",
    title2:"Football",
    description:"₹ 199 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyOCBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00342539-yzgubzdtly-portrait.jpg",
    name :"Aamchi Mumbai Half Marathon",
    title1:"Bandra Fort: Mumbai",
    title2:"5k",
    description:"₹ 990 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCA4IEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00377705-kweebwrszp-portrait.jpg",
    name :"Xs 63 - Yacht Sailing in Mumbai",
    title1:"Jetty No 5: Mumbai",
    title2:"Sailing",
    description:"₹ 3999 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCA5IEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00392652-ljzqbtkffd-portrait.jpg",
    name :"Run For Unity",
    title1:"Your Place and Your Time: India",
    title2:"5k",
    description:"₹ 99",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-TW9uLCA4IEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00374465-vmalelvyks-portrait.jpg",
    name :"Airsoft Gun India Shooting Experience Arena",
    title1:"Hakone Entertainment Centre: Mumbai",
    title2:"Shooting",
    description:"₹ 299",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyOCBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00338762-bbxaybtlqm-portrait.jpg",
    name :"Navi Mumbai 10 KM Run",
    title1:"Nerul Gymkhana: Navi Mumbai",
    title2:"5k",
    description:"₹ 690 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAxMSBBcHIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00354769-sfkzcxusfy-portrait.jpg",
    name :"Wankhede Stadium - Mumbai",
    title1:"Multiple Venues",
    title2:"T20",
    description:"₹ 690 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNCBBcHIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00390473-daxsyaqkke-portrait.jpg",
    name :"Kolkata Knight Riders - IPL 2024 ",
    title1:"Multiple Venues",
    title2:"5k",
    description:"₹ 750 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyMCBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00376525-pwqxfelvjn-portrait.jpg",
    name :"Yacht cruise ",
    title1:"Jetty No 5: Mumbai",
    title2:"Sailing",
    description:"₹ 7000 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMiBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00341740-lzjrvgcknp-portrait.jpg",
    name :"Sobo Cycle Ride - LiveB4YouDie",
    title1:"Meeting Point - HP Petrol Pump Colaba",
    title2:"Cycling",
    description:"₹ 749",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMyBBcHIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00390586-exbszrcfft-portrait.jpg",
    name :"Beach Cycling at Awas Beach, TraWell Amigos",
    title1:"Meeting Point - Colaba Causeway",
    title2:"Cycling",
    description:"₹ 1300",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxOSBNYXk%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00387473-ffpjksltre-portrait.jpg",
    name :"The Great Inflate Run - Mumbai",
    title1:"Venue To Be Announced",
    title2:"5k",
    description:"₹ 1500",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCA5IEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00359255-unafcknhlc-portrait.jpg",
    name :"Heritage Bicycle Tour",
    title1:"Kailash Parbat Hindu Hotel: Mumbai",
    title2:"Cycling",
    description:"₹ 2500",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMiBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00393150-sxlxgqhmph-portrait.jpg",
    name :"Monthly Chess challenge by Malsar.in",
    title1:"Your Place and Your Time: Bengaluru",
    title2:"Chess",
    description:"₹ 119",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNCBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00342542-zqtwcjwpfs-portrait.jpg",
    name :"Run for Equality - Get Medal by Courier",
    title1:"Your Place and Your Time: India",
    title2:"5k",
    description:"₹ 390",
  },
]


const Sports = () => {
  const data = [
    {
      title: "Date",
      buttons: ["Today", "Tomorrom", "This Weekend"]
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
    <div>
     <div className="a_img1_box bg-light">
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1712301536055_mumbaiindiansgeneralsaleweb.jpg" alt="" />
     </div>
     <div className="container py-4">
      <div className="row">
        <div className="col-12 col-md-3">
        <h4 className='fw-bold'>Filters</h4>
        {data.map((value) => {
          return <FilterComp key={value.title} buttons={value.buttons} title={value.title}/>
        })}
        <Button btnType='outline' title={"Browse by venues"}/>
        </div>
        <div className="col-12 col-md-9">
        <div>
          <AppliedFilter title={"Sports in Mumbai"} buttons={["Cricket","Running","Football","Chess","Cycling","Sailing","Tennis","Athletics","Badminton","Bowling","Online Sports","Shooting","Table Tennis"]}/>
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
    </div>
    
  )
}

export default Sports
