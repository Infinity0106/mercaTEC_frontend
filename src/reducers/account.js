export default (
  state = {
    active: "basic",
    error: false,
    error_mgs: "",
    success: false
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_ACCOUNT_ACTIVE_TAB":
      newState.active = action.value;
      break;
    case "REQUEST_GET_USER_INFO":
      break;
    case "SET_ACCOUNT_ERROR":
      newState.error = false;
      break;
    case "SET_ACCOUNT_SUCCESS":
      newState.success = false;
      break;
    default:
      break;
  }
  return newState;
};
