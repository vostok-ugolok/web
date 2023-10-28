import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductСard/ProductCard";
import MoreButton from "../assets/Button/MoreButton";
import Sceleton from "../ProductСard/Sceleton";
import style from "./Feed.module.css";

const Feed = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://188.120.253.92:5000/content/feed"
      );

      let identifiers = response.data,
        products_raw = [];
      // console.log(identifiers)

      for (let id of identifiers) {
        const response = await axios.get(
          `http://188.120.253.92:5000/food/get?type=${id}`
        );
        products_raw = products_raw.concat(response.data);
        // console.log(products_raw)
      }
      return products_raw;
    };

    fetchData()
      .then((products_raw) => {
        // console.log(products_raw)
        setProducts(products_raw);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);
  return (
    <section className={style.feed}>
      <div className={style.wrapper}>
        <h2>Советуем попробовать</h2>
        <div className={style.productCardsWrapper}>
          {isLoading
            ? [...new Array(5)].map((item, index) => (
                <div className={style.sceletonWrapper} key={index}>
                  <Sceleton key={index} className={style.productCard} />
                </div>
              ))
            : products.map((productData) => (
                <ProductCard
                  key={productData.identifier}
                  {...productData}
                  className={style.productCard}
                />
              ))}
        </div>
        <MoreButton>
          Больше блюд
          <img
            src={"./images/button_more-icon.svg"}
            alt=""
            className={style.moreIcon}
          ></img>
        </MoreButton>
      </div>
    </section>
  );
};

export default Feed;
