import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Segment,
  Header,
  Breadcrumb,
  Button,
  Icon,
  Form,
  Input,
  Label,
  TextArea,
  List,
  Confirm
} from "semantic-ui-react";
import QRcode from "qrcode.react";
import UpdateImage from "./update_image";
import Ctrl from "./ctrl";
import Error from "./../Error";
import Success from "./../Success";
import DownloadQr from "./download_qr";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_confirm: false
    };
  }
  componentWillMount() {
    Ctrl.getProductById.bind(this, this.props.match.params.id)();
  }
  render() {
    return (
      <Container fluid>
        <Confirm
          open={this.state.show_confirm}
          onCancel={() => this.setState({ show_confirm: false })}
          onConfirm={Ctrl.deleteProduct.bind(this)}
        />
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
            {this.props.data.name}
          </Header>
          <p>product identifier, download this and put it near your product</p>
          <DownloadQr data={this.props.data.id} />
          <br />
          <List horizontal style={{ overflowX: "auto", maxHeight: 200 }}>
            {this.props.data.images.map(ele => (
              <UpdateImage data={ele} />
            ))}
          </List>

          <Form>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Nombre del producto</label>
                <Input
                  placeholder="Nombre del producto"
                  data_key="name"
                  value={this.props.data.name}
                  onChange={Ctrl.changeEditProduct.bind(this)}
                />
              </Form.Field>
              <Form.Field>
                <label>Precio</label>
                <Input
                  labelPosition="right"
                  type="number"
                  data_key="price"
                  onChange={Ctrl.changeEditProduct.bind(this)}
                  placeholder="Amount"
                  value={this.props.data.price}
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
                  data_key="description"
                  value={this.props.data.description}
                  onChange={Ctrl.changeEditProduct.bind(this)}
                />
              </Form.Field>
              <Form.Field>
                <label>Images</label>
                <Input
                  placeholder="Images"
                  type="file"
                  multiple
                  accept="image/*"
                  data_key="add_images"
                  onChange={Ctrl.changeEditProduct.bind(this)}
                />
              </Form.Field>
            </Form.Group>

            <Button
              color="red"
              onClick={() => this.setState({ show_confirm: true })}
            >
              <Icon name="delete" />
              Delete
            </Button>
            <Button color="green" onClick={Ctrl.updateProduct.bind(this)}>
              <Icon name="save outline" />
              Save
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
    data: store.product
  };
})(Products);
