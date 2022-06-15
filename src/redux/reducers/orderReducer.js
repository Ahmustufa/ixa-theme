import { Order } from "../constants";

const initialState = {
  packageType: -1,
  orderType: -1,
  amount: null,
  packageName: "",
  orderName: "",
  orderId: "",
  colors: [],
  logoDesignTypes: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case Order.STORE_LOGO_ORDER_DATA: {
      const { payload } = action;
      // console.log("Date in reducer", payload);
      return { ...state, ...payload };
    }

    case "CLEAR_ORDER_REDUCER": {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export default orderReducer;
