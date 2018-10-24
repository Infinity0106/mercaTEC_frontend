import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  List,
  Segment,
  Header,
  Form,
  Button,
  Input,
  Label,
  TextArea,
  Dimmer,
  Loader,
  Pagination,
  Breadcrumb
} from "semantic-ui-react";
import Error from "./../Error";
import Success from "./../Success";
import Ctrl from "./ctrl";

import ProductItem from "./product_item";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    Ctrl.getInitialValues.bind(this)();
  }
  render() {
    return (
      <Container fluid>
        <Error open={this.props.data.error} onStart={Ctrl.hideError.bind(this)}>
          <p>{this.props.data.error_msg}</p>
        </Error>
        <Success
          open={this.props.data.success}
          onStart={Ctrl.hideSuccess.bind(this)}
        >
          <p>{this.props.data.success_msg}</p>
        </Success>
        <Segment>
          <Breadcrumb>
            <Breadcrumb.Section link onClick={Ctrl.goTo.bind(this, -2)}>
              Home
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right angle" />
            <Breadcrumb.Section link onClick={Ctrl.goTo.bind(this, -1)}>
              Productos
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right angle" />
            <Breadcrumb.Section active>Producto</Breadcrumb.Section>
          </Breadcrumb>
          <Header as="h3" dividing>
            Productos
          </Header>
          <Dimmer active={this.props.data.loading}>
            <Loader />
          </Dimmer>
          <List selection size="huge" divided verticalAlign="middle">
            {this.props.data.products.map(ele => {
              return <ProductItem data={ele} key={ele.id} />;
            })}
          </List>
          <Pagination
            activePage={this.props.data.pagination.current_page}
            totalPages={this.props.data.pagination.total_pages}
            pointing
            secondary
            firstItem={null}
            lastItem={null}
            onPageChange={Ctrl.changePage.bind(this)}
          />
        </Segment>
        <Segment>
          <Header as="h3" dividing>
            Agregar producto
          </Header>
          <Form>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Nombre del producto</label>
                <Input
                  placeholder="Nombre del producto"
                  data_key="form_product.name"
                  value={this.props.data.form_product.name}
                  onChange={Ctrl.changeAddProduct.bind(this)}
                />
              </Form.Field>
              <Form.Field>
                <label>Precio</label>
                <Input
                  labelPosition="right"
                  type="number"
                  data_key="form_product.price"
                  onChange={Ctrl.changeAddProduct.bind(this)}
                  placeholder="Amount"
                  value={this.props.data.form_product.price}
                >
                  <Label basic>$</Label>
                  <input />
                  <Label>.00</Label>
                </Input>
              </Form.Field>
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Field>
                <label>Descripcion</label>
                <TextArea
                  placeholder="Dinos mas del producto"
                  data_key="form_product.description"
                  value={this.props.data.form_product.description}
                  onChange={Ctrl.changeAddProduct.bind(this)}
                />
              </Form.Field>
              <Form.Field>
                <label>Images</label>
                <Input
                  placeholder="Images"
                  type="file"
                  multiple
                  accept="image/*"
                  data_key="form_product.images"
                  onChange={Ctrl.changeAddProduct.bind(this)}
                />
              </Form.Field>
            </Form.Group>

            <Button
              positive
              type="submit"
              onClick={Ctrl.publishProduct.bind(this)}
            >
              Publicar
            </Button>
          </Form>
        </Segment>
      </Container>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    data: store.products
  };
})(Products);
