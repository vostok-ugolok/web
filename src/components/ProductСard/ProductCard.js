import React from "react";
import style from "./ProductCard.module.css";
import { addProduct } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = (props) => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const productObj = {
      name: props.name,
      price: props.price,
      id: props.identifier,
    };

    dispatch(addProduct(productObj));
  };
  return (
    // в Menu вызывается вместе с accentBC
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
        <div className={style.textWrapperRight}>{`${props.mass}`}</div>
        <button
          className={
            props.styleClass
              ? `${style.accentBC} ${style.addButton}` // см. коммент выше
              : style.addButton
          }
          onClick={() => onClickAdd()}
        >
          Добавить
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
