import { Cart } from "../constants";

const initialState = { visible: false, items: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Cart.OPEN:
      return { ...state, visible: true };

    case Cart.CLOSE:
      return { ...state, visible: false };

    default:
      return state;
  }
};

export default cartReducer;
