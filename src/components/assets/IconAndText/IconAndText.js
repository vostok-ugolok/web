import React from "react";
import style from './IconAndText.module.css'

const IconAndText = props => {
  return (
    <div className={`${style.phone} ${style[props.color]}`}>
      <img src={props.iconPath} alt="" />
      <p>{props.text}</p>
    </div>
  );
};

export default IconAndText;
