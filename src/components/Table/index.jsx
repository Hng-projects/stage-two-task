/* eslint-disable react/prop-types */
import { Column } from "react-aria-components";
import { TableHeader } from "react-aria-components";
import { Table as AriaTable } from "react-aria-components";
import style from "./table.module.css";
import { TableBody } from "react-aria-components";
import { Row } from "react-aria-components";
import { Cell } from "react-aria-components";
import productImage1 from "../../assets/product-image-1.png";
const product = {
  id: 1,
  name: "cosrx oil free birch sap mostuirizer",
  img: productImage1,
  current_price: 16,
  old_price: 16,
};
import cancelIcon from "../../assets/cancel.png";
import { NumberField } from "react-aria-components";
import { Button } from "react-aria-components";
import { Input } from "react-aria-components";
import { Group } from "react-aria-components";

function Table({ headers }) {
  return (
    <AriaTable aria-labelledby="cart items" className={style.table}>
      <TableHeader className={style.th}>
        {headers.map((header) => (
          <Column key={header} isRowHeader>
            {header}
          </Column>
        ))}
      </TableHeader>
      <TableBody>
        <Row className={style.row}>
          <Cell className={style.pd}>
            <div className={style.img}>
              <img src={product.img} alt="" />
            </div>
            <p>{product.name}</p>
          </Cell>
          <Cell>${product.current_price}</Cell>
          <Cell>
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
          </Cell>
          <Cell>$92</Cell>
          <Cell>
            <img src={cancelIcon} alt="" />
          </Cell>
        </Row>
        <Row className={style.row}>
          <Cell className={style.pd}>
            <div className={style.img}>
              <img src={product.img} alt="" />
            </div>
            <p>{product.name}</p>
          </Cell>
          <Cell>${product.current_price}</Cell>
          <Cell><NumberField
              defaultValue={1}
              minValue={0}
              aria-labelledby="product quantity"
            >
              <Group className={style.group}>
                <Button slot="decrement">-</Button>
                <Input />
                <Button slot="increment">+</Button>
              </Group>
            </NumberField></Cell>
          <Cell>$92</Cell>
          <Cell>
            <img src={cancelIcon} alt="" />
          </Cell>
        </Row>
      </TableBody>
    </AriaTable>
  );
}

export default Table;
