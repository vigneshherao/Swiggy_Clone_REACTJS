import { MenuCard } from "./MenuCard";
import { useParams } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import ConnectionError from "./ConnectionError";
import { MenuShimmer } from "./MenuShimmer";
import useMenu from "../utils/useMenu";

export const Menu = () => {
  let { resId } = useParams();

  const restaurantItems = useMenu(resId);

  const status = useInternetStatus();

  if (status == false) {
    return <ConnectionError />;
  }

  if (restaurantItems.length === 0) {
    return <MenuShimmer />;
  }

  const { name, cuisines, city, totalRatingsString, locality, avgRating } =
    restaurantItems.data?.cards[0]?.card?.card?.info;
  const itemCard =
    restaurantItems.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards;

  return (
    <div className=" w-[100%] px-[25%]">
      <div className="mt-4">
        <h6 className="text-xs text-gray-400 font-thin">Hotel / Mangaluru / {name}</h6>
      </div>
      <div className="mt-[25px] flex pr-5 justify-between border-b border-gray-300 leading-none ">
        <div className="restaurent-title">
          <h4 className="mb-2">{name}</h4>
          <p className="text-gray-500 leading-none mb-1 text-sm">{cuisines.join(",")}</p>
          <p className="text-gray-500 mb-1 text-sm">{`${locality} , ${city}`}</p>
        </div>
        <div className="h-[70px] w-16 border border-gray-300">
          <span className="ml-2 text-center flex text-green-600 mb-2 pb-2 border-b border-gray-300 font-bold">&#9733; {avgRating}</span>
          <p className="text-center text-xs text-gray-500 font-semibold">{totalRatingsString}</p>
        </div>
      </div>
      <div className="mt-2 flex justify-between border-b border-gray-300 font-bold">
        <div>
          <p className="text-green-600 font-semibold justify-center">Veg only</p>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
      </div>
      <div>
        {itemCard.map((item) => {
          return <MenuCard key={item.card.info.id} itemData={item.card.info} />;
        })}
        <MenuCard />
      </div>
    </div>
  );
};
