import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

const toolbar = () => (
  <header className={styles.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      <ul>
        <li></li>
      </ul>
    </nav>
  </header>
);

export default toolbar;
