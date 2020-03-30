import React from "react";
import Aux from "../../hoc/Aux";
const layout = ({ children }) => (
  <Aux>
    <div>Toolbar, Sidedrawer, backdrop</div>
    <main>{children}</main>
  </Aux>
);

export default layout;
