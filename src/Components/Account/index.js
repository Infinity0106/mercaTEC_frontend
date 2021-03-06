import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Menu, Header, Segment } from "semantic-ui-react";

import Ctrl from "./ctrl";

import BasicInfo from "./basic_info";
import GoalsInfo from "./goals_info";
import Error from "./../Error";
import Success from "./../Success";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    Ctrl.getInitialInfo.bind(this)();
  }
  render() {
    return (
      <Container>
        <Error open={this.props.data.error} onStart={Ctrl.hideError.bind(this)}>
          <p>{this.props.data.error_msg}</p>
        </Error>
        <Success
          open={this.props.data.success}
          onStart={Ctrl.hideSuccess.bind(this)}
        >
          <p>Info updated</p>
        </Success>
        <Segment raised>
          <Header as="h1">Account</Header>
          <Menu pointing secondary>
            <Menu.Item
              name="Informacion basica"
              active={this.props.data.active === "basic"}
              data_value="basic"
              onClick={Ctrl.setActiveValue.bind(this)}
            />
            <Menu.Item
              name="Metas de trabajo"
              active={this.props.data.active === "goals"}
              data_value="goals"
              onClick={Ctrl.setActiveValue.bind(this)}
            />
          </Menu>
        </Segment>
        {this.renderBodyContent()}
      </Container>
    );
  }
  renderBodyContent() {
    switch (this.props.data.active) {
      case "basic":
        return <BasicInfo />;
      case "goals":
        return <GoalsInfo />;
      default:
        return null;
    }
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    data: store.account
  };
})(Account);
