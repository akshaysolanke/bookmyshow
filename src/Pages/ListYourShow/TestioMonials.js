import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ImQuotesLeft } from "react-icons/im";

const TestioMonials = () => {
  return (
    <div className="a_testimonials">
      <Carousel showThumbs={false} showStatus={false}>
        <div>
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <div className="px-5 py-4 position-relative">
                <div className="a_testimonials_quotes">
                  <ImQuotesLeft size={25} />
                </div>
                <p style={{ fontSize: "20px" }} className="text-start">
                  We at Jio MAMI Mumbai Film Festival with Star are proud of our
                  partnership with BMS. They turned around the registration to
                  the festival and the on ground management of delegates at our
                  venues altering visitor experience at the festival which is
                  the cornerstone of engagement at any LIVE event. BMS is an
                  integral part of building MAMI and its growth in the last 6
                  years. Despite being a huge corporate their commitment to
                  independent institutions in cultural spaces is unflinching.
                  Our gratitude to Ashish Hemrajani and his team at BMS for
                  their faith and support.”
                </p>
                <div className="d-flex gap-4 align-items-center ">
                  <div className="a_left">
                    <div className="a_img_box">
                      <img
                        src="https://assets-in.bmscdn.com/static/2021/06/smrit.jpeg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="a_right mt-3">
                    <h6 className="fw-bold text-start">Smriti Kiran</h6>
                    <h6 className=" fw-bold text-start">
                      Artistic Director - Mumbai Academy of Moving
                    </h6>
                    <h6 className=" fw-bold text-start"> Image (MAMI)</h6>
                    <h6 className=" fw-bold text-start">
                      {" "}
                      Jio MAMI Mumbai Film Festival with Star
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="a_testimonial_img">
                <img
                  src="https://assets-in.bmscdn.com/static/2021/06/jio.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <div className="px-5 py-4 position-relative">
                <div className="a_testimonials_quotes">
                  <ImQuotesLeft size={25} />
                </div>
                <p style={{ fontSize: "20px" }} className="text-start">
                  The NCPA shares a cherished 13 year bond with BMS, its online
                  ticketing partner that has helped art lovers book their seats
                  for their favourite shows in a seamless manner. The presence
                  of a team from Bookmyshow in the NCPA premises on the day of
                  the event further ensures the smooth-functioning of
                  ticket-related formalities.”
                </p>
                <div className="d-flex gap-4 align-items-center ">
                  {/* <div className="a_left">
                    <div className="a_img_box">
                      <img
                        src="https://assets-in.bmscdn.com/static/2021/06/smrit.jpeg"
                        alt=""
                      />
                    </div>
                  </div> */}
                  <div className="a_right mt-3">
                    <h6 className="fw-bold text-start">
                      NCPA- National Centre for the
                    </h6>
                    <h6 className=" fw-bold text-start">Performing Arts.</h6>
                    {/* <h6 className=" fw-bold text-start"> Image (MAMI)</h6>
                    <h6 className=" fw-bold text-start">
                      {" "}
                      Jio MAMI Mumbai Film Festival with Star
                    </h6> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="a_testimonial_img">
                <img
                  src="https://assets-in.bmscdn.com/static/2021/06/ncpas.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <div className="px-5 py-4 position-relative">
                <div className="a_testimonials_quotes">
                  <ImQuotesLeft size={25} />
                </div>
                <p style={{ fontSize: "20px" }} className="text-start">
                  Felicity Theatre feels immensely proud and honoured to have
                  partnered with Book My Show in releasing some of our most
                  loved plays including Selfie, Patte Khul Gaye and the magnum
                  opus Mahabharat, each witnessing phenomenal openings. We’d
                  like to safely assume that no other brand would’ve helped open
                  the doors of theatre to a wider audience than Book My Show,
                  bringing the joy and excshare-itement of watching theatre to
                  millions of Indians! Book My Show has indeed made
                  entertainment a part and parcel of the daily lives of Indians
                  and continues to make it grow bigger by the year, with new
                  innovations and additions to the events, movies, concerts and
                  entertainment world. It’ll be thrilling to see them grow more
                  in the years to come and possibly become either an OTT
                  platform themselves, produce the best cinema, or open new
                  arenas for entertainment by becoming the only platform of
                  their kind to offer cinema, music, events, sports and live
                  concerts on their platform!”
                </p>
                <div className="d-flex gap-4 align-items-center ">
                  <div className="a_left">
                    <div className="a_img_box">
                      <img
                        src="https://assets-in.bmscdn.com/static/2021/06/rah.jpeg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="a_right mt-3">
                    <h6 className="fw-bold text-start">Rahul Bhuchar </h6>
                    <h6 className=" fw-bold text-start">
                      CEO - Felicity theatre
                    </h6>
                    {/* <h6 className=" fw-bold text-start"> Image (MAMI)</h6>
                    <h6 className=" fw-bold text-start">
                      {" "}
                      Jio MAMI Mumbai Film Festival with Star
                    </h6> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="a_testimonial_img">
                <img
                  src="https://assets-in.bmscdn.com/static/2021/06/felicit.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <div className="px-5 py-4 position-relative">
                <div className="a_testimonials_quotes">
                  <ImQuotesLeft size={25} />
                </div>
                <p style={{ fontSize: "20px" }} className="text-start">
                  BMS and Prithvi Theatre’s partnership goes back many years -
                  to the very beginning - We are proud to be one of the first
                  theatres to go online with our bookings.BMS has been our
                  backbone for our online presence, a phone call away for all
                  troubleshooting and continue to guide and support our
                  endeavours online. BMS has evolved into a multinational
                  success but at the same time been loyal to all the independent
                  players in the arts and culture scene.We hope that BMS will
                  continue to empower performers and audiences alike. We,
                  Prithvi Theatre, are grateful toward the BMS team for their
                  support and are proud to have BMS as part of our family!”
                </p>
                <div className="d-flex gap-4 align-items-center ">
                  {/* <div className="a_left">
                    <div className="a_img_box">
                      <img
                        src="https://assets-in.bmscdn.com/static/2021/06/smrit.jpeg"
                        alt=""
                      />
                    </div>
                  </div> */}
                  <div className="a_right mt-3">
                    <h6 className="fw-bold text-start">Trustees</h6>
                    <h6 className=" fw-bold text-start">
                    Prithvi Theatre
                    </h6>
                    <h6 className=" fw-bold text-start"> Shri Prithviraj Kapoor Memorial Trust & Research Foundation.</h6>
                    {/* <h6 className=" fw-bold text-start">
                      {" "}
                      Jio MAMI Mumbai Film Festival with Star
                    </h6> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="a_testimonial_img">
                <img
                  src="https://assets-in.bmscdn.com/static/2021/06/prithvi.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default TestioMonials;
