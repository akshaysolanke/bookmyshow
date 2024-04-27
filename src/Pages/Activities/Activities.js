import React from 'react'
import FilterComp from '../../Components/Filter/FilterComp'
import Button from '../../Components/Buttons/Button'
import AppliedFilter from '../../Components/Filter/AppliedFilter'
import MyCard from '../../Components/Card/MyCard'

const EventsData = [
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCA5IEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00310275-uzxykyzubu-portrait.jpg",
    name:"Imagicaa Water Park",
    title1:"Imagica Water Park (Khopoli): Mumbai",
    title2:"Theme parks",
    description:"₹ 796 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCA5IEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00325467-rxkbwheldg-portrait.jpg",
    name:"Water Kingdom",
    title1:"Water Kingdom: Mumbai",
    title2:"Theme parks",
    description:"₹ 900 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCA5IEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00014607-wgbwlqpleu-portrait.jpg",
    name:"Imagicaa Theme Park",
    title1:"Imagica Theme Park (Khopoli): Mumbai",
    title2:"Theme parks",
    description:"₹ 664 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCA5IEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00022344-nhfcxavuqk-portrait.jpg",
    name:"Mumbai Filmcity Tour with Bollywood Park",
    title1:"Gate No.1, Dadasaheb Phalke Chitranagri: Mumbai",
    title2:"Theme parks",
    description:"₹ 1099 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCA5IEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00127447-kznuxnzxdf-portrait.jpg",
    name:"BOUNCE Inc Mumbai",
    title1:"BOUNCE Inc Mumbai",
    title2:"Theme parks",
    description:"₹ 100 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCA5IEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00310275-uzxykyzubu-portrait.jpg",
    name:"UrbsPrima - Inside the BMC Headquarters",
    title1:"Municipal Corporation of Greater Mumbai: Mumbai",
    title2:"Antiques, Heritage, Museums",
    description:"₹ 350 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCA5IEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00370117-azxyphkelc-portrait.jpg",
    name:"Royal Garden Resort",
    title1:"Royal Garden Resort (Naigaon East): Mumbai",
    title2:"Water parks",
    description:"₹ 680 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCA5IEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00372152-wxehsjqhzb-portrait.jpg",
    name:"BEST-Operation of Heritage Tour.",
    title1:"Dr. S.P.M.Chowk (Museum): Mumbai",
    title2:"Antiques, Heritage, Museums",
    description:"₹ 95 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCA5IEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00076445-zlcttrjhts-portrait.jpg",
    name:"Snow Kingdom Mumbai",
    title1:"Snow Kingdom: Mumbai",
    title2:"Snow Parks",
    description:"₹ 650 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCA5IEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00340841-mmucsgpefe-portrait.jpg",
    name:"SoBo Ride",
    title1:"Saifee Hospital: Mumbai",
    title2:"Unique Tours",
    description:"₹ 500 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAxMCBBcHIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00370963-pnlhdaxwqz-portrait.jpg",
    name:"The Great Escape Water Park",
    title1:"The Great Escape Water Park: Thane",
    title2:"Water parks",
    description:"₹ 799 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMyBBcHIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00383001-wmdcvjjdap-portrait.jpg",
    name:"Flamingo Boat Safari Mumbai",
    title1:"Flamingo Boat Safari Mumbai",
    title2:"Safari",
    description:"₹ 1099 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMiBBcHIgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00121822-wkzvxfaxpr-portrait.jpg",
    name:"Midnight Cycling ( Mumbai) - Treks and Trails",
    title1:"Meeting Point - Colaba Causeway",
    title2:"Cycling tour",
    description:"₹ 249 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMyBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00393280-wutgczjatb-portrait.jpg",
    name:"DJ Garba Night ( Chaitra Navratri )",
    title1:"Leera Open Lawn: Mira Road",
    title2:"Navratri Celebration",
    description:"₹ 99 onwards",
  },
  {
    src:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCA5IEFwciBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00361621-mepjsrajdq-portrait.jpg",
    name:"The Crown Jewel of Mumbai- Inside CSMT Tour",
    title1:"McDonalds opp CSMT Station: Mumbai",
    title2:"Antiques, Heritage, Museums",
    description:"₹ 100 onwards",
  },
  
]


const Activities = () => {
  const data = [
    {
      title:"Date",
      buttons:["Today","Tomorrow","This Weekend"],
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
    <section>
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-3">
            <h4 className='fw-bold'>Filters</h4>
            {data.map((value) => {
              return <FilterComp key={value.title} buttons={value.buttons} title={value.title}/>
            })}
            <Button btnType='outline' title={"Browse by Venues"}/>
          </div>
          <div className="col-12 col-md-9">
            <div>
              <AppliedFilter title={"Activities In Mumbai"} buttons={["Amusement Parks", "Adventure", "Tourist Attractions", "Food and Drinks", "Gaming", "Food and Drinks","Monuments","Antiques,Heritage,Museums","Navratri Celebration"]}/>
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

export default Activities
