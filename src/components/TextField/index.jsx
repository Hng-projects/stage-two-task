/* eslint-disable react/prop-types */
import { Input } from "react-aria-components";
import { TextField as AriaTextField } from "react-aria-components";
import style from "./text-field.module.css";

function TextField({ icon, ...props }) {
  return (
    <>
      <AriaTextField
        aria-labelledby="search"
        {...props}
        className={style.textfield}
      >
        {icon && <span className={style.icon}>{icon}</span>}
        <Input className={style.input} />
      </AriaTextField>
    </>
  );
}

export default TextField;
