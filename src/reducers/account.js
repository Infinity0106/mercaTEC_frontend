export default (
  state = {
    active: "basic"
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_ACCOUNT_ACTIVE_TAB":
      newState.active = action.value;
      break;
    default:
      break;
  }
  return newState;
};
