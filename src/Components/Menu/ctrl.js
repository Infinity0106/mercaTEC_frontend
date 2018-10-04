import * as Backend from "./../../backend";

export default {
  logout: function() {
    this.props
      .dispatch({
        type: "REQUEST_USER_LOGOUT",
        payload: Backend.userLogout(this.props.data.token)
      })
      .finally(() => {
        this.props.history.replace("/");
        window.location.reload();
      });
  },
  toggleSideMenu: function() {
    this.props.dispatch({
      type: "SET_TOGGLE_MENU_VALUE"
    });
  }
};
