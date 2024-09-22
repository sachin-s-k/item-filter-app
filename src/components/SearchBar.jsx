import { useDispatch } from "react-redux";
import { filterItems } from "../app-store/itemSlice";
import { useState } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const searchRestaurant = (e) => {
    setQuery(e.target.value);
    dispatch(filterItems(e.target.value));
  };
  return (
    <>
      <div className=" relative flex justify-center mt-24">
        <input
          className=" outline-none border border-gray-300 h-10 w-3/4  mb-0 p-2   pl-10 pr-4font-md active:none"
          type="text"
          value={query}
          placeholder="Search for restaurants....."
          onChange={searchRestaurant}
        />
        <div class="absolute inset-y-0 left-0 flex items-center  pointer-events-none pl-48">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-400"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              fill="none"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65l4.35 4.35zM10.5 17a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
