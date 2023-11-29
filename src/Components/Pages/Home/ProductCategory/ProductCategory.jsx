import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const ProductCategory = () => {
  const swiperRef = useRef(null);

  return (
    <div className="py-24 bg-[#8ba691]">
      <div className="w-10/12 mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          pagination={{
            el: ".swiper-pagination",
            type: "progressbar",
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card w-96 cursor-pointer bg-base-100 shadow-lg mb-10">
              <Link to="/">
                <figure className="overflow-hidden ease-linear transition-all">
                  <img
                    src="https://media.4rgos.it/s/Argos/2910978_R_SET?$Main768$&w=620&h=620"
                    alt="Shoes"
                    className="hover:scale-110 ease-in transition-all "
                  />
                </figure>
                <div className="py-3 w-full flex items-center transition-all ease-in-out justify-center text-[#0c132e]">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">LTS</div>
                  </h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-96 bg-base-100 shadow-lg mb-10">
              <Link to="/">
                <figure className="overflow-hidden">
                  <img
                    src="https://media.4rgos.it/s/Argos/2910978_R_SET?$Main768$&w=620&h=620"
                    alt="Shoes"
                    className="hover:scale-110 ease-in transition-all "
                  />
                </figure>
                <div className="py-3 w-full flex items-center justify-center text-[#0c132e]">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">LTS</div>
                  </h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card cursor-pointer w-96 bg-base-100 shadow-lg mb-10">
              <Link to="/" className="cursor-pointer">
                <figure className="overflow-hidden ease-linear transition-all">
                  <img
                    src="https://media.4rgos.it/s/Argos/2910978_R_SET?$Main768$&w=620&h=620"
                    alt="Shoes"
                    className="hover:scale-110 ease-in transition-all "
                  />
                </figure>
                <div className="py-3 w-full flex items-center justify-center text-[#0c132e]">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">LTS</div>
                  </h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card cursor-pointer w-96 bg-base-100 shadow-lg mb-10">
              <Link to="/" className="cursor-pointer">
                <figure className="overflow-hidden ease-linear transition-all">
                  <img
                    src="https://media.4rgos.it/s/Argos/2910978_R_SET?$Main768$&w=620&h=620"
                    alt="Shoes"
                    className="hover:scale-110 ease-in transition-all "
                  />
                </figure>
                <div className="py-3 w-full flex items-center justify-center text-[#0c132e]">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">LTS</div>
                  </h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card cursor-pointer w-96 bg-base-100 shadow-lg mb-10">
              <Link to="/" className="cursor-pointer">
                <figure className="overflow-hidden ease-linear transition-all">
                  <img
                    src="https://media.4rgos.it/s/Argos/2910978_R_SET?$Main768$&w=620&h=620"
                    alt="Shoes"
                    className="hover:scale-110 ease-in transition-all "
                  />
                </figure>
                <div className="py-3 w-full flex items-center justify-center text-[#0c132e]">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">LTS</div>
                  </h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card cursor-pointer w-96 bg-base-100 shadow-lg mb-10">
              <Link to="/" className="cursor-pointer">
                <figure className="overflow-hidden ease-linear transition-all">
                  <img
                    src="https://media.4rgos.it/s/Argos/2910978_R_SET?$Main768$&w=620&h=620"
                    alt="Shoes"
                    className="hover:scale-110 ease-in transition-all "
                  />
                </figure>
                <div className="py-3 w-full flex items-center justify-center text-[#0c132e]">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">LTS</div>
                  </h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card cursor-pointer w-96 bg-base-100 shadow-lg mb-10">
              <Link to="/" className="cursor-pointer">
                <figure className="overflow-hidden ease-linear transition-all">
                  <img
                    src="https://media.4rgos.it/s/Argos/2910978_R_SET?$Main768$&w=620&h=620"
                    alt="Shoes"
                    className="hover:scale-110 ease-in transition-all "
                  />
                </figure>
                <div className="py-3 w-full flex items-center justify-center text-[#0c132e]">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">LTS</div>
                  </h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card cursor-pointer w-96 bg-base-100 shadow-lg mb-10">
              <Link to="/" className="cursor-pointer">
                <figure className="overflow-hidden ease-linear transition-all">
                  <img
                    src="https://media.4rgos.it/s/Argos/2910978_R_SET?$Main768$&w=620&h=620"
                    alt="Shoes"
                    className="hover:scale-110 ease-in transition-all "
                  />
                </figure>
                <div className="py-3 w-full flex items-center justify-center text-[#0c132e]">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">LTS</div>
                  </h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card cursor-pointer w-96 bg-base-100 shadow-lg mb-10">
              <Link to="/" className="cursor-pointer">
                <figure className="overflow-hidden ease-linear transition-all">
                  <img
                    src="https://media.4rgos.it/s/Argos/2910978_R_SET?$Main768$&w=620&h=620"
                    alt="Shoes"
                    className="hover:scale-110 ease-in transition-all "
                  />
                </figure>
                <div className="py-3 w-full flex items-center justify-center text-[#0c132e]">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">LTS</div>
                  </h2>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductCategory;
