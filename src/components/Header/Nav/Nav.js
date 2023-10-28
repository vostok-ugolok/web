import React, { useState } from "react";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const active = style.activePage;
  const [, setActiveLink] = useState("Главная");
  return (
    <nav className={style.nav}>
      <NavLink
        className={({ isActive }) => (isActive ? active : "")}
        onClick={() => setActiveLink("Главная")}
        to="/"
      >
        Главная
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? active : "")}
        onClick={() => setActiveLink("Меню")}
        to="/menu"
      >
        Меню
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? active : "")}
        onClick={() => setActiveLink("Контакты")}
        to="/contact"
      >
        Контакты
      </NavLink>
    </nav>
  );
};

export default Nav;
