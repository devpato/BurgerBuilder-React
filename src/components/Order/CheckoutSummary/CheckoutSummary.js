import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import styles from "./CheckoutSummary.module.css";

const checkoutSummary = ({
  ingredients,
  checkoutCancelled,
  checkoutContinue,
}) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it taste well</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType="Danger" clicked={checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={checkoutContinue}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
