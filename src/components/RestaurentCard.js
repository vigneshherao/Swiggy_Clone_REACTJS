import { cardUrl } from "../utils/link";
const RestaurentCard = ({ resData }) => {
    let { name, avgRating, deliveryTime, locality, cuisines, cloudinaryImageId } =
      resData.info;
    return (
      <div className="card">
        <img
          className="card-img-top cardImg"
          src={
            cardUrl
             +
            cloudinaryImageId
          }
          alt="Card image cap"
        ></img>
        <div className="card-offer">30% OFF</div>
        <div className="card-body">
          <h5>{name}</h5>
          <p>
            {avgRating} . {deliveryTime}mins
          </p>
          <div className="card-subtext">
            <p>{cuisines.join(",").slice(0, 24) + ".."}</p>
            <p>{locality}</p>
          </div>
        </div>
      </div>
    );
  };

export default RestaurentCard;