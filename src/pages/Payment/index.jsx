import { IoIosArrowForward } from "react-icons/io";
import style from "./payment.module.css";
import { Link } from "react-router-dom";
import { RadioGroup } from "react-aria-components";

function Payment() {
  return (
    <>
      <div className={style.heading}>
        <h1>Payment</h1>
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
      <div className={style.auth}>
        <Link to="/">log in</Link>
        <Link to="/">sign up</Link>
      </div>

      <div className={style.box}>
        <div className={style.box2}>
          <div className={style.formHeading}>
            <p>Shipping Method</p>
          </div>
          <div className={style.radios}>
            <RadioGroup aria-labelledby="shipping method">
              <div className={style.radio}>
                <input
                  type="radio"
                  name="shipping_method"
                  id="free"
                  value="credit"
                />
                <div>
                  <p>credit card</p>
                  <p>$0</p>
                </div>
              </div>
              <div className={style.radio}>
                <input
                  type="radio"
                  name="shipping_method"
                  id="standard"
                  value="paypal"
                />
                <div>
                  <p>paypal</p>
                  <p>$14</p>
                </div>
              </div>
              <div className={style.radio}>
                <input
                  type="radio"
                  name="shipping_method"
                  id="express"
                  value="apple"
                />
                <div>
                  <p>apple pay</p>
                  <p>$20</p>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className={style.summary}>
          <div className={style.formHeading}>
            <p>order summary</p>
            <p>Here is a summary of the items you ordered</p>
          </div>
          <div>
            <div className={style.os}>
              <div className={style.right}>
                <div>
                  <p>subtotal</p> <p>$326</p>
                </div>
                <div>
                  <p>shipping</p>
                  <p>$44</p>
                </div>
                <div>
                  <p>VAT (1%)</p>
                  <p>$10</p>
                </div>
                <div>
                  <p>total</p>
                  <p>$380</p>
                </div>
              </div>
              <Link to="payment" className={style.btn}>
                finish order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
