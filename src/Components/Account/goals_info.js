import React, { Component } from "react";
import { Segment, Header, Form } from "semantic-ui-react";
import { connect } from "react-redux";

class GoalsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <Segment raised>
        <Header>Informacion basica</Header>
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Nombre completo</label>
              <input placeholder="Nombre completo" value={this.props.name} />
            </Form.Field>
            <Form.Field>
              <label>Fecha nacimiento</label>
              <input placeholder="Nombre completo" type="date" />
            </Form.Field>
          </Form.Group>
        </Form>
      </Segment>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}
export default connect(store => {
  return {
    data: store.account
  };
})(GoalsInfo);
