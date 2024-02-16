import { useState } from "react";
import { MenuCard } from "./MenuCard";

const RestaurentAccordian = ({ data , showItem , setShowIndex}) => {

  let { title, itemCards } = data?.card?.card;
  
  let [hide,setHide] = useState(showItem);


  const hideItem = ()=>{
    setHide(!hide);
   };

   const showItems = ()=>{
    setShowIndex();
   }

  return (
    <div>
      <div className="flex justify-between cursor-pointer  mt-4 mb-3 pb-2 shadow-md  items-center bg-gray-50" onClick={()=> {hideItem(); showItems();}}>
        <div>
          <h5 className="mb-2 font-bold text-gray-600 pl-2 items-center justify-center">
            {title} ({itemCards.length})
          </h5>
        </div>
        <div>
          <span><i className="fa-solid fa-chevron-down pr-2"></i></span>
        </div>
      </div>
      <div>
        {itemCards.map((res) => {
          return hide?<MenuCard key={res.card.info.id} itemData={res.card.info} /> : "" ;
        })}
      </div>
    </div>
  );
};



export default RestaurentAccordian;
