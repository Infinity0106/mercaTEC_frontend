import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Menu from "./Components/Menu";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import Sales from "./Components/Sales";
import Buyers from "./Components/Buyers";
import SideNav from "./Components/SideNav";
import Account from "./Components/Account";
import Forgot from "./Components/Forgot";

class App extends Component {
  componentWillMount() {}
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/forgot" component={Forgot} />
          <Route exact path="/login" component={Login} />
          <Menu>
            <SideNav>
              <Route exact path="/" component={Sales} />
              <Route exact path="/buyers" component={Buyers} />
              <Route exact path="/account" component={Account} />
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
