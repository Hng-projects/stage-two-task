import { Input } from "react-aria-components";
import style from "./footer.module.css";
import { Button } from "react-aria-components";
import desktopLogo from "../../assets/logo.png";
import mobileLogo from "../../assets/logo-mobile.png";
import { CiLocationOn, CiTwitter } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";

function Footer() {
  return (
    <>
      <div className={style.box1}>
        <picture>
          <source media="(min-width: 727px)" srcSet={desktopLogo} />
          <img src={mobileLogo} alt="" />
        </picture>
        <p>
          <span>
            <CiLocationOn />
          </span>
          <span>Alber Einstein Avenue, Lagos, Nigeria.</span>
        </p>
        <p>
          <span>
            <BsTelephone />
          </span>
          <span>+2342947023</span>
        </p>
        <p>
          <span>
            <MdOutlineMail />
          </span>
          <span>barebeautyng@yahoo.com</span>
        </p>
        <div className={style.icons}>
          <span>
            <IoLogoInstagram />
          </span>
          <span>
            <FiFacebook />
          </span>
          <span>
            <CiTwitter />
          </span>
        </div>
      </div>
      <div className={style.box2}>
        <div>
          <h3>shop</h3>
          <ul>
            <li>Home</li>
            <li>Brands</li>
            <li>Categories</li>
            <li>Blog</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h3>legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Contact</li>
            <li>About us</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <div className={style.box3}>
        <h3>subscribe to our newsletter</h3>
        <p>
          Score 10% off ypur first purchase! Subscribe to our newsletter for
          exclusive discounts.
        </p>
        <div>
          <Input />
          <Button>subscribe</Button>
        </div>
      </div>
    </>
  );
}

export default Footer;
