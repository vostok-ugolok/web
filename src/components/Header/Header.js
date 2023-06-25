import React, { useState } from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import style from "./Header.module.css";
import IconAndText from "../assets/IconAndText/IconAndText";
import CartPopUp from "../CartPopUp/CartPopUp";

const Header = () => {
  const [isCartOpen, setOpenCart] = useState(false);
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <Logo />
        <Nav />
        <IconAndText
          iconPath="./images/phone-icon__white.svg"
          text="+7 (965) 566 78 99"
        />
        <img
          src={"./images/header_cart.svg"}
          alt=""
          onClick={() => setOpenCart(!isCartOpen)}
          className={style.cart}
        />
        {isCartOpen && <CartPopUp />}
      </div>
    </header>
  );
};

export default Header;
