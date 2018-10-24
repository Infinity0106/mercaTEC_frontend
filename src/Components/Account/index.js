import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Menu, Header, Segment } from "semantic-ui-react";

import Ctrl from "./ctrl";

import BasicInfo from "./basic_info";

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
        <Segment raised>
          <Header as="h1">Account</Header>
          <Menu pointing secondary>
            <Menu.Item
              name="Informacion basica"
              active={true}
              data_value="basic"
              onClick={Ctrl.setActiveValue.bind(this)}
            />
            <Menu.Item
              name="Informacion trabajo"
              active={true}
              data_value="work"
              onClick={Ctrl.setActiveValue.bind(this)}
            />
            <Menu.Item
              name="Mis eventos"
              active={true}
              data_value="events"
              onClick={Ctrl.setActiveValue.bind(this)}
            />
            <Menu.Item
              name="Mis productos"
              active={true}
              data_value="products"
              onClick={Ctrl.setActiveValue.bind(this)}
            />
          </Menu>
        </Segment>
        {this.renderBodyContent()}
      </Container>
    );
  }
  renderBodyContent() {
    return <BasicInfo />;
    // switch (this.props.data.active) {
    //   case "basic":
    //   case "work":
    //     return <WorkInfo />;
    //   case "events":
    //     return <AddEvent />;
    //   case "products":
    //     return <AddProduct />;
    //   default:
    //     return null;
    // }
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    data: store.account
  };
})(Account);
