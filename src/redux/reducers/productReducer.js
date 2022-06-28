import { Product } from "../constants";

const initialState = { items: [] };

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case Product.STORE:
      const { payload } = action;
      return { ...state, items: payload };

    default:
      return state;
  }
};

export default productReducer;
