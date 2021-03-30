/** @format */
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import myState from "../../context/index";
import QueryForm from "../../common/queryForm";

const Result = (props) => {
  const [data, setData] = useState([]);
  const { search } = useContext(myState);

  useEffect(() => {
    let APP_ID = "4de28cec";
    let APP_KEY = "c8940da60cec35462125bc09cf7ca344";
    axios
      .get(
        `https://api.edamam.com/search?app_key=${APP_KEY}&app_id=${APP_ID}&q=${search}&from=3&to=15`,
        {
          headers: {
            key: "X-Requested-With",
            value: "XMLHttpRequest",
            description: "",
          },
        }
      )
      .then((response) => {
        setData(response.data.hits);
        console.log(response.data.hits);
      })
      .catch((err) => console.log(err.message));
  }, [data, search]);
  console.log(data, search);
  return (
    <>
      <QueryForm data={data} />
    </>
  );
};
export default Result;
