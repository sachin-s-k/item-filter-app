import icon from "../assets/icon.png";
const NavBar = () => {
  return (
    <>
      <div className=" h-18 shadow-lg">
        <div className="m-3  flex flex-row justify-between">
          <div>
            <img src={icon} alt="" srcset="" className="h-20 w-20 ml-16" />
          </div>

          <div className="relative mr-24 mt-6">
            <svg
              className="w-7 h-7"
              viewBox="-1 0 37 32"
              fill="white"
              stroke="black"
              strokeWidth="2"
            >
              <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
            </svg>

            <span className="absolute top-1 right-1  text-black rounded-full text-md w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
