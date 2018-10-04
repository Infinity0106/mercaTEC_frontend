import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

import reducer from "./reducers";

const middleWare = applyMiddleware(logger, thunk, promiseMiddleware());

const Store = createStore(reducer, {}, middleWare);

export { Store };
