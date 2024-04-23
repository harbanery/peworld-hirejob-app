import api from "../../axios/api";

export const login =
  ({ email, password }, navigate) =>
  async (dispatch) => {
    dispatch({
      type: "LOGIN_REQUEST",
    });
    try {
      const response = await api.post(`/auth/login`, {
        email: email,
        password: password,
      });
      dispatch({ type: "LOGIN_SUCCESS" });
      const { token, refreshToken } = response.data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      navigate("/");
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILURE",
        message: "Your email or password is incorrect.",
      });
    }
  };

export const logout = (navigate) => async (dispatch) => {
  await api.get(`/auth/logout`);
  localStorage.removeItem("persist:role");
  localStorage.removeItem("persist:recruiter");
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
  return { type: "RESPONSE_OPEN_RESET" };
};
