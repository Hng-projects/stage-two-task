/* eslint-disable react/prop-types */
import style from "./product-card.module.css";

function ProductCard({ product }) {
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
    </div>
  );
}

export default ProductCard;
