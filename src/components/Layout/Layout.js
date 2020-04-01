import React from "react";
import Aux from "../../hoc/Aux";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = ({ children }) => (
  <Aux>
    <Toolbar />
    <main className={styles.Content}>{children}</main>
  </Aux>
);

export default layout;
