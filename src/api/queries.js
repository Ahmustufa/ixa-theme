import { userModule } from "./config";

export const Queries = {
  getAllProducts: () => {
    return userModule.get("/products");
  },
};
