/** @format */

import React, { useState } from "react";
import myState from "../context";

const Provider = (props) => {
  const { children } = props;
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState();
  return (
    <myState.Provider value={{ items, setItems, search, setSearch }}>
      {children}
    </myState.Provider>
  );
};
export default Provider;
