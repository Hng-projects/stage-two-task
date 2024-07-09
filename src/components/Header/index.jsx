import { IoIosSearch } from "react-icons/io";
import TextField from "../TextField";
import IconWrapper from "../IconWrapper";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import style from "./header.module.css";
import desktopLogo from "../../assets/logo.png";
import mobileLogo from "../../assets/logo-mobile.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Nav from "../Nav";
import useScreenSize from "../../hooks/use-screen-size";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallScreen = useScreenSize();

  return (
    <>
      <div className={style.mainHeader}>
        <TextField icon={<IoIosSearch />} />
        <div className={style.menu}>
          <IconWrapper
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            icon={<GiHamburgerMenu />}
          />
          <IconWrapper icon={<IoIosSearch />} />
        </div>
        <picture>
          <source media="(min-width: 727px)" srcSet={desktopLogo} />
          <img src={mobileLogo} alt="" />
        </picture>
        <div className={style.icons}>
          <Link to={"cart"}>
            <IconWrapper icon={<IoCartOutline />} />
          </Link>
          <IconWrapper icon={<MdFavoriteBorder />} />
          <IconWrapper icon={<BsPerson />} />
        </div>
      </div>
      {isSmallScreen ? (
        isMenuOpen ? (
          <Nav handleClose={() => setIsMenuOpen(!isMenuOpen)} />
        ) : null
      ) : (
        <Nav />
      )}
    </>
  );
}

export default Header;
