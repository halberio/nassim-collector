import { Reducer, AnyAction } from "redux";
import {
  LOGOUT_REQUEST,
  GET_AUTH_REQUEST,
  GET_AUTH_SUCCESS,
  GET_AUTH_FAILURE,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actions/auth-actions/types";

const INITIAL_STATE: any = {
  user: null,
  isLoggedIn: false,
  isLoadingUser: true,
  isMakingRequest: false,
};

export const authReducer: Reducer<any, AnyAction> = (
  state: any = INITIAL_STATE,
  action
): boolean => {
  switch (action.type) {
    //loginRequest
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoadingUser: true,
        isMakingRequest: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoadingUser: false,
        isLoggedIn: true,
        isMakingRequest: false,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoadingUser: false,
        isLoggedIn: false,
        isMakingRequest: false,
      };
    //
    case GET_AUTH_REQUEST:
      return {
        ...state,
        isLoadingUser: true,
      };
    case GET_AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLoadingUser: false,
        isLoggedIn: true,
      };

    case GET_AUTH_FAILURE:
      return {
        ...state,
        isLoadingUser: false,
        isLoggedIn: false,
      };
    // Logout
    case LOGOUT_REQUEST:
      return { ...state };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    case LOGOUT_FAILURE:
      return { ...state };

    default:
      return { ...state };
  }
};
