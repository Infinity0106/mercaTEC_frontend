export default (
  state = {
    email: "berny.orozco@hotmail.com",
    password: "1234567890",
    token: null,
    error: false,
    error_msg: ""
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "REQUEST_USER_LOGIN_PENDING":
      break;
    case "REQUEST_USER_LOGIN_FULFILLED":
      newState.token = action.payload.data.token;
      break;
    case "REQUEST_USER_LOGIN_REJECTED":
      newState.error = true;
      newState.error_msg =
        action.error_msg || action.payload.response.data.errors.join("<br/>");
      break;
    case "SET_LOGIN_ERROR":
      newState.error = action.value;
      newState.error_msg = "";
      break;
    case "SET_VALUE":
      newState[action.key] = action.value;
      break;
    default:
      break;
  }
  return newState;
};
