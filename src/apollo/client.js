import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import Cookie from "js-cookie";

const authLink = setContext((_, { headers }) => {
  const token = Cookie.get("token");
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
});

const httpLink = createHttpLink({
  uri: process.env.BASE_URL,
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export { client };
