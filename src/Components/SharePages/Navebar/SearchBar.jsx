import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <div className="form-control relative w-[23rem]">
      <input
        type="text"
        placeholder="Search..."
        className="input pe-12 rounded-full w-full "
      />
      <div>
        <FaMagnifyingGlass className="absolute right-3 top-3 text-2xl cursor-pointer text-slate-500" />
      </div>
    </div>
  );
};

export default SearchBar;
