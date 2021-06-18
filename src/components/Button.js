import React from "react";
import style from "./Button.module.css";

const Button = () => {
  return (
    <div className={style.button}>
      <span>Try it free 7 days</span> then $20/mo.
    </div>
  );
};

export default Button;
