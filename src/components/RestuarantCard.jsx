import { useSelector } from "react-redux";

const RestaurantCard = () => {
  const filteredRestroList = useSelector((state) => state.items.filteredItems);
  const getCuisinesDisplay = (cuisines) => {
    const maxDisplayCount = 3; // You can set this limit based on the width of the container
    if (cuisines.length <= maxDisplayCount) {
      return cuisines.join(", "); // Display all if within limit
    }
    const displayedCuisines = cuisines.slice(0, maxDisplayCount).join(", ");
    return `${displayedCuisines}, ... ${cuisines[cuisines.length - 1]}`; // Display first 2-3 and last one
  };

  return (
    <>
      {filteredRestroList.map((item) => {
        return (
          <>
            <div
              className="max-w-sm h-118 w-64 rounded-md overflow-hidden cursor-pointer shadow-md"
              key={item.info.id}
            >
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`}
                alt=""
                className="w-full object-cover h-36 rounded-xl"
              />
              <div className="px-2 py-2">
                <div className="font-bold text-md ">{item.info.name}</div>
              </div>
              <div className="px-2 flex gap-1">
                <div className="mt-0.5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    role="img"
                    aria-hidden="true"
                    strokeColor="rgba(2, 6, 12, 0.92)"
                    fillColor="rgba(2, 6, 12, 0.92)"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                    ></circle>
                    <path
                      d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                      fill="white"
                    ></path>
                    <defs>
                      <linearGradient
                        id="StoreRating20_svg__paint0_linear_32982_71567"
                        x1="10"
                        y1="1"
                        x2="10"
                        y2="19"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#21973B"></stop>
                        <stop offset="1" stop-color="#128540"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="">
                  <span>{item.info.avgRating}</span>
                  <span
                    className="inline-block align-middle mx-1"
                    style={{ marginTop: "-0.2em" }}
                  >
                    .
                  </span>
                  <span>{item.info.sla.slaString}</span>
                </div>

                <div>
                  <span></span>
                </div>
              </div>

              <div className="px-2 ">
                <span
                  className="inline-block text-sm font-semibold text-gray-600 mr-2 truncate"
                  title={item.info.cuisines.join(", ")} // Tooltip to show full text on hover
                >
                  {getCuisinesDisplay(item.info.cuisines)}
                </span>
              </div>
              <div className="px-2 ">
                <span
                  className="inline-block text-sm font-semibold text-gray-600 mr-2 mb-2 truncate"
                  // Tooltip to show full text on hover
                >
                  {item.info.areaName}
                </span>
              </div>

              <div className="px-2 flex justify-between items-center pb-2">
                <div></div>
                <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-1 px-2 rounded">
                  ADD
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default RestaurantCard;
