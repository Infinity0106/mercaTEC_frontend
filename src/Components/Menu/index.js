import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { withRouter, Redirect, Link } from "react-router-dom";
import Ctrl from "./ctrl";

class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <div style={{ height: "100%" }}>
        {this.props.data.token === null && <Redirect to="/login" />}
        {this.props.data.token !== null && (
          <Menu attached={"top"} inverted>
            <Menu.Item
              name="editorials"
              onClick={Ctrl.toggleSideMenu.bind(this)}
            >
              <Image src="/white_lamb.svg" size="mini" centered />
            </Menu.Item>
            <Menu.Menu position="right">
              <Dropdown
                item
                simple
                trigger={
                  <span>
                    <Image
                      avatar
                      src={
                        "https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg"
                      }
                    />{" "}
                    {this.props.data.user.username}
                  </span>
                }
              >
                <Dropdown.Menu>
                  <Link to="/account">
                    <Dropdown.Item style={{ color: "rgba(0,0,0,.87)" }}>
                      Mi perfil
                    </Dropdown.Item>
                  </Link>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={Ctrl.logout.bind(this)}>
                    Log-out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Menu>
        )}
        {this.props.children}
      </div>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}
export default withRouter(
  connect(store => {
    return {
      // data: store.nameElementStore
      data: store.login
    };
  })(AppMenu)
);
