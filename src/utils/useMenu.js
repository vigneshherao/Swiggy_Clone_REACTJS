import { useState, useEffect } from "react";
import { menuData } from "./link";

const useMenu = (resId) => {
  const [restaurantItems, setRestaurantItems] = useState([]);

  useEffect(() => {
    fetchItem();
  }, []);


  const fetchItem = async () => {
    const items = await fetch(menuData+resId);
    const itemData = await items.json();
    setRestaurantItems(itemData);
  }

  
  return restaurantItems;
};

export default useMenu;
