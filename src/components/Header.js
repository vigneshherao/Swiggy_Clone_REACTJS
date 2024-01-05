import { logoURL } from "../utils/link";
import { useEffect, useState } from "react";
const Header = () => {
    let [btnLogin,setBtnLogin] = useState(("login"));
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
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <button onClick={()=>{
              btnLogin == "login"? setBtnLogin("logout"):setBtnLogin("login");
            }}>{btnLogin}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;