import { Product, User, Wishlist } from "../constants";
import Cookie from "js-cookie";

export const loginUserAction = (data) => (dispatch) => {
  const userData = {
    _id: data.user._id,
    firstName: data.user.firstName,
    lastName: data.user.lastName,
    email: data.user.email,
    username: data.user.username,
  };
  Cookie.set("token", data.jwt, { expires: 60 });
  Cookie.set("_PD_DATA_CAP", JSON.stringify(userData), { expires: 60 });

  dispatch({ type: User.LOG_IN, payload: { data: userData } });
};

export const logoutAction = () => (dispatch) => {
  Cookie.remove("token");
  Cookie.remove("_PD_DATA_CAP");
  localStorage.clear();
  dispatch({ type: User.LOG_OUT });
};

export const storeAllProducts = (payload) => (dispatch) => {
  dispatch({ type: Product.STORE, payload });
};

export const addItemToWishlist = (payload) => {
  return { type: Wishlist.ADD_ITEM, payload };
};

export const removeWishlistItem = (payload) => {
  return { type: Wishlist.REMOVE_ITEM, payload };
};
