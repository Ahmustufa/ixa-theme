import { Action, User, Order } from "../constants";
import Cookie from "js-cookie";

export const storeAllPackage = (payload) => (dispatch) => {
  // console.log("Payload", payload);
  const webPackage = payload.allPackages.filter(
    (item) => item.orderType === "WEB PACKAGE"
  );
  const logoPackage = payload.allPackages.filter(
    (item) => item.orderType === "LOGO PACKAGE"
  );
  const ecommercePackage = payload.allPackages.filter(
    (item) => item.orderType === "E-COMMERCE PACKAGE"
  );
  dispatch({
    type: Action.SAVE_ALL_PACKAGE,
    payload: {
      webPackage,
      logoPackage,
      ecommercePackage,
    },
  });
};

export const logoutAction = () => (dispatch) => {
  Cookie.remove("token");
  Cookie.remove("_LL_DATA_CAP");
  localStorage.clear();
  dispatch({ type: User.LOG_OUT });
};

export const signUpWithoutPassword = (data) => (dispatch) => {
  // console.log("signUpWithoutPassword payload", data);
  const token = data?.jwtToken?.token;
  Cookie.set("token", token), { expires: 60 };
  delete data.jwtToken;
  Cookie.set("_LL_DATA_CAP", JSON.stringify(data), { expires: 60 });
  dispatch({ type: User.SIGN_UP_WITHOUT_PASSWORD, payload: data });
};

export const loginUserAction = (data) => (dispatch) => {
  // console.log("signUpWithoutPassword payload", data);
  const token = data.jwtToken?.token;
  Cookie.set("token", token, { expires: 60 });
  delete data.jwtToken;
  Cookie.set("_LL_DATA_CAP", JSON.stringify(data), { expires: 60 });
  dispatch({ type: User.SIGN_UP_WITHOUT_PASSWORD, payload: data });
};

export const storeLogoDesignOrderData = (payload) => (dispatch) => {
  // console.log("SECOND STEP DATA", payload);
  dispatch({ type: Order.STORE_LOGO_ORDER_DATA, payload });
};

export const clearOrderData = () => (dispatch) => {
  dispatch({ type: Order.CLEAR_ORDER_REDUCER });
};
