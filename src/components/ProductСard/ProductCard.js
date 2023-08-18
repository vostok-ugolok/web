import React from "react";
import Button from "../assets/Button/Button";
import style from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <article className={`${style.productCard} ${style[props.styleClass]}`}>
      <img
        src={"http://188.120.253.92:5000/images/" + props.image}
        className={style.imgWrapper}
        alt={props.name}
      ></img>
      <div className={style.wrapper}>
        <div className={style.textWrapperLeft}>
          <p className={style.name}>{props.name}</p>
          <p className={style.price}>{`${props.price} ₽`}</p>
        </div>
        <div className={style.textWrapperRight}>{`${props.mass} г`}</div>
        <Button styleClass="addButton__accent">Добавить</Button>
      </div>
    </article>
  );
};

export default ProductCard;
