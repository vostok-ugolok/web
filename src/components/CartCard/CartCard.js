import React from "react";
import style from "./CartCard.module.css";

const CartCard = (props) => {
  return (
    <article className={style[props.styleClass]}>
      <span className={style.firstChild}>{props.name}</span>
      <div className={style.circle}></div>
      <span>{props.price} ₽</span>
      <Counter />
      <Delete />
    </article>
  );
};

const Counter = () => {
  return (
    <div className={style.counter}>
      <button className={style.increment}>-</button>
      <span>1</span>
      <button className={style.decrement}>+</button>
    </div>
  );
};

const Delete = () => {
  return (
    <button className={`${style.lastChild} ${style.delete}`}>
      <img src="./images/Cart_delete-icon.svg" alt=""></img>
      Удалить
    </button>
  );
};

export default CartCard;
