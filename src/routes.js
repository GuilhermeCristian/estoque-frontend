import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

const Routes = ({ isLoggedIn }) => (
  <Switch>
    <Route exact path="/">
      <Home isLoggedIn={isLoggedIn} />
    </Route>
    <Route path="/login">
      <Login isLoggedIn={isLoggedIn} />
    </Route>
  </Switch>
);
export default Routes;
