import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
const Navigation = () => {
  const { pathname } = useLocation();
  const [Navigation, setNavigation] = useState(
    <span>
      Home
      <BiRightArrowAlt />
      Movies
    </span>
  );

  useEffect(() => {
    switch (pathname) {
      case "/listyourshow":
        setNavigation(
          <span>
            Online Tickets
            <BiRightArrowAlt />
            List Your Shows
          </span>
        );
        break;
      case "/stream":
        setNavigation(
          <span>
            Home
            <BiRightArrowAlt />
            Stream
          </span>
        );
        break;
      case "/events":
        setNavigation(
          <span>
            Home
            <BiRightArrowAlt />
            Events
          </span>
        );
        break;
      case "/plays":
        setNavigation(
          <span>
            Home
            <BiRightArrowAlt />
            Plays
          </span>
        );
        break;
      case "/sports":
        setNavigation(
          <span>
            Home
            <BiRightArrowAlt />
            Sports
          </span>
        );
        break;
      case "/activities":
        setNavigation(
          <span>
            Home
            <BiRightArrowAlt />
            Activities
          </span>
        );
        break;
      case "/corporates":
        setNavigation(
          <span>
            Online Tickets
            <BiRightArrowAlt />
            Voucher
          </span>
        );
        break;
      case "/offers":
        setNavigation(
          <span>
            Online Tickets
            <BiRightArrowAlt />
            Offers
          </span>
        );
        break;
      case "/giftcard":
        setNavigation(
          <span>
            Online Tickets
            <BiRightArrowAlt />
            Giftcard
          </span>
        );
        break;
      default:
        setNavigation(
          <span>
            Home
            <BiRightArrowAlt />
            Movies
          </span>
        );
        break;
    }
  }, [pathname]);
  return (
    <section className="bg-white">
      <div className="container py-3 text-muted ">{Navigation}</div>
    </section>
  );
};

export default Navigation;
