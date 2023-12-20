import React, { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { restaurantsData, itemList } from "../utils/data";
import { itemUrl } from "../utils/link";

const ItemCard = ({ cardData }) => {
  return (
    <div className="cards">
      <img src={itemUrl + cardData.imageId} alt={cardData.name} />
    </div>
  );
};



const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantsData);
  
  const handleFilter = (filterFunction) => {
    const filteredRestaurants = restaurantsData.filter(filterFunction);
    setRestaurants(filteredRestaurants);
  };

  return (
    <div className="body">
      <div className="search">
        <input type="text" />
      </div>
      <div className="item-container">
        {itemList.map((item) => {
          return <ItemCard key={item.id} cardData={item} />;
        })}
      </div>
      <div className="main-container">
        <h4>Restaurants with online food delivery in Mangaluru</h4>
        <FilterComponent onFilter={handleFilter} />
        <div className="res-container">
          {restaurants.map((restaurant) => (
            <RestaurentCard key={restaurant.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
