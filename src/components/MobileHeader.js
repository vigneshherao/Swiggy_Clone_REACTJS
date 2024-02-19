import { useSelector } from "react-redux";



const MobileHeader = () =>{

    const cartItems = useSelector((store)=> store.cart.items);

    return (
        <div className="sm:hidden flex justify-between border shadow-sm px-5 items-center py-4">
            <div className="ml-3 font-bold font-mono "><i className="mr-2 fa-solid fa-map-pin"></i>Mangaluru</div>
            <div className="ml-3 font-bold font-mono"><i className="fa-solid fa-cart-shopping mr-2 mt-1"></i>{cartItems.length} Items</div>
        </div>
    )
}

export default MobileHeader;