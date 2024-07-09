/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./product-card.module.css";
import { IoCart, IoCartOutline } from "react-icons/io5";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const { name, img, current_price, old_price } = product;

  return (
    <div className={style.card}>
      <div className={style.imgBox}>
        <img src={img} alt="" width={270} height={270} />
      </div>
      <div className={style.textBox}>
        <p className={style.title}> {name}</p>
        <div className={style.priceBox}>
          <p>${old_price}</p>
          <p>${current_price}</p>
        </div>
      </div>
      <div className={style.icons}>
        <span onClick={() => setIsInCart(!isInCart)}>
          {isInCart ? <IoCart /> : <IoCartOutline />}
        </span>
        <span onClick={() => setIsFavorite(!isFavorite)}>
          {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
