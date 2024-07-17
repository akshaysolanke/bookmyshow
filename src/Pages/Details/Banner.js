import React from "react";

const Banner = () => {
  return (
    <div
      className="b_movies_details"
      style={{
        backgroundImage: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url("https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/maidaan-et00109952-1712742201.jpg")`,
      }}
    >
      <div className="container text-white">
        <div className="row">
            <div className="col-12 col-md-4">
                <div>
                    <div className="a_img_box">
                        <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/maidaan-et00109952-1712742201.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
