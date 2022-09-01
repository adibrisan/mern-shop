import { loginStart, loginFailure, loginSuccess } from "./userSlice";

import axiosInstance from "../api";

export const login = (user) => {
  return async (dispatch) => {
    dispatch(loginStart());

    try {
      const res = await axiosInstance.post("/auth/login", user);
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };
};
