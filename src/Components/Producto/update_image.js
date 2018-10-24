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

class UpdateImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_opt: false,
      show_confirm: false
    };
  }
  componentWillMount() {}
  render() {
    return (
      <List.Item>
        <Confirm
          open={this.state.show_confirm}
          onCancel={() => this.setState({ show_confirm: false })}
          onConfirm={Ctrl.deleteImage.bind(this)}
        />
        <Dimmer.Dimmable
          as={Segment}
          blurring
          dimmed={this.state.show_opt}
          onMouseEnter={() => this.setState({ show_opt: true })}
          onMouseLeave={() => this.setState({ show_opt: false })}
        >
          <Dimmer active={this.state.show_opt}>
            <Button
              color="red"
              onClick={() => this.setState({ show_confirm: true })}
            >
              <Icon name="delete" />
              Delete
            </Button>
          </Dimmer>
          <p>
            <Image src={this.props.data.path} size="medium" />
          </p>
        </Dimmer.Dimmable>
      </List.Item>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect((store, props) => {
  return {
    data: props.data,
    product: store.product
  };
})(UpdateImage);
