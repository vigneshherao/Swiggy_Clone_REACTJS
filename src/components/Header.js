import { logoURL } from "../utils/link";
import {useState } from "react";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";

const Header = () => {
    let [btnLogin,setBtnLogin] = useState(("login"));
    const status = useInternetStatus();
    return (
      <div className="header">
        <div className="logo">
          <img
            className="logoImg"
            src={logoURL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/offers"}>Offers</Link></li>
            <li><Link to={"/help"}>Help</Link></li>
            <li><Link to={"/help"}>Help</Link></li>
            <li>Status{status? "🟢":"🔴"}</li>
            <button onClick={()=>{
              btnLogin == "login"? setBtnLogin("logout"):setBtnLogin("login");
            }}>{btnLogin}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;