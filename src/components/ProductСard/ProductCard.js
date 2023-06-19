import React from "react";
import Button from "../assets/Button/Button";
import style from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <article className={style.productCard}>
      <img
        src={"http://212.109.193.12:5000/images/" + props.image}
        className={style.imgWrapper}
        alt={props.name}
      ></img>
      <div className={style.wrapper}>
        <div className={style.textWrapperLeft}>
          <p className={style.name}>{props.name}</p>
          <p className={style.price}>{`${props.price}₽`}</p>
        </div>
        <div className={style.textWrapperRight}>{`${props.mass} г`}</div>
        <Button styleClass="addButton">Добавить</Button>
      </div>
    </article>
  );
};

export default ProductCard;
