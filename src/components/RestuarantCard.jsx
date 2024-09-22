import { useSelector } from "react-redux";

const RestaurantCard = () => {
  const restaurantsList = useSelector((state) => state.items.allItems);
  const filteredRestroList = useSelector((state) => state.items.filterItems);
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
      {console.log(restaurantsList, "restaurant")}

      {restaurantsList.map((item) => {
        return (
          <>
            <div className="max-w-sm h-118 w-64 rounded-md overflow-hidden cursor-pointer ">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`}
                alt=""
                className="w-full object-cover h-36 rounded-xl"
              />
              <div className="px-2 py-4">
                <div className="font-bold text-md mb-2">{item.info.name}</div>
              </div>

              <div className="px-2 pt-4 pb-2">
                <span
                  className="inline-block text-sm font-semibold text-gray-700 mr-2 mb-2 truncate"
                  title={item.info.cuisines.join(", ")} // Tooltip to show full text on hover
                >
                  {getCuisinesDisplay(item.info.cuisines)}
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
