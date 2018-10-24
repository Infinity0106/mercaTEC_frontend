import * as Backend from "./../../backend";

export default {
  resetPassword: function() {
    this.props
      .dispatch({
        type: "REQUEST_RESET_PASSWORD",
        payload: Backend.userChangePass(
          this.props.data,
          this.props.match.params.id
        )
      })
      .then(() => {
        this.props.history.go(-1);
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
