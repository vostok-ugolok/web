import React from "react";
import style from "./CartCard.module.css";
import {
  addProduct,
  removeProduct,
  deleteProduct,
} from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const CartCard = (props) => {
  return (
    <article className={style[props.styleClass]}>
      <span className={style.firstChild}>{props.name}</span>
      <div className={style.circle}></div>
      <span>{props.price} ₽</span>
      <Counter {...props} />
    </article>
  );
};

const Counter = (props) => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const productObj = {
      price: props.price,
      id: props.id,
    };

    dispatch(addProduct(productObj));
  };

  const onClickRemove = () => {
    const productObj = {
      price: props.price,
      id: props.id,
    };

    dispatch(removeProduct(productObj));
  };

  const onClickDelete = () => {
    dispatch(deleteProduct(props.id));
  };

  return (
    <>
      <div className={style.counter}>
        <button className={style.decrement} onClick={onClickRemove}>
          -
        </button>
        <span>{props.count}</span>
        <button className={style.increment} onClick={onClickAdd}>
          +
        </button>
      </div>
      <button
        className={`${style.lastChild} ${style.delete}`}
        onClick={onClickDelete}
      >
        <img src="./images/Cart_delete-icon.svg" alt=""></img>
        Удалить
      </button>
    </>
  );
};

export default CartCard;
