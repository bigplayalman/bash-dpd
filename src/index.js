/* global document */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import store from "./store";
import Dashboard from "./containers/Dashboard";
import Login from "./containers/Login";
import { PrivateRoute } from "./components/auth/privateRoute";
import welcome from "./components/welcome";
import Header from "./components/header";
import {AUTH_USER} from "./constants/ActionTypes";

// By using <Provider />, the store will be made available for all the components in your application.

const token = localStorage.getItem("token");

if (token) {
  store.dispatch({ type: AUTH_USER });
}
render(
  <Provider store={store}>
    <Router>
      <App>
        <Header />
        <Route path="/" exact={true} component={welcome} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/home" component={Dashboard} />
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);
