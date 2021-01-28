import http from "../../../utils/axios";
import { types } from "../types";

export const _Login = (Email, Password) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_CLICKED });
    const res = await http.post("/api/login", {
      email: Email,
      password: Password,
    });
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    response.data.error
      ? dispatch({ type: types.LOGIN_ERROR, payload: res.data.error })
      : dispatch({ type: types.LOGIN_ERROR, payload: "Something went wrong!" });
  }
};
