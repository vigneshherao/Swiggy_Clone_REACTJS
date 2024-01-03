import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { restaurantsData, itemList } from "../utils/data";
import { itemUrl } from "../utils/link";
import FilterComponent from "./FilterComponent";
import Shimmer from "./ShimmerComponent";

const ItemCard = ({ cardData }) => {
  return (
    <div className="cards">
      <img src={itemUrl + cardData.imageId} alt={cardData.name} />
    </div>
  );
};



const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  
  const handleFilter = (filterFunction) => {
    const filteredRestaurants = restaurants.filter(filterFunction);
    setRestaurants(filteredRestaurants);
  };

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8879528&lng=74.8831089&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    let jsonData = await data.json();
    setRestaurants(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }

  if(restaurants.length == 0){
    return (
      <Shimmer/>
    )
  }

  return (
    <div className="body">
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
            <RestaurentCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
