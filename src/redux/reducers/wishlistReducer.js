import { Wishlist } from "../constants";

const wishlistReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case Wishlist.ADD_ITEM: {
      const { payload } = action;
      return { ...state, items: [...state.items, payload] };
    }

    case Wishlist.REMOVE_ITEM: {
      const { payload } = action;
      const index = state.items.findIndex((item) => item === payload);
      state.items.splice(index, 1);
      return { ...state };
    }

    default:
      return state;
  }
};

export default wishlistReducer;
