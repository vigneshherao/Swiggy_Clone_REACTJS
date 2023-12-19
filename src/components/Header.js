import { logoURL } from "./utils/link";
const Header = () => {
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
            <li>Home</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;