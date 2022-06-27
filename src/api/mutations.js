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
};
