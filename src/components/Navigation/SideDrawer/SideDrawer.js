import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./SideDrawer.module.css";

const sideDrawer = () => {
  return (
    <div className={styles.SideDrawer}>
      <Logo logoHeight="12%" />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
