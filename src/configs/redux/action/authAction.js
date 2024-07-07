import api from "../../../services/api";

export const login =
  ({ email, password }, navigate) =>
  async (dispatch) => {
    dispatch({
      type: "LOGIN_REQUEST",
    });
    dispatch({
      type: "ALERT_IDLE",
    });
    try {
      const response = await api.post(`/auth/login`, {
        email: email,
        password: password,
      });
      dispatch({ type: "LOGIN_SUCCESS" });
      dispatch({ type: "ALERT_SUCCESS", payload: "Login Successfully!" });
      const { token, refreshToken } = response.data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      navigate("/");
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILURE",
      });
      dispatch({
        type: "ALERT_FAILED",
        payload: "Your email or password is incorrect.",
      });
    }
  };

export const logout = (navigate) => async (dispatch) => {
  await api.get(`/auth/logout`);
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  navigate("/login");
  dispatch({ type: "LOGOUT" });
  dispatch({ type: "RESET_ROLE" });
  dispatch({ type: "MAIN_RESET" });
  dispatch({ type: "RECRUITER_RESET" });
  dispatch({ type: "WORKER_RESET" });
};

export const reset = () => {
  return { type: "ALERT_IDLE" };
};
