import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div className="flex-wrap sm:footer flex w-[100%] justify-evenly border shadow-lg m-auto">
        <div className="first-session mt-3">
          <p className="font-semibold">JustFoodie © 2024 <span><Link className="no-underline text-orange-400" to={"https://vigneshtech.netlify.app/"}>Vignesh H E</Link></span></p>


        </div>
      </div>
    );
  };

export default Footer;