const SearchBar = () => {
  return (
    <>
      <div className="flex justify-center mt-24">
        <input
          className=" border border-gray-300 h-10 w-3/4  mb-0 p-2 font-md active:none"
          type="text"
          placeholder="Search for restaurants.."
        />
      </div>
    </>
  );
};

export default SearchBar;
