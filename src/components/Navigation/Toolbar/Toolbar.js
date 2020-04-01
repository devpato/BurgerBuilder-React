import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggler from "../SideDrawer/DrawerToggle/DrawerToggler";

const toolbar = ({ dtTogglerClicked }) => (
  <header className={styles.Toolbar}>
    <DrawerToggler clicked={dtTogglerClicked} />
    <Logo logoHeight="80%" />
    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
