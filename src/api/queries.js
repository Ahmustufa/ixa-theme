import { userModule } from "./config";

export const Queries = {
  getAllProducts: () => {
    return userModule.get("/products");
  },
  getProductById: (productId) => {
    return userModule.get(`/products/${productId}`);
  },
  getMyCart: (userId) => {
    return userModule.get(`/cart/userId/${userId}`);
  },
  getAllCategories: () => {
    return userModule.get("/categories");
  },
};
