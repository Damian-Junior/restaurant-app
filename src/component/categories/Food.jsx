/** @format */

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import QueryForm from "../../common/queryForm";
const Foods = (props) => {
  const [data, setData] = useState();
  const {match: {params}} = props;
    useEffect(() => {
    let foodType = params.foodname;
    let APP_ID = "4de28cec";
    let APP_KEY = "c8940da60cec35462125bc09cf7ca344";
    axios
      .get(
        `https://api.edamam.com/search?
         app_key=${APP_KEY}&app_id=${APP_ID}&q=${foodType}&from=3&to=15`,
        {
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
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
  return (
    <>
    <QueryForm data = {data} />
    </>
  )
};
export default Foods;
