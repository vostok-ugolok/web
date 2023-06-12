import React from "react";
import Button from "../../assets/Phone/Button/Button";
import style from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <article className={style.productCard}>
      <div className={style.imgWrapper}></div>
      <div className={style.wrapper}>
        <div className={style.textWrapperLeft}>
          <p className={style.name}>Лагман </p>
          <p className={style.price}>290₽</p>
        </div>
        <div className={style.textWrapperRight}>810 г</div>
        <Button styleClass = 'addButton'>Добавить</Button>
      </div>
    </article>
  );
};

export default ProductCard;
