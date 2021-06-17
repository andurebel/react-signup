import React from "react";
import style from "./Form.module.css";

const Form = () => {
  return (
    <form className={style.form}>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last name" />
      <input type="email" placeholder="Email address" />
      <input type="password" placeholder="Password" />
      <button>Claim yout free trial</button>
    </form>
  );
};

export default Form;
