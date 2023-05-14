import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Autoplay } from "swiper";
import "swiper/css";

import Pic1 from "./../../../../images/popular-img/review-img/pic-1.jpg";
import Pic2 from "./../../../../images/popular-img/review-img/pic-2.jpg";
import Pic3 from "./../../../../images/popular-img/review-img/pic-3.jpg";
import Pic4 from "./../../../../images/popular-img/review-img/pic-4.jpg";

const sliderData = [
  { image: Pic1, title: "Pepperoni Pizza" },
  { image: Pic3, title: "Japanese Ramen" },
  { image: Pic4, title: "Fried Rice" },
  { image: Pic2, title: "Vegan Pizza" },
  { image: Pic3, title: "Pepperoni Pizza" },
  { image: Pic4, title: "Fried Rice" },
];
const BestSellerSlider = ({
  supplments,
  setSuppId,
  halndleOpenSupp,
  handleDeleteSupp,
  setSupp,
}) => {
  return (
    <>
      <Swiper
        className="mySwiper-6"
        //speed= {1200}
        slidesPerView={5}
        spaceBetween={30}
        //loop={true}
        // autoplay= {{
        //    delay: 1200,
        // }}
        modules={[Autoplay]}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1480: {
            slidesPerView: 5,
            spaceBetween: 20,
          },

          1600: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {supplments?.map((item, ind) => (
          <SwiperSlide key={ind}>
            <div className="card dishe-bx b-hover review menu-bx">
              <div className="card-body text-center py-3">
                <img src={item.img} alt="" />
                <Dropdown className=" c-heart">
                  <Dropdown.Toggle as="div" className="btn-link i-false">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
                        stroke="#262626"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z"
                        stroke="#262626"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z"
                        stroke="#262626"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu">
                    <Dropdown.Item
                      onClick={() => {
                        setSupp({
                          name: item.name,
                          img: item.img,
                          price: item.price,
                        });
                        halndleOpenSupp();
                        setSuppId(item.id);
                      }}
                    >
                      Modfier
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDeleteSupp(item.id)}>
                      Supprimer
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="card-footer pt-0 border-0 text-center">
                <div>
                  <Link to={"#"}>
                    <h4 className="mb-0">{item.name}</h4>
                  </Link>
                  <h3 className="font-w700 text-primary mb-4">
                    {item.price} TND
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default BestSellerSlider;
