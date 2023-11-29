import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navigetions = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <ul
        className="flex items-center gap-3 text-lg text-white"
        style={{ listStyle: "none" }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about-Us">About Us</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
        <div className="relative">
          <li
            onClick={() => setIsShow(!isShow)}
            className="flex cursor-pointer items-center gap-1"
          >
            Pages <IoIosArrowDown className="text-white mt-2" />
          </li>
          <div
            className={`${
              isShow
                ? "w-[14rem] ease-in-out pageLiBox flex flex-col gap-3 px-5 absolute -left-2 pb-6 pt-3 top-[170%] bg-[#0c132e]"
                : "hidden"
            }`}
          >
            <li className="pageLi">Page1</li>
            <li className="pageLi">Page2</li>
            <li className="pageLi">Page3</li>
            <li className="pageLi">Page4</li>
            <li className="pageLi">Page5</li>
          </div>
        </div>
        <li>
          <Link to="contuctus">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigetions;
