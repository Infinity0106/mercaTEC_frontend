export default (
  state = {
    email: "berny.orozco@hotmail.com",
    password: "1234567890",
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
    case "SET_LOGIN_ERROR":
      newState.error = action.value;
      newState.error_msg = "";
      break;
    case "SET_LOGIN_VALUE":
      newState[action.key] = action.value;
      break;
    default:
      break;
  }
  return newState;
};
