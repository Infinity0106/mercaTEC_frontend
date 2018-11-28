import React, { Component } from "react";
import { connect } from "react-redux";
import { Dimmer, Segment, Button, Icon } from "semantic-ui-react";
import Ctrl from "./ctrl";
import QRcode from "./../QRcode";

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
            Download
          </Button>
        </Dimmer>
        <p>
          <QRcode value={this.props.data} />
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
