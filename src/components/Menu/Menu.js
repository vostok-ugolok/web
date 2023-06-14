import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductСard/ProductCard";
import Sceleton from "./Sceleton";
import style from "./Menu.module.css";
import Button from "../assets/Button/Button";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("start");
    axios.get("http://185.246.64.64:4999/food/get").then((response) => {
      setProducts(response.data);
      // setTimeout(() => setIsLoading(false), 5000)
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
                <Sceleton key={index} className={style.productCard} />
              ))
            : products.map((productData) => (
                <ProductCard
                  key={productData.id}
                  {...[productData]}
                  className={style.productCard}
                />
              ))}
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
        <Button styleClass="moreButton" />
      </div>
    </section>
  );
};

export default Menu;
