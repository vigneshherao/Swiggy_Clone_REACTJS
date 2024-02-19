import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { menuImage } from "../utils/link";

export const MenuCard = ({ itemData }) => {
  if (!itemData) {
    return null;
  }

  const { name, imageId, description, isVeg, price } = itemData;

  const dispatch = useDispatch();
  const handleAddItem = (itemData)=>{
    dispatch(addItem(itemData));
  }

  return (
    <div className="menu-card flex mt-[20px] justify-between pb-[1.5rem] items-center border-b border-gray-300 leading-none px-2">
      <div className="item-description justify-center items-center leading-1">
        {isVeg == 1 ? (
          <i className="fa-solid fa-leaf" style={{ color: "#5ac24c" }} />
        ) : (
          <i
            className="fa-solid fa-drumstick-bite"
            style={{ color: "#c11a1a" }}
          />
        )}
        <h6>{name}</h6>
        <p className="mb-3"> &#8377; {price / 100}</p>
        <p className=" text-[rgba(40,44,63,.45)] text-xs w-[80%]">{description? description.slice(0, 80) + ".." : ""}</p>
      </div>
      <div className="">

        <div className="">
          <button className="bg-white text-green-500 absolute ml-auto w-15 m-1 font-semibold px-2 py-1 rounded-md hover:text-gray-600"  onClick={
            ()=> handleAddItem(itemData)
          }>Add +</button>
        </div>
        <img
          className="h-[96px] w-[170px] sm:w-[128px] rounded-lg object-cover"
          src={
            imageId
              ? menuImage + imageId
              : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={name}
        />
      </div>
    </div>
  );
};
