import api from "../../axios/api";

export const getPortofolio = (id) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  try {
    if (id) {
      const response = await api.get(`/portfolio/${id}`);
      dispatch({
        type: "GET_WORKER_PORTOFOLIO_SUCCESS",
        portofolio: response.data.data,
      });
    } else {
      const response = await api.get(`/portfolio`);
      dispatch({
        type: "GET_WORKER_PORTOFOLIO_SUCCESS",
        portofolio: response.data.data,
      });
    }
  } catch (error) {
    dispatch({
      type: "MAIN_FAILURE",
      message: error.response.data.message,
    });
  }
};

export const readPortofolio = (id, setPortofolio) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  setPortofolio({
    application_name: "",
    link_repository: "",
    application: "Aplikasi Mobile",
    image: "",
  });
  const response = await api.get("/portfolio");
  const dataPortofolio = response.data.data.filter((item) => item.id === id);
  dataPortofolio.map((value) => {
    setPortofolio({
      application_name: value.application_name,
      link_repository: value.link_repository,
      application: value.application,
      image: value.image,
    });
  });
};

export const createPortofolio =
  (portofolio, setPortofolio) => async (dispatch) => {
    dispatch({ type: "MAIN_REQUEST" });
    try {
      await api.post(`/portfolio`, {
        application_name: portofolio.application_name,
        link_repository: portofolio.link_repository,
        application: portofolio.application,
        image: portofolio.image,
      });
      dispatch({
        type: "CREATE_SUCCESS",
        message: `Portfolio successfully added.`,
      });
      setPortofolio({
        application_name: "",
        link_repository: "",
        application: "Aplikasi Mobile",
        image: "",
      });
      dispatch(getPortofolio());
    } catch (error) {
      dispatch({
        type: "MAIN_FAILURE",
        message: error.response.data.message,
      });
    }
  };

export const updatePortofolio =
  (id, portofolio, setPortofolio) => async (dispatch) => {
    dispatch({ type: "MAIN_REQUEST" });
    try {
      await api.put(`/portfolio/${id}`, {
        application_name: portofolio.application_name,
        link_repository: portofolio.link_repository,
        application: portofolio.application,
        image: portofolio.image,
      });
      dispatch({
        type: "UPDATE_SUCCESS",
        message: `Portfolio successfully updated.`,
      });
      setPortofolio({
        application_name: "",
        link_repository: "",
        application: "Aplikasi Mobile",
        image: "",
      });
      dispatch(getPortofolio());
    } catch (error) {
      dispatch({
        type: "MAIN_FAILURE",
        message: error.response.data.message,
      });
    }
  };

export const deletePortofolio = (id) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  try {
    await api.delete(`/portfolio/${id}`);
    dispatch({
      type: "DELETE_SUCCESS",
      message: `Portofolio successfully deleted!`,
    });
    dispatch(getPortofolio());
  } catch (error) {
    dispatch({
      type: "MAIN_FAILURE",
      message: error.response.data.message,
    });
  }
};
