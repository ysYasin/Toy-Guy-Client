import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import SearchBar from "./SearchBar";
import Navigetions from "./Navigetions";

const Navebar = () => {
  return (
    <div className="navbar sticky top-0 z-30 border-b-[#0c132e] border-b-2 md:px-10 bg-[#1c3e4a]">
      <div className="flex-1">
        <Link to="/" className="w-[50px]">
          <img src="/logo.png" width={""} alt="" />
        </Link>
        <div
          className="ms-14 hidden lg:block
        "
        >
          <Navigetions></Navigetions>
        </div>
      </div>
      <div className="flex-none items-center">
        <div className="searchbar hidden md:block me-16">
          <SearchBar></SearchBar>
        </div>
        <div className="indicator">
          <Link to="">
            <button>
              {" "}
              <FaRegHeart className="text-white text-xl mt-1 me-2" />{" "}
            </button>
          </Link>
          <span className="badge badge-sm indicator-item">0</span>
        </div>
        <div className="">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 text-teal-50 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">0</span>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
