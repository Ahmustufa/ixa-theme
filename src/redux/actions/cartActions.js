import { Cart } from "../constants";

export const openCart = () => {
  return { type: Cart.OPEN };
};

export const closeCart = () => {
  return { type: Cart.CLOSE };
};
