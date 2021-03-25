/** @format */

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Card, Spin, Button } from "antd";
import uuid from "react-uuid";
import "./index.scss";
import DrawerBoard from "../../common/drawer/index";
import Carts from "../DrawerPages/Carts";
import myState from "../../context/index";
const { Meta } = Card;
window.addEventListener("load", () => window.scrollTo(0, 2000));
const Foods = (props) => {
  let { items } = useContext(myState);
  const [state, setState] = useState(false);
  const showDrawer = () => setState(true);
  const onClose = () => setState(false);
  const {
    match: { params },
  } = props;

  const [data, setData] = useState([]);

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

  useEffect(() => {
    let foodType = params.foodname;
    let APP_ID = "4de28cec";
    let APP_KEY = "c8940da60cec35462125bc09cf7ca344";
    axios
      .get(
        `https://api.edamam.com/search?app_key=${APP_KEY}&app_id=${APP_ID}&q=${foodType}&from=3&to=15`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        setData(response.data.hits);
        console.log(response.data.hits);
      })
      .catch((err) => console.log(err.message));
  }, [data, params.foodname]);
  console.log(data, params.foodname);
  if (!data.length) {
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
      {data.map((food) => {
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
export default Foods;
