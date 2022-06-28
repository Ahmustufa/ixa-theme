import { userModule } from "./config";

export const Queries = {
  getAllProducts: () => {
    return userModule.get("/products");
  },
  getProductById: (productId) => {
    return userModule.get(`/products/${productId}`);
  },
};
