import { combineReducers } from "redux";

import login from "./login";
import menu from "./menu";
import products from "./products";
import product from "./product";
import account from "./account";
import forgot from "./forgot";

export default combineReducers({
  login,
  menu,
  products,
  product,
  account,
  forgot
});
