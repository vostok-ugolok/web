import React from "react";
import style from "./Button.module.css";

const Button = props => {
  return <button className={`${style[props.styleClass]} ${style.button}`}>{props.children}</button>; //STYLE.BUTTON::hover
};

export default Button;
