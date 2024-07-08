/* eslint-disable react/prop-types */
import style from "./icon-wrapper.module.css";

function IconWrapper({ icon, ...props }) {
  return (
    <span {...props} className={style.icon}>
      {icon}
    </span>
  );
}

export default IconWrapper;
