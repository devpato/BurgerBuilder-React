import React from "react";
import burgerLogo from "../../assests/images/burger-logo.png";
import styles from "./Logo.module.css";

const logo = ({ logoHeight }) => (
  <div className={styles.Logo} style={{ height: logoHeight }}>
    <img src={burgerLogo} alt="Burger logo" />
  </div>
);

export default logo;
