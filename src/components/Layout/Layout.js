import React from "react";
import Aux from "../../hoc/Aux";
import styles from "./Layout.module.css";

const layout = ({ children }) => (
  <Aux>
    <div>Toolbar, Sidedrawer, backdrop</div>
    <main className={styles.Content}>{children}</main>
  </Aux>
);

export default layout;
