import React, { useState } from "react";
import "./PopulerProduct.css";
import TopRatedP from "./TopRatedP/TopRatedP";
import BestSellingP from "./BestSellingP/BestSellingP";
import LatestProduct from "./LatestSelling/LatestProduct";

const YourComponent = () => {
  const [selectedTab, setSelectedTab] = useState("topRated"); // Use a string to represent the selected tab

  return (
    <div className="py-24 px-10 max-w-7xl mx-auto">
      <div className="tab-heading md:inline-block">
        <h1 className="md:text-4xl lg:text-5xl mb-3 text-3xl inline-block text-[#5d807f] md:absolute font-semibold">
          Popular Toy
        </h1>
      </div>
      <div className="flex md:ms-[40%] lg:ms-[62%] w-full">
        <div
          role="tablist"
          className="tabs w-full ms-auto flex-end tabs-bordered"
        >
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            id="topRated"
            className="tab text-lg"
            aria-label="Top Rated"
            checked={selectedTab === "topRated"}
            onChange={() => setSelectedTab("topRated")}
          />
          <div
            role="tabpanel"
            className={`tab-content mt-2 md:mt-10 lg:ms-[-60%] md:ms-[-35%] w-full ${
              selectedTab === "topRated" ? "block" : "hidden"
            }`}
          >
            <TopRatedP></TopRatedP>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            id="bestSelling"
            className="tab text-lg"
            aria-label="Best Selling"
            checked={selectedTab === "bestSelling"}
            onChange={() => setSelectedTab("bestSelling")}
          />
          <div
            role="tabpanel"
            className={`tab-content mt-2 md:mt-10 lg:ms-[-60%] md:ms-[-35%] w-full ${
              selectedTab === "bestSelling" ? "block" : "hidden"
            }`}
          >
            <BestSellingP></BestSellingP>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            id="latestProduct"
            className="tab text-lg"
            aria-label="Latest Product"
            checked={selectedTab === "latestProduct"}
            onChange={() => setSelectedTab("latestProduct")}
          />
          <div
            role="tabpanel"
            className={`tab-content mt-2 md:mt-10 lg:ms-[-60%] md:ms-[-35%] mx-auto w-full ${
              selectedTab === "latestProduct" ? "block" : "hidden"
            }`}
          >
            <LatestProduct></LatestProduct>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
