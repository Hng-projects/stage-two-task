/* eslint-disable react/prop-types */
import ProductCard from "../ProductCard";
import style from "./product-list.module.css";

function ProductList({ products }) {
  return (
    <div className={style.list}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
