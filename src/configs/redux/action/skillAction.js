import api from "../../../services/api";

export const getSkills = (id) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  try {
    if (id) {
      const response = await api.get(`/skills/${id}`);
      dispatch({
        type: "GET_WORKER_SKILL_SUCCESS",
        skills: response.data.data,
      });
    } else {
      const response = await api.get(`/skills`);
      dispatch({
        type: "GET_WORKER_SKILL_SUCCESS",
        skills: response.data.data,
      });
    }
  } catch (error) {
    dispatch({
      type: "MAIN_FAILURE",
      message: error.response.data.message,
    });
  }
};

export const createSkill = (skill, setSkill) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  try {
    await api.post(`/skills`, { skill_name: skill });
    dispatch({
      type: "CREATE_SUCCESS",
      message: `Skill ${skill} successfully added.`,
    });
    setSkill("");
    dispatch(getSkills());
  } catch (error) {
    dispatch({
      type: "MAIN_FAILURE",
      message: error.response.data.message,
    });
  }
};

export const deleteSkill = (id) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  try {
    await api.delete(`/skills/${id}`);
    dispatch({
      type: "DELETE_SUCCESS",
      message: `Skill successfully deleted!`,
    });
    dispatch(getSkills());
  } catch (error) {
    dispatch({
      type: "MAIN_FAILURE",
      message: error.response.data.message,
    });
  }
};
