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
      GQL_HOST: "http://localhost:1337/graphql", // overwritten by process.env.GQL_HOST
    },
  },
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  css: ["~/assets/styles/app.scss"],
});
