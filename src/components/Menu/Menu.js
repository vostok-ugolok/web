import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./Menu.module.css";
import CategoryCard from "./CategoryCard/CategoryCard";
import ProductCard from "../ProductСard/ProductCard";
import Sceleton from "../ProductСard/Sceleton";

const Menu = () => {
  const categories = [
    {text: "Салаты", category: "salad", styleClass: ""},
    {text: "Горячее", category: "soup", styleClass: ""},
    {text: "Гарнир", category: "garnish", styleClass: ""},
    {text: "Супы", category: "soup", styleClass: ""},
    {text: "Выпечка", category: "bakery", styleClass: ""},
    {text: "Напитки", category: "beverages", styleClass: ""},
  ];

  const [activeCategory, setActiveCategory] = useState("salad");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://212.109.193.12:5000/food/get?type=${activeCategory}`)
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      });
  }, [activeCategory]);

  return (
    <div>
      <div className={style.wrapper}>
        <h4>Категории меню</h4>
        <section className={style.categories}>
          {categories.map((categoryData, index) => (
            <CategoryCard
              {...categoryData}
              key={index}
              onClick={() => setActiveCategory(categoryData.category)}
            />
          ))}
        </section>
        <section>
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
        </section>
      </div>
    </div>
  );
};

export default Menu;
