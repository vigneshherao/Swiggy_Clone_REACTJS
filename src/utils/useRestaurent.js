import { useState,useEffect } from "react";

export const  useRestaurent = () =>{
    const [restaurants, setRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
      }, []);
    

      const fetchData = async () => {
        let data = await fetch(
          "https://corsproxy.org/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8879528&lng=74.8831089&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        let jsonData = await data.json();
        setRestaurants(
          jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        );
        setFilterRestaurants(
            jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
          );
      };


      return [restaurants, filterRestaurants];
    
}


