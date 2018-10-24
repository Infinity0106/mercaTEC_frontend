import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Header, Form, Dropdown, Button } from "semantic-ui-react";
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
              <label>Nombre completo</label>
              <input placeholder="Nombre completo" value={this.props.name} />
            </Form.Field>
            <Form.Field>
              <label>Fecha nacimiento</label>
              <input placeholder="Nombre completo" type="date" />
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field>
              <label>Madre</label>
              <Dropdown
                placeholder="Busca a tu madre"
                fluid
                search
                selection
                value={this.props.mother}
                options={[
                  { key: "1", value: "1", text: "1" },
                  { key: "2", value: "2", text: "2" },
                  { key: "3", value: "3", text: "3" }
                ]}
                data_key="mother"
                onChange={Ctrl.setValue.bind(this)}
              />
            </Form.Field>
            <Form.Field>
              <label>Padre</label>
              <Dropdown
                placeholder="Busca a tu padre"
                fluid
                search
                selection
                data_key="father"
                options={[
                  { key: "1", value: "1", text: "1" },
                  { key: "2", value: "2", text: "2" },
                  { key: "3", value: "3", text: "3" }
                ]}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Pasa tiempos</label>
            <Dropdown
              placeholder="Busca tu hobby favorito"
              fluid
              search
              selection
              multiple
              options={[
                { key: "1", value: "1", text: "1" },
                { key: "2", value: "2", text: "2" },
                { key: "3", value: "3", text: "3" }
              ]}
            />
          </Form.Field>
          <Button positive type="submit">
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
