import { Wishlist } from "../constants";

const wishlistReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case Wishlist.ADD_ITEM: {
      const { item } = action.payload;
      return { ...state, items: [...state.items, item] };
    }

    case Wishlist.REMOVE_ITEM: {
      const { item } = action.payload;
      return { ...state };
    }

    default:
      return state;
  }
};

export default wishlistReducer;
