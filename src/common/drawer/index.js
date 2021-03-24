/** @format */

import React, { useState } from "react";
import { Drawer } from "antd";

const DrawerBoard = (props) => {
  const { onClose, state, children, placement, title, width  } = props;
  return (
    <>
      <Drawer
        title={title}
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={state}
        key={placement}
        width={width}
        className="drawer"
      >
        {children}
        </Drawer>
    </>
  );
};
export { DrawerBoard as default };
