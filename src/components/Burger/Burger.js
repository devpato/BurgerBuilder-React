import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients).map(key => {
    return [...Array(ingredients[key])].map((_, i) => {
      return <BurgerIngredient key={key + i} type={key} />;
    });
  });

  transformedIngredients =
    transformedIngredients.flat(1).length === 0 ? (
      <p>Please add ingredients</p>
    ) : (
      transformedIngredients
    );

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
