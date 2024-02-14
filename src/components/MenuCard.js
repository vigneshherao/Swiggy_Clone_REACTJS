import { menuImage } from "../utils/link";

export const MenuCard = ({ itemData }) => {

  if (!itemData) {
    return null;
  }

  const { name, imageId, description, isVeg, price } = itemData;

  return (
    <div className="menu-card flex mt-[20px] justify-between pb-[1.5rem] items-center border-b border-gray-300 leading-none">
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
        <p className=" text-[rgba(40,44,63,.45)] text-xs">{description}</p>
      </div>
      <div className="h-[96px] w-[118px]">
        <img  className = "h-[96px] w-[118px] rounded-lg" src={imageId? menuImage + imageId : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPUK6ck6_CSZRSTamw7RTCUcfcUFF7ePg3uV-6sjeGaEhE2Rq-mM6wWPbNkN0bqwdIzWg&usqp=CAU"} alt={name} />
      </div>
    </div>
  );
};
