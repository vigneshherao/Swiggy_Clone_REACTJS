import { useParams } from "react-router-dom";
import { MenuShimmer } from "./MenuShimmer";
import useMenu from "../utils/useMenu";
import RestaurentAccordian from "./RestaurentAccordian";
import { useState } from "react";

export const Menu = () => {
  let [showIndex, setShowIndex] = useState(0);

  let { resId } = useParams();

  const restaurantItems = useMenu(resId);

  if (restaurantItems.length === 0) {
    return <MenuShimmer />;
  }


  const { name, cuisines, city, totalRatingsString, locality, avgRating } =
    restaurantItems.data?.cards[0]?.card?.card?.info?restaurantItems.data?.cards[0]?.card?.card?.info:restaurantItems.data?.cards[2]?.card?.card?.info;

  const itemCard =
    restaurantItems.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards;

  const choices1 =
    restaurantItems.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards.filter(
      (res) => {
        return (
          res.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  const choices2 =
    restaurantItems.data?.cards[5]?.groupedCard?.cardGroupMap.REGULAR.cards.filter(
      (res) => {
        return (
          res.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

    console.log(restaurantItems.data?.cards[5]?.groupedCard?.cardGroupMap.REGULAR.cards);

  return (
    <div className=" w-[100%] px-[8%] sm:px-[10%] md:px-[20%]">
      <div className="mt-4">
        <h6 className="text-xs text-gray-400 font-thin">
          Hotel / Mangaluru / {name}
        </h6>
      </div>
      <div className="mt-[25px] flex pr-5 justify-between border-b border-gray-300 leading-none pb-3 ">
        <div className="restaurent-title">
          <h4 className="mb-2">{name}</h4>
          <p className="text-gray-500 leading-none mb-1 text-sm">
            {cuisines.join(",")}
          </p>
          <p className="text-gray-500 mb-1 text-sm">{`${locality} , ${city}`}</p>
        </div>
        <div className="h-[70px] w-16 border border-gray-300">
          <span className="ml-2 text-center flex text-green-600 mb-2 pb-2 border-b border-gray-300 font-bold">
            &#9733; {avgRating}
          </span>
          <p className="text-center text-xs text-gray-500 font-semibold">
            {totalRatingsString}
          </p>
        </div>
      </div>
      <div className="mt-2 flex justify-between border-b border-gray-300 font-bold">
        <div>
          <p className="text-green-600 font-semibold justify-center">
            Veg only
          </p>
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
        {(choices1 ?? choices2).map((res, index) => (
          <RestaurentAccordian
            key={index}
            data={res}
            showItem={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
