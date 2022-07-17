import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  buildModules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  modules: ["nuxt-graphql-client"],
  plugins: ["maska"],
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
      GQL_HOST: process.env.GQL_HOST || "https://stt-strapi-test.herokuapp.com/graphql", // overwritten by process.env.GQL_HOST
    },
  },
  strapi: {
    url: process.env.STRAPI_URL || "https://stt-strapi-test.herokuapp.com",
    prefix: "/api",
    version: "v4",
    cookie: {},
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  css: ["~/assets/styles/app.scss"],
});
