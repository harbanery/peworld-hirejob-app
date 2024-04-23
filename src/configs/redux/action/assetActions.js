import api from "../../axios/api";
import { updateRecruiterUser } from "./recruiterAction";

export const createAsset = (file, state, setState) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post(`/upload`, formData, {
      headers: { "content-type": "multipart/form-data" },
    });
    dispatch({
      type: "CREATE_SUCCESS",
      message: `Image uploaded`,
    });
    setState({
      ...state,
      image: response.data.data.file_url,
    });
  } catch (error) {
    dispatch({
      type: "MAIN_FAILURE",
      message: "Image failed to upload. Try again.",
    });
  }
};

export const createAssetUrl = (url, state, setState) => (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  try {
    dispatch({
      type: "CREATE_SUCCESS",
      message: `Image uploaded`,
    });
    setState({
      ...state,
      image: url,
    });
  } catch (error) {
    dispatch({
      type: "MAIN_FAILURE",
      message: "Image failed to upload. Try again.",
    });
  }
};

export const createAssetProfile = (file, user) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post(`/upload`, formData, {
      headers: { "content-type": "multipart/form-data" },
    });
    dispatch({
      type: "CREATE_SUCCESS",
      message: `Profile image changed. Submit to uploaded!`,
    });
    const changeUser = {
      ...user,
      photo: response.data.data.file_url,
    };
    dispatch(updateRecruiterUser(changeUser));
  } catch (error) {
    dispatch({
      type: "MAIN_FAILURE",
      message: error.response.data.message,
    });
  }
};
