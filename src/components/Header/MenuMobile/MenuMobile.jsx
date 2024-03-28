import { useState } from "react";
import "./MenuMobile.scss";
import Blur from "../../Blur/Blur";
import MenuMobileActive from "./MenuMobileActive";

const MenuMobile = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div
        id="menu__mobile"
        className={`menu__mobile ${isActive ? "menu__mobile--active" : ""}`}
        onClick={handleClick}
      >
        <li className="navLineTop"></li>
        <li
          className={`navLineCenter ${isActive ? "navLineCenter--active" : ""}`}
        ></li>
        <li className="navLineEnd"></li>
      </div>
      {isActive && <Blur handleClick={handleClick} />}
      <MenuMobileActive addClass={isActive ? "nav__mobile--active" : ""} />
    </>
  );
};

export default MenuMobile;
