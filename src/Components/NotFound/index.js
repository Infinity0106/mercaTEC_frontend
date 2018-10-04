import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Grid, Image, Header } from "semantic-ui-react";

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <Container style={{ height: "100%" }}>
        <Grid verticalAlign="middle" style={{ height: "100%" }}>
          {/* Heads up! Grid.Row is not mandatory, Grid.Column is enough for grid to work */}
          <Grid.Row>
            <Grid.Column width={10}>
              <Header as="h1">
                404
                <Header.Subheader>page not found</Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column width={6}>
              <Image
                src="https://images.pexels.com/photos/220147/pexels-photo-220147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                avatar
                size="big"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    // data: store.nameElementStore
    data: null
  };
})(NotFound);
