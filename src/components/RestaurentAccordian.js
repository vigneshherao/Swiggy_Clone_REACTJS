import { useState } from "react";
import { MenuCard } from "./MenuCard";

const RestaurentAccordian = ({ data }) => {

  const [showItem,setShowItem] = useState(false);

  let { title, itemCards } = data?.card?.card;
  return (
    <div>
      <div className="flex justify-between cursor-pointer  mt-4 mb-3 pb-2 shadow-md  items-center bg-gray-50" onClick={()=>{
       setShowItem(!showItem)
      }}>
        <div>
          <h5 className="mb-2 font-bold text-gray-600">
            {title} ({itemCards.length})
          </h5>
        </div>
        <div>
          <span>🔽</span>
        </div>
      </div>
      <div>
        {itemCards.map((res) => {
          return showItem?<MenuCard itemData={res.card.info} /> : "" ;
        })}
      </div>
    </div>
  );
};

export default RestaurentAccordian;
