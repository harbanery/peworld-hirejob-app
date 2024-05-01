const initialState = {
  isLogged: false,
  loading: false,
  response: {
    open: false,
    error: false,
    message: "",
  },
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_RESET":
      return initialState;

    case "RESPONSE_OPEN_RESET":
      return {
        ...state,
        response: {
          ...state.response,
          open: false,
        },
      };

    case "LOGGED_ON":
      return {
        ...state,
        isLogged: true,
      };

    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        response: {
          ...state.response,
          open: false,
        },
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLogged: true,
        loading: false,
        response: {
          ...state.response,
          error: false,
          message: "",
        },
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        response: {
          open: true,
          error: true,
          message: action.message,
        },
      };

    case "REGISTER_REQUEST":
      return {
        ...state,
        loading: true,
        response: {
          ...state.response,
          open: false,
        },
      };

    case "REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        response: {
          open: true,
          error: false,
          message: action.message,
        },
      };

    case "REGISTER_FAILURE":
      return {
        ...state,
        loading: false,
        response: {
          open: true,
          error: true,
          message: action.message,
        },
      };

    case "GET_PROFILE_REQUEST":
      return {
        ...state,
        loading: true,
        response: {
          ...state.response,
          open: false,
        },
      };

    case "GET_PROFILE_SUCCESS":
      return {
        ...state,
        loading: false,
        response: {
          ...state.response,
          error: false,
          message: "",
        },
      };

    case "GET_PROFILE_FAILURE":
      return {
        ...state,
        loading: false,
        response: {
          ...state.response,
          open: true,
          error: true,
          message: "Data not rendering",
        },
      };

    case "LOGOUT":
      return {
        ...state,
        isLogged: false,
      };

    default:
  }
  return state;
};

export default authReducer;
