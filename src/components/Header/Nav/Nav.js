import React, { useEffect, useState } from "react";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const active = style.activePage;
  const [activeLink, setActiveLink] = useState("Главная");
  return (
    <nav className={style.nav}>
      <Link
        className={activeLink === "Главная" ? active : ""}
        onClick={() => setActiveLink("Главная")}
        to="/"
      >
        Главная
      </Link>
      <Link
        className={activeLink === "Меню" ? active : ""}
        onClick={() => setActiveLink("Меню")}
        to="/menu"
      >
        Меню
      </Link>
      <Link
        className={activeLink === "Контакты" ? active : ""}
        onClick={() => setActiveLink("Контакты")}
        to="/contact"
      >
        Контакты
      </Link>
    </nav>
  );
};

export default Nav;
