import { IoIosSearch } from "react-icons/io";
import TextField from "../TextField";
import IconWrapper from "../IconWrapper";
import { IoCameraOutline, IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import style from "./nav.module.css";

function Nav() {
  return (
    <div className={style.mainHeader}>
      <TextField leftIcon={<IoIosSearch />} />
      <h1>
        <span>Bare</span>Beauty
      </h1>
      <div className={style.icons}>
        <IconWrapper icon={<IoCartOutline />} />
        <IconWrapper icon={<MdFavoriteBorder />} />
        <IconWrapper icon={<BsPerson />} />

        <div className={style.language}>
          <div>
            <span className={style.flag}>{/* <img src="" alt="" /> */}</span>
            <span>en</span>
          </div>
          <span>
            <RiArrowDropDownLine />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
