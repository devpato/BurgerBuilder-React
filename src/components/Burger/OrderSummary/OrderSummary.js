import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = ({
  ingredients,
  cancel,
  continuePurchase,
  totalPrice
}) => {
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
      <p>
        <strong>Total price: ${totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={cancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={continuePurchase}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
