import React from "react";
import styles from "./Modal.module.css";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

const modal = ({ children, show, modalClosed }) => (
  <Aux>
    <Backdrop show={show} clicked={modalClosed} />
    <div
      className={styles.Modal}
      style={{
        transform: show ? "translateY(0)" : "translateY(-100vh)",
        opacity: show ? "1" : "0"
      }}
    >
      {children}
    </div>
  </Aux>
);

export default React.memo(modal);
