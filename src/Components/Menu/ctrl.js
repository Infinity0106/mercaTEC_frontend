export default {
  logout: function() {
    //TODO: logout function
    this.props.dispatch({
      type: "SET_LOGIN_VALUE",
      key: "token",
      value: ""
    });
    this.props.history.replace("/");
    window.location.reload();
  },
  toggleSideMenu: function() {
    this.props.dispatch({
      type: "SET_TOGGLE_MENU_VALUE"
    });
  }
};
