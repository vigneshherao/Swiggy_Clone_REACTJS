import { itemUrl } from "../utils/link";

const ItemCard = ({ cardData }) => {
    return (
      <div className="cards w-44 h-44 mr-2">
        <img className="w-36 h-44 m-auto" src={itemUrl + cardData.imageId} alt={cardData.name} />
      </div>
    );
  };
  
export default ItemCard;