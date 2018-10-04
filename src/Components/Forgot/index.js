import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";

class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <Container>
        <p>forgot</p>
      </Container>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    data: store.nameElementStore
  };
})(Forgot);
