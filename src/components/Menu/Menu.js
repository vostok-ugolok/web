import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductСard/ProductCard";
import Sceleton from "./Sceleton/Sceleton";
import style from "./Menu.module.css";
import Button from "../assets/Button/Button";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("http://185.246.64.64:4999/content/feed").then((response) => {
      setProducts(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className={style.menu}>
      <div className={style.wrapper}>
        <h3>Советуем попробовать</h3>
        <div className={style.productCardsWrapper}>
          {isLoading
            ? [...new Array(5)].map((item, index) => (
                <div className={style.sceletonWrapper}>
                  <Sceleton key={index} className={style.productCard} />
                </div>
              ))
            : products.map((productData) => (
                <ProductCard
                  key={productData.id}
                  {...productData}
                  className={style.productCard}
                />
              ))}
        </div>
        <Button styleClass="moreButton">
          Больше блюд
          <img
            src={"./images/button_more-icon.svg"}
            alt=""
            className={style.moreIcon}
          ></img>
        </Button>
      </div>
    </section>
  );
};

export default Menu;
