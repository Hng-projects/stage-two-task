import { IoIosSearch } from "react-icons/io";
import TextField from "../TextField";
import IconWrapper from "../IconWrapper";
import { IoCameraOutline, IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import style from "./nav.module.css";
import logo from "../../assets/logo.png";

function Nav() {
  return (
    <div className={style.mainHeader}>
      <TextField leftIcon={<IoIosSearch />} />
      <div>
        <img src={logo} alt="" />
      </div>
      <div className={style.icons}>
        <IconWrapper icon={<IoCartOutline />} />
        <IconWrapper icon={<MdFavoriteBorder />} />
        <IconWrapper icon={<BsPerson />} />
      </div>
    </div>
  );
}

export default Nav;
