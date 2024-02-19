import { logoURL } from "../utils/link";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";


const Header = () => {
  let [btnLogin, setBtnLogin] = useState("login");
  const status = useInternetStatus();

  const {name} = useContext(UserContext);

  const cartItems = useSelector((store)=> store.cart.items);

  console.log(cartItems)
  
  return (
    <div className="hidden sm:flex justify-between border shadow-sm px-5 items-center py-3">
      <div className="logo w-20">
        <img className="logoImg" src={logoURL}></img>
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex mt-2">
          <li className="mr-8 no-underline">
            <Link className="no-underline text-black" to={"/"}>
              Home
            </Link>
          </li>
          <li className="mr-8">
            <Link className="no-underline text-black" to={"/offers"}>
            <i className="fa-solid fa-cart-shopping mr-2 mt-1"></i>{cartItems.length} Items
            </Link>
          </li>
          <li className="mr-8">
            <Link className="no-underline text-black" to={"/help"}>
              Help
            </Link>
          </li>
          <li className="mr-8">
            <Link className="no-underline text-black" to={"/profile"}>
              {name}
            </Link>
          </li>
          <li className="mr-8">Status{status ? "🟢" : "🔴"}</li>
          <button
            onClick={() => {
              btnLogin == "login"
                ? setBtnLogin("logout")
                : setBtnLogin("login");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
