
import { useSelector } from "react-redux";
import { MenuCard } from "./MenuCard";


const Cart = ({}) =>{


    const cartItem = useSelector((store)=> store.cart.items)
    return (
        <div>
          <MenuCard itemData={cartItem} />
        </div>
    );

}


export default Cart;