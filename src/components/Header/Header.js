import React from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import style from "./Header.module.css";
import IconAndText from "../assets/IconAndText/IconAndText";
import CartPopUp from "../CartPopUp/CartPopUp";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <Logo />
        <Nav />
        <IconAndText
          iconPath="./images/phone-icon__white.svg"
          text="+7 (965) 566 78 99"
        />
        <CartPopUp />
      </div>
    </header>
  );
};

export default Header;
