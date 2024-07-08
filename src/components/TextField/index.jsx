import { Input } from "react-aria-components";
import { TextField as AriaTextField } from "react-aria-components";
import style from "./text-field.module.css";

function TextField({ leftIcon, rightIcon, ...props }) {
  return (
    <>
      <AriaTextField
        aria-labelledby="search"
        {...props}
        className={style.textfield}
      >
        {leftIcon && <span className={style.leftIcon}>{leftIcon}</span>}
        <Input className={style.input} />
        {rightIcon && <span className={style.rightIcon}>{rightIcon}</span>}
      </AriaTextField>
    </>
  );
}

export default TextField;
