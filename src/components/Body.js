import React, { useEffect, useState } from "react";
import RestaurentCard, { isOfferdRestaurent } from "./RestaurentCard";
import FilterComponent from "./FilterComponent";
import Shimmer from "./ShimmerComponent";
import ItemCard from "./ItemCart";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import ConnectionError from "./ConnectionError";
import { useRestaurent, useFilterdRestaurent } from "../utils/useRestaurent";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchRestaurants, setSearchRestaurants] = useState("");
  const [itemList, setItemList] = useState([]);

  const RestaurentOfferd = isOfferdRestaurent(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8879528&lng=74.8831089&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let itemData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.887952142405728&lng=74.88308038562536&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let jsonItem = await itemData.json();
    let jsonData = await data.json();
    console.log(jsonItem.data.cards[0].card.card.imageGridCards.info);
    setItemList(
      jsonItem.data.cards[0].card.card.imageGridCards.info.slice(0, 6)
    );
    setRestaurants(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterRestaurants(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  console.log(itemList);

  // const handleFilter = (filterFunction) => {
  //   const filteredRestaurants = restaurants.filter(filterFunction);
  //   setRestaurants(filteredRestaurants);
  // };

  const status = useInternetStatus();

  if (status == false) {
    return <ConnectionError />;
  }

  return restaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center m-1 py-3">
        <input
          className="bg-whitesmoke p-2 rounded-lg"
          type="search"
          placeholder="Search Restaurents"
          value={searchRestaurants}
          onChange={(e) => {
            setSearchRestaurants(e.target.value);
          }}
        />
        <button
          className="ml-2.5 border-none text-orange-500 font-bold rounded-2xl"
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
        {itemList.map((item) => {
          return (
            <Link key={item.id} to={"/item/" + item.id}>
              <ItemCard key={item.id} cardData={item} />
            </Link>
          );
        })}
      </div>
      <div className="main-container">
        <span className="text-[20px] font-bold flex justify-start pr-2 my-2.5 ml-[3%] md:ml-[12rem] text-center">
          Restaurants with online food  delivery in Mangaluru
        </span>
        {/* <FilterComponent onFilter={handleFilter} /> */}
        <div className="res-container flex flex-wrap justify-center pr-[6rem] pl-[8rem] mt-8">
          {filterRestaurants.map((restaurant) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
