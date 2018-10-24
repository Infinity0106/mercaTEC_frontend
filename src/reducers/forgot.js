export default (
  state = {
    error: false,
    error_msg: "",
    user_handler: "",
    value: ""
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "REQUEST_FORGOT_PASSWORD_FULFILLED":
      newState.value = action.payload.data.value;
      break;
    case "REQUEST_FORGOT_PASSWORD_REJECTED":
      newState.error = true;
      newState.error_msg =
        action.payload.response.data.error[0] || "User not found";
      break;
    case "SET_FORGOT_ERROR":
      newState.error = action.value;
      break;
    case "SET_FORGOT_VALUE":
      newState[action.key] = action.value;
      break;
    default:
      break;
  }
  return newState;
};
