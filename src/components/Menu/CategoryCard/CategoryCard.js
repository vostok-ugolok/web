import React from "react";
import { HandySvg } from "@handy-ones/handy-svg";
import style from "./CategoryCard.module.css";

const CategoryCard = (props) => {
  return (
    <button className={style.categoryCard} onClick={props.onClick}>
      <HandySvg
        src={`./images/Menu_icon__${props.category}.svg`}
        className={style[props.styleClass]}
        width="32"
        height="32"
      />
      <span className={style.categoryName}>{props.text}</span>
    </button>
  );
};

export default CategoryCard;
