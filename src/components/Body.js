import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { itemList } from "../utils/data";
import FilterComponent from "./FilterComponent";
import Shimmer from "./ShimmerComponent";
import ItemCard from "./ItemCart";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import ConnectionError from "./ConnectionError";
import { useRestaurent , useFilterdRestaurent } from "../utils/useRestaurent";

const Body = () => {
  
  const [restaurants,filterRestaurants] = useRestaurent();
  const [searchRestaurants, setSearchRestaurants] = useState("");

  // const handleFilter = (filterFunction) => {
  //   const filteredRestaurants = restaurants.filter(filterFunction);
  //   setRestaurants(filteredRestaurants);
  // };

  const status = useInternetStatus();

  if(status==false){
    return <ConnectionError/>
  }

  return restaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="search"
          placeholder="Search Restaurents"
          value={searchRestaurants}
          onChange={(e) => {
            setSearchRestaurants(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredRestaurants = restaurants.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchRestaurants.toLowerCase());
            });
            setFilterRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>
      </div>
      <span>What's on your mind?</span>
      <div className="item-container">
        {itemList.map((item) => {
          return <Link to={"/item/" + item.action?.text}><ItemCard key={item.id} cardData={item} /></Link>;
        })}
      </div>
      <div className="main-container">
        <span>Restaurants with online food delivery in Mangaluru</span>
        {/* <FilterComponent onFilter={handleFilter} /> */}
        <div className="res-container">
          {filterRestaurants.map((restaurant) => (
            <Link className="linkToMenu" key={restaurant.info.id} to={"/menu/" + restaurant.info.id}>
              <RestaurentCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
