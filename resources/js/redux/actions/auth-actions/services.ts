/*
@
 This file contains the requests ( services )
@
*/

import axiosInstance from "../../../config/axios-instance";
function logoutRequest() {
  return axiosInstance({
    method: "get",
    url: "/logout",
  });
}

function loginRequest(body: any) {
  return axiosInstance({
    method: "post",
    url: "login",
    data: {
      email: body.email,
      password: body.password,
    },
  });
}

function getAuthUserRequest() {
  return axiosInstance({
    method: "get",
    url: "/me",
  });
}

const AuthServices = {
  loginRequest,
  logoutRequest,
  getAuthUserRequest,
};

export default AuthServices;
