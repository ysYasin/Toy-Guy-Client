import { BsTruck } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { RiMessage3Fill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";

const HomeBanerBottom = () => {
  return (
    <div className="max-w-7xl my-12 mx-auto">
      <div className="grid px-10 md:px-20 py-28 banner-bottom md:grid-cols-2">
        <div className="text-white md:space-y-6 space-y-3">
          <h3 className="lg:text-lg md:text:md text-sm font-semibold">
            {" "}
            Rolls-Royce Cullinan Black Badge
          </h3>
          <h1 className="lg:text-5xl md:text-4xl text-2xl  font-bold">
            The wait is on: Rolls-Royce Cullinan Black Badge
          </h1>
          <p className="text-xl">
            Last call for up to <span className="text-3xl font-bold">2%</span>{" "}
            off
          </p>
        </div>
        <div className=""></div>
      </div>
      <div
        className="grid grid-cols-2 mt-5 lg:grid-cols-4 gap-3"
        style={{ background: "rgb(241 245 249)" }}
      >
        <div
          className="card items-center p-1 md:p-2 card-side shadow-xl"
          style={{ background: "rgb(241 245 249)" }}
        >
          <figure className="w-14 h-14 lg:w-1/2 lg:h-fit">
            <BsTruck className="w-full h-full md:w-14 md:h-14" />
          </figure>
          <div className=" flex flex-col ps-2 gap-2 p-2">
            <h2 className="card-title">Free shipping</h2>
            <p className="text-sm md:text-lg text-slate-700">
              Free Shipping for orders over $120
            </p>
          </div>
        </div>
        <div
          className="card items-center p-1 md:p-2 card-side shadow-xl"
          style={{ background: "rgb(241 245 249)" }}
        >
          <figure className="w-14 h-14 lg:w-1/2 lg:h-fit">
            <AiOutlineDollar className="w-full h-full md:w-14 md:h-14" />
          </figure>
          <div className="flex flex-col ps-2 gap-2 p-2">
            <h2 className="card-title">Refund</h2>
            <p className="text-sm md:text-lg text-slate-700">
              Refund Within 30 days for an exchange.
            </p>
          </div>
        </div>
        <div
          className="card items-center p-1 md:p-2 card-side shadow-xl"
          style={{ background: "rgb(241 245 249)" }}
        >
          <figure className="w-14 h-14 lg:w-1/2 lg:h-fit">
            <RiMessage3Fill className="wlg:w-14 lg:h-14 -full h-full " />
          </figure>
          <div className="flex flex-col ps-2 gap-2 p-2">
            <h2 className="card-title">Support</h2>
            <p className="text-sm md:text-lg text-slate-700">
              24 hours a day, 7 days a week
            </p>
          </div>
        </div>
        <div
          className="card items-center p-1 md:p-2 card-side shadow-xl"
          style={{ background: "rgb(241 245 249)" }}
        >
          <figure className="w-14 h-14 lg:w-1/2 lg:h-fit">
            <FaCcMastercard className="wlg:w-14 lg:h-14 -full h-full " />
          </figure>
          <div className="flex flex-col ps-2 gap-2 p-2">
            <h2 className="card-title">Payment</h2>
            <p className="text-sm md:text-lg text-slate-700">
              Pay with Multiple Credit Cards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanerBottom;
