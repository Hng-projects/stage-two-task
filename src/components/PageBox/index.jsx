import style from "./page-box.module.css";

function PageBox({ number }) {
  return <div className={style.page}>{number}</div>;
}

export default PageBox;
