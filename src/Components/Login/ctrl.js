import { userLogin } from "./../../backend";

export default {
  login: function() {
    let self = this;
    this.props.dispatch(dispatch => {
      if (this.props.data.email && this.props.data.password) {
        dispatch({
          type: "REQUEST_USER_LOGIN",
          payload: userLogin(this.props.data.email, this.props.data.password)
        }).then(res => {
          self.props.history.replace("/");
        });
      } else {
        dispatch({
          type: "REQUEST_USER_LOGIN_REJECTED",
          error_msg: "Empty Username/Email or password"
        });
      }
    });
  },
  hideError: function() {
    let self = this;
    setTimeout(() => {
      self.props.dispatch({
        type: "SET_LOGIN_ERROR",
        value: false
      });
    }, 3000);
  },
  setValue: function(e, { type }) {
    this.props.dispatch({
      type: "SET_VALUE",
      key: type,
      value: e.target.value
    });
  }
};
