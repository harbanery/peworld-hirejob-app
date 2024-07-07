import api from "../../../services/api";

export const getHire = (role) => async (dispatch) => {
  try {
    let endpoint = "";
    if (role === "worker") {
      endpoint = "/hire/workers";
    } else if (role === "recruiter") {
      endpoint = "/hire/recruiters";
    } else {
      throw new Error("Invalid role specified");
    }
    const response = await api.get(endpoint);
    const data = response.data.data.filter(
      (hire) => hire.message_purpose && hire.email_request_hire
    );
    dispatch({ type: "NOTIFICATION_SUCCESS", notification: data });
  } catch (error) {
    dispatch({ type: "NOTIFICATION_FAILURE" });
  }
};

export const createHire = (hire, worker_id, navigate) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  dispatch({
    type: "ALERT_IDLE",
  });
  try {
    await api.post(`/hire`, {
      message_purpose: hire.message_purpose,
      worker_id: worker_id,
      name: hire.name,
      email: hire.email,
      phone: hire.phone,
      desciption: hire.description,
    });
    dispatch({
      type: "CREATE_SUCCESS",
    });
    dispatch({
      type: "ALERT_SUCCESS",
      payload:
        "Successfully sent! Now wait for the worker to accept your offer.",
    });
    navigate(`/main/home`);
  } catch (error) {
    dispatch({
      type: "MAIN_FAILURE",
    });
    dispatch({
      type: "ALERT_FAILED",
      payload: error.response.data.message,
    });
  }
};
