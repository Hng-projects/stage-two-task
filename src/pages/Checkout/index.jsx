import { IoIosArrowForward } from "react-icons/io";
import style from "./check-out.module.css";
import { Link } from "react-router-dom";
import { TextField } from "react-aria-components";
import { Label } from "react-aria-components";
import { Input } from "react-aria-components";
import { NumberField } from "react-aria-components";
import { RadioGroup } from "react-aria-components";

function Checkout() {
  return (
    <>
      <div className={style.heading}>
        <h1>Checkout</h1>
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
        <div className={style.info}>
          <div className={style.formHeading}>
            <p>shipping information</p>
            <p>Let us know where you would like your order to be sent</p>
          </div>
          <div className={style.box1}>
            <TextField>
              <Label>Full Name</Label>
              <Input />
            </TextField>
            <div className={style.double}>
              <TextField>
                <Label>Email</Label>
                <Input />
              </TextField>
              <NumberField>
                <Label>Phone Number</Label>
                <Input />
              </NumberField>
            </div>
            <TextField>
              <Label>Street address and house number</Label>
              <Input />
            </TextField>
            <div className={style.double}>
              <TextField>
                <Label>Country</Label>
                <Input />
              </TextField>
              <NumberField>
                <Label>ZIP Code</Label>
                <Input />
              </NumberField>
            </div>
          </div>
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
                    value="free"
                  />
                  <div>
                    <p>
                      Free Shipping <span>10-14 working days</span>
                    </p>
                    <p>$0</p>
                  </div>
                </div>
                <div className={style.radio}>
                  <input
                    type="radio"
                    name="shipping_method"
                    id="standard"
                    value="standard"
                  />
                  <div>
                    <p>
                      Standard Shipping <span>3-6 working days</span>
                    </p>
                    <p>$14</p>
                  </div>
                </div>
                <div className={style.radio}>
                  <input
                    type="radio"
                    name="shipping_method"
                    id="express"
                    value="express"
                  />
                  <div>
                    <p>
                      Express Shipping <span>10-14 working days</span>
                    </p>
                    <p>$20</p>
                  </div>
                </div>
              </RadioGroup>
            </div>
            <div className={style.info}>
              <div className={style.formHeading}>
                <p>Billing information</p>
                <p>Complete your purchase with your billing information</p>
              </div>
              <div className={style.box1}>
                <TextField>
                  <Label>Full Name</Label>
                  <Input />
                </TextField>
                <div className={style.double}>
                  <TextField>
                    <Label>Email</Label>
                    <Input />
                  </TextField>
                  <NumberField>
                    <Label>Phone Number</Label>
                    <Input />
                  </NumberField>
                </div>
                <TextField>
                  <Label>Street address and house number</Label>
                  <Input />
                </TextField>
                <div className={style.double}>
                  <TextField>
                    <Label>Country</Label>
                    <Input />
                  </TextField>
                  <NumberField>
                    <Label>ZIP Code</Label>
                    <Input />
                  </NumberField>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.summary}>
          <div className={style.formHeading}>
            <p>order summary</p>
            <p>Here is a summary of the items you ordered</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
