import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  buildModules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "nuxt-graphql-client"],
  build: {
    transpile: ["ts-invariant/process"],
  },
  loadingIndicator: {
    name: "rotating-plane",
    color: "blue",
    background: "red",
  },
  loading: {
    color: "DodgerBlue",
    height: "10px",
  },
  runtimeConfig: {
    public: {
      GQL_HOST: "https://hidden-scrubland-92584.herokuapp.com/graphql", // overwritten by process.env.GQL_HOST
    },
  },
  strapi: {
    url:
      process.env.STRAPI_URL || "https://hidden-scrubland-92584.herokuapp.com",
    prefix: "/api",
    version: "v4",
    cookie: {},
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
});
