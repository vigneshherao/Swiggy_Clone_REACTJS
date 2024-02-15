import { MenuCard } from "./MenuCard";

const RestaurentAccordian = ({ data }) => {
  let { title, itemCards } = data?.card?.card;
  return (
    <div>
      <div className="flex justify-between  mt-4 mb-3 pb-2 shadow-md  items-center bg-gray-50">
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
          return <MenuCard itemData={res.card.info} />;
        })}
      </div>
    </div>
  );
};

export default RestaurentAccordian;
