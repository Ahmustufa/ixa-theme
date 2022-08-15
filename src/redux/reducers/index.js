import { combineReducers } from "redux";
import wishlistReducer from "./wishlistReducer";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";
import modalReducer from "./modalReducer";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import menuReducer from "./menuReducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
  cart: cartReducer,
  order: orderReducer,
  wishlist: wishlistReducer,
  modal: modalReducer,
  menu: menuReducer,
});

export default rootReducer;
