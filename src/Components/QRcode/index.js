import React, { Component } from "react";
import { connect } from "react-redux";
import QRCode from "qrcode";
import { Image } from "semantic-ui-react";

class QRcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_data: ""
    };
  }
  componentWillMount() {
    QRCode.toDataURL(this.props.data).then(base_data =>
      this.setState({ base_data })
    );
  }
  componentWillReceiveProps(props) {
    QRCode.toDataURL(props.value).then(base_data =>
      this.setState({ base_data })
    );
  }
  render() {
    return <Image src={this.state.base_data} />;
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect((store, props) => {
  return {
    data: props.value
  };
})(QRcode);
