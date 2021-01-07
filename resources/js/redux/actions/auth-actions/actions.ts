import {
  GET_AUTH_SUCCESS,
  GET_AUTH_FAILURE,
  GET_AUTH_REQUEST,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  CONNECT_THE_USER,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./types";
import AuthServices from "./services";
import { Dispatch } from "redux";
import { message } from "antd";

interface loginInterface {
  email: string;
  password: string;
}
export function login({ email, password }: loginInterface) {
  return async (dispatch: Dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    message.loading("Connexion en cours...");
    try {
      const response = await AuthServices.loginRequest({ email, password });
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.provider });
      localStorage.setItem("halber_token", response.data.access_token);
    } catch (e) {
      dispatch({ type: LOGIN_FAILURE });
      if (e && e.response && e.response.data) {
        message.error("Merci de verifier votre email et mot de passe");
      } else {
        message.error("Error");
      }
    }
  };
}

export function getAuthUser() {
  return async (dispatch: any) => {
    await dispatch({
      type: GET_AUTH_REQUEST,
    });
    try {
      const response = await AuthServices.getAuthUserRequest();
      await dispatch({
        type: GET_AUTH_SUCCESS,
        payload: {
          user: response.data,
        },
      });
    } catch (e) {
      dispatch({
        type: GET_AUTH_FAILURE,
      });
    }
  };
}

export function connectTheUser(token: any) {
  return async (dispatch: Dispatch) => {
    localStorage.setItem("halber_token", token);
    dispatch({
      type: CONNECT_THE_USER,
      payload: {
        token: token,
      },
    });
  };
}

export function logout() {
  return async (dispatch: any) => {
    dispatch({ type: LOGOUT_REQUEST });
    try {
      //await AuthServices.logoutRequest();
      localStorage.setItem("halber_token", "");
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (e) {
      dispatch({ type: LOGOUT_FAILURE });
    }
  };
}
