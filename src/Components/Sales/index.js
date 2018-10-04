import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Header, Table, Menu, Icon } from "semantic-ui-react";

class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        {/* este segmento tendra poder asignar una meta y metricas ante los demas vendedores */}
        <Segment>
          <Header as="h3" dividing>
            Rendimiento
          </Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Menu pagination>
            <Menu.Item as="a" icon>
              <Icon name="chevron left" />
            </Menu.Item>
            <Menu.Item as="a">1</Menu.Item>
            <Menu.Item as="a">2</Menu.Item>
            <Menu.Item as="a">3</Menu.Item>
            <Menu.Item as="a">4</Menu.Item>
            <Menu.Item as="a" icon>
              <Icon name="chevron right" />
            </Menu.Item>
          </Menu>
        </Segment>
        {/* esta ventana tendra las ventas totales de cada producto y luego pdoras ver los pedido detallados */}
        <Segment>
          <Header as="h3" dividing>
            Ventas
          </Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Menu pagination>
            <Menu.Item as="a" icon>
              <Icon name="chevron left" />
            </Menu.Item>
            <Menu.Item as="a">1</Menu.Item>
            <Menu.Item as="a">2</Menu.Item>
            <Menu.Item as="a">3</Menu.Item>
            <Menu.Item as="a">4</Menu.Item>
            <Menu.Item as="a" icon>
              <Icon name="chevron right" />
            </Menu.Item>
          </Menu>
        </Segment>
      </div>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    data: store.ordenes
  };
})(Sales);
