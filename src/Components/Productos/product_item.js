import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { List, Image, Container, Grid } from "semantic-ui-react";
import QRcode from "qrcode.react";
import Slider from "react-slick";
import Ctrl from "./ctrl";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <List.Item onClick={Ctrl.productItemClicked.bind(this)}>
        <List.Content>
          <Grid columns={3} divided>
            <Grid.Column width={3}>
              <Slider fade={true} infinite={true} speed={500} autoplay>
                {this.renderImages()}
              </Slider>
            </Grid.Column>
            <Grid.Column width={10}>
              <List.Header as="a">{this.props.data.name}</List.Header>
              <List.Description>{this.props.data.description}</List.Description>
            </Grid.Column>
            <Grid.Column width={3}>
              <QRcode value={this.props.data.id} />
            </Grid.Column>
          </Grid>
        </List.Content>
      </List.Item>
    );
  }
  renderImages() {
    if (this.props.data.images.length > 0) {
      return this.props.data.images.map(ele => {
        return (
          <Container>
            <Image
              rounded
              src={ele.path}
              size="small"
              style={{
                width: "auto",
                maxHeight: 128,
                fontSize: "1rem",
                display: "block",
                margin: "auto"
              }}
            />
          </Container>
        );
      });
    } else {
      return (
        <Container>
          <Image
            rounded
            src={"https://semantic-ui.com/images/wireframe/image.png"}
            size="small"
            style={{
                width: "auto",
                maxHeight: 128,
                fontSize: "1rem",
                display: "block",
                margin: "auto"
              }}
          />
        </Container>
      );
    }
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default withRouter(
  connect(store => {
    return {};
  })(ProductItem)
);
