/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./nav.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import mobileLogo from "../../assets/logo-mobile.png";
import cancelIcon from "../../assets/cancel.png";

function Nav({ handleClose }) {
  return (
    <nav className={style.nav}>
      <div className={style.mobileOnly}>
        <img src={mobileLogo} alt="" />
        <img src={cancelIcon} alt="" onClick={handleClose} />
      </div>
      <ul className={style.links}>
        <li>
          <Link to={"/"}>home</Link>
        </li>
        <li>
          categories <RiArrowDropDownLine />
        </li>
        <li>
          brands <RiArrowDropDownLine />
        </li>
        <li>
          <Link to={"sale"}>sale</Link>
        </li>
        <li>
          <Link to={"blog"}>blog</Link>
        </li>
        <li>
          support <RiArrowDropDownLine />
        </li>
        <div>
          <li>Wishlist</li>
          <li>Profile</li>
          <li>Help</li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
