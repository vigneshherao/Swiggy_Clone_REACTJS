import { emptyCart } from "../utils/link";
const EmptyCart = ()=>{
    return (
        <div className="rounded-2xl  mt-10">
            <img className="m-auto pt-20 rounded-2xl" src={emptyCart}></img>
            <h6 className="text-center mb-5 text-gray-500 font-serif">Look like you have not added anything! Go ahead & add items to cart</h6>
        </div>
    )
}

export default EmptyCart;