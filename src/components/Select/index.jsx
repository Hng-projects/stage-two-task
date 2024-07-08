/* eslint-disable react/prop-types */
import {
  Button,
  SelectValue,
  ListBox,
  ListBoxItem,
  Popover,
  Select as AriaSelect,
} from "react-aria-components";
import style from "./select.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";

function Select({ options, placeholder }) {
  return (
    <AriaSelect
      aria-labelledby="filter for ingredients"
      placeholder={placeholder}
      className={style.check}
    >
      <Button className={style.select}>
        <SelectValue />
        <span>
          <RiArrowDropDownLine />
        </span>
      </Button>
      <Popover>
        <ListBox className={style.listBox}>
          {options.map((option) => (
            <ListBoxItem key={option}>{option}</ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </AriaSelect>
  );
}

export default Select;
