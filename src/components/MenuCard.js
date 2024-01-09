import { menuImage } from "../utils/link";
import Shimmer from "./ShimmerComponent";

export const MenuCard = ({ itemData }) => {
  if (!itemData) {
    return null;
  }

  const { name, imageId, description, isVeg, price } = itemData;

  return (
    <div className="menu-card">
      <div className="item-description">
        {isVeg == 1 ? (
          <i className="fa-solid fa-leaf" style={{ color: "#5ac24c" }} />
        ) : (
          <i
            className="fa-solid fa-drumstick-bite"
            style={{ color: "#c11a1a" }}
          />
        )}
        <h6>{name}</h6>
        <p> &#8377; {price / 100}</p>
        <p className="item-paragraph">{description}</p>
      </div>
      <div className="item-image">
        <img src={menuImage + imageId} alt={name} />
      </div>
    </div>
  );
};
