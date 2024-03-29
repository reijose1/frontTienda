import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";
import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
  uri: "https://doker-apis-p12c4g2.herokuapp.com/", // Url dónde está desplegada el API GATEWAY Apolo (Heroku)
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: localStorage.getItem("token_access") || "",
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const apolloProvider = new createApolloProvider({
  defaultClient: apolloClient,
});

createApp(App).use(store).use(router).use(apolloProvider).mount("#app");
