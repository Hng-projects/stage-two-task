import productImage1 from "../../assets/product-image-1.png";
import style from "./cart-item.module.css";
import cancelIcon from "../../assets/cancel.png";
import { NumberField } from "react-aria-components";
import { Button } from "react-aria-components";
import { Input } from "react-aria-components";
import { Group } from "react-aria-components";

const product = {
  id: 1,
  name: "cosrx oil free birch sap mostuirizer",
  img: productImage1,
  current_price: 16,
  old_price: 16,
};

function CartItem() {
  return (
    <div className={style.container}>
      <div className={style.box1}>
        <div className={style.pd}>
          <div className={style.img}>
            <img src={product.img} alt="" />
          </div>
          <p>{product.name}</p>
        </div>
        <div>$72</div>
      </div>
      <div className={style.box2}>
        <div>
          <NumberField
            defaultValue={1}
            minValue={0}
            aria-labelledby="product quantity"
          >
            <Group className={style.group}>
              <Button slot="decrement">-</Button>
              <Input />
              <Button slot="increment">+</Button>
            </Group>
          </NumberField>
        </div>
        <div>
          <img src={cancelIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
