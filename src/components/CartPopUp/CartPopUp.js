import React from "react";
import style from "./CartPopUp.module.css";
import CartCard from "../CartCard/CartCard";
import Button from "../assets/Button/Button";

const CartPopUp = () => {
  return (
    <div className={style.cart}>
      <div className={style.headerWrapper}>
        <h6>Корзина</h6>
        <span>3 товара на сумму 450 ₽</span>
      </div>
      <div>
        <CartCard name="Хачапури по-Аджарски" price="100" styleClass="cartcard__small" />
        <CartCard name="Салат “Вкусный”" price="100" styleClass="cartcard__small" />
        <CartCard name="Лагман" price="100" styleClass="cartcard__small" />
      </div>
      <Button styleClass="cartButton">Оформить</Button>
    </div>
  );
};

export default CartPopUp;
