import React from "react";
import styles from "./Button.module.css";

const button = ({ children, clicked, btnType }) => (
  <button
    className={[styles.Button, styles[btnType]].join(" ")}
    nClick={clicked}
  >
    {children}
  </button>
);

export default button;
