import { itemUrl } from "../utils/link";

const ItemCard = ({ cardData }) => {
    return (
      <div className="cards">
        <img src={itemUrl + cardData.imageId} alt={cardData.name} />
      </div>
    );
  };
  
export default ItemCard;