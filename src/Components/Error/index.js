import React, { Component } from "react";
import { TransitionablePortal, Segment, Header, Icon } from "semantic-ui-react";

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <TransitionablePortal
        {...this.props}
        transition={{ animation: "fade up", duration: 200 }}
      >
        <Segment
          style={{
            right: "5%",
            position: "fixed",
            bottom: "5%",
            zIndex: 1000
          }}
        >
          <Header>
            <Icon name="close" color="red" /> Error
          </Header>
          {this.props.children}
        </Segment>
      </TransitionablePortal>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default Error;
