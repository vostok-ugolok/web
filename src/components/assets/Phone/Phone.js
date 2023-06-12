import React from "react";
import style from './Phone.module.css'

const Phone = () => {
  return (
    <div className={style.phone}>
      <img src={"./images/header_phone.svg"} alt="" />
      <p>+7 (965) 566 78 99</p>
    </div>
  );
};

export default Phone;
