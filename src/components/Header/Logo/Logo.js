import React from "react";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={style.wrapper}>
      <img class={style.header_logo} src={"./images/header_logo.svg"} alt="" />
      <div class={style.header_logoTextWrapper}>
        <h1>Восточный уголок</h1>
        <p>Халяль-столовая</p>
      </div>
    </div>
  );
};

export default Logo;
