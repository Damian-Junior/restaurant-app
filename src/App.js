/** @format */

import "antd/dist/antd.css";
import React, { Suspense, lazy } from "react";
import "./App.css";
import ApplicationRoute from "./config/ApplicationRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Spin } from "antd";
import Provider from "./provider";

const App = () => {
  const Foods = React.lazy(() => import("./component/categories/Food"));

  return (
    <Provider>
      <Router>
        <ApplicationRoute />
        <Suspense fallback={<Spin size="large" />}>
          <Switch>
            <Route exact path="/food/:foodname" component={Foods} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
