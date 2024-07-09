import { IoIosArrowForward } from "react-icons/io";
import style from "./cart.module.css";
import Table from "../../components/Table";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { Button } from "react-aria-components";
import { Input } from "react-aria-components";
import useScreenSize from "../../hooks/use-screen-size";
import CartItem from "../../components/CartItem";

function Cart() {
  const isSmallScreen = useScreenSize();
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
      {isSmallScreen ? (
        <CartItem />
      ) : (
        <div className={style.pad}>
          <Table headers={["products", "price", "quantity", "total", " "]} />
        </div>
      )}
      <Link to="/stage-two-task/" className={style.back}>
        <span>
          <IoArrowBackOutline />
        </span>
        <span>continue shopping</span>
      </Link>
      <div className={style.box}>
        <div className={style.left}>
          <p>coupon code</p>
          <div>
            <Input />
            <Button>apply</Button>
          </div>
        </div>
        <div>
          <div className={style.box2}>
            <div className={style.right}>
              <div>
                <p>subtotal</p> <p>$326</p>
              </div>
              <div>
                <p>shipping</p>
                <p>$44</p>
              </div>
              <div>
                <p>VAT(1%)</p>
                <p>$10</p>
              </div>
              <div>
                <p>total</p>
                <p>$380</p>
              </div>
            </div>
            <Link to={"checkout"} className={style.btn}>
              proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
