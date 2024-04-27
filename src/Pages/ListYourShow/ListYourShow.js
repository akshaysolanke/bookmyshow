import React from "react";
import Carousel from "./Carousel";
import ShowCard from "./ShowCard";
import TestioMonials from "./TestioMonials";

function ShowsMainText({ title, desc }) {
  return (
    <div className="text-center">
      <h1 className="fw-bold mb-3">{title}</h1>
      <p className="w-75 mx-auto a_h18">{desc}</p>
    </div>
  );
}

const ListYourShow = () => {
  const cardData = [
    {
      imgPath: "https://assets-in.bmscdn.com/static/2021/06/perf.png",
      title: "Performances",
    },
    {
      imgPath: "https://assets-in.bmscdn.com/static/2021/06/experiencess.png",
      title: "Experiences",
    },
    {
      imgPath: "https://assets-in.bmscdn.com/static/2021/06/expositionss.png",
      title: "Expositions",
    },
    {
      imgPath: "https://assets-in.bmscdn.com/static/2021/06/partiess.png",
      title: "Parties",
    },
    {
      imgPath: "https://assets-in.bmscdn.com/static/2021/06/sport.png",
      title: "Sports",
    },
    {
      imgPath: "https://assets-in.bmscdn.com/static/2021/06/conferencess.png",
      title: "Conferences",
    },
  ];

  const cardData2 = [
    {
      imgPath: "https://assets-in.bmscdn.com/static/2021/06/online-saless.png",
      title: "Online Sales & Marketing",
    },
    {
      imgPath: "https://assets-in.bmscdn.com/static/2021/06/pricings.png",
      title: "Pricing",
    },
    {
      imgPath: "https://assets-in.bmscdn.com/static/2021/06/food.png",
      title: "Food & beverages, stalls and the works!",
    },
    {
      imgPath:
        "https://assets-in.bmscdn.com/static/2021/06/on-ground-support.png",
      title: "On ground support & gate entry management",
    },
    {
      imgPath: "https://assets-in.bmscdn.com/static/2021/06/report.png",
      title: "Reports & business insights",
    },
    {
      imgPath: "https://assets-in.bmscdn.com/static/2021/06/rfids.png",
      title: "POS, RFID, Turnstiles & more...",
    },
  ];
  return (
    <section>
      <div className="my-3">
        <Carousel />
      </div>
      <div className=" bg-white a_shows_wrapper">
        <div className="a_shows_container mx-auto">
          <ShowsMainText
            title={"What you can host?"}
            desc={
              "As the purveyor of entertainment, BookMyShow enables your event with end to end solutions from the time you register to the completion of the event. Let’s look at what you can host."
            }
          />
          <div className="row">
            {cardData.map((card, index) => {
              return (
                <div key={index} className="col-12 col-md-4 mt-4">
                  <ShowCard background="#ECF5FF" {...card} />
                </div>
              );
            })}
          </div>
          <div
            style={{ margin: "100px 0px" }}
            className=" d-flex align-items-center justify-content-center"
          >
            <button
              style={{ padding: "12px 90px" }}
              type="button"
              className="text-white  a_button_show"
            >
              List Your Shows
            </button>
          </div>
        </div>
        <div className="a_shows_container mx-auto">
          <ShowsMainText
            title={"What are the services we offer ?"}
            desc={
              "After successful collaborations with the best event organisers over the past decade and a half, we’re well equipped to bring your vision to life."
            }
          />
          <div className="row">
            {cardData2.map((card, index) => {
              return (
                <div key={index} className="col-12 col-md-4 mt-4">
                  <ShowCard background="#FCF1F1" {...card} />
                </div>
              );
            })}
          </div>
          <p className="mx-auto a_h18 my-5 text-center" >
            Apart form these must haves for any event, we also support a host of
            other services like SEO for your event,<br /> custom pricing for your
            tickets and this and also this.
          </p>
          <div className=" d-flex align-items-center justify-content-center"> 
          <button
              style={{ padding: "12px 90px" }}
              type="button"
              className="text-white  a_button_show"
            >
              List Your Shows
            </button>
          </div>

        </div>

       <TestioMonials/>
       <div style={{width:"60%", background:"url(https://assets-in.bmscdn.com/static/2021/06/security-imag.jpeg)"}} className="mx-auto a_security">
        <ShowsMainText width={100} title={"Sit back and watch your event come to life"} desc={"Events maybe all fun and games, but we take it seriously. We ensure our customer’s security so that you don’t have to."}/>
       </div>
      </div>
    </section>
  );
};

export default ListYourShow;
