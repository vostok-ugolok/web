import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./Menu.module.css";
import CategoryCard from "./CategoryCard/CategoryCard";
import ProductCard from "../ProductСard/ProductCard";
import Sceleton from "../ProductСard/Sceleton";

const Menu = () => {
  const categories = [
    { text: "Салаты", category: "salad" },
    { text: "Горячее", category: "hot" },
    { text: "Гарнир", category: "garnish" },
    { text: "Супы", category: "soup" },
    { text: "Выпечка", category: "bakery" },
    { text: "Напитки", category: "beverages" },
  ];

  const [activeCategory, setActiveCategory] = useState("salad");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://188.120.253.92:5000/food/get?type=${activeCategory}`)
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      });
  }, [activeCategory]);

  return (
    <div>
      <section className={style.categories}>
        <div className={style.wrapper}>
          <h2>Категории меню</h2>
          <div className={style.categoriesWrapper}>
            {categories.map((categoryData, index) => (
              <CategoryCard
                {...categoryData}
                key={index}
                onClick={() => setActiveCategory(categoryData.category)}
                styleClass={
                  activeCategory === categoryData.category ? "active" : ""
                }
              />
            ))}
          </div>
        </div>
      </section>
      <div className={style.wrapper}>
        <section className={style.productCardsWrapper}>
          {isLoading
            ? [...new Array(5)].map((item, index) => (
                <div className={style.sceletonWrapper} key={index}>
                  <Sceleton key={index} />
                </div>
              ))
            : products.map((productData) => (
                <ProductCard
                  key={productData.identifier}
                  {...productData}
                  styleClass="accentBC"
                />
              ))}
        </section>
      </div>
    </div>
  );
};

export default Menu;
