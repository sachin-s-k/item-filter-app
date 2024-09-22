import { useSelector } from "react-redux";

const RestaurantCard = () => {
  const restaurantsList = useSelector((state) => state.items.allItems);

  return (
    <>
      {console.log(restaurantsList, "restaurant")}

      {restaurantsList.map((item) => {
        return (
          <>
            <div className="max-w-sm h-118 w-64 rounded-md  overflow-hidden  cursor-pointer ">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`}
                alt=""
                srcset=""
                className="w-full object-cover h-36 rounded-xl "
              />
              <div class="px-2 py-4">
                <div class="font-bold text-md mb-2">{item.info.name}</div>
              </div>
              <div class="px-2 pt-4 pb-2">
                <span class="inline-block  text-sm font-semibold text-gray-700 mr-2 mb-2 overflow-hidden">
                  {item.info.cuisines}
                </span>
              </div>
              <div class="px-2 flex justify-between items-center pb-2">
                <button class="bg-green-400 hover:bg-green-300 text-white font-bold py-1 px-2 rounded">
                  Order Now
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
