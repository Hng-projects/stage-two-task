import { IoIosArrowForward } from "react-icons/io";
import style from "./cart.module.css";
import Table from "../../components/Table";

function Cart() {
  return (
    <>
      <div className={style.heading}>
        <h1>Cart</h1>
        <div className={style.route}>
          <p>Cart</p>
          <span>
            <IoIosArrowForward />
          </span>
          <p>Checkout</p>
          <span>
            <IoIosArrowForward />
          </span>
          <p>Payment</p>
        </div>
      </div>
      <div className={style.th}>
        <p>Products</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p></p>
      </div>
      <Table headers={["products", "price", "quantity", "total", " "]} />
    </>
  );
}

export default Cart;
