import { BsInfoCircle } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import "./tooltip.css";
import { useEffect, useState } from "react";

const DealOfTheDaySection = () => {
  const [cuppon1, setCuppon1] = useState(false);
  const [cuppon2, setCuppon2] = useState(false);
  const [cuppon3, setCuppon3] = useState(false);
  const [cuppon4, setCuppon4] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      cuppon1 && setCuppon1(false);
    }, 1000);
  }, [cuppon1]);
  useEffect(() => {
    setTimeout(() => {
      cuppon2 && setCuppon2(false);
    }, 1000);
  }, [cuppon2]);
  useEffect(() => {
    setTimeout(() => {
      cuppon3 && setCuppon3(false);
    }, 1000);
  }, [cuppon3]);
  useEffect(() => {
    setTimeout(() => {
      cuppon4 && setCuppon4(false);
    }, 1000);
  }, [cuppon4]);
  return (
    <div className="max-w-7xl container px-5 mx-auto py-24">
      <div className="flex justify-between">
        <h1 className="lg:text-5xl text-3xl dealotd relative font-medium">
          Deal of the day
        </h1>
        <button className="px-5 py-3 hover:bg-[#26324a] transition-all ease-linear bg-[#263238] text-white text-lg font-medium">
          vew All Product
        </button>
      </div>
      <div className="flex flex-col mt-16 items-center md:justify-between gap-3 md:flex-row">
        <div className="flex lg:w-1/2 py-8 px-5 gap-5 items-center justify-around border mg:w-1/2 ">
          <div className="h-full w-[100px]">
            <img
              className="lg:w-[100px] w-full h-full"
              src="https://www.momswhothink.com/wp-content/uploads/2023/07/shutterstock-1601261803-huge-licensed-scaled-1200x800.jpg"
              alt=""
            />
          </div>
          <div className="grow">
            <h3 className="text-lg mb-2 font-bold font-sans">
              August Gift Voucher <br />
              <span className="text-2xl font-bold text-[#61afd6]">10%</span> Off
            </h3>
            <div className="flex items-center mt-1 gap-2">
              <p className="border-r border-slate-300 pe-2 font-medium text-sm flex flex-col">
                <span>0</span>
                <span>DAY</span>
              </p>
              <p className="border-r border-slate-300 pe-2 font-medium text-sm flex flex-col">
                <span>0</span>
                <span>HRS</span>
              </p>
              <p className="border-r border-slate-300 pe-2 font-medium text-sm flex flex-col">
                <span>0</span>
                <span>MIN</span>
              </p>
              <p className="border-r border-slate-300 pe-2 font-medium text-sm flex flex-col">
                <span>0</span>
                <span>SEC</span>
              </p>
            </div>
          </div>
          <div className="relative lg:ps-4">
            <span className="absolute h-[150%] -top-8 -left-4 w-[2px] border-dashed border-l-2 bg-transparent"></span>
            <span
              className="absolute h-[20px] top-[-37px] -left-7 border-r border-l b w-[27px] bg-white "
              style={{
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
                transform: " scaleY(-1)",
              }}
            ></span>
            <span
              className="absolute h-[20px] bottom-[-38px] -left-7 border-r border-l b w-[27px] bg-white "
              style={{
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
              }}
            ></span>
            <div>
              <p
                data-tooltip-id="cupon-card-tooltip"
                className="flex items-center gap-1 mb-5"
              >
                Cupon <span className="text-rose-400">Inactive</span>{" "}
                <BsInfoCircle />{" "}
              </p>
              <Tooltip
                place="top-end"
                id="cupon-card-tooltip"
                className="info tooltip"
              >
                <p className="">
                  *This cupon code will apply on <br />
                  <span className="text-slate-300 text-lg font-semibold">
                    luxury toy's
                  </span>{" "}
                  and when you shopping more then{" "}
                  <span className="text-slate-300 text-lg font-semibold">
                    $ 800
                  </span>
                </p>
              </Tooltip>
            </div>

            <button
              onClick={() => setCuppon1(true)}
              className="lg:px-5 py-1 px-2 lg:py-3 bg-[#e5f2f2] border-dashed border-2 border-[#158aa0] text-[#158aa0] text-lg font-medium"
            >
              {cuppon1 ? "Copied" : "Happy NY24"}
            </button>
          </div>
        </div>
        <div className="flex lg:w-1/2 py-8 px-5 gap-5 items-center justify-around border mg:w-1/2 ">
          <div className="h-full w-[100px]">
            <img
              className="lg:w-[100px] w-full h-full"
              src="https://www.momswhothink.com/wp-content/uploads/2023/07/shutterstock-1601261803-huge-licensed-scaled-1200x800.jpg"
              alt=""
            />
          </div>
          <div className="grow">
            <h3 className="text-lg mb-2 font-bold font-sans">
              August Gift Voucher <br />
              <span className="text-2xl font-bold text-[#61afd6]">10%</span> Off
            </h3>
            <div className="flex items-center mt-1 gap-2">
              <p className="border-r border-slate-300 pe-2 font-medium text-sm flex flex-col">
                <span>0</span>
                <span>DAY</span>
              </p>
              <p className="border-r border-slate-300 pe-2 font-medium text-sm flex flex-col">
                <span>0</span>
                <span>HRS</span>
              </p>
              <p className="border-r border-slate-300 pe-2 font-medium text-sm flex flex-col">
                <span>0</span>
                <span>MIN</span>
              </p>
              <p className="border-r border-slate-300 pe-2 font-medium text-sm flex flex-col">
                <span>0</span>
                <span>SEC</span>
              </p>
            </div>
          </div>
          <div className="relative lg:ps-4">
            <span className="absolute h-[150%] -top-8 -left-4 w-[2px] border-dashed border-l-2 bg-transparent"></span>
            <span
              className="absolute h-[20px] top-[-37px] -left-7 border-r border-l b w-[27px] bg-white "
              style={{
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
                transform: " scaleY(-1)",
              }}
            ></span>
            <span
              className="absolute h-[20px] bottom-[-38px] -left-7 border-r border-l b w-[27px] bg-white "
              style={{
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
              }}
            ></span>
            <div>
              <p
                data-tooltip-id="cupon-card-tooltip"
                className="flex items-center gap-1 mb-5"
              >
                Cupon <span className="text-rose-400">Inactive</span>{" "}
                <BsInfoCircle />{" "}
              </p>
              <Tooltip
                place="top-end"
                id="cupon-card-tooltip"
                className="info tooltip"
              >
                <p className="">
                  *This cupon code will apply on <br />
                  <span className="text-slate-300 text-lg font-semibold">
                    luxury toy's
                  </span>{" "}
                  and when you shopping more then{" "}
                  <span className="text-slate-300 text-lg font-semibold">
                    $ 800
                  </span>
                </p>
              </Tooltip>
            </div>

            <button
              onClick={() => setCuppon1(true)}
              className="lg:px-5 py-1 px-2 lg:py-3 bg-[#e5f2f2] border-dashed border-2 border-[#158aa0] text-[#158aa0] text-lg font-medium"
            >
              {cuppon1 ? "Copied" : "Happy NY24"}
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:mt-16 mt-5 items-center md:justify-between gap-3 md:flex-row">
        <div className="flex lg:w-1/2 py-8 px-5 gap-5 items-center justify-around border mg:w-1/2 ">
          <div className="h-full w-[100px]">
            <img
              className="lg:w-[100px] w-full h-full"
              src="https://www.momswhothink.com/wp-content/uploads/2023/07/shutterstock-1601261803-huge-licensed-scaled-1200x800.jpg"
              alt=""
            />
          </div>
          <div className="grow">
            <h3 className="text-lg mb-2 font-bold font-sans">
              August Gift Voucher <br />
              <span className="text-2xl font-bold text-[#61afd6]">10%</span> Off
            </h3>
            <div className="flex items-center mt-1 gap-2">
              <p className="border-r border-slate-300 pe-2 font-medium text-sm flex flex-col">
                <span>0</span>
                <span>DAY</span>
              </p>
              <p className="border-r border-slate-300 pe-2 font-medium text-sm flex flex-col">
                <span>0</span>
                <span>HRS</span>
              </p>
              <p className="border-r border-slate-300 pe-2 font-medium text-sm flex flex-col">
                <span>0</span>
                <span>MIN</span>
              </p>
              <p className="border-r border-slate-300 pe-2 font-medium text-sm flex flex-col">
                <span>0</span>
                <span>SEC</span>
              </p>
            </div>
          </div>
          <div className="relative lg:ps-4">
            <span className="absolute h-[150%] -top-8 -left-4 w-[2px] border-dashed border-l-2 bg-transparent"></span>
            <span
              className="absolute h-[20px] top-[-37px] -left-7 border-r border-l b w-[27px] bg-white "
              style={{
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
                transform: " scaleY(-1)",
              }}
            ></span>
            <span
              className="absolute h-[20px] bottom-[-38px] -left-7 border-r border-l b w-[27px] bg-white "
              style={{
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
              }}
            ></span>
            <div>
              <p
                data-tooltip-id="cupon-card-tooltip"
                className="flex items-center gap-1 mb-5"
              >
                Cupon <span className="text-rose-400">Inactive</span>{" "}
                <BsInfoCircle />{" "}
              </p>
              <Tooltip
                place="top-end"
                id="cupon-card-tooltip"
                className="info tooltip"
              >
                <p className="">
                  *This cupon code will apply on <br />
                  <span className="text-slate-300 text-lg font-semibold">
                    luxury toy's
                  </span>{" "}
                  and when you shopping more then{" "}
                  <span className="text-slate-300 text-lg font-semibold">
                    $ 800
                  </span>
                </p>
              </Tooltip>
            </div>

            <button
              onClick={() => setCuppon1(true)}
              className="lg:px-5 py-1 px-2 lg:py-3 bg-[#e5f2f2] border-dashed border-2 border-[#158aa0] text-[#158aa0] text-lg font-medium"
            >
              {cuppon1 ? "Copied" : "Happy NY24"}
            </button>
          </div>
        </div>
        <div className="flex lg:w-1/2 py-8 px-5 gap-5 items-center justify-around border mg:w-1/2 ">
          <div className="h-full w-[100px]">
            <img
              className="lg:w-[100px] w-full h-full"
              src="https://www.momswhothink.com/wp-content/uploads/2023/07/shutterstock-1601261803-huge-licensed-scaled-1200x800.jpg"
              alt=""
            />
          </div>
          <div className="grow">
            <h3 className="text-lg mb-2 font-bold font-sans">
              August Gift Voucher <br />
              <span className="text-2xl font-bold text-[#61afd6]">10%</span> Off
            </h3>
            <div className="flex items-center mt-1 gap-2">
              <p className="border-r border-slate-300 pe-2 font-medium text-sm flex flex-col">
                <span>0</span>
                <span>DAY</span>
              </p>
              <p className="border-r border-slate-300 pe-2 font-medium text-sm flex flex-col">
                <span>0</span>
                <span>HRS</span>
              </p>
              <p className="border-r border-slate-300 pe-2 font-medium text-sm flex flex-col">
                <span>0</span>
                <span>MIN</span>
              </p>
              <p className="border-r border-slate-300 pe-2 font-medium text-sm flex flex-col">
                <span>0</span>
                <span>SEC</span>
              </p>
            </div>
          </div>
          <div className="relative lg:ps-4">
            <span className="absolute h-[150%] -top-8 -left-4 w-[2px] border-dashed border-l-2 bg-transparent"></span>
            <span
              className="absolute h-[20px] top-[-37px] -left-7 border-r border-l b w-[27px] bg-white "
              style={{
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
                transform: " scaleY(-1)",
              }}
            ></span>
            <span
              className="absolute h-[20px] bottom-[-38px] -left-7 border-r border-l b w-[27px] bg-white "
              style={{
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
              }}
            ></span>
            <div>
              <p
                data-tooltip-id="cupon-card-tooltip"
                className="flex items-center gap-1 mb-5"
              >
                Cupon <span className="text-rose-400">Inactive</span>{" "}
                <BsInfoCircle />{" "}
              </p>
              <Tooltip
                place="top-end"
                id="cupon-card-tooltip"
                className="info tooltip"
              >
                <p className="">
                  *This cupon code will apply on <br />
                  <span className="text-slate-300 text-lg font-semibold">
                    luxury toy's
                  </span>{" "}
                  and when you shopping more then{" "}
                  <span className="text-slate-300 text-lg font-semibold">
                    $ 800
                  </span>
                </p>
              </Tooltip>
            </div>

            <button
              onClick={() => setCuppon1(true)}
              className="lg:px-5 py-1 px-2 lg:py-3 bg-[#e5f2f2] border-dashed border-2 border-[#158aa0] text-[#158aa0] text-lg font-medium"
            >
              {cuppon1 ? "Copied" : "Happy NY24"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDaySection;
