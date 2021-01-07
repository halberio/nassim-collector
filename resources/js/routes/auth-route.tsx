import * as React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function AuthRoute({ component: ComponentPage, ...rest }: any) {
  const { isLoggedIn } = useSelector((state: any) => state.authReducer);
  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        isLoggedIn ? (
          <ComponentPage {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
