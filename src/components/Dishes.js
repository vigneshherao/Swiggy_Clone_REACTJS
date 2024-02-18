import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { MenuShimmer } from "./MenuShimmer";
import { useParams } from "react-router-dom";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);
  const [info, setInfo] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const {id} = useParams();
  console.log(id);
   const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.887952142405728&lng=74.88308038562536&collection=83650&tags=layout_CCS_IceCreams&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const dishData = await data.json();
    const card = dishData.data?.cards?.filter((res) => {
      return (
        res.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      );
    });
    setInfo(dishData?.data?.cards[0]?.card.card);
    setDishes(card);
  };

  return dishes.length == 0 ? (
    <MenuShimmer />
  ) : (
    <div className="body">
      <div className="border-b">
        <span className="text-[28px] font-bold flex justify-start my-2.5 ml-[12rem] pt-4">
          {info.title}
        </span>
        <div className="text-[18px] font-sans flex justify-start my-2.5 ml-[12rem]">
          <p className="text-gray-400">{info.description}</p>
        </div>
      </div>
      <div className="main-container">
        <div className="res-container flex flex-wrap justify-center pr-[6rem] pl-[6rem] mt-8">
          {dishes.map((res) => {
            return (
              <RestaurentCard
                key={res.card.card.info.id}
                resData={res.card?.card}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dishes;
