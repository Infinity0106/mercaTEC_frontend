import * as Backend from "./../../backend";

export default {
  forgot: function() {
    let self = this;
    this.props
      .dispatch({
        type: "REQUEST_FORGOT_PASSWORD",
        payload: Backend.userForgot(this.props.data.user_handler)
      })
      .then(() => {
        self.props.history.replace(`/forgot/${self.props.data.value}`);
      });
  },
  hideError: function() {
    let self = this;
    setTimeout(() => {
      self.props.dispatch({
        type: "SET_FORGOT_ERROR",
        value: false
      });
    }, 3000);
  },
  setValue: function(e, { data_key }) {
    this.props.dispatch({
      type: "SET_FORGOT_VALUE",
      key: data_key,
      value: e.target.value
    });
  }
};
