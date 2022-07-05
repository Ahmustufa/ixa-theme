export const Wishlist = {
  ADD_ALL_ITEM: "ADD_ALL_ITEM_TO_WISHLIST",
  ADD_ITEM: "ADD_ITEM_TO_WISHLIST",
  REMOVE_ITEM: "REMOVE_ITEM_FROM_WISHLIST",
};

export const User = {
  LOG_IN: "USER_LOGGED_IN",
  SIGN_UP_WITHOUT_PASSWORD: "USER_SIGN_UP_WITHOUT_PASSWORD",
  LOG_OUT: "USER_LOGGED_OUT",
  UPDATE_INFO: "UPDATE_USER_PROFILE_DATA",
};

export const Order = {
  STORE_LOGO_ORDER_DATA: "STORE_DATA_FOR_LOGO_ORDER_IN_REDUCER",
  CLEAR_ORDER_REDUCER: "CLEAR_ORDER_REDUCER",
};

/**
 * All authorization is done in single modal named as signup modal
 */
export const ModalConstant = {
  OPEN_SIGN_UP_MODAL: "OPEN_SIGN_UP_MODAL",
  OPEN_SIGN_UP_MODAL_ORDER_CREATE: "OPEN_SIGN_UP_MODAL_ORDER_CREATE",
  OPEN_LOGIN_MODAL: "OPEN_SIGN_UP_MODAL_FOR_LOGIN",
  CLOSE_SIGN_UP_MODAL: "CLOSE_SIGN_UP_MODAL",
};

export const Cart = {
  OPEN: "OPEN_CART",
  CLOSE: "CLOSE_CART",
  ADD_ITEM: "ADD_ITEM_TO_CART",
  REMOVE_ITEM: "REMOVE_ITEM_FROM_CART",
  INCREASE_QUANTITY: "INCREASE_CART_ITEM_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_CART_ITEM_QUANTITY",
};

export const Product = {
  STORE: "STORE_ALL_PRODUCTS",
};
