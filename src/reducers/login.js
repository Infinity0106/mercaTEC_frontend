import JWT from "jsonwebtoken";

export default (
  state = {
    email: "",
    password: "",
    password_confirmation: "",
    token: null,
    error: false,
    error_msg: "",
    signed: true,
    username: ""
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "REQUEST_USER_LOGIN_PENDING":
      break;
    case "REQUEST_USER_LOGIN_FULFILLED":
      newState.token = action.payload.data.token;
      newState.user = JWT.decode(newState.token);
      sessionStorage.setItem("JWT", newState.token);
      break;
    case "REQUEST_USER_LOGIN_REJECTED":
      newState.error = true;
      newState.error_msg =
        action.error_msg || action.payload.response.data.errors.join("<br/>");
      break;
    case "REQUEST_USER_LOGOUT_PENDING":
      break;
    case "REQUEST_USER_LOGOUT_FULFILLED":
      sessionStorage.removeItem("JWT");
      break;
    case "REQUEST_USER_LOGOUT_REJECTED":
      sessionStorage.removeItem("JWT");
      newState.token = null;
      break;
    case "REQUEST_SIGN_UP_FULFILLED":
      newState.token = action.payload.data.token;
      newState.user = JWT.decode(newState.token);
      sessionStorage.setItem("JWT", newState.token);
      break;
    case "REQUEST_SIGN_UP_REJECTED":
      newState.error = true;
      newState.error_msg = action.payload.response.data.errors[0];
      break;
    case "SET_LOGIN_ERROR":
      newState.error = action.value;
      newState.error_msg = "";
      break;
    case "SET_LOGIN_VALUE":
      newState[action.key] = action.value;
      if (action.key === "token") {
        newState.user = JWT.decode(newState.token);
      }
      break;
    default:
      break;
  }
  return newState;
};
