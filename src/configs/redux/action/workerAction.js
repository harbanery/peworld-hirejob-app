import api from "../../axios/api";

const validation_password = (form) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (form.password === form.confirmPassword) {
        resolve(true);
      } else {
        reject(new Error(`Password and confirm password do not match.`));
      }
    }, 500);
  });
};

export const register = (form, navigate) => async (dispatch) => {
  dispatch({
    type: "REGISTER_REQUEST",
  });

  try {
    await validation_password(form);
  } catch (error) {
    return dispatch({
      type: "REGISTER_FAILURE",
      message: `Sign up failed. Try again! 
    
    Error: ${error.message}`,
    });
  }

  try {
    await api.post("/workers/register", {
      email: form.email,
      password: form.password,
      name: form.name,
      phone: form.phone,
    });
    dispatch({ type: "REGISTER_SUCCESS", message: "Sign up successfully." });
    navigate("/login");
  } catch (error) {
    dispatch({
      type: "REGISTER_FAILURE",
      message: error.response.data.message,
    });
  }
};

export const getWorkers = (params) => async (dispatch) => {
  try {
    dispatch({ type: "MAIN_REQUEST" });
    const response = await api.get("/workers", {
      params: {
        limit: params.limit,
        page: params.page,
        ...(params.search ? { search: params.search } : {}),
        sort: params.sort,
        sortBy: params.sortBy,
      },
    });
    dispatch({
      type: "MAIN_DATA_SUCCESS",
      data: response.data.data,
      totalPage: response.data.pagination.totalPage,
    });
  } catch (error) {
    dispatch({
      type: "MAIN_DATA_FAILURE",
      message: "Error. Please wait or refresh the web.",
    });
  }
};

export const sortWorkers = (sort, sortBy) => {
  return { type: "SORT_DATA", sort: sort, sortBy: sortBy };
};

export const searchWorker = (search) => {
  return { type: "SEARCH_DATA", search: search };
};

export const prevPagination = () => {
  return { type: "PREV_PAGE" };
};

export const nextPagination = () => {
  return { type: "NEXT_PAGE" };
};

export const selectPagination = (number) => {
  return { type: "SELECT_PAGE", page: number };
};

export const resetWorkers = () => {
  return { type: "WORKER_RESET" };
};

export const getWorkerProfile = (id) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  try {
    if (id) {
      const response = await api.get(`/workers/${id}`);
      dispatch({ type: "GET_WORKER_USER_SUCCESS", user: response.data.data });
    } else {
      const response = await api.get("/workers/profile");
      dispatch({ type: "GET_USER", user: response.data.data });
      dispatch({ type: "GET_WORKER_USER_SUCCESS", user: response.data.data });
    }
  } catch (error) {
    dispatch({
      type: "MAIN_FAILURE",
      message: error.response.data.message,
    });
    dispatch({ type: "GET_WORKER_FAILURE" });
  }
};

export const updateWorkerUser = (user) => {
  return { type: "UPDATE_WORKER_USER", user: user };
};

export const updateWorkerProfile = (user) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  try {
    await api.put(`/workers/profile`, {
      name: user.name,
      job_desk: user.job_desk,
      domicile: user.domicile,
      workplace: user.workplace,
      description: user.description,
    });
    dispatch({
      type: "UPDATE_SUCCESS",
      message: "Profile successfully saved.",
    });
    dispatch(getWorkerProfile());
  } catch (error) {
    dispatch({
      type: "MAIN_FAILURE",
      message: error.response.data.message,
    });
  }
};

export const updateWorkerProfilePhoto = (file) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });

  const formData = new FormData();
  formData.append("photo", file);

  try {
    await api.put(`/workers/profile/photo`, formData, {
      headers: { "content-type": "multipart/form-data" },
    });
    dispatch({
      type: "UPDATE_SUCCESS",
      message: "Profile photo successfully updated.",
    });
    dispatch(getWorkerProfile());
  } catch (error) {
    dispatch({
      type: "MAIN_FAILURE",
      message: error.response.data.message,
    });
  }
};
