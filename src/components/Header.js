import { logoURL } from "../utils/link";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [btnLogin, setBtnLogin] = useState("login");
  const status = useInternetStatus();

  const { name } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  

  return (
    <div className="hidden sm:flex justify-between border shadow-sm px-5 items-center py-3">
      <div className="logo w-20 ml-[10%]">
        <Link
          className="hover:text-orange-500 no-underline text-gray-700 font-bold"
          to={"/"}
        >
          <img
            className="logoImg"
            src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp"
          ></img>
        </Link>
      </div>
      <div className="nav-items flex items-center mr-[8%]">
        <ul className="flex mt-2">
          <li className="mr-12 no-underline">
            <Link
              className="hover:text-orange-500 no-underline  text-gray-700 font-bold"
              to={"/help"}
            >
              <i className="fa-solid fa-circle-info mr-1"></i> Help
            </Link>
          </li>
          <li className="mr-12">
            <Link
              className="hover:text-orange-500 no-underline text-gray-700 font-bold"
              to={"/mart"}
            >
              <i className="fa-solid fa-bag-shopping mr-1"></i> Mart
            </Link>
          </li>
          <li className="mr-12">
            <Link className="hover:text-orange-500 no-underline text-gray-700 font-bold">
              <i className="fa-solid fa-user mr-1"></i> {name}
            </Link>
          </li>
          <li className=" hover:text-orange-500 mr-12 font-bold text-gray-700">
            Status{status ? " 🟢" : " 🔴"}
          </li>
          <li>
            <button
              className=" hover:text-orange-500 font-bold mr-12 text-gray-700"
              onClick={() => {
                btnLogin == "login"
                  ? setBtnLogin("logout")
                  : setBtnLogin("login");
              }}
            >
              <i className="fa-solid fa-arrow-right-from-bracket mr-1"></i>
              {btnLogin}
            </button>
          </li>
          <li className="mr-12">
            <Link
              className="hover:text-orange-500 no-underline text-gray-700 font-bold"
              to={"/cart"}
            >
                        {cartItems.length == 0?  <span className="ml-3 font-bold no-underline text-black-400 font-sans"> <i className="fa-solid fa-cart-shopping mr-1"></i>{cartItems.length + " Items"}</span>:  <span className="ml-3 font-bold no-underline text-orange-600 font-sans"> <i className="fa-solid fa-cart-shopping mr-1"></i>{cartItems.length + " Items"}</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
