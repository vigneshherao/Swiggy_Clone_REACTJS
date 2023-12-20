import RestaurentCard from "./RestaurentCard";
import restaurants from "../utils/data";

  const Body = () => {
    return (
      <div className="body">
        <div className="search">
          <input type="text"></input>
        </div>
        <div className="res-container">
          {restaurants.map((restaurant) => (
            <RestaurentCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };


export default Body;