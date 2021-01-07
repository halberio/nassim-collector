import * as React from "react";
import { Switch, Route } from "react-router-dom";
import GuestRoute from "./guest-route";
import AuthRoute from "./auth-route";
import { HomePage } from "../pages/home/HomePage";

const Routes = ({ location }: any) => {
  return (
    <Switch location={location}>
      <Route exact path="/" component={HomePage} />
      {/* render always home page */}
      <Route component={HomePage} />
    </Switch>
  );
};

export default Routes;
