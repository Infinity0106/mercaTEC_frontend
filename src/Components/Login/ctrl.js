import { userLogin, userSignUp } from "./../../backend";

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
  signup: function() {
    let self = this;
    this.props
      .dispatch({
        type: "REQUEST_SIGN_UP",
        payload: userSignUp(this.props.data)
      })
      .then(() => {
        self.props.history.replace("/");
      });
  },
  setValue: function(e, { data_key }) {
    this.props.dispatch({
      type: "SET_LOGIN_VALUE",
      key: data_key,
      value: e.target.value
    });
  },
  changeView: function() {
    this.props.dispatch({
      type: "SET_LOGIN_VALUE",
      key: "signed",
      value: !this.props.data.signed
    });
  },
  goForgot: function() {
    this.props.history.push("/forgot");
  }
};
