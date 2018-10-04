import React, { Component } from "react";
import { connect } from "react-redux";

class Buyers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        <p>buyers</p>
      </div>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    // data: store.buyers
    data: null
  };
})(Buyers);
