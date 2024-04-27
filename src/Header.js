import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <header>
      <div className="a_top bg-white py-1">
        <div className="container p-1">
          <div className="row w-100 justify-content-between align-items-center mx-auto">
            <div className="col-12 col-md-7">
              <div className="row align-items-center ">
                <div className="col-12 col-md-3 m-0">
                  <div className="logo align-items-center">
                    <img
                      height={64}
                      src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md-9 m-0">
                  <div className="border d-flex align-items-center p-1 px-2 gap-1 rounded-2">
                    <CiSearch size={20} />
                    <input
                      type="text"
                      className="border-0"
                      placeholder="Search for Movies, Events, Plays, Sport and Activites"
                      style={{ flex: 1, outline: "none" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="row align-items-center justify-content-end text-end">
                <div className="col-12 col-md-7 align-items-center justify-content-end d-flex gap-4">
                  <div className="d-flex gap-1 align-items-center">
                    <span>Mumbai</span>
                    <FaAngleDown color="#6B7188" className="mt-1" />
                  </div>
                  <button className="text-white a_bg_red_color a_sign_in_btn">
                    Sign In
                  </button>
                </div>
                <div className="col-12 col-md-2">
                  <IoIosMenu size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="a_bottom py-1 border-bottom a_bg_dark align-items-center">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-12 col-md-5">
                    <ul className="d-flex gap-3">
                        <li>
                            <NavLink to={"/"}>Movies</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/stream"}>Stream</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/events"}>Events</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/plays"}>Plays</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/sports"}>Sports</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/activities"}>Activities</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md-3">
                    <ul className="d-flex gap-3 justify-content-end">
                        <li>
                            <NavLink to={"/listyourshow"}><span>ListYourShow</span></NavLink>
                        </li>
                        <li>
                            <NavLink to={"/corporates"}><span>Corporates</span></NavLink>
                        </li>
                        <li>
                            <NavLink to={"/offers"}><span>Offers</span></NavLink>
                        </li>
                        <li>
                            <NavLink to={"/giftcards"}><span>GiftCards</span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
};
