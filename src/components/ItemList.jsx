import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RestaurantCard from "./RestuarantCard";
import { useDispatch } from "react-redux";
import { addItem } from "../app-store/itemSlice";
const ItemList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.943811700000001&lng=76.3275467&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING%22"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(
          data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
          "dyattta"
        );

        dispatch(
          addItem(
            data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
          )
        );
      })
      .catch((err) => {
        console.log(err.message);
        const notify = () => toast.error(err.message);
        notify();
      });
  }, []);

  return (
    <>
      <div className="mt-12  flex justity-center mb-0 m-56  ">
        <div className="grid grid-cols-4 justiy-between gap-12">
          <RestaurantCard />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ItemList;
