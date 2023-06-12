import axios from "axios";
import React, { useEffect } from "react";

const Menu = () => {
  useEffect(() => {
    console.log('start');
    axios
    .get("http://185.246.64.64:4999/food/get")
    .then((response) => {
      console.log(response);
    })
  }, [])
  return <div>{}</div>;
};

export default Menu;
