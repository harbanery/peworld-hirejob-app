import api from "../../../services/api";

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

export const registerRecruiter = (form, navigate) => async (dispatch) => {
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
    await api.post("/recruiters/register", {
      email: form.email,
      password: form.password,
      name: form.name,
      company: form.company,
      position: form.position,
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

export const getRecruiterProfile = () => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  try {
    const response = await api.get("/recruiters/profile");
    const userData = response.data.data;
    dispatch({ type: "GET_USER", user: userData });
    dispatch({ type: "GET_RECRUITER_SUCCESS", user: userData });
  } catch (error) {
    console.error("Error fetching recruiter profile:", error);
    const errorMessage =
      error.response?.data?.message || "Failed to fetch recruiter profile";
    dispatch({ type: "MAIN_FAILURE", message: errorMessage });
    dispatch({ type: "GET_RECRUITER_FAILURE" });
  }
};

export const updateRecruiterUser = (user) => {
  return { type: "UPDATE_RECRUITER", user: user };
};

export const updateRecruiterProfile = (user) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  try {
    await api.put(`/recruiters/profile`, {
      company: user.company,
      position: user.position,
      city: user.city,
      description: user.description,
      email: user.email,
      instagram: user.instagram,
      phone: user.phone,
      linkedin: user.linkedin,
      photo: user.photo,
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
