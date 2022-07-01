import Cookies from "js-cookie";
import { userModule } from "./config";

export const Mutations = {
  createAccount: (body) => {
    return userModule.post("/auth/local/register", body);
  },
  login: (body) => {
    return userModule.post("/auth/local", body);
  },
  forgotPassword: (body) => {
    return userModule.post("/auth/forgot-password", body);
  },
  resetPassowrd: (body) => {
    return userModule.post("/auth/reset-password", body);
  },
  updateProfile: (body, params) => {
    const headers = { Authorization: `Bearer ${Cookies.get("token")}` };
    return userModule.put(`/users/${params.userId}`, body, { headers });
  },
  createAccount: (body) => {
    return userModule.post("/auth/local/register", body);
  },
  createOrder: (body) => {
    // const headers = {Authorization: `Bearer ${Cookiesget("token")}`}
    return userModule.post("/orders/createOrder", body);
  },
  addToCart: (body) => {
    return userModule.post("/carts", body);
  },
  deleteCartItem: (params) => {
    return userModule.delete(`/carts/${params._id}`);
  },
  updateCartItem: (body, id) => {
    return userModule.put(`/carts/${id}`, body);
  },
};
