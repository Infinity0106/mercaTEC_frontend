import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Image,
  Header,
  Segment,
  Input,
  Icon,
  Button
} from "semantic-ui-react";
import Ctrl from "./ctrl";
import Error from "./../Error";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Error open={this.props.data.error} onStart={Ctrl.hideError.bind(this)}>
          <p>{this.props.data.error_msg}</p>
        </Error>
        <Grid
          style={{ height: "100%" }}
          verticalAlign="middle"
          textAlign="center"
        >
          <Grid.Column style={{ maxWidth: 500 }}>
            <Image src="/lamb.svg" size="tiny" centered />
            <Header as="h2" style={{ marginTop: 0 }}>
              MercaTEC
              <Header.Subheader>
                Desarrollo de applicaciones web
              </Header.Subheader>
            </Header>
            <Segment raised>
              <div>
                <Input
                  style={{ marginBottom: 10 }}
                  autoFocus
                  fluid
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  data_key="password"
                  value={this.props.data.password}
                  onChange={Ctrl.setValue.bind(this)}
                >
                  <Icon name="at" />
                  <input />
                </Input>
                <Input
                  style={{ marginBottom: 10 }}
                  autoFocus
                  fluid
                  iconPosition="left"
                  placeholder="Password confirmation"
                  type="password"
                  data_key="password_confirmation"
                  value={this.props.data.password_confirmation}
                  onChange={Ctrl.setValue.bind(this)}
                >
                  <Icon name="at" />
                  <input />
                </Input>
                <Button positive fluid onClick={Ctrl.resetPassword.bind(this)}>
                  Submit
                </Button>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    data: store.forgot
  };
})(ForgotPassword);
