import { IoIosSend } from "react-icons/io";

const Subscribe = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log({ email });
  };
  return (
    <div className="subscribe lg:py-24 lg:px-16 my-20 max-w-7xl mx-auto ">
      <div className=" lg:flex items-center bg-fuchsia-50 py-14 px-12 justify-between text-[#263238] ">
        <h1
          className="lg:text-4xl text-2xl mb-5 font-semibold"
          style={{ fontFamily: "Roboto" }}
        >
          Subscribe for <br /> Latest Toy & Offers
        </h1>

        <form onSubmit={handleSubscribe} className="flex">
          <input
            type="email"
            required
            name="email"
            placeholder="Type here"
            className="focus:outline-none form-control px-4 rounded-tr-none rounded-br-none rounded-tl-xl rounded-bl-xl w-full max-w-xs"
          />
          <button
            type="submit"
            className="btn btn-active rounded-tl-none rounded-bl-none border-[#ff3811] bg-[#ff3811] text-white font-medium btn-neutral"
          >
            Subscribe <IoIosSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
