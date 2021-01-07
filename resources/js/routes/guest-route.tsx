import * as React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function GuestRoute({ component: Component, ...rest }: any) {
  const { isLoggedIn } = useSelector((state: any) => state.authReducer);
  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        !isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
