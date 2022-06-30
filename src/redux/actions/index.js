import { Product, User, Wishlist } from "../constants";
import Cookies from "js-cookie";

export const loginUserAction = (data) => (dispatch) => {
  const userData = { ...data.user };
  Cookies.set("token", data.jwt, { expires: 60 });
  Cookies.set("_PD_DATA_CAP", JSON.stringify(userData), { expires: 60 });

  dispatch({ type: User.LOG_IN, payload: { data: userData } });
};

export const logoutAction = () => (dispatch) => {
  Cookies.remove("token");
  Cookies.remove("_PD_DATA_CAP");
  localStorage.clear();
  dispatch({ type: User.LOG_OUT });
};

export const updateUserData = (payload) => {
  Cookies.set("_PD_DATA_CAP", JSON.stringify(payload));
  return { type: User.UPDATE_INFO, payload };
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
