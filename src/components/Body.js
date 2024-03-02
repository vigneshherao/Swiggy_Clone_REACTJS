import React, { useEffect, useState } from "react";
import RestaurentCard, { isOfferdRestaurent } from "./RestaurentCard";
import FilterComponent from "./FilterComponent";
import Shimmer from "./ShimmerComponent";
import ItemCard from "./ItemCart";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import ConnectionError from "./ConnectionError";
import { useRestaurent, useFilterdRestaurent } from "../utils/useRestaurent";
import ItemData from "../utils/ItemData";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchRestaurants, setSearchRestaurants] = useState("");
  const RestaurentOfferd = isOfferdRestaurent(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D23.022505%26lng%3D72.5713621%26page_type%3DDESKTOP_WEB_LISTING"
    );
    let jsonData = await data.json();
    setRestaurants(
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
        ? jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        : jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
    );

    setFilterRestaurants(
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
        ? jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        : jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
    );

  };


  // const handleFilter = (filterFunction) => {
  //   const filteredRestaurants = restaurants.filter(filterFunction);
  //   setRestaurants(filteredRestaurants);
  // };

  const status = useInternetStatus();

  if (status == false) {
    return <ConnectionError />;
  }

  return !restaurants || restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center m-1 py-3 ">
        <input
          className="bg-whitesmoke p-2 rounded-lg border"
          type="search"
          placeholder="Search Restaurents"
          value={searchRestaurants}
          onChange={(e) => {
            setSearchRestaurants(e.target.value);
          }}
        />
        <button
          className="ml-2.5 bg-gray-100 w-20 text-orange-500 font-bold rounded-2xl"
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
      <span className="text-[22px] font-bold flex justify-start my-2.5 ml-[22%] md:ml-[12rem]">
        What's on your mind?
      </span>
      <div className="item-container flex flex-wrap justify-center border-b">
        {ItemData && ItemData.length > 0 ? (
          ItemData.map((item) => (
            // <Link key={item.id} to={"/item/" + item.id}>
              <ItemCard key={item.id} cardData={item} />
            // </Link>
          ))
        ) : (
          <Link className="w-[75%] sm:h-[400px]" to={"/item/" + 750592}>
            <img
              className="w-[100%] sm:h-[400px] pb-4 rounded-lg"
              src="https://www.frescofud.com/blog_image/dd5c69109e9d2dce35dba71301804aaa.jpg"
            ></img>
          </Link>
        )}
      </div>

      <div className="main-container">
        <span className="text-[20px] font-bold flex justify-start pr-2 my-2.5 ml-[3%] md:ml-[12rem] text-center">
          Restaurants with online food delivery in your Place
        </span>
        {/* <FilterComponent onFilter={handleFilter} /> */}
        <div className="res-container flex flex-wrap justify-center pr-[6rem] pl-[8rem] mt-8">
          {filterRestaurants && filterRestaurants.length > 0 ? (
            filterRestaurants.map((restaurant) => (
              <Link
                className="no-underline"
                key={restaurant.info.id}
                to={"/menu/" + restaurant.info.id}
              >
                {restaurant.info.veg ? (
                  <RestaurentOfferd key={restaurant.id} resData={restaurant} />
                ) : (
                  <RestaurentCard key={restaurant.id} resData={restaurant} />
                )}
              </Link>
            ))
          ) : (
            <p>No restaurants found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
