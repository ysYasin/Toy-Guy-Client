import { Link } from "react-router-dom";
import CaroselImage from "../../../../assets/home-carosel-image/banner.png";
import { FaArrowRight } from "react-icons/fa6";

const CaroselContent = () => {
  return (
    <div className="min-h-screen w-[100%]">
      <div className="lg:px-[6rem] mx-auto flex flex-col lg:flex-row lg:items-center md:justify-between">
        <div id="content" className="px-3 mt-10 text-start md:w-1/2">
          <div>
            <h1 className="quot relative mb-4 ms-4 text-xl font-semibold">
              if your childhen Loves toy
            </h1>
          </div>

          <h1
            className="lg:text-6xl md:text-4xl text-3xl font-semibold"
            style={{ fontFamily: "var(--tbh-font-family)" }}
          >
            your children are
          </h1>
          <h1
            className="text-6xl mt-3 font-semibold"
            style={{ fontFamily: "var(--tbh-font-family)" }}
          >
            Real Hero's
          </h1>
          <Link to="">
            <button className="border-[#5d807f] border-2 px-3 py-2 flex items-center gap-2 mt-10 hover:bg-[#5d807f] hover:text-white ease-in">
              Shop Now <FaArrowRight></FaArrowRight>{" "}
            </button>
          </Link>
        </div>
        <div
          id="image-and-animation"
          className="flex-end ms-auto md:w-1/2 relative"
        >
          <img
            src={CaroselImage}
            className="mt-10 banner-img z-10"
            // style={{ width: "60%" }}
            alt=""
          />
          <div className="round-ani1 -z-10 absolute top-[10%] right-[2%] w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full bg-[#5d807f]"></div>
          <div className="round-ani2 -z-10 absolute top-[10%] right-[2%] w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full bg-[#5d807f]"></div>
        </div>
      </div>
    </div>
  );
};

export default CaroselContent;
