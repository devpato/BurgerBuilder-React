import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import styles from "./CheckoutSummary.module.css";

const checkoutSummary = ({ ingredients }) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it taste well</h1>
      <div style={{ width: "100%", display: "flex" }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType="Danger" clicked>
        CANCEL
      </Button>
      <Button btnType="Success" clicked>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
