import React from "react";
import style from './Nav.module.css'

const Nav = () => {
  return (
    <nav className={style.nav}>
      <a className={style.activePage} href="##">Главная</a>
      <a href="##">Меню</a>
      <a href="##">Контакты</a>
    </nav>
  );
};

export default Nav;
