import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Sidebar, Icon, Menu } from "semantic-ui-react";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="push"
          icon="labeled"
          inverted
          vertical
          visible={this.props.data.menu_open}
          width="thin"
        >
          <Link to="/">
            <Menu.Item active={this.props.location.pathname === "/"}>
              <Icon name="money bill alternate outline" />
              Ventas
            </Menu.Item>
          </Link>
          <Link to="/buyers">
            <Menu.Item active={this.props.location.pathname === "/buyers"}>
              <Icon name="address book outline" />
              Compradores
            </Menu.Item>
          </Link>
          <Link to="/products">
            <Menu.Item active={this.props.location.pathname === "/products"}>
              <Icon name="food" />
              Productos
            </Menu.Item>
          </Link>
        </Sidebar>
        <Sidebar.Pusher
          as="div"
          style={{
            padding: 10,
            backgroundColor: "rgba(0,0,0,.25)"
          }}
        >
          {this.props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default withRouter(
  connect(store => {
    return {
      data: store.menu
    };
  })(SideNav)
);
