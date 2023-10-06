import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import style from "./Menu.module.css";
import CategoryCard from "./CategoryCard/CategoryCard";
import ProductCard from "../ProductСard/ProductCard";
import Sceleton from "../ProductСard/Sceleton";
import { setActiveCategory } from "../../redux/slices/filterSlice";

const Menu = () => {
  const categories = [
    { text: "Салаты", category: "salad" },
    { text: "Горячее", category: "hot" },
    { text: "Гарнир", category: "garnish" },
    { text: "Супы", category: "soup" },
    { text: "Выпечка", category: "bakery" },
    { text: "Напитки", category: "beverages" },
  ];

  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.filter.activeCategory);
  
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
                onClick={() =>
                  dispatch(setActiveCategory(categoryData.category))
                }
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
