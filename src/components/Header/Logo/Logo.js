import React from "react";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={style.wrapper}>
      <img className={style.header_logo} src={"./images/header_logo.svg"} alt="" />
      <div className={style.header_logoTextWrapper}>
        <h1>Восточный уголок</h1>
        <span>Халяль-столовая</span>
      </div>
    </div>
  );
};

export default Logo;
