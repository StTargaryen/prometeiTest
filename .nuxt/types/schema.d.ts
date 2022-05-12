import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["graphql-client"]?: typeof import("nuxt-graphql-client").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     API_URL: string,

    public: {
        API_URL: string,

        GQL_HOST: string,

        "graphql-client": {
             clients: {
                   default: {
                          host: string,

                          schema: any,

                          token: {
                                  type: string,
                          },
                   },
             },
        },
    },

    app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },

    "graphql-client": {
        clients: any,
    },
  }
}