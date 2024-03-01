import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="sm:hidden flex justify-between border shadow-sm px-5 items-center py-4">
      <div className="logo w-20 h-10">
        <Link
          className="hover:text-orange-500 no-underline text-gray-700 font-bold"
          to={"/"}
        >
          <img
            className="logoImg h-10"
            src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp"
          ></img>
        </Link>
      </div>
      <div className="ml-3 font-bold font-mono no-underline">
        <Link
          className="hover:text-orange-500 no-underline text-gray-700 font-bold"
          to={"/cart"}
        >
          {cartItems.length == 0?  <span className="ml-3 font-bold no-underline text-black-400 font-sans"> <i className="fa-solid fa-cart-shopping mr-1"></i>{cartItems.length + " Items"}</span>:  <span className="ml-3 font-bold no-underline text-orange-400 font-sans"> <i className="fa-solid fa-cart-shopping mr-1"></i>{cartItems.length + " Items"}</span>}
        </Link>
      </div>
    </div>
  );
};

export default MobileHeader;
