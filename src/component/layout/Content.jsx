/** @format */
import React, { useState } from "react";
import DrawerBoard, { showDrawer } from "../../common/drawer/index";
import { Menu, Col, Row } from "antd";
import "./index.scss";
import logo from "./logo.png";
import {
  PhoneOutlined,
  QuestionCircleOutlined,
  CarOutlined,
  UserAddOutlined,
  WalletOutlined,
  PicRightOutlined,
} from "@ant-design/icons";

import Reserve from "../DrawerPages/Reserve";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const ContentBox = () => {
  const [state, setState] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const showDrawer = () => setState(true);
  const onClose = () => setState(false);
  const changeBackground = () =>
    window.scrollY >= 1000 ? setNavBar(true) : setNavBar(false);
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div className="site-layout-content">
        <Row justify="end">
          <Col span={24}>
            <div className="logo" />

            <Menu className={navBar ? "menu active" : "menu"} mode="horizontal">
              <img src={logo} alt="logo" />
              <Menu.Item
                key="1"
                icon={<PhoneOutlined style={{ fontSize: "1em" }} />}
                className="menu_item"
              >
                Contact us
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={<QuestionCircleOutlined style={{ fontSize: "1em" }} />}
                className="menu_item"
              >
                About
              </Menu.Item>
              <Menu.Item
                key="3"
                icon={<CarOutlined style={{ fontSize: "1em" }} />}
                className="menu_item"
              >
                Order
              </Menu.Item>

              <Menu.Item
                key="3"
                icon={<WalletOutlined style={{ fontSize: "1em" }} />}
                className="menu_item"
                onClick={showDrawer}
              >
                Reservation
              </Menu.Item>
              <Menu.Item
                key="3"
                icon={<UserAddOutlined style={{ fontSize: "1em" }} />}
                className="menu_item"
              >
                Sign in
              </Menu.Item>
              <SubMenu
                key="4"
                icon={<PicRightOutlined style={{ fontSize: "1em" }} />}
                title="Categories"
                className="menu_item sub-menu"
              >
                <Menu.Item key="1">
                  <Link to="/food/breakfast">BreakFast</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/food/lunch">Lunch</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/food/dinner">Dinner</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/food/fruitsalad">Fruit Salads</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
        </Row>
      </div>
      <DrawerBoard
        onClose={onClose}
        state={state}
        placement={"left"}
        title={"Reserve a table"}
        width ={600}
      >
        <Reserve />
      </DrawerBoard>
    </>
  );
};
export default ContentBox;
