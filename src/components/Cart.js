import Bill from "./Bill";
import { useDispatch, useSelector } from "react-redux";
import { MenuCard } from "./MenuCard";
import EmptyCart from "./EmptyCart";
import { clearItem } from "../utils/cartSlice";


const Cart = ({}) =>{

    const dispatch = useDispatch();
    const cartItem = useSelector((store)=> store.cart.items);

    return (
      <div className=" w-[100%] px-[8%] sm:px-[10%] md:px-[20%]">
        <div className="bg-slate-100 ">
          {cartItem.map((item, index) => (
               <MenuCard key={index} itemData={item} />
           ))}
            {cartItem.length == 0? "":<button className="bg-orange-400 text-white w-[100%] font-bold font-sans hover:bg-gray-400" onClick={()=>{
            dispatch(clearItem());
           }}>Clear Cart</button>}
        </div>
        {
          cartItem.length == 0? <EmptyCart/>:<Bill data={cartItem}/>
        }
      </div> 
    );

}


export default Cart;