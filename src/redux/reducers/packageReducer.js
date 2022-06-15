import { Action } from "../constants";

const packageReducer = (state = { webPackage: [], logoPackage: [] }, action) => {
  switch (action.type) {
    case Action.SAVE_ALL_PACKAGE: {
      const { webPackage, logoPackage, ecommercePackage } = action.payload;
      return { ...state, webPackage, logoPackage, ecommercePackage };
    }
    default:
      return state;
  }
};

export default packageReducer;
