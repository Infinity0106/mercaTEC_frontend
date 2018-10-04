export default (
  state = {
    menu_open: true
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_TOGGLE_MENU_VALUE":
      newState.menu_open = !newState.menu_open;
      break;
    case "SET_MENU_VALUE":
      newState[action.key] = action.value;
      break;
    default:
      break;
  }
  return newState;
};
