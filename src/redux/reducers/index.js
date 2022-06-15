import { combineReducers } from "redux";
import packageReducer from "./packageReducer";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  packages: packageReducer,
  user: userReducer,
  order: orderReducer,
  modal: modalReducer,
});

export default rootReducer;
