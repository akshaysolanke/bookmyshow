import React, { useEffect, useState } from "react";
import "./Offers.css"
import { CiSearch } from "react-icons/ci";
import { BsCreditCard2Front } from "react-icons/bs";
import { IoCardOutline } from "react-icons/io5";
import { SiBookmyshow } from "react-icons/si";
import { TfiWallet } from "react-icons/tfi";
import { FaAward } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import {OffersData} from "./OffersData";
import OfferCard from "./OfferCard";

const Offers = () => {

  const [activeFilters, setActiveFilters] = useState([
    "creditCard",
    "debitCard",
    "bookMyShow",
    "wallet",
    "rewards",
    "upi",
    "payLater",
  ]);
  const [searchValue, setSearchValue] = useState("");
  const [cardsData, setCardsData] = useState(OffersData);

  const data = [
    {
      icon:<BsCreditCard2Front size={35} />,
      title:"Credit Card",
      cardType: "creditCard",
    },
    {
      icon:<IoCardOutline size={35} />,
      title:"Debit Card",
      cardType: "debitCard",
    },
    {
      icon:<SiBookmyshow size={35} />,
      title:"BookMyShow",
      cardType: "bookmyshow",
    },
    {
      icon:<TfiWallet size={35} />,
      title:"Wallet",
      cardType: "wallet",
    },
    {
      icon:<FaAward size={35} />,
      title:"Rewards",
      cardType: "rewards",
    },
    {
      icon:<FaGooglePay size={35} />,
      title:"UPI",
      cardType: "upi",
    },
    {
      icon:<HiOutlineCurrencyRupee size={35} />,
      title:"Pay Later",
      cardType: "paylater",
    },
  ];

  function filtersHandler(cardType){
    if (activeFilters.includes(cardType)) {
      const newData = activeFilters.filter((ele) => {
        return ele !== cardType
      })
      setActiveFilters(newData)
    } else{
      setActiveFilters([...activeFilters, cardType])
    }
  }

  function inputHandler(event){
    setSearchValue(event.target.value)
  } 
  useEffect(() => {
    const searchTime = setTimeout(() => {
      const newdata = OffersData.filter(({ title }) => {
        return title.toLowerCase().includes(searchValue.toLowerCase())
      })
      setCardsData(newdata)
    }, 1000)
    return () => clearTimeout(searchTime)
  }, [searchValue])

  return (
    <div>
     <div className="a_img2_box bg-light">
      <img 
      width={1240}
      src="https://assets-in.bmscdn.com/promotions/cms/creatives/1712582661091_123.jpg" alt="" />
     </div>
      <section className='a_offers'>
        <div className='bg-white py-4'>
          <div className="container">
            <div className="a_search">
              <input
              onChange={inputHandler}
              value={searchValue} 
              type="text"
              placeholder='Search for Offers by Name or Bank'
              
              />
              <div className='a_search_icon'>
              <CiSearch />
              </div>

            </div>
            <div className="a_filters mx-auto">
            <h5>FILTER OFFERS BY</h5>
            <div className='d-flex justify-content-between mt-2'>
              {data.map(({icon ,title ,cardType}, index) => {
                const isActive = activeFilters.includes(cardType)
                return (
                  <div 
                  onClick={() => {
                    filtersHandler(cardType);
                  }}
                  key={index} className='a_card_wrapper'>
                  <div className='a_cards'>{icon}</div>
                  <small  className={`a_small ${isActive ? "Active" : ""}`}>{title}</small>
                </div>

                );
              })}

            </div>
            </div>
           
          </div>

        </div>
       <div className="a_baground">
       <div className="container my-2 d-flex flex-wrap gap-3">
         {cardsData?.map((ele,index) => {
          if (activeFilters.includes(ele.cardType)) {
            return (
              <div key={index}  className="a_offersCard_col">
              <OfferCard {...ele}/>
            </div>
            );
          } else {
            return null;
          }
         

         })}
        </div>
        <div className="container mt-3">
          <div className="w-25 mx-auto my-3 text-muted">
            <h6 className="a_h12 fw-bold"> A Plethora of Offers and Discounts at BookMyShow!</h6>
          </div>
          <h6 style={{lineHeight:"17px"}} className="a_h11 text-muted"> If you are searching for some discount offers on movie tickets, then
          BookMyShow is the place for you! Browse through our huge array of
          movie ticket offers and save big every time you book movies tickets
          with us. Discover these special offers on movie tickets,customized
          especially for you!</h6>
          <div className="row py-5 w-75">
            <div className="col-12 col-md-3 text-muted">
              <h6  className="a_h12 my-3">Card Offers</h6>
              <h6 style={{fontSize:"11px"}}>There is a gamut of credit and debit card offers provided by some
              of the leading banks in India like ICICI, RBL, Citi Bank, SBI,
              Axis Bank, HDFC, RBS, IndusInd, HDFC and many more. By availing
              one of these Debit or credit card offers, you can save massively
              on your movie tickets.</h6>
            </div>
            <div className="col-12 col-md-3 text-muted">
              <h6  className="a_h12 my-3">Wallet and recharge offers</h6>
              <h6 style={{fontSize:"11px"}}> Wallets and online recharge providers also offer great discounts
              and deals on movie ticket booking. Using providers like
              Freecharge, MobiKwik, PayUMoney Payzapp, Ola Money, Pockets by
              ICICI, and Airtel Money while booking movie tickets on our
              platform, you can get instant cashback and discount.</h6>
            </div>
            <div className="col-12 col-md-3 text-muted">
              <h6  className="a_h12 my-3">Cinema Offers</h6>
              <h6 style={{fontSize:"11px"}}> Cinemas like and Cinepolis runs some special offers on movies with
              BookMyShow. So, here is yet another reason why you should book
              your movie tickets with us!</h6>
            </div>
            <div className="col-12 col-md-3 text-muted">
              <h6  className="a_h12 my-3">Telecom Offers</h6>
              <h6 style={{fontSize:"11px"}}> We have some special offers for some selected* Vodafone and Idea
              Users. If you are that lucky selected user, then you can get up to
              50% off on your movie tickets. It can't get better than this!
              Right?</h6>
            </div>

          </div>
          <div className="pb-3 d-flex justify-content-center">
            <h6 style={{fontSize:"11px"}} className="text-secondary">BookMyShow offers are designed to delight you! Check them out now, there's bound to be one that suits you. Do remember to read Terms and Conditions before applying offer code, though!</h6>
          </div>
        </div>
       </div>

      </section>
    </div>
  )
}

export default Offers
