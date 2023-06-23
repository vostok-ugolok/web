import React from 'react'
import style from './Menu.module.css'
import CategoryCard from "./CategoryCard/CategoryCard";


const Menu = () => {
  return (
    <div>
      <div className={style.wrapper}>
        <h4>Категории меню</h4>
        <section className={style.categories}>
          <CategoryCard text="Салаты" category="calad" styleClass="" />
          <CategoryCard text="Горячее" category="soup" styleClass="" />
          <CategoryCard text="Гарнир" category="garnish" styleClass="" />
          <CategoryCard text="Супы" category="soup" styleClass="" />
          <CategoryCard text="Выпечка" category="bakery" styleClass="" />
          <CategoryCard text="Напитки" category="beverages" styleClass="" />
        </section>
      </div>
    </div>
  )
}

export default Menu