import React from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Cart from "./Cart/Cart";
import style from "./Header.module.css";
import IconAndText from "../assets/IconAndText/IconAndText";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <Logo />
        <Nav />
        <IconAndText iconPath = "./images/phone-icon__white.svg" text = '+7 (965) 566 78 99'/>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
