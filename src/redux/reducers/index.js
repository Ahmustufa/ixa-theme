import { combineReducers } from "redux";
import packageReducer from "./packageReducer";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";
import modalReducer from "./modalReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  packages: packageReducer,
  user: userReducer,
  order: orderReducer,
  modal: modalReducer,
  cart: cartReducer,
});

export default rootReducer;
