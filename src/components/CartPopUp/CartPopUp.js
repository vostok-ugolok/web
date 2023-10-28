import React, { useRef } from "react";
import { setOpenCart } from "../../redux/slices/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import PopUp from "./PopUp";
import style from "./CartPopUp.module.css";

const CartPopUp = () => {
  const cartIconRef = useRef(); // беру ref кнопки корзины
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.header.isCartOpen);
  return (
    <div ref={cartIconRef}>
      <img
        ref={cartIconRef} // взятие ref
        src={"./images/header_cart.svg"}
        alt=""
        onClick={() => dispatch(setOpenCart())}
        className={style.cartIcon}
      />
      {isCartOpen && <PopUp ref={cartIconRef} />}
      {/* передаю ref в компоненту с логикой открытия / закрытия pop up */}
    </div>
  );
};

export default CartPopUp;
