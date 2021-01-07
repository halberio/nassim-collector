import React from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import "moment/locale/fr";
import "./stylesheet/main.scss";
import axiosInstance from "./config/axios-instance";
import { App } from "./App";
import {
  connectTheUser,
  getAuthUser,
} from "./redux/actions/auth-actions/actions";
import store from "./redux/stores/store";
import { RootState } from "./redux/reducers";

const token = localStorage.getItem("linapp_token");

if (token) {
  // if token exists in local storage!
  store.dispatch(connectTheUser(token));
}

store.subscribe(() => {
  const reduxSubs = store.getState();
  if (reduxSubs.authReducer.token) {
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${reduxSubs.authReducer.token}`;
    axiosInstance.defaults.headers[
      "Authorization"
    ] = `Bearer ${reduxSubs.authReducer.token}`;
  }
});
const WrappedApp = ({ children }: any) => {
  const { isLoadingUser, isLoggedIn, user } = useSelector(
    (state: RootState) => state.authReducer
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (token) {
      // We need to check if the token are valid or not by getting the auth user
      dispatch(getAuthUser());
    }
  }, []);

  return (
    <>
      {/*if token is available we try to get the user once each time the app gets reloaded, so we don't need to
      fetch the auth user everytime we need him,*/}

      {token && isLoadingUser ? <h1> Loading... </h1> : children}
    </>
  );
};

if (document.getElementById("root")) {
  ReactDOM.render(
    <Router>
      <Provider store={store}>
        <WrappedApp>
          <App />
        </WrappedApp>
      </Provider>
    </Router>,

    document.getElementById("root")
  );
}
