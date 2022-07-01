import axios from "axios";
import { Mutations } from "./mutations";
import { Queries } from "./queries";
import { errorHandler } from "../helper/errorHandler";
import { useFetch } from "../hooks/useFetch";

const userModule = axios.create({
  baseURL: "http://localhost:1337",
  // baseURL: `${process.env.REACT_APP_STRAPI_URL}`,
});

export { Mutations, Queries, errorHandler, userModule, useFetch };
