import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Header, Form, Input, Button } from "semantic-ui-react";
import Ctrl from "./ctrl";

class BasicInfo extends Component {
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
              <label>Nombre usuario</label>
              <input
                placeholder="Nombre completo"
                value={this.props.name}
                data_key="username"
                onChange={Ctrl.changeBasicInfo.bind(this)}
              />
            </Form.Field>
            <Form.Field>
              <label>Fecha nacimiento</label>
              <input
                placeholder="Nombre completo"
                type="date"
                data_key="nacimiento"
                onChange={Ctrl.changeBasicInfo.bind(this)}
              />
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field>
              <label>Telefono</label>
              <input
                placeholder="Nombre completo"
                type="date"
                data_key="telefono"
                onChange={Ctrl.changeBasicInfo.bind(this)}
              />
            </Form.Field>
            <Form.Field>
              <label>Foto</label>
              <Input
                placeholder="Foto perfil"
                type="file"
                multiple
                accept="image/*"
                data_key="perfil"
                onChange={Ctrl.changeBasicInfo.bind(this)}
              />
            </Form.Field>
          </Form.Group>

          <Button positive type="submit" onClick={Ctrl.saveInfo.bind(this)}>
            Guardar
          </Button>
        </Form>
      </Segment>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    name: "jaun"
  };
})(BasicInfo);
