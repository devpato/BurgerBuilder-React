import React from "react";
import Aux from "../../../hoc/Aux";

const orderSummary = ({ ingredients }) => {
  const ingredientsSummary = Object.keys(ingredients).map(i => {
    return (
      <li key={i}>
        <span style={{ textTransform: "capitalize" }}>{i}:</span>{" "}
        {ingredients[i]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Ingredients</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
