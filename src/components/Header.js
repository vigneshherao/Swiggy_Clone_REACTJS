import { logoURL } from "../utils/link";
import { useState } from "react";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";

const Header = () => {
  let [btnLogin, setBtnLogin] = useState("login");
  const status = useInternetStatus();
  return (
    <div className="flex justify-between border shadow-sm px-5 items-center py-3">
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
              Offers
            </Link>
          </li>
          <li className="mr-8">
            <Link className="no-underline text-black" to={"/help"}>
              Help
            </Link>
          </li>
          <li className="mr-8">
            <Link className="no-underline text-black" to={"/profile"}>
              Vignesh
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
