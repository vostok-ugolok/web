import React from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Cart from "./Cart/Cart";
import Phone from '../assets/Phone/Phone';
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <Logo />
        <Nav />
        <Phone />
        <Cart />
      </div>
    </header>
  );
};

export default Header;
