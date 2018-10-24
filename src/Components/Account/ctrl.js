export default {
  setActiveValue: function(e, { data_value }) {
    this.props.dispatch({
      type: "SET_ACCOUNT_ACTIVE_TAB",
      value: data_value
    });
  },
  setValue: function(e, data) {},
  getInitialInfo: function() {}
};
