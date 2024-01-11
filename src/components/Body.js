import React, { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { itemList } from "../utils/data";
import FilterComponent from "./FilterComponent";
import Shimmer from "./ShimmerComponent";
import ItemCard from "./ItemCart";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchRestaurants, setSearchRestaurants] = useState("");

  const handleFilter = (filterFunction) => {
    const filteredRestaurants = restaurants.filter(filterFunction);
    setRestaurants(filteredRestaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8879528&lng=74.8831089&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let jsonData = await data.json();
    console.log(jsonData);
    setRestaurants(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterRestaurants(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

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
          return <ItemCard key={item.id} cardData={item} />;
        })}
      </div>
      <div className="main-container">
        <span>Restaurants with online food delivery in Mangaluru</span>
        <FilterComponent onFilter={handleFilter} />
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
