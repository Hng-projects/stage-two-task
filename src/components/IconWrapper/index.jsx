import style from "./icon-wrapper.module.css";

function IconWrapper({ icon }) {
  return <span className={style.icon}>{icon}</span>;
}

export default IconWrapper;
