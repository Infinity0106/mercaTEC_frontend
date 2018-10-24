import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Segment,
  Input,
  Icon,
  Image,
  Header,
  Button,
  Divider
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import Error from "./../Error";
import Ctrl from "./ctrl";

class Login extends Component {
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
            <Segment raised>{this.renderForm()}</Segment>
            <Segment raised textAlign="center">
              <Button fluid onClick={Ctrl.goForgot.bind(this)}>
                Forgot your password?
              </Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
  renderForm() {
    if (this.props.data.signed) {
      return (
        <div>
          <Input
            style={{ marginBottom: 10 }}
            autoFocus
            fluid
            iconPosition="left"
            placeholder="Email"
            type="email"
            data_key="email"
            value={this.props.data.email}
            onChange={Ctrl.setValue.bind(this)}
          >
            <Icon name="at" />
            <input />
          </Input>
          <Input
            fluid
            iconPosition="left"
            placeholder="Password"
            type="password"
            data_key="password"
            style={{ marginBottom: 10 }}
            value={this.props.data.password}
            onChange={Ctrl.setValue.bind(this)}
          >
            <Icon name="lock" />
            <input />
          </Input>
          <Button positive fluid onClick={Ctrl.login.bind(this)}>
            Login
          </Button>
          <Divider horizontal>OR</Divider>
          <Button color="black" fluid onClick={Ctrl.changeView.bind(this)}>
            Signup
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <Input
            style={{ marginBottom: 10 }}
            fluid
            iconPosition="left"
            placeholder="Full name"
            type="text"
            data_key="username"
            autoFocus
            value={this.props.data.username}
            onChange={Ctrl.setValue.bind(this)}
          >
            <Icon name="user" />
            <input />
          </Input>
          <Input
            style={{ marginBottom: 10 }}
            fluid
            iconPosition="left"
            placeholder="Email"
            type="email"
            data_key="email"
            value={this.props.data.email}
            onChange={Ctrl.setValue.bind(this)}
          >
            <Icon name="at" />
            <input />
          </Input>
          <Input
            fluid
            iconPosition="left"
            placeholder="Password"
            type="password"
            data_key="password"
            style={{ marginBottom: 10 }}
            value={this.props.data.password}
            onChange={Ctrl.setValue.bind(this)}
          >
            <Icon name="lock" />
            <input />
          </Input>
          <Input
            fluid
            iconPosition="left"
            placeholder="Password confirmation"
            type="password"
            data_key="password_confirmation"
            style={{ marginBottom: 10 }}
            value={this.props.data.password_confirmation}
            onChange={Ctrl.setValue.bind(this)}
          >
            <Icon name="lock" />
            <input />
          </Input>
          <Button positive fluid onClick={Ctrl.signup.bind(this)}>
            Signup
          </Button>
          <Divider horizontal>OR</Divider>
          <Button color="black" fluid onClick={Ctrl.changeView.bind(this)}>
            Login
          </Button>
        </div>
      );
    }
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default withRouter(
  connect(store => {
    return {
      data: store.login
    };
  })(Login)
);
