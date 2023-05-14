import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//import { Link } from "react-router-dom";
import { Autoplay } from "swiper";

import "swiper/css";
import { Dropdown } from "react-bootstrap";

const MenuCategorySlider = ({
  categories,
  handleDeleteMenu,
  setMenuId,
  halndleOpenMenu,
  setMenu,
  setSelectMenu,
  selectMenu,
}) => {
  return (
    <>
      <Swiper
        className="mySwiper-2"
        //speed= {1200}

        spaceBetween={20}
        // autoplay= {{
        //    delay: 1200,
        // }}
        modules={[Autoplay]}
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1480: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1600: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            <div className="cate-bx text-center">
              <div
                className="card"
                onClick={() => setSelectMenu(cat.id)}
                style={{
                  backgroundColor: selectMenu === cat.id ? "#86AD31" : "white",
                }}
              >
                <Dropdown
                  className="dropdown ms-auto"
                  style={{ position: "absolute", left: 5 }}
                >
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
                  <Dropdown.Menu align="end">
                    <Dropdown.Item
                      onClick={() => {
                        halndleOpenMenu();
                        setMenuId(cat.id);
                        setMenu({
                          name: cat.name,
                          priority: cat.priority,
                          img: cat.img,
                        });
                      }}
                    >
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDeleteMenu(cat.id)}>
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="card-body">
                  <img
                    width={50}
                    height={50}
                    src={cat.img}
                    alt=""
                    style={{ marginBottom: "1rem" }}
                  />
                  <h6
                    style={{
                      color: selectMenu === cat.id ? "white" : "black ",
                    }}
                    className="mb-0 font-w500"
                  >
                    {cat.name}
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default MenuCategorySlider;
