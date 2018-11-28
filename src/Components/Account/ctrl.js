import * as Backend from "./../../backend";

export default {
  setActiveValue: function(e, { data_value }) {
    this.props.dispatch({
      type: "SET_ACCOUNT_ACTIVE_TAB",
      value: data_value
    });
  },
  changeBasicInfo: function(e, { data_key }) {
    this.props.dispatch({
      type: "SET_ACCOUNT_VALUE"
    });
  },
  getInitialInfo: function() {},
  saveInfo: function() {
    this.props.dispatch({
      type: "REQUEST_UPDATE_INFO",
      payload: Backend.updateAccount(this.props.data)
    });
  },
  hideError: function() {
    let self = this;
    setTimeout(() => {
      self.props.dispatch({
        type: "SET_ACCOUNT_ERROR",
        value: false
      });
    }, 3000);
  },
  hideSuccess: function() {
    let self = this;
    setTimeout(() => {
      self.props.dispatch({
        type: "SET_ACCOUNT_SUCCESS",
        value: false
      });
    }, 3000);
  }
};
