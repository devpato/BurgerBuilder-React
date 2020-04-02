import React from "react";
import burgerLogo from "../../assests/images/burger-logo.png";
import styles from "./Logo.module.css";
import PropTypes from "prop-types";

const logo = ({ logoHeight }) => (
  <div className={styles.Logo} style={{ height: logoHeight }}>
    <img src={burgerLogo} alt="Burger logo" />
  </div>
);

export default logo;

logo.protoTypes = {
  logoHeight: PropTypes.string.required
};
