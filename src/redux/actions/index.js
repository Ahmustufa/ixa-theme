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
