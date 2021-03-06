import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Image,
  Header,
  Segment,
  Button,
  Input,
  Icon
} from "semantic-ui-react";
import Error from "./../Error";
import Ctrl from "./ctrl";

class Forgot extends Component {
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
                  placeholder="Email"
                  type="email"
                  data_key="user_handler"
                  value={this.props.data.email}
                  onChange={Ctrl.setValue.bind(this)}
                >
                  <Icon name="at" />
                  <input />
                </Input>
                <Button positive fluid onClick={Ctrl.forgot.bind(this)}>
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
})(Forgot);
