import React from "react";
import style from "./Button.module.css";

const MoreButton = (props) => {
  return <button className={style.moreButton}>{props.children}</button>; //STYLE.BUTTON::hover
};

export default MoreButton;
