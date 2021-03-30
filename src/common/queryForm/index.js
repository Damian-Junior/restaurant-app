/** @format */

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Card, Spin, Button } from "antd";
import uuid from "react-uuid";
import DrawerBoard from "../../common/drawer/index";
import Carts from "../../component/DrawerPages/Carts";
import myState from "../../context/index";
 import "./index.scss";

const QueryForm = (props) => {
    const {data} = props;
  const { Meta } = Card;
  let { items } = useContext(myState);
  const [state, setState] = useState(false);
  const showDrawer = () => setState(true);
  const onClose = () => setState(false);
  const addToCart = (food) => {
    let cart = {
      recipeName: food.recipe.label,
      image: food.recipe.image,
      price: food.recipe.calories,
      quantity: 1,
    };
    // check if the content is already in the cart
    let check = items.find((items) => items.price == cart.price);
    check ? check.quantity++ : items.push(cart);
    showDrawer();
  };

  if (!data?.length) {
    return (
      <>
        <Spin
          size="large"
          style={{ verticalAlign: "middle", marginTop: "40px" }}
        />
      </>
    );
  }
  return (
    <div className="image-div">
      {data?.map((food) => {
        return (
          <>
            <Card
              key={uuid()}
              style={{ width: 300 }}
              cover={<img alt="example" src={`${food?.recipe?.image}`} />}
            >
              {" "}
              <Meta
                title={`${food?.recipe?.label}`}
                description={<>&#8358; {Math.round(food?.recipe?.calories)}</>}
              />
              <Button
                type="primary"
                htmlType="submit"
                className="ant-btn"
                onClick={() => addToCart(food)}
              >
                Add to Cart
              </Button>
            </Card>
          </>
        );
      })}
      <DrawerBoard
        onClose={onClose}
        state={state}
        placement={"right"}
        title={"Your Cart"}
        width={500}
      >
        <Carts />
      </DrawerBoard>
    </div>
  );
};
export default QueryForm;
