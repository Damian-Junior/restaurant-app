/** @format */

import React, { useState } from "react";
import myState from "../context";

const Provider = (props) => {
  const { children } = props;
  const [items, setItems] = useState([]);
  return (
    <myState.Provider value={{ items, setItems }}>{children}</myState.Provider>
  );
};
export default Provider;
