import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "shop"
declare module "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}