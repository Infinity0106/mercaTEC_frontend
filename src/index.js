import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import { Store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
