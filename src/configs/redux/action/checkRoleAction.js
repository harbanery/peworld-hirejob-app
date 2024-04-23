import api from "../../axios/api";

export const checkRole = () => (dispatch) => {
  if (localStorage.getItem("token")) {
    dispatch({
      type: "LOGGED_ON",
    });
    api.get("/auth/check-role").then((res) => {
      const role = res.data.data.data.role;
      dispatch({
        type: "GET_ROLE",
        role: role,
      });
    });
  }
};

export const resetRole = () => {
  return { type: "RESET_ROLE" };
};
