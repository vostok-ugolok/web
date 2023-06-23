import React from "react";
import { HandySvg } from "@handy-ones/handy-svg";
import style from "./CategoryCard.module.css";

const CategoryCard = (props) => {
  return (
    <article className={style.categoryCard}>
      <HandySvg
        src={`./images/Menu_icon__${props.category}.svg`}
        className={style[props.styleClass]}
        width="32"
        height="32"
      />
      <span className={style.categoryName}>{props.text}</span>
    </article>
  );
};

export default CategoryCard;
