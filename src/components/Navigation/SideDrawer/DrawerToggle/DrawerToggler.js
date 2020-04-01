import React from "react";
import styles from "./DrawerToggler.module.css";

const drawerToggler = ({ clicked }) => (
  <div className={styles.DrawerToggle} onClick={clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggler;
