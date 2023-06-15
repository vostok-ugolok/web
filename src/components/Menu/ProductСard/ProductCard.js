import React, {useEffect} from "react";
import axios from "axios";
import Button from "../../assets/Button/Button";
import style from "./ProductCard.module.css";


const ProductCard = props => {
  console.log('http://185.246.64.64:4999/images/' + props.image)
  useEffect(() => {
    axios.get('http://185.246.64.64:4999/images/' + props.image, {reponseType:'blob'}).then((response) => {
      console.log('cool')
    });
  }, []);

  return (
    <article className={style.productCard}>
      <div className={style.imgWrapper}></div>
      <div className={style.wrapper}>
        <div className={style.textWrapperLeft}>
          <p className={style.name}>{props.name}</p>
          <p className={style.price}>{`${props.price}₽`}</p>
        </div>
        <div className={style.textWrapperRight}>{`${props.mass} г`}</div>
        <Button styleClass = 'addButton'>Добавить</Button>
      </div>
    </article>
  );
};

export default ProductCard;
