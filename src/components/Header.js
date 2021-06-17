import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <section>
        <h1>Learns to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real time.Watching
          scripted tutorials is great,but understanding how developers think is
          invaluable
        </p>
      </section>
    </div>
  );
};

export default Header;
