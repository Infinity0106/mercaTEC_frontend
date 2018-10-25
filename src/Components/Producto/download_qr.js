import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Dimmer,
  Segment,
  Image,
  List,
  Button,
  Icon,
  Confirm
} from "semantic-ui-react";
import Ctrl from "./ctrl";
import QrCode from "qrcode.react";

class UpdateImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_opt: false
    };
  }
  componentWillMount() {}
  render() {
    return (
      <Dimmer.Dimmable
        as={Segment}
        blurring
        dimmed={this.state.show_opt}
        onMouseEnter={() => this.setState({ show_opt: true })}
        onMouseLeave={() => this.setState({ show_opt: false })}
      >
        <Dimmer active={this.state.show_opt}>
          <Button positive onClick={Ctrl.getProductQr.bind(this)}>
            <Icon name="save" />
            Delete
          </Button>
        </Dimmer>
        <p>
          <QrCode value={this.props.data} />
        </p>
      </Dimmer.Dimmable>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect((store, props) => {
  return {
    data: props.data
  };
})(UpdateImage);
