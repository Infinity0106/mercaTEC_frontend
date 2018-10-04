import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { withRouter, Redirect } from "react-router-dom";

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
        <Menu attached={"top"} inverted>
          <Menu.Item name="editorials">
            <Image src="/white_lamb.svg" size="mini" centered />
          </Menu.Item>
          {/* <Menu.Item name="reviews">Reviews</Menu.Item>

          <Menu.Item name="upcomingEvents">Upcoming Events</Menu.Item> */}
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
                  {"juancho perez"}
                </span>
              }
            >
              <Dropdown.Menu>
                <Dropdown.Item>Mi perfil</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Log-out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
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
