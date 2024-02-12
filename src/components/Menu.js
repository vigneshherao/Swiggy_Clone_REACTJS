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
    <div className="menu-container">
      <div className="header-path">
        <h6>Hotel / Mangaluru / Burger King</h6>
      </div>
      <div className="restaurent-box">
        <div className="restaurent-title">
          <h4>{name}</h4>
          <p>{cuisines.join(",")}</p>
          <p>{`${locality} , ${city}`}</p>
        </div>
        <div className="restaurent-rating">
          <span className="menuStar">&#9733; {avgRating}</span>
          <p className="menuRating">{totalRatingsString}</p>
        </div>
      </div>
      <div className="restaurent-options">
        <div>
          <p>veg only</p>
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
