import React, { useEffect, useRef, forwardRef } from "react";
import { setOpenCart } from "../../redux/slices/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../CartCard/CartCard";
import style from "./CartPopUp.module.css";

const PopUp = forwardRef((props, ref) => {
  const cartIconRef = ref;
  const cartRef = useRef();
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const amountOfProducts = useSelector((state) => state.cart.amountOfProducts);
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClicksCart = (event) => {
      if (
        !event.composedPath().includes(cartIconRef.current) &&
        !event.composedPath().includes(cartRef.current)
      ) {
        dispatch(setOpenCart(false));
      }
    };

    document.body.addEventListener("click", handleClicksCart);
    return () => {
      document.body.removeEventListener("click", handleClicksCart);
    };
  });

  const numberCases = (number, price) => {
    if (number === 0) {
      return "В корзине пока нет товаров";
    } else if (number <= 20 && number >= 10) {
      return `${number} товаров на сумму ${price} ₽`;
    } else if (number % 10 === 1) {
      return `${number} товар на сумму ${price} ₽`;
    } else if (number % 10 === 2 || number % 10 === 3 || number % 10 === 4) {
      return `${number} товара на сумму ${price} ₽`;
    } else {
      return `${number} товаров на сумму ${price} ₽`;
    }
  };

  return (
    <div className={style.cart} ref={cartRef}>
      <div className={style.headerWrapper}>
        <h6>Корзина</h6>
        <span>{numberCases(amountOfProducts, totalPrice)}</span>
      </div>
      <div>
        {products.map((productData) => (
          //сделать условный рендеринг если != 0
          <CartCard
            key={productData.id}
            {...productData}
            styleClass="cartcard__small"
          />
        ))}
        {/* <CartCard
          name="Хачапури по-Аджарски"
          price="100"
          styleClass="cartcard__small"
        />
        <CartCard
          name="Салат “Вкусный”"
          price="100"
          styleClass="cartcard__small"
        />
        <CartCard name="Лагман" price="100" styleClass="cartcard__small" /> */}
      </div>
      <button className={style.button}>Оформить</button>
    </div>
  );
});

export default PopUp;
