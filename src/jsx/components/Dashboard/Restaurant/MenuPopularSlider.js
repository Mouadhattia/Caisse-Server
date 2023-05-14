import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Autoplay } from "swiper";
import "swiper/css";

import Pic1 from "./../../../../images/popular-img/pic-1.jpg";
import Pic2 from "./../../../../images/popular-img/pic-2.jpg";
import Pic4 from "./../../../../images/popular-img/pic-4.jpg";

const sliderData = [
  { image: Pic1, title: "Double Burger" },
  { image: Pic2, title: "Beef Burger" },
  { image: Pic4, title: "Cheese Burger" },
  { image: Pic2, title: "Fish Burger" },
  { image: Pic4, title: "Masala Burger" },
];
const MenuPopularSlider = ({
  products,
  handleDeleteProduct,
  setSelectProduct,
  selectProduct,
  setProduct,
  setProductId,
  halndleOpenProduct,
}) => {
  return (
    <>
      <Swiper
        className="mySwiper-3"
        //speed= {1200}
        slidesPerView={3}
        spaceBetween={20}
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
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {products.map((item, ind) => (
          <SwiperSlide key={ind}>
            <div
              className="card b-hover"
              onClick={() => setSelectProduct(item.id)}
              style={{
                backgroundColor:
                  selectProduct === item.id ? "#86AD31" : "white",
              }}
            >
              <div className="card-body p-3" style={{ height: "13rem" }}>
                <div className="menu-bx">
                  <div className="d-flex  align-items-start">
                    <img src={item.img1} alt="" />
                    <div className="mr-auto pr-3">
                      <Link to={"#"}>
                        <h4
                          className="font-w500"
                          style={{
                            color:
                              selectProduct === item.id ? "white" : "black",
                          }}
                        >
                          {item.name}
                        </h4>
                      </Link>
                      <h4
                        className="text-primary"
                        style={{
                          color: selectProduct === item.id ? "white" : "black",
                        }}
                      >
                        {item.price} TND
                      </h4>
                      <div className="d-flex align-items-center mb-3 text-nowrap">
                        <p
                          className="mb-0 px-2"
                          style={{
                            color:
                              selectProduct === item.id ? "white" : "black",
                          }}
                        >
                          Nombre de tailles disponible{" "}
                        </p>
                        <svg
                          className="me-2"
                          width="4"
                          height="5"
                          viewBox="0 0 4 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2" cy="2.50003" r="2" fill="#C4C4C4" />
                        </svg>
                        <p
                          className="mb-0"
                          style={{
                            color:
                              selectProduct === item.id ? "white" : "black",
                          }}
                        >
                          {item.size.length + 1}
                        </p>
                      </div>
                    </div>
                    <Dropdown className="dropdown ms-auto">
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
                            setProductId(item.id);
                            halndleOpenProduct();
                            setProduct({
                              name: item.name,
                              priority: item.priority,
                              price: item.price,
                              img1: item.img1,
                              img2: item.img2,
                              img3: item.img3,
                              img4: item.img3,
                              desc: item.desc,
                              size: item.size,
                            });
                          }}
                        >
                          Modefier
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleDeleteProduct(item.id)}
                        >
                          Supprimer
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <p
                    className="mb-0 font-w400"
                    style={{
                      color: selectProduct === item.id ? "white" : "black",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default MenuPopularSlider;
