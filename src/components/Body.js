import RestaurentCard from "./RestaurentCard";
import {restaurants,itemList} from "../utils/data";
import { itemUrl } from "../utils/link";




const ItemCard = ({cardData})=>{
  return (
    <div className="cards">
      <img src={itemUrl+cardData.imageId}></img>
    </div>
  )
}

  const Body = () => {
    return (
      <div className="body">
        <div className="search">
          <input type="text"></input>
        </div>
        <div className="item-container">
          {
            itemList.map((item)=>{
              return <ItemCard key={item.id} cardData = {item}></ItemCard>
            })
          }
        </div>
        <div className="res-container">
          {restaurants.map((restaurant) => (
            <RestaurentCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };


export default Body;