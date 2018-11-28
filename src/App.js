import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Menu from "./Components/Menu";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
// import Sales from "./Components/Sales";
// import Buyers from "./Components/Buyers";
import SideNav from "./Components/SideNav";
import Account from "./Components/Account";
import Forgot from "./Components/Forgot";
import ForgotPassword from "./Components/ForgotPassword";
import Products from "./Components/Productos";
import Product from "./Components/Producto";

class App extends Component {
  componentWillMount() {
    let current_jwt = sessionStorage.getItem("JWT");
    if (current_jwt !== null)
      this.props.dispatch({
        type: "SET_LOGIN_VALUE",
        key: "token",
        value: current_jwt
      });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/forgot" component={Forgot} />
          <Route exact path="/forgot/:id" component={ForgotPassword} />
          <Route exact path="/login" component={Login} />
          <Menu>
            <SideNav>
              <Route exact path="/" component={Products} />
              {/* <Route exact path="/buyers" component={Buyers} /> */}
              <Route exact path="/account" component={Account} />
              {/* <Route exact path="/products" component={Products} /> */}
              <Route exact path="/products/:id" component={Product} />
            </SideNav>
          </Menu>
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default connect(store => {
  return {
    data: null
  };
})(App);
