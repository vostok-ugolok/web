import React from "react";
import { HandySvg } from "@handy-ones/handy-svg";
import style from "./CategoryCard.module.css";

const CategoryCard = (props) => {
  return (
    <article className={`${style.categoryCard} ${style[props.styleClass]}`} onClick={props.onClick}>
      <HandySvg
        src={`./images/Menu_icon__${props.category}.svg`}
        width="35"
        height="35"
      />
      <span className={style.categoryName}>{props.text}</span>
    </article>
  );
};

export default CategoryCard;
