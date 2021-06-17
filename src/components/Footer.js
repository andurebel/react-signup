import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <p>
        By clicking on the button you are agreeing to our
        <span> Terms and Services</span>
      </p>
    </div>
  );
};

export default Footer;
