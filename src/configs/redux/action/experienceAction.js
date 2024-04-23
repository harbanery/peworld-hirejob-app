import api from "../../axios/api";
import currentMonthYear from "../../tools/currentMonthYear";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getExperience = (id) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  try {
    if (id) {
      const response = await api.get(`/experience/${id}`);
      dispatch({
        type: "GET_WORKER_EXPERIENCE_SUCCESS",
        experience: response.data.data,
      });
    } else {
      const response = await api.get(`/experience`);
      dispatch({
        type: "GET_WORKER_EXPERIENCE_SUCCESS",
        experience: response.data.data,
      });
    }
  } catch (error) {
    dispatch({
      type: "MAIN_FAILURE",
      message: error.response.data.message,
    });
  }
};

export const readExperience = (id, setExperience) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  setExperience({
    position: "",
    company: "",
    work_date: "",
    description: "",
  });
  const response = await api.get("/experience");
  const dataExperience = response.data.data.filter((item) => item.id === id);
  dataExperience.map((value) => {
    const setMonth = (
      months.findIndex((month) => month === value.work_month) + 1
    )
      .toString()
      .padStart(2, "0");
    setExperience({
      position: value.position,
      company: value.company,
      work_date: `${value.work_year}-${setMonth}`,
      description: value.description,
    });
  });
};

export const createExperience =
  (experience, setExperience) => async (dispatch) => {
    dispatch({ type: "MAIN_REQUEST" });
    const date = new Date(experience.work_date);
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    try {
      await api.post(`/experience`, {
        position: experience.position,
        company: experience.company,
        work_month: month,
        work_year: year,
        description: experience.description,
      });
      dispatch({
        type: "CREATE_SUCCESS",
        message: `Experience successfully added.`,
      });
      setExperience({
        position: "",
        company: "",
        work_date: currentMonthYear(),
        description: "",
      });
      dispatch(getExperience());
    } catch (error) {
      dispatch({
        type: "MAIN_FAILURE",
        message: error.response.data.message,
      });
    }
  };

export const updateExperience =
  (id, experience, setExperience) => async (dispatch) => {
    dispatch({ type: "MAIN_REQUEST" });
    const date = new Date(experience.work_date);
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    try {
      await api.put(`/experience/${id}`, {
        position: experience.position,
        company: experience.company,
        work_month: month,
        work_year: year,
        description: experience.description,
      });
      dispatch({
        type: "UPDATE_SUCCESS",
        message: `Experience successfully updated.`,
      });
      setExperience({
        position: "",
        company: "",
        work_date: currentMonthYear(),
        description: "",
      });
      dispatch(getExperience());
    } catch (error) {
      dispatch({
        type: "MAIN_FAILURE",
        message: error.response.data.message,
      });
    }
  };

export const deleteExperience = (id) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  try {
    await api.delete(`/experience/${id}`);
    dispatch({
      type: "DELETE_SUCCESS",
      message: `Experience successfully deleted!`,
    });
    dispatch(getExperience());
  } catch (error) {
    dispatch({
      type: "MAIN_FAILURE",
      message: error.response.data.message,
    });
  }
};
