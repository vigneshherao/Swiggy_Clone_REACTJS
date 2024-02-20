import { cardUrl } from "../utils/link";

const RestaurentCard = ({ resData }) => {
  let { name, avgRating, sla, locality, cuisines, cloudinaryImageId } =
    resData.info;
  return (
    <div className="transition-transform duration-200 ease-in-out transform hover:scale-95 card h-[10.8rem] w-[15.5rem] mr-[2.4rem] border-0 mb-9">
      <div className="hover:scale-98">
        <img
          className="transition-transform duration-200 ease-in-out transform hover:scale-95 w-[253px] h-[169px] rounded-2xl"
          src={cardUrl + cloudinaryImageId}
          alt="Card image cap"
        />
        {/* <div className="card-offer">30% OFF</div> */}
        <div className="leading-[1.8px] cursor-pointer">
          <h5 className="text-lg text-[rgba(2, 6, 12, 0.75)] mt-2 mb-0">
            {name}
          </h5>
          <p className="text-base font-medium text-[rgba(2, 6, 12, 0.75)] leading-none mb-[10px] ">
            {avgRating} . {sla.slaString}
          </p>
          <div className="pt-[2px] font-thin text-gray-500">
            <p>{cuisines.join(",").slice(0, 24) + ".."}</p>
            <p>{locality}</p>
          </div>
        </div>
      </div>
    </div>
  );
};



export const isOfferdRestaurent = (RestaurentCard) =>{
  return (props)=>{
    return (
      <div className="">
        <label className=" bg-black text-white font-semibold text-sm px-5 py-1 rounded mb-2 "><i className="fa-regular fa-star text-orange-500"></i>Top Selling Restaurant</label>
        <RestaurentCard {...props}/>
      </div>
    )
  }
}


export default RestaurentCard;
