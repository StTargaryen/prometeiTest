
// --------------------
// Request: /Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/paths.mjs ($id_9efd46b4)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/css.mjs ($id_fcbe2579)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/plugins/server.mjs ($id_b1ef6d38)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/root-component.mjs ($id_ca37bfae)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/app-component.mjs ($id_24981336)
// --------------------
const $id_14eba4bc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - /Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/nuxt/dist/app/entry ($id_14eba4bc)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/components.plugin.mjs ($id_33a10ead)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/layouts.mjs ($id_26611196)
// - /layouts/shop.vue ($id_8067d08d)
// - /components/PrometeiHeader.vue ($id_7562f2a2)
// - /components/ExpandMenu/ExpandMenuContentItem.vue ($id_e8f7e8fb)
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs ($id_0aa4a4c2)
// - /components/ExpandMenu/ExpandMenu.vue ($id_be3b5d3c)
// - /components/UI/TabsWrapper.vue ($id_e6a8446c)
// - /components/UI/Tab.vue ($id_119df125)
// - /components/SearchBar.vue ($id_007b1c70)
// - /components/PrometeiFooter.vue ($id_04928ae8)
// - /pages/address/index.vue?macro=true ($id_d0ec39cf)
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /components/UI/AmountCounter.vue ($id_5db0a46a)
// - /pages/categories/[slug]/index.vue?macro=true ($id_b19ac374)
// - /components/ProductFilter.vue ($id_16ebd3b1)
// - /components/BrandsSelect.vue ($id_a68b9e82)
// - /components/PriceSelect.vue ($id_894078cd)
// - /pages/categories/index.vue?macro=true ($id_b04deb14)
// - /pages/delivery/index.vue?macro=true ($id_e1d04ef1)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/payments/index.vue?macro=true ($id_db8db898)
// - /pages/products/[params].vue?macro=true ($id_5fe5d068)
// - /components/UI/ImageViewer.vue ($id_9bcbfe6f)
// - /pages/address/index.vue ($id_bac860df)
// - /pages/cart/index.vue ($id_3fa45d07)
// - /pages/categories/[slug]/index.vue ($id_a38e0b82)
// - /pages/categories/index.vue ($id_8d9b42c9)
// - /pages/delivery/index.vue ($id_6d69d13a)
// - /pages/index.vue ($id_cca58e97)
// - /pages/payments/index.vue ($id_0bf09ea3)
// - /pages/products/[params].vue ($id_e6c5b58b)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/dist.plugin.029268ea.mjs ($id_f53014de)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/vue/dist/vue.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/vue/dist/vue.cjs.js\".")
  })


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/nuxt/dist/app/entry ($id_14eba4bc)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/ohmyfetch/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/ohmyfetch/dist/index.mjs\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/paths.mjs
// Parents: 
// - /Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/nuxt/dist/app/entry ($id_14eba4bc)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// --------------------
const $id_9efd46b4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":"","head":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});;
}


// --------------------
// Request: /node_modules/ufo/dist/index.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/paths.mjs ($id_9efd46b4)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_614de060 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/ufo/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/ufo/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - /Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/nuxt/dist/app/entry ($id_14eba4bc)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /layouts/shop.vue ($id_8067d08d)
// - /components/ExpandMenu/ExpandMenu.vue ($id_be3b5d3c)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs ($id_0aa4a4c2)
// - /components/UI/TabsWrapper.vue ($id_e6a8446c)
// - /components/SearchBar.vue ($id_007b1c70)
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /pages/categories/[slug]/index.vue?macro=true ($id_b19ac374)
// - /components/ProductFilter.vue ($id_16ebd3b1)
// - /pages/categories/index.vue?macro=true ($id_b04deb14)
// - /pages/products/[params].vue?macro=true ($id_5fe5d068)
// - /components/UI/ImageViewer.vue ($id_9bcbfe6f)
// - /pages/cart/index.vue ($id_3fa45d07)
// - /pages/categories/[slug]/index.vue ($id_a38e0b82)
// - /pages/categories/index.vue ($id_8d9b42c9)
// - /pages/products/[params].vue ($id_e6c5b58b)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// --------------------
const $id_36927477 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/unctx/dist/index.mjs ($id_a569ca2d)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// --------------------
const $id_e069d411 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/unctx/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/legacy-app.mjs");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_3__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/hookable/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/hookable/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/unctx/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a569ca2d = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/unctx/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/unctx/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// --------------------
const $id_a48341bc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = new Proxy(nuxtApp.vueApp, {
        get(source, p) {
          if (["$root", "constructor"].includes(p)) {
            return legacyApp;
          }
          return source[p] || nuxtApp[p];
        }
      });
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/unenv/runtime/mock/proxy.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/unenv/runtime/mock/proxy.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// --------------------
const $id_b067a79a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_53345950 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/vue-router/dist/vue-router.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/vue-router/dist/vue-router.cjs.js\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_d5b6a221 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_df511336 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_0063df1b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_7d872108 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_6fe050f1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useError = () => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  return __vite_ssr_import_0__.useState("error", () => true ? nuxtApp.ssrContext.error : nuxtApp.payload.error);
};
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const throwError = (_err) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  if (true) {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  } else {
    error.value = error.value || err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_41f5ae4e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, opts = {}) {
  if (true && opts.transform && !opts.key) {
    console.warn("[nuxt] You should provide a key for `useFetch` when using a custom transform function.");
  }
  const key = "$f_" + (opts.key || __vite_ssr_import_0__.hash([request, { ...opts, transform: null }]));
  const _request = __vite_ssr_import_1__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_1__.isRef(r) ? r.value : r;
  });
  const _fetchOptions = {
    ...opts,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    ...opts,
    watch: [
      _request,
      ...opts.watch || []
    ]
  };
  const asyncData = __vite_ssr_import_2__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, opts = {}) {
  return useFetch(request, {
    ...opts,
    lazy: true
  });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/ohash/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 

// --------------------
const $id_b1b82cf3 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/ohash/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/ohash/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_511b441d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_5__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_6__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (cookie.value !== cookies[name]) {
        writeServerCookie(__vite_ssr_import_4__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_4__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/cookie-es/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/cookie-es/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/h3/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/h3/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/destr/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/destr/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_c4866ba7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_db4d90a8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_2__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._activeRoute;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_2__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = __vite_ssr_import_1__.joinURL(__vite_ssr_import_2__.useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_0__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 301));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// --------------------
const $id_161bfe9f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /components/PrometeiHeader.vue ($id_7562f2a2)
// - /components/ExpandMenu/ExpandMenuContentItem.vue ($id_e8f7e8fb)
// - /components/SearchBar.vue ($id_007b1c70)
// - /components/PrometeiFooter.vue ($id_04928ae8)
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /pages/categories/[slug]/index.vue?macro=true ($id_b19ac374)
// - /pages/categories/index.vue?macro=true ($id_b04deb14)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/products/[params].vue?macro=true ($id_5fe5d068)
// - /pages/cart/index.vue ($id_3fa45d07)
// - /pages/categories/[slug]/index.vue ($id_a38e0b82)
// - /pages/categories/index.vue ($id_8d9b42c9)
// - /pages/index.vue ($id_cca58e97)
// - /pages/products/[params].vue ($id_e6c5b58b)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_ffac87b5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(__vite_ssr_import_0__.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs ($id_0aa4a4c2)
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /pages/categories/[slug]/index.vue?macro=true ($id_b19ac374)
// - /pages/categories/index.vue?macro=true ($id_b04deb14)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/products/[params].vue?macro=true ($id_5fe5d068)
// - /pages/cart/index.vue ($id_3fa45d07)
// - /pages/categories/[slug]/index.vue ($id_a38e0b82)
// - /pages/categories/index.vue ($id_8d9b42c9)
// - /pages/index.vue ($id_cca58e97)
// - /pages/products/[params].vue ($id_e6c5b58b)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b7351483 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_04ea9504 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/@vue/shared/dist/shared.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/@vue/shared/dist/shared.cjs.js\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/css.mjs
// Parents: 
// - /Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/nuxt/dist/app/entry ($id_14eba4bc)
// Dependencies: 
// - /node_modules/@nuxtjs/tailwindcss/dist/runtime/tailwind.css ($id_0a1402e6)
// - /assets/styles/app.scss ($id_d5ae0c9c)
// --------------------
const $id_fcbe2579 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxtjs/tailwindcss/dist/runtime/tailwind.css");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/assets/styles/app.scss");
;
}


// --------------------
// Request: /node_modules/@nuxtjs/tailwindcss/dist/runtime/tailwind.css
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/css.mjs ($id_fcbe2579)
// Dependencies: 

// --------------------
const $id_0a1402e6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/*! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.pointer-events-none{pointer-events:none}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.left-0{left:0}.right-0{right:0}.top-0{top:0}.top-\\[-5px\\]{top:-5px}.right-\\[-10px\\]{right:-10px}.top-\\[100\\%\\]{top:100%}.right-\\[-2px\\]{right:-2px}.left-\\[-2px\\]{left:-2px}.top-\\[80px\\]{top:80px}.bottom-0{bottom:0}.left-\\[20px\\]{left:20px}.bottom-\\[70px\\]{bottom:70px}.bottom-\\[calc\\(-100\\%\\+5px\\)\\]{bottom:calc(-100% + 5px)}.top-\\[-10px\\]{top:-10px}.z-20{z-index:20}.z-\\[99\\]{z-index:99}.z-50{z-index:50}.z-0{z-index:0}.mx-\\[30px\\]{margin-left:30px;margin-right:30px}.my-\\[5px\\]{margin-bottom:5px;margin-top:5px}.mx-auto{margin-left:auto;margin-right:auto}.mx-\\[20px\\]{margin-left:20px;margin-right:20px}.mx-\\[-10px\\]{margin-left:-10px;margin-right:-10px}.my-\\[20px\\]{margin-bottom:20px;margin-top:20px}.my-\\[40px\\]{margin-bottom:40px;margin-top:40px}.mb-\\[20px\\]{margin-bottom:20px}.mt-\\[20px\\]{margin-top:20px}.mr-\\[5px\\]{margin-right:5px}.mr-\\[120px\\]{margin-right:120px}.mr-\\[27px\\]{margin-right:27px}.mr-\\[16px\\]{margin-right:16px}.mr-\\[7px\\]{margin-right:7px}.mt-\\[-4px\\]{margin-top:-4px}.mt-\\[60px\\]{margin-top:60px}.mb-\\[35px\\]{margin-bottom:35px}.mb-\\[30px\\]{margin-bottom:30px}.mb-\\[10px\\]{margin-bottom:10px}.mr-\\[20px\\]{margin-right:20px}.mr-\\[10px\\]{margin-right:10px}.mr-\\[60px\\]{margin-right:60px}.mt-\\[102px\\]{margin-top:102px}.mb-\\[40px\\]{margin-bottom:40px}.mt-\\[2px\\]{margin-top:2px}.mt-\\[40px\\]{margin-top:40px}.mt-\\[135px\\]{margin-top:135px}.ml-\\[5px\\]{margin-left:5px}.mb-\\[25px\\]{margin-bottom:25px}.mr-\\[40px\\]{margin-right:40px}.ml-\\[40px\\]{margin-left:40px}.ml-\\[13px\\]{margin-left:13px}.mr-\\[13px\\]{margin-right:13px}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-\\[60px\\]{height:60px}.h-6{height:1.5rem}.h-\\[2px\\]{height:2px}.h-\\[50px\\]{height:50px}.h-4{height:1rem}.h-5{height:1.25rem}.h-\\[20px\\]{height:20px}.h-screen{height:100vh}.h-\\[54px\\]{height:54px}.h-full{height:100%}.h-\\[400px\\]{height:400px}.h-\\[86px\\]{height:86px}.h-\\[70px\\]{height:70px}.h-\\[22px\\]{height:22px}.h-\\[500px\\]{height:500px}.h-\\[120px\\]{height:120px}.h-\\[40px\\]{height:40px}.h-\\[24px\\]{height:24px}.h-\\[300px\\]{height:300px}.h-\\[200px\\]{height:200px}.h-\\[4px\\]{height:4px}.h-\\[80px\\]{height:80px}.h-\\[36px\\]{height:36px}.h-\\[30px\\]{height:30px}.h-\\[450px\\]{height:450px}.h-\\[256px\\]{height:256px}.min-h-screen{min-height:100vh}.w-full{width:100%}.w-6{width:1.5rem}.w-\\[20px\\]{width:20px}.w-4{width:1rem}.w-5{width:1.25rem}.w-\\[500px\\]{width:500px}.w-\\[360px\\]{width:360px}.w-\\[54px\\]{width:54px}.w-\\[60px\\]{width:60px}.w-\\[400px\\]{width:400px}.w-\\[86px\\]{width:86px}.w-\\[70px\\]{width:70px}.w-\\[2px\\]{width:2px}.w-1\\/3{width:33.333333%}.w-\\[120px\\]{width:120px}.w-\\[40px\\]{width:40px}.w-\\[300px\\]{width:300px}.w-\\[24px\\]{width:24px}.w-1\\/5{width:20%}.w-\\[200px\\]{width:200px}.w-\\[4px\\]{width:4px}.w-\\[36px\\]{width:36px}.w-\\[30px\\]{width:30px}.w-\\[calc\\(33\\.33\\%-16\\.7px\\)\\]{width:calc(33.33% - 16.7px)}.w-\\[256px\\]{width:256px}.min-w-\\[350px\\]{min-width:350px}.min-w-\\[300px\\]{min-width:300px}.max-w-\\[100px\\]{max-width:100px}.max-w-screen-xl{max-width:1280px}.max-w-\\[22px\\]{max-width:22px}.max-w-\\[180px\\]{max-width:180px}.flex-1{flex:1 1 0%}.flex-grow,.grow{flex-grow:1}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}.animate-pulse{-webkit-animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite;animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.cursor-pointer{cursor:pointer}.cursor-default{cursor:default}.cursor-not-allowed{cursor:not-allowed}.select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.list-none{list-style-type:none}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-\\[10px\\]{gap:10px}.gap-\\[60px\\]{gap:60px}.gap-\\[5px\\]{gap:5px}.gap-\\[25px\\]{gap:25px}.gap-\\[40px\\]{gap:40px}.gap-\\[20px\\]{gap:20px}.gap-\\[15px\\]{gap:15px}.gap-\\[190px\\]{gap:190px}.gap-\\[70px\\]{gap:70px}.overflow-hidden{overflow:hidden}.rounded-\\[4px\\]{border-radius:4px}.rounded-full{border-radius:9999px}.rounded{border-radius:.25rem}.rounded-\\[10px\\]{border-radius:10px}.rounded-b-\\[4px\\]{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.rounded-r-\\[4px\\]{border-bottom-right-radius:4px;border-top-right-radius:4px}.rounded-tl-\\[4px\\]{border-top-left-radius:4px}.rounded-bl-\\[4px\\]{border-bottom-left-radius:4px}.border-\\[1px\\]{border-width:1px}.border-2,.border-\\[2px\\]{border-width:2px}.border-y-\\[2px\\]{border-bottom-width:2px;border-top-width:2px}.border-x-\\[2px\\]{border-left-width:2px;border-right-width:2px}.border-b-\\[2px\\]{border-bottom-width:2px}.border-l-\\[2px\\]{border-left-width:2px}.border-grey-text{--tw-border-opacity:1;border-color:rgb(196 196 196/var(--tw-border-opacity))}.border-primary{--tw-border-opacity:1;border-color:rgb(79 178 248/var(--tw-border-opacity))}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity))}.border-grey{--tw-border-opacity:1;border-color:rgb(239 239 239/var(--tw-border-opacity))}.border-grey-light{--tw-border-opacity:1;border-color:rgb(241 241 241/var(--tw-border-opacity))}.border-b-grey-text{--tw-border-opacity:1;border-bottom-color:rgb(196 196 196/var(--tw-border-opacity))}.border-opacity-90{--tw-border-opacity:0.9}.bg-grey-light{--tw-bg-opacity:1;background-color:rgb(241 241 241/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-primary{--tw-bg-opacity:1;background-color:rgb(79 178 248/var(--tw-bg-opacity))}.bg-orange{--tw-bg-opacity:1;background-color:rgb(255 66 6/var(--tw-bg-opacity))}.bg-secondary{--tw-bg-opacity:1;background-color:rgb(51 51 51/var(--tw-bg-opacity))}.bg-grey-text{--tw-bg-opacity:1;background-color:rgb(196 196 196/var(--tw-bg-opacity))}.bg-grey{--tw-bg-opacity:1;background-color:rgb(239 239 239/var(--tw-bg-opacity))}.bg-opacity-70{--tw-bg-opacity:0.7}.bg-cover{background-size:cover}.bg-contain{background-size:contain}.bg-center{background-position:50%}.bg-no-repeat{background-repeat:no-repeat}.p-\\[12px\\]{padding:12px}.p-0{padding:0}.p-\\[10px\\]{padding:10px}.p-\\[5px\\]{padding:5px}.p-\\[50px\\]{padding:50px}.p-\\[4px\\]{padding:4px}.p-\\[2px\\]{padding:2px}.p-\\[30px\\]{padding:30px}.px-\\[28px\\]{padding-left:28px;padding-right:28px}.py-\\[10px\\]{padding-bottom:10px;padding-top:10px}.px-\\[18px\\]{padding-left:18px;padding-right:18px}.px-\\[5px\\]{padding-left:5px;padding-right:5px}.px-\\[24px\\]{padding-left:24px;padding-right:24px}.px-\\[10px\\]{padding-left:10px;padding-right:10px}.py-\\[5px\\]{padding-bottom:5px;padding-top:5px}.px-\\[27px\\]{padding-left:27px;padding-right:27px}.px-\\[13px\\]{padding-left:13px;padding-right:13px}.py-\\[12px\\]{padding-bottom:12px;padding-top:12px}.py-\\[4px\\]{padding-bottom:4px;padding-top:4px}.pt-\\[40px\\]{padding-top:40px}.pb-\\[50px\\]{padding-bottom:50px}.pt-\\[10px\\]{padding-top:10px}.pb-\\[20px\\]{padding-bottom:20px}.pt-\\[32px\\]{padding-top:32px}.text-left{text-align:left}.text-center{text-align:center}.text-\\[21px\\]{font-size:21px}.text-\\[16px\\]{font-size:16px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[36px\\]{font-size:36px}.text-\\[100px\\]{font-size:100px}.text-\\[26px\\]{font-size:26px}.text-\\[18px\\]{font-size:18px}.font-medium{font-weight:500}.font-bold{font-weight:700}.font-thin{font-weight:100}.font-extrabold{font-weight:800}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.italic{font-style:italic}.leading-\\[84px\\]{line-height:84px}.leading-\\[25px\\]{line-height:25px}.text-primary{--tw-text-opacity:1;color:rgb(79 178 248/var(--tw-text-opacity))}.text-secondary{--tw-text-opacity:1;color:rgb(51 51 51/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.text-grey-text{--tw-text-opacity:1;color:rgb(196 196 196/var(--tw-text-opacity))}.text-grey-light{--tw-text-opacity:1;color:rgb(241 241 241/var(--tw-text-opacity))}.text-orange{--tw-text-opacity:1;color:rgb(255 66 6/var(--tw-text-opacity))}.opacity-100{opacity:1}.opacity-0{opacity:0}.opacity-50{opacity:.5}.shadow-inner{--tw-shadow:inset 0px 0px 4px rgba(0,0,0,.15);--tw-shadow-colored:inset 0px 0px 4px var(--tw-shadow-color)}.shadow-divider,.shadow-inner{box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-divider{--tw-shadow:inset 0px 0px 0.5px rgba(0,0,0,.25);--tw-shadow-colored:inset 0px 0px 0.5px var(--tw-shadow-color)}.shadow-product-color{--tw-shadow:inset 0px 0px 6px rgba(0,0,0,.25);--tw-shadow-colored:inset 0px 0px 6px var(--tw-shadow-color)}.shadow-card,.shadow-product-color{box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-card{--tw-shadow:0px 0px 2px rgba(0,0,0,.25);--tw-shadow-colored:0px 0px 2px var(--tw-shadow-color)}.outline-none{outline:2px solid transparent;outline-offset:2px}.drop-shadow-slider{--tw-drop-shadow:drop-shadow(4px 4px 5px rgba(0,0,0,.25))}.drop-shadow-slider,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,-webkit-text-decoration-color;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,-webkit-text-decoration-color;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.duration-200{transition-duration:.2s}.placeholder\\:text-grey-text::-moz-placeholder{--tw-text-opacity:1;color:rgb(196 196 196/var(--tw-text-opacity))}.placeholder\\:text-grey-text:-ms-input-placeholder{--tw-text-opacity:1;color:rgb(196 196 196/var(--tw-text-opacity))}.placeholder\\:text-grey-text::placeholder{--tw-text-opacity:1;color:rgb(196 196 196/var(--tw-text-opacity))}.last\\:mr-0:last-child{margin-right:0}.last\\:mb-0:last-child{margin-bottom:0}.hover\\:z-10:hover{z-index:10}.hover\\:bg-grey-light:hover{--tw-bg-opacity:1;background-color:rgb(241 241 241/var(--tw-bg-opacity))}.hover\\:bg-orange:hover{--tw-bg-opacity:1;background-color:rgb(255 66 6/var(--tw-bg-opacity))}.hover\\:bg-primary:hover{--tw-bg-opacity:1;background-color:rgb(79 178 248/var(--tw-bg-opacity))}.hover\\:bg-white:hover{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.hover\\:bg-grey-text:hover{--tw-bg-opacity:1;background-color:rgb(196 196 196/var(--tw-bg-opacity))}.hover\\:bg-opacity-0:hover{--tw-bg-opacity:0}.hover\\:bg-opacity-20:hover{--tw-bg-opacity:0.2}.hover\\:text-orange:hover{--tw-text-opacity:1;color:rgb(255 66 6/var(--tw-text-opacity))}.hover\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:text-primary:hover{--tw-text-opacity:1;color:rgb(79 178 248/var(--tw-text-opacity))}.hover\\:shadow-card-hover:hover{--tw-shadow:0px 0px 40px rgba(0,0,0,.25);--tw-shadow-colored:0px 0px 40px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.hover\\:drop-shadow-card:hover{--tw-drop-shadow:drop-shadow(0px 0px 40px rgba(0,0,0,.25));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.focus\\:border-\\[2px\\]:focus{border-width:2px}.focus\\:border-primary:focus{--tw-border-opacity:1;border-color:rgb(79 178 248/var(--tw-border-opacity))}.active\\:scale-95:active{--tw-scale-x:.95;--tw-scale-y:.95;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.active\\:border-orange:active{--tw-border-opacity:1;border-color:rgb(255 66 6/var(--tw-border-opacity))}.active\\:border-primary:active{--tw-border-opacity:1;border-color:rgb(79 178 248/var(--tw-border-opacity))}.active\\:border-opacity-70:active{--tw-border-opacity:0.7}.active\\:border-opacity-0:active{--tw-border-opacity:0}.active\\:bg-primary:active{--tw-bg-opacity:1;background-color:rgb(79 178 248/var(--tw-bg-opacity))}.active\\:bg-opacity-20:active{--tw-bg-opacity:0.2}.active\\:bg-opacity-40:active{--tw-bg-opacity:0.4}.active\\:bg-opacity-100:active{--tw-bg-opacity:1}.active\\:text-orange:active{--tw-text-opacity:1;color:rgb(255 66 6/var(--tw-text-opacity))}";
}


// --------------------
// Request: /assets/styles/app.scss
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/css.mjs ($id_fcbe2579)
// Dependencies: 

// --------------------
const $id_d5ae0c9c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "@import url(\"https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,400;0,500;0,600;0,700;1,800&display=swap\");";
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/plugins/server.mjs
// Parents: 
// - /Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/nuxt/dist/app/entry ($id_14eba4bc)
// Dependencies: 
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/components.plugin.mjs ($id_33a10ead)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/dist.plugin.029268ea.mjs ($id_f53014de)
// --------------------
const $id_b1ef6d38 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/dist.plugin.029268ea.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default
];
}


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/plugins/server.mjs ($id_b1ef6d38)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_9871bba0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/plugins/server.mjs ($id_b1ef6d38)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_33a10ead = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/plugins/server.mjs ($id_b1ef6d38)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/defu/dist/defu.mjs ($id_d7afab65)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_e6f12003 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/defu/dist/defu.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  const titleTemplate = __vite_ssr_import_1__.ref();
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    if ("titleTemplate" in meta.value) {
      titleTemplate.value = meta.value.titleTemplate;
    }
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta.value.title) : titleTemplate.value.replace(/%s/g, meta.value.title);
      }
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/defu/dist/defu.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt-graphql-client/dist/runtime/composables/index.mjs ($id_0ab5e784)
// Dependencies: 

// --------------------
const $id_d7afab65 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/defu/dist/defu.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/defu/dist/defu.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/plugins/server.mjs ($id_b1ef6d38)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/meta.config.mjs ($id_7edea047)
// --------------------
const $id_a2650341 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw(__vite_ssr_import_4__.default.globalMeta));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b2a29d6f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 

// --------------------
const $id_7edea047 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/plugins/server.mjs ($id_b1ef6d38)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs ($id_eb849233)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/router.options.mjs ($id_0bcf2fb2)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/middleware.mjs ($id_f04638e2)
// --------------------
const $id_a090977b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/router.options.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_3__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_3__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_4__.default);
  const baseURL = __vite_ssr_import_5__.useRuntimeConfig().app.baseURL;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const router = __vite_ssr_import_1__.createRouter({
    ...__vite_ssr_import_7__.default,
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = __vite_ssr_import_0__.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = __vite_ssr_import_0__.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._activeRoute = __vite_ssr_import_0__.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = __vite_ssr_import_5__.useError();
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_0__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = new Set([...__vite_ssr_import_8__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_8__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (true && !middleware) {
        console.warn(`Unknown middleware: ${entry}. Valid options are ${Object.keys(__vite_ssr_import_8__.namedMiddleware).join(", ")}.`);
      }
      const result = await __vite_ssr_import_5__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || __vite_ssr_import_2__.createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (false && !nuxtApp.isHydrating && error.value) {
      await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.clearError);
    }
    if (to.matched.length === 0) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [__vite_ssr_import_2__.createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else if (true) {
      const currentURL = to.fullPath || "/";
      if (!__vite_ssr_import_3__.isEqual(currentURL, initialURL)) {
        await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// --------------------
const $id_5fc14cdc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  props: {
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, {}, {
        default: (routeProps) => routeProps.Component && __vite_ssr_import_4__._wrapIf(__vite_ssr_import_0__.Transition, routeProps.route.meta.pageTransition ?? defaultPageTransition, __vite_ssr_import_2__.wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
          onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
          onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
        }, { default: () => __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) }))).default()
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_80f433aa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_69c52686 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /pages/address/index.vue?macro=true ($id_d0ec39cf)
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /pages/categories/[slug]/index.vue?macro=true ($id_b19ac374)
// - /pages/categories/index.vue?macro=true ($id_b04deb14)
// - /pages/delivery/index.vue?macro=true ($id_e1d04ef1)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/payments/index.vue?macro=true ($id_db8db898)
// - /pages/products/[params].vue?macro=true ($id_5fe5d068)
// - /pages/address/index.vue ($id_bac860df)
// - /pages/cart/index.vue ($id_3fa45d07)
// - /pages/categories/[slug]/index.vue ($id_a38e0b82)
// - /pages/categories/index.vue ($id_8d9b42c9)
// - /pages/delivery/index.vue ($id_6d69d13a)
// - /pages/index.vue ($id_cca58e97)
// - /pages/payments/index.vue ($id_0bf09ea3)
// - /pages/products/[params].vue ($id_e6c5b58b)
// --------------------
const $id_eb849233 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/address/index.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/cart/index.vue?macro=true");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/categories/[slug]/index.vue?macro=true");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/categories/index.vue?macro=true");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/delivery/index.vue?macro=true");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/pages/payments/index.vue?macro=true");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/pages/products/[params].vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "address",
    path: "/address",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/address/index.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/address/index.vue')
  },
  {
    name: "cart",
    path: "/cart",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/cart/index.vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    alias: __vite_ssr_import_1__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/cart/index.vue')
  },
  {
    name: "categories-slug",
    path: "/categories/:slug",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/categories/[slug]/index.vue",
    children: [],
    meta: __vite_ssr_import_2__.meta,
    alias: __vite_ssr_import_2__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/categories/[slug]/index.vue')
  },
  {
    name: "categories",
    path: "/categories",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/categories/index.vue",
    children: [],
    meta: __vite_ssr_import_3__.meta,
    alias: __vite_ssr_import_3__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/categories/index.vue')
  },
  {
    name: "delivery",
    path: "/delivery",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/delivery/index.vue",
    children: [],
    meta: __vite_ssr_import_4__.meta,
    alias: __vite_ssr_import_4__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/delivery/index.vue')
  },
  {
    name: "index",
    path: "/",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_5__.meta,
    alias: __vite_ssr_import_5__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/index.vue')
  },
  {
    name: "payments",
    path: "/payments",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/payments/index.vue",
    children: [],
    meta: __vite_ssr_import_6__.meta,
    alias: __vite_ssr_import_6__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/payments/index.vue')
  },
  {
    name: "products-params",
    path: "/products/:params",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/products/[params].vue",
    children: [],
    meta: __vite_ssr_import_7__.meta,
    alias: __vite_ssr_import_7__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/products/[params].vue')
  }
];
}


// --------------------
// Request: /pages/address/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs ($id_eb849233)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d0ec39cf = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_1__.mergeProps({ name: "shop" }, _attrs), {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex-grow"${
          _scopeId
        }><main class="mt-[135px] mb-[40px] flex-grow"${
          _scopeId
        }>address</main></div>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("div", { class: "flex-grow" }, [
            __vite_ssr_import_1__.createVNode("main", { class: "mt-[135px] mb-[40px] flex-grow" }, "address")
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/address/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/address/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/layout.mjs
// Parents: 
// - /pages/address/index.vue?macro=true ($id_d0ec39cf)
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /pages/categories/[slug]/index.vue?macro=true ($id_b19ac374)
// - /pages/categories/index.vue?macro=true ($id_b04deb14)
// - /pages/delivery/index.vue?macro=true ($id_e1d04ef1)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/payments/index.vue?macro=true ($id_db8db898)
// - /pages/products/[params].vue?macro=true ($id_5fe5d068)
// - /pages/address/index.vue ($id_bac860df)
// - /pages/cart/index.vue ($id_3fa45d07)
// - /pages/categories/[slug]/index.vue ($id_a38e0b82)
// - /pages/categories/index.vue ($id_8d9b42c9)
// - /pages/delivery/index.vue ($id_6d69d13a)
// - /pages/index.vue ($id_cca58e97)
// - /pages/payments/index.vue ($id_0bf09ea3)
// - /pages/products/[params].vue ($id_e6c5b58b)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/layouts.mjs ($id_26611196)
// --------------------
const $id_39003883 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_2__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_1__._wrapIf(__vite_ssr_import_0__.Transition, hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition), __vite_ssr_import_1__._wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /layouts/shop.vue ($id_8067d08d)
// --------------------
const $id_26611196 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {
  shop: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/layouts/shop.vue'))
};
}


// --------------------
// Request: /layouts/shop.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/layouts.mjs ($id_26611196)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/PrometeiHeader.vue ($id_7562f2a2)
// - /components/PrometeiFooter.vue ($id_04928ae8)
// - /store/menu/menu.js ($id_53cdf039)
// - /store/cart/cart.js ($id_08ef3e2f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /layouts/shop.vue?vue&type=style&index=0&lang.css ($id_cad6a901)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_8067d08d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/PrometeiHeader.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/PrometeiFooter.vue");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/store/menu/menu.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/store/cart/cart.js");



const _sfc_main = {
  name: 'shop',
  setup(__props, { expose }) {
  expose();

const cookieCartData = __vite_ssr_import_0__.useCookie("cart");
const delivery = __vite_ssr_import_0__.useCookie("delivery");

const cart = __vite_ssr_import_5__.useCart();

cart.$onAction(({ after, store, name }) => {
  after(() => {
    if (name !== "initCart" || name !== "updateDelivery") {
      cookieCartData.value = store.items;
    }
    if (name === "updateDelivery") {
      delivery.value = store.$state.selectedDelivery;
    }
  });
});

if (cookieCartData.value && cookieCartData.value.length && !cart.items.length) {
  cart.initCart(cookieCartData.value);
}

if (delivery.value) {
  cart.$state.selectedDelivery = delivery.value;
}

const route = __vite_ssr_import_0__.useRoute();
const menuStore = __vite_ssr_import_4__.useMenuToggler();

const closeMenu = () => {
  menuStore.toggleMenu(false);
};

__vite_ssr_import_1__.watch(route, () => {
  closeMenu();
});

const __returned__ = { cookieCartData, delivery, cart, route, menuStore, closeMenu, PrometeiHeader: __vite_ssr_import_2__.default, PrometeiFooter: __vite_ssr_import_3__.default, useMenuToggler: __vite_ssr_import_4__.useMenuToggler, useCart: __vite_ssr_import_5__.useCart }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_7__.ssrRenderAttrs(__vite_ssr_import_6__.mergeProps({ class: "flex flex-col h-screen" }, _attrs))}>`)
  _push(__vite_ssr_import_7__.ssrRenderComponent($setup["PrometeiHeader"], null, null, _parent))
  __vite_ssr_import_7__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(__vite_ssr_import_7__.ssrRenderComponent($setup["PrometeiFooter"], null, null, _parent))
  _push(`</div>`)
}

const __vite_ssr_import_8__ = await __vite_ssr_import__("/layouts/shop.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/shop.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_10__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/layouts/shop.vue"]]);
}


// --------------------
// Request: /components/PrometeiHeader.vue
// Parents: 
// - /layouts/shop.vue ($id_8067d08d)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/ExpandMenu/ExpandMenu.vue ($id_be3b5d3c)
// - /components/SearchBar.vue ($id_007b1c70)
// - /store/menu/menu.js ($id_53cdf039)
// - /store/cart/cart.js ($id_08ef3e2f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /assets/images/header-logo.svg ($id_1ab94e98)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7562f2a2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/ExpandMenu/ExpandMenu.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/SearchBar.vue");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/store/menu/menu.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/store/cart/cart.js");



const _sfc_main = {
  name: 'PrometeiHeader',
  setup(__props, { expose }) {
  expose();

const cartItemsCounter = __vite_ssr_import_1__.ref(0);

const cart = __vite_ssr_import_5__.useCart();

const cartItems = __vite_ssr_import_1__.computed(() => {
  return cart.items;
});

cart.$onAction(({ after, store }) => {
  after(() => {
    cartItemsCounter.value = store.items.length;
  });
});

if (cartItems.value && cartItems.value.length) {
  cartItemsCounter.value = cartItems.value.length;
}

const menuStore = __vite_ssr_import_4__.useMenuToggler();
const toggleMenu = () => {
  menuStore.toggleMenu(!menuStore.$state.isExpandMenuOpen);
};

const __returned__ = { cartItemsCounter, cart, cartItems, menuStore, toggleMenu, ExpandMenu: __vite_ssr_import_2__.default, SearchBar: __vite_ssr_import_3__.default, useMenuToggler: __vite_ssr_import_4__.useMenuToggler, useCart: __vite_ssr_import_5__.useCart }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/assets/images/header-logo.svg");



function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<header${__vite_ssr_import_7__.ssrRenderAttrs(__vite_ssr_import_6__.mergeProps({ class: "bg-white w-full pt-[10px] pb-[20px] fixed z-20 left-0 right-0 top-0 border-b-[2px] border-grey font-medium" }, _attrs))}><div class="max-w-screen-xl w-full mx-auto flex justify-between items-center">`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "logo"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          __vite_ssr_import_7__.ssrRenderAttr("src", __vite_ssr_import_8__.default)
        } alt=""${
          _scopeId
        }>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("img", {
            src: __vite_ssr_import_8__.default,
            alt: ""
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div class="navigation flex items-center"><button class="h-[50px] px-[24px] mr-[16px] rounded-[4px] flex justify-center items-center text-white bg-primary"><span class="mr-[7px]">?????????????? ??????????????</span><span><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></span></button>`)
  _push(__vite_ssr_import_7__.ssrRenderComponent($setup["SearchBar"], null, null, _parent))
  _push(`</div>`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_NuxtLink, {
    to: "/cart",
    class: ["cart h-[50px] px-[18px] bg-white flex flex-col justify-center items-center rounded-[4px] outline-none transition-colors", {
          'bg-primary text-white cursor-default':
            _ctx.$router.currentRoute.value.name === 'cart',
          'text-secondary hover:bg-grey-light':
            _ctx.$router.currentRoute.value.name !== 'cart',
        }],
    disabled: _ctx.$router.currentRoute.value.name === 'cart'
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="relative"${
          _scopeId
        }><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
          _scopeId
        }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"${
          _scopeId
        }></path></svg>`)
        if ($setup.cartItemsCounter > 0) {
          _push(`<span class="${
            __vite_ssr_import_7__.ssrRenderClass([{
              'bg-primary text-white':
                _ctx.$router.currentRoute.value.name !== 'cart',
              'bg-white text-secondary':
                _ctx.$router.currentRoute.value.name === 'cart',
            }, "absolute top-[-5px] right-[-10px] font-bold w-[20px] h-[20px] text-[13px] flex items-center justify-center rounded-full"])
          }"${
            _scopeId
          }>${
            __vite_ssr_import_7__.ssrInterpolate($setup.cartItemsCounter)
          }</span>`)
        } else {
          _push(`<!---->`)
        }
        _push(`</div><span class="mt-[-4px]"${_scopeId}>??????????????</span>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("div", { class: "relative" }, [
            (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("svg", {
              class: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              __vite_ssr_import_6__.createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              })
            ])),
            ($setup.cartItemsCounter > 0)
              ? (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("span", {
                  key: 0,
                  class: ["absolute top-[-5px] right-[-10px] font-bold w-[20px] h-[20px] text-[13px] flex items-center justify-center rounded-full", {
              'bg-primary text-white':
                _ctx.$router.currentRoute.value.name !== 'cart',
              'bg-white text-secondary':
                _ctx.$router.currentRoute.value.name === 'cart',
            }]
                }, __vite_ssr_import_6__.toDisplayString($setup.cartItemsCounter), 3 /* TEXT, CLASS */))
              : __vite_ssr_import_6__.createCommentVNode("v-if", true)
          ]),
          __vite_ssr_import_6__.createVNode("span", { class: "mt-[-4px]" }, "??????????????")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_7__.ssrRenderComponent($setup["ExpandMenu"], {
    show: $setup.menuStore.$state.isExpandMenuOpen
  }, null, _parent))
  _push(`</div></header>`)
}


const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/PrometeiHeader.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_10__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/components/PrometeiHeader.vue"]]);
}


// --------------------
// Request: /components/ExpandMenu/ExpandMenu.vue
// Parents: 
// - /components/PrometeiHeader.vue ($id_7562f2a2)
// Dependencies: 
// - /components/ExpandMenu/ExpandMenuContentItem.vue ($id_e8f7e8fb)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs ($id_63a2fd8b)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/UI/TabsWrapper.vue ($id_e6a8446c)
// - /components/UI/Tab.vue ($id_119df125)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/ExpandMenu/ExpandMenu.vue?vue&type=style&index=0&scoped=true&lang.postcss ($id_f1f7ce30)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_be3b5d3c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/ExpandMenu/ExpandMenuContentItem.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/UI/TabsWrapper.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/UI/Tab.vue");



const _sfc_main = {
  name: 'ExpandMenu',
  props: {
  show: {
    type: Boolean,
    default: false,
  },
},
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const props = __props

const { data, error } = (
  ([__temp,__restore] = __vite_ssr_import_4__.withAsyncContext(() => __vite_ssr_import_1__.useAsyncData(`catalog-menu`, () =>
  __vite_ssr_import_2__.GqlCatalogMenu()
))),
  __temp = await __temp,
  __restore(),
  __temp
);

console.log(data.value);

const menu = data;



const isExpandMenuOpen = __vite_ssr_import_3__.computed(() => {
  return props.show;
});

const __returned__ = { data, error, menu, props, isExpandMenuOpen, TabsWrapper: __vite_ssr_import_5__.default, Tab: __vite_ssr_import_6__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ExpandMenuContentItem = __vite_ssr_import_0__.default

  if ($setup.isExpandMenuOpen) {
    _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(__vite_ssr_import_7__.mergeProps({
      class: ["expand-menu", { hidden: !$setup.isExpandMenuOpen }]
    }, _attrs))} data-v-3efd3624><div class="max-w-screen-xl w-full mx-auto flex items-center" data-v-3efd3624>`)
    if ($setup.menu && $setup.menu.categories) {
      _push(__vite_ssr_import_8__.ssrRenderComponent($setup["TabsWrapper"], { column: "" }, {
        default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
          if (_push) {
            _push(`<!--[-->`)
            __vite_ssr_import_8__.ssrRenderList($setup.menu.categories.data, (category) => {
              _push(__vite_ssr_import_8__.ssrRenderComponent($setup["Tab"], {
                settings: category,
                hello: true
              }, {
                default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                  if (_push) {
                    _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ExpandMenuContentItem, {
                      title: category.attributes.title,
                      content: category.attributes
                    }, null, _parent, _scopeId))
                  } else {
                    return [
                      __vite_ssr_import_7__.createVNode(_component_ExpandMenuContentItem, {
                        title: category.attributes.title,
                        content: category.attributes
                      }, null, 8 /* PROPS */, ["title", "content"])
                    ]
                  }
                }),
                _: 2 /* DYNAMIC */
              }, _parent, _scopeId))
            })
            _push(`<!--]-->`)
          } else {
            return [
              (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, null, __vite_ssr_import_7__.renderList($setup.menu.categories.data, (category) => {
                return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock($setup["Tab"], {
                  settings: category,
                  hello: true
                }, {
                  default: __vite_ssr_import_7__.withCtx(() => [
                    __vite_ssr_import_7__.createVNode(_component_ExpandMenuContentItem, {
                      title: category.attributes.title,
                      content: category.attributes
                    }, null, 8 /* PROPS */, ["title", "content"])
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["settings"]))
              }), 256 /* UNKEYED_FRAGMENT */))
            ]
          }
        }),
        _: 1 /* STABLE */
      }, _parent))
    } else {
      _push(`<!---->`)
    }
    _push(`</div></div>`)
  } else {
    _push(`<!---->`)
  }
}

const __vite_ssr_import_9__ = await __vite_ssr_import__("/components/ExpandMenu/ExpandMenu.vue?vue&type=style&index=0&scoped=true&lang.postcss");


const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/ExpandMenu/ExpandMenu.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_11__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-3efd3624"],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/components/ExpandMenu/ExpandMenu.vue"]]);
}


// --------------------
// Request: /components/ExpandMenu/ExpandMenuContentItem.vue
// Parents: 
// - /components/ExpandMenu/ExpandMenu.vue ($id_be3b5d3c)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e8f7e8fb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  props: {
    title: {
      type: String,
      default: "?????????? ????????",
    },
    content: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const categories = __vite_ssr_import_1__.computed(() => {
      return props.content.items.data;
    });

    return { categories };
  },
};

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "mt-[60px] text-secondary" }, _attrs))
  }><div class="text-[36px] text-primary font-bold mb-[35px] capitalize">${
    __vite_ssr_import_3__.ssrInterpolate($props.title)
  }</div><div class="subcategory"><ul class="flex gap-[60px]"><!--[-->`)
  __vite_ssr_import_3__.ssrRenderList($setup.categories, (category) => {
    _push(`<li>`)
    if (category.attributes) {
      _push(`<!--[--><div class="text-[21px] hover:text-orange mb-[30px]">`)
      _push(__vite_ssr_import_3__.ssrRenderComponent(_component_nuxt_link, {
        to: {
                  path: `/categories/${category.attributes.slug}`,
                },
        class: "capitalize"
      }, {
        default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
          if (_push) {
            _push(`${__vite_ssr_import_3__.ssrInterpolate(category.attributes.title)}`)
          } else {
            return [
              __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString(category.attributes.title), 1 /* TEXT */)
            ]
          }
        }),
        _: 2 /* DYNAMIC */
      }, _parent))
      _push(`</div><ul><!--[-->`)
      __vite_ssr_import_3__.ssrRenderList(category.attributes.items.data, (subcategory) => {
        _push(`<li class="hover:text-orange mb-[20px]">`)
        _push(__vite_ssr_import_3__.ssrRenderComponent(_component_nuxt_link, {
          to: `/categories/${subcategory.attributes.slug}`,
          class: "capitalize"
        }, {
          default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`${__vite_ssr_import_3__.ssrInterpolate(subcategory.attributes.title)}`)
            } else {
              return [
                __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString(subcategory.attributes.title), 1 /* TEXT */)
              ]
            }
          }),
          _: 2 /* DYNAMIC */
        }, _parent))
        _push(`</li>`)
      })
      _push(`<!--]--></ul><!--]-->`)
    } else {
      _push(`<!---->`)
    }
    _push(`</li>`)
  })
  _push(`<!--]--></ul></div></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/ExpandMenu/ExpandMenuContentItem.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/components/ExpandMenu/ExpandMenuContentItem.vue"]]);
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /components/ExpandMenu/ExpandMenuContentItem.vue ($id_e8f7e8fb)
// - /components/UI/TabsWrapper.vue ($id_e6a8446c)
// - /components/UI/Tab.vue ($id_119df125)
// - /components/ExpandMenu/ExpandMenu.vue ($id_be3b5d3c)
// - /components/SearchBar.vue ($id_007b1c70)
// - /components/PrometeiHeader.vue ($id_7562f2a2)
// - /components/PrometeiFooter.vue ($id_04928ae8)
// - /layouts/shop.vue ($id_8067d08d)
// - /pages/address/index.vue?macro=true ($id_d0ec39cf)
// - /components/UI/AmountCounter.vue ($id_5db0a46a)
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /components/BrandsSelect.vue ($id_a68b9e82)
// - /components/PriceSelect.vue ($id_894078cd)
// - /components/ProductFilter.vue ($id_16ebd3b1)
// - /pages/categories/[slug]/index.vue?macro=true ($id_b19ac374)
// - /pages/categories/index.vue?macro=true ($id_b04deb14)
// - /pages/delivery/index.vue?macro=true ($id_e1d04ef1)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/payments/index.vue?macro=true ($id_db8db898)
// - /components/UI/ImageViewer.vue ($id_9bcbfe6f)
// - /pages/products/[params].vue?macro=true ($id_5fe5d068)
// - /pages/address/index.vue ($id_bac860df)
// - /pages/cart/index.vue ($id_3fa45d07)
// - /pages/categories/[slug]/index.vue ($id_a38e0b82)
// - /pages/categories/index.vue ($id_8d9b42c9)
// - /pages/delivery/index.vue ($id_6d69d13a)
// - /pages/index.vue ($id_cca58e97)
// - /pages/payments/index.vue ($id_0bf09ea3)
// - /pages/products/[params].vue ($id_e6c5b58b)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/vue/server-renderer/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/vue/server-renderer/index.js\".")
  })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /components/ExpandMenu/ExpandMenuContentItem.vue ($id_e8f7e8fb)
// - /components/UI/TabsWrapper.vue ($id_e6a8446c)
// - /components/UI/Tab.vue ($id_119df125)
// - /components/ExpandMenu/ExpandMenu.vue ($id_be3b5d3c)
// - /components/SearchBar.vue ($id_007b1c70)
// - /components/PrometeiHeader.vue ($id_7562f2a2)
// - /components/PrometeiFooter.vue ($id_04928ae8)
// - /layouts/shop.vue ($id_8067d08d)
// - /pages/address/index.vue?macro=true ($id_d0ec39cf)
// - /components/UI/AmountCounter.vue ($id_5db0a46a)
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /components/BrandsSelect.vue ($id_a68b9e82)
// - /components/PriceSelect.vue ($id_894078cd)
// - /components/ProductFilter.vue ($id_16ebd3b1)
// - /pages/categories/[slug]/index.vue?macro=true ($id_b19ac374)
// - /pages/categories/index.vue?macro=true ($id_b04deb14)
// - /pages/delivery/index.vue?macro=true ($id_e1d04ef1)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/payments/index.vue?macro=true ($id_db8db898)
// - /components/UI/ImageViewer.vue ($id_9bcbfe6f)
// - /pages/products/[params].vue?macro=true ($id_5fe5d068)
// - /pages/address/index.vue ($id_bac860df)
// - /pages/cart/index.vue ($id_3fa45d07)
// - /pages/categories/[slug]/index.vue ($id_a38e0b82)
// - /pages/categories/index.vue ($id_8d9b42c9)
// - /pages/delivery/index.vue ($id_6d69d13a)
// - /pages/index.vue ($id_cca58e97)
// - /pages/payments/index.vue ($id_0bf09ea3)
// - /pages/products/[params].vue ($id_e6c5b58b)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs
// Parents: 
// - /components/ExpandMenu/ExpandMenu.vue ($id_be3b5d3c)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs ($id_0aa4a4c2)
// - /components/SearchBar.vue ($id_007b1c70)
// - /pages/categories/[slug]/index.vue?macro=true ($id_b19ac374)
// - /pages/categories/index.vue?macro=true ($id_b04deb14)
// - /pages/products/[params].vue?macro=true ($id_5fe5d068)
// - /pages/categories/[slug]/index.vue ($id_a38e0b82)
// - /pages/categories/index.vue ($id_8d9b42c9)
// - /pages/products/[params].vue ($id_e6c5b58b)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs ($id_0aa4a4c2)
// --------------------
const $id_63a2fd8b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs");

const GqlCatalogMenu = (...params) => __vite_ssr_import_0__.useGql()['CatalogMenu'](...params)
Object.defineProperty(__vite_ssr_exports__, "GqlCatalogMenu", { enumerable: true, configurable: true, get(){ return GqlCatalogMenu }});
const GqlMainSearch = (...params) => __vite_ssr_import_0__.useGql()['MainSearch'](...params)
Object.defineProperty(__vite_ssr_exports__, "GqlMainSearch", { enumerable: true, configurable: true, get(){ return GqlMainSearch }});
const GqlProductByArticle = (...params) => __vite_ssr_import_0__.useGql()['ProductByArticle'](...params)
Object.defineProperty(__vite_ssr_exports__, "GqlProductByArticle", { enumerable: true, configurable: true, get(){ return GqlProductByArticle }});
const GqlProductCardDataBySlug = (...params) => __vite_ssr_import_0__.useGql()['ProductCardDataBySlug'](...params)
Object.defineProperty(__vite_ssr_exports__, "GqlProductCardDataBySlug", { enumerable: true, configurable: true, get(){ return GqlProductCardDataBySlug }});
const GqlProductsBySubcategorySlug = (...params) => __vite_ssr_import_0__.useGql()['ProductsBySubcategorySlug'](...params)
Object.defineProperty(__vite_ssr_exports__, "GqlProductsBySubcategorySlug", { enumerable: true, configurable: true, get(){ return GqlProductsBySubcategorySlug }});
const GqlSearchEntitiesByTitle = (...params) => __vite_ssr_import_0__.useGql()['SearchEntitiesByTitle'](...params)
Object.defineProperty(__vite_ssr_exports__, "GqlSearchEntitiesByTitle", { enumerable: true, configurable: true, get(){ return GqlSearchEntitiesByTitle }});
const GqlGetCategoryBySlug = (...params) => __vite_ssr_import_0__.useGql()['getCategoryBySlug'](...params)
Object.defineProperty(__vite_ssr_exports__, "GqlGetCategoryBySlug", { enumerable: true, configurable: true, get(){ return GqlGetCategoryBySlug }});
const GqlGetRootCategories = (...params) => __vite_ssr_import_0__.useGql()['getRootCategories'](...params)
Object.defineProperty(__vite_ssr_exports__, "GqlGetRootCategories", { enumerable: true, configurable: true, get(){ return GqlGetRootCategories }});;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs ($id_63a2fd8b)
// - /node_modules/nuxt-graphql-client/dist/runtime/composables/index.mjs ($id_0ab5e784)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt-graphql-client/dist/runtime/composables/index.mjs ($id_0ab5e784)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs ($id_63a2fd8b)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// --------------------
const $id_0aa4a4c2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt-graphql-client/dist/runtime/composables/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useMeta }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.isVue2 }});
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.isVue3 }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.refreshNuxtData }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtComponent }});
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useNuxtApp }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtPlugin }});
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRuntimeConfig }});
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useState }});
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useLazyFetch }});
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useCookie }});
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useError }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtLink }});
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

Object.defineProperty(__vite_ssr_exports__, "withCtx", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.withCtx }});
Object.defineProperty(__vite_ssr_exports__, "withDirectives", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.withDirectives }});
Object.defineProperty(__vite_ssr_exports__, "withKeys", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.withKeys }});
Object.defineProperty(__vite_ssr_exports__, "withMemo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.withMemo }});
Object.defineProperty(__vite_ssr_exports__, "withModifiers", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.withModifiers }});
Object.defineProperty(__vite_ssr_exports__, "withScopeId", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.withScopeId }});
Object.defineProperty(__vite_ssr_exports__, "onActivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.onActivated }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeMount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.onBeforeMount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUnmount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.onBeforeUnmount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUpdate", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.onBeforeUpdate }});
Object.defineProperty(__vite_ssr_exports__, "onDeactivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.onDeactivated }});
Object.defineProperty(__vite_ssr_exports__, "onErrorCaptured", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.onErrorCaptured }});
Object.defineProperty(__vite_ssr_exports__, "onMounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.onMounted }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTracked", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.onRenderTracked }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTriggered", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.onRenderTriggered }});
Object.defineProperty(__vite_ssr_exports__, "onServerPrefetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.onServerPrefetch }});
Object.defineProperty(__vite_ssr_exports__, "onUnmounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.onUnmounted }});
Object.defineProperty(__vite_ssr_exports__, "onUpdated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.onUpdated }});
Object.defineProperty(__vite_ssr_exports__, "computed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.computed }});
Object.defineProperty(__vite_ssr_exports__, "customRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.customRef }});
Object.defineProperty(__vite_ssr_exports__, "isProxy", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.isProxy }});
Object.defineProperty(__vite_ssr_exports__, "isReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.isReactive }});
Object.defineProperty(__vite_ssr_exports__, "isReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.isReadonly }});
Object.defineProperty(__vite_ssr_exports__, "isRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.isRef }});
Object.defineProperty(__vite_ssr_exports__, "markRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.markRaw }});
Object.defineProperty(__vite_ssr_exports__, "proxyRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.proxyRefs }});
Object.defineProperty(__vite_ssr_exports__, "reactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.reactive }});
Object.defineProperty(__vite_ssr_exports__, "readonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.readonly }});
Object.defineProperty(__vite_ssr_exports__, "ref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.ref }});
Object.defineProperty(__vite_ssr_exports__, "shallowReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.shallowReactive }});
Object.defineProperty(__vite_ssr_exports__, "shallowReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.shallowReadonly }});
Object.defineProperty(__vite_ssr_exports__, "shallowRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.shallowRef }});
Object.defineProperty(__vite_ssr_exports__, "toRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.toRaw }});
Object.defineProperty(__vite_ssr_exports__, "toRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.toRef }});
Object.defineProperty(__vite_ssr_exports__, "toRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.toRefs }});
Object.defineProperty(__vite_ssr_exports__, "triggerRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.triggerRef }});
Object.defineProperty(__vite_ssr_exports__, "unref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.unref }});
Object.defineProperty(__vite_ssr_exports__, "watch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.watch }});
Object.defineProperty(__vite_ssr_exports__, "watchEffect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.watchEffect }});
Object.defineProperty(__vite_ssr_exports__, "isShallow", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.isShallow }});
Object.defineProperty(__vite_ssr_exports__, "effect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.effect }});
Object.defineProperty(__vite_ssr_exports__, "effectScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.effectScope }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.getCurrentScope }});
Object.defineProperty(__vite_ssr_exports__, "onScopeDispose", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.onScopeDispose }});
Object.defineProperty(__vite_ssr_exports__, "defineComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.defineComponent }});
Object.defineProperty(__vite_ssr_exports__, "defineAsyncComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.defineAsyncComponent }});
Object.defineProperty(__vite_ssr_exports__, "resolveComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.resolveComponent }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentInstance", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.getCurrentInstance }});
Object.defineProperty(__vite_ssr_exports__, "h", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.h }});
Object.defineProperty(__vite_ssr_exports__, "inject", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.inject }});
Object.defineProperty(__vite_ssr_exports__, "nextTick", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.nextTick }});
Object.defineProperty(__vite_ssr_exports__, "provide", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.provide }});
Object.defineProperty(__vite_ssr_exports__, "useAttrs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useAttrs }});
Object.defineProperty(__vite_ssr_exports__, "useCssModule", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useCssModule }});
Object.defineProperty(__vite_ssr_exports__, "useCssVars", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useCssVars }});
Object.defineProperty(__vite_ssr_exports__, "useSlots", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useSlots }});
Object.defineProperty(__vite_ssr_exports__, "useTransitionState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useTransitionState }});
const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/nuxt-graphql-client/dist/runtime/composables/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useGqlHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_10__.useGqlHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useGqlToken", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_10__.useGqlToken }});
Object.defineProperty(__vite_ssr_exports__, "useGqlCors", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_10__.useGqlCors }});
Object.defineProperty(__vite_ssr_exports__, "useGql", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_10__.useGql }});
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs");

Object.defineProperty(__vite_ssr_exports__, "GqlCatalogMenu", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_11__.GqlCatalogMenu }});
Object.defineProperty(__vite_ssr_exports__, "GqlMainSearch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_11__.GqlMainSearch }});
Object.defineProperty(__vite_ssr_exports__, "GqlProductByArticle", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_11__.GqlProductByArticle }});
Object.defineProperty(__vite_ssr_exports__, "GqlProductCardDataBySlug", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_11__.GqlProductCardDataBySlug }});
Object.defineProperty(__vite_ssr_exports__, "GqlProductsBySubcategorySlug", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_11__.GqlProductsBySubcategorySlug }});
Object.defineProperty(__vite_ssr_exports__, "GqlSearchEntitiesByTitle", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_11__.GqlSearchEntitiesByTitle }});
Object.defineProperty(__vite_ssr_exports__, "GqlGetCategoryBySlug", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_11__.GqlGetCategoryBySlug }});
Object.defineProperty(__vite_ssr_exports__, "GqlGetRootCategories", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_11__.GqlGetRootCategories }});
const __vite_ssr_import_12__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_12__.definePageMeta }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/vue-demi.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs ($id_0aa4a4c2)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/dist.plugin.029268ea.mjs ($id_f53014de)
// Dependencies: 
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// --------------------
const $id_a8110be7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/capi.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const Vue2 = void 0;
Object.defineProperty(__vite_ssr_exports__, "Vue2", { enumerable: true, configurable: true, get(){ return Vue2 }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/capi.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_0c5717a4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const install = () => {
};
Object.defineProperty(__vite_ssr_exports__, "install", { enumerable: true, configurable: true, get(){ return install }});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
Object.defineProperty(__vite_ssr_exports__, "del", { enumerable: true, configurable: true, get(){ return del }});
;
}


// --------------------
// Request: /node_modules/nuxt-graphql-client/dist/runtime/composables/index.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs ($id_0aa4a4c2)
// Dependencies: 
// - /node_modules/defu/dist/defu.mjs ($id_d7afab65)
// - /node_modules/graphql-request/dist/index.js ($id_3c4dd26c)
// - /node_modules/nuxt-graphql-client/dist/runtime/utils.mjs ($id_0876cc71)
// - /.nuxt/gql-sdk.ts ($id_514a6b66)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs ($id_0aa4a4c2)
// --------------------
const $id_0ab5e784 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/defu/dist/defu.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/graphql-request/dist/index.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt-graphql-client/dist/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/.nuxt/gql-sdk.ts");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs");

const DEFAULT_STATE = { proxyCookies: true };
const useGqlState = (state, reset) => {
  const nuxtApp = __vite_ssr_import_4__.useNuxtApp();
  if (!nuxtApp._gqlState) {
    nuxtApp._gqlState = __vite_ssr_import_4__.ref(Object.assign({}, DEFAULT_STATE));
  }
  if (state) {
    if (state.options) {
      const optionKeys = Object.keys(state.options || {});
      for (const k of optionKeys) {
        if (!nuxtApp._gqlState.value.clients?.[k]) {
          delete state.options[k];
        }
      }
    }
    if (reset === void 0) {
      reset = !Object.keys(state).length;
    }
    if (reset) {
      nuxtApp._gqlState.value = Object.assign(DEFAULT_STATE, {
        clients: nuxtApp._gqlState.value.clients
      });
    } else {
      nuxtApp._gqlState.value = __vite_ssr_import_2__.deepmerge(nuxtApp._gqlState.value, state);
    }
    const clients = nuxtApp._gqlState.value.clients;
    if (clients) {
      for (const [k, v] of Object.entries(clients)) {
        if (reset) {
          v.options = {};
          continue;
        }
        if (!state?.options?.[k]) {
          continue;
        }
        v.options = nuxtApp._gqlState.value.options[k];
      }
    }
  }
  return nuxtApp._gqlState;
};
const initClients = () => {
  const state = useGqlState();
  const config = __vite_ssr_import_4__.useRuntimeConfig();
  const { clients } = __vite_ssr_import_2__.deepmerge({}, __vite_ssr_import_0__.defu(config?.["graphql-client"], config?.public?.["graphql-client"]));
  state.value.clients = state.value?.clients || {};
  state.value.options = state.value?.options || {};
  for (const [name, v] of Object.entries(clients)) {
    if (state.value?.clients[name]) {
      continue;
    }
    if (!state.value?.options[name]) {
      state.value.options[name] = {};
    }
    const host = false && v?.clientHost || v.host;
    const c = new __vite_ssr_import_1__.GraphQLClient(host, state.value.options[name]);
    state.value.clients[name] = c;
    if (v?.token?.value) {
      useGqlToken(v.token.value, { client: name });
    }
  }
};
const getClient = (client) => {
  const state = useGqlState();
  if (client && state.value?.clients?.[client]) {
    return client;
  }
  const { clients } = __vite_ssr_import_4__.useRuntimeConfig()?.public?.["graphql-client"];
  if (!state.value.clients || !state.value.options) {
    initClients();
  }
  if (!client && Object.keys(clients)?.length) {
    const defaultClient = Object.entries(clients).find(([k, v]) => k === "default" || v?.default);
    if (defaultClient) {
      client = defaultClient[0];
    } else {
      client = Object.keys(clients)[0];
    }
  }
  return client;
};
const useGqlClient = (client) => {
  const state = useGqlState();
  client = getClient(client);
  return state.value.clients[client];
};
const useGqlHeaders = (headers, client) => {
  client = getClient(client);
  useGqlState({ options: { [client]: { headers } } });
};
Object.defineProperty(__vite_ssr_exports__, "useGqlHeaders", { enumerable: true, configurable: true, get(){ return useGqlHeaders }});
const DEFAULT_AUTH = { type: "Bearer", name: "Authorization" };
const useGqlToken = (token, opts) => {
  let { client, config } = opts || {};
  client = getClient(client);
  const clientConfig = __vite_ssr_import_4__.useRuntimeConfig()?.public?.["graphql-client"]?.clients?.[client];
  config = {
    ...DEFAULT_AUTH,
    ...clientConfig?.token?.name && { name: clientConfig.token.name },
    ...clientConfig?.token?.type !== void 0 && { type: clientConfig.token.type },
    ...config
  };
  const state = useGqlState();
  if (token) {
    useGqlState({
      options: {
        [client]: {
          headers: { [config.name]: `${config.type} ${token}`.trim() }
        }
      }
    });
  } else if (state.value?.options?.[client]?.headers?.[config.name]) {
    delete state.value.options[client].headers[config.name];
  }
};
Object.defineProperty(__vite_ssr_exports__, "useGqlToken", { enumerable: true, configurable: true, get(){ return useGqlToken }});
const useGqlCors = ({ mode, credentials, client }) => {
  client = getClient(client);
  const corsOptions = {
    ...mode && { mode },
    ...credentials && { credentials }
  };
  useGqlState({ options: { [client]: corsOptions } });
};
Object.defineProperty(__vite_ssr_exports__, "useGqlCors", { enumerable: true, configurable: true, get(){ return useGqlCors }});
const useGql = (client) => {
  const state = useGqlState();
  const gqlClient = useGqlClient(client);
  if (true && state.value?.proxyCookies) {
    const { cookie } = __vite_ssr_import_4__.useRequestHeaders(["cookie"]);
    if (cookie) {
      gqlClient.setHeader("cookie", cookie);
    }
  }
  const $gql = __vite_ssr_import_3__.getSdk(gqlClient);
  return { ...$gql };
};
Object.defineProperty(__vite_ssr_exports__, "useGql", { enumerable: true, configurable: true, get(){ return useGql }});
;
}


// --------------------
// Request: /node_modules/graphql-request/dist/index.js
// Parents: 
// - /node_modules/nuxt-graphql-client/dist/runtime/composables/index.mjs ($id_0ab5e784)
// - /.nuxt/gql-sdk.ts ($id_514a6b66)
// Dependencies: 

// --------------------
const $id_3c4dd26c = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/graphql-request/dist/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/graphql-request/dist/index.js\".")
  })


// --------------------
// Request: /node_modules/nuxt-graphql-client/dist/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt-graphql-client/dist/runtime/composables/index.mjs ($id_0ab5e784)
// Dependencies: 

// --------------------
const $id_0876cc71 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const deepmerge = (a, b) => {
  const result = { ...a };
  for (const key in b) {
    if (typeof b[key] === "object" && b[key] !== null) {
      result[key] = deepmerge(result[key] || {}, b[key]);
    } else {
      result[key] = b[key];
    }
  }
  return result;
};
Object.defineProperty(__vite_ssr_exports__, "deepmerge", { enumerable: true, configurable: true, get(){ return deepmerge }});
;
}


// --------------------
// Request: /.nuxt/gql-sdk.ts
// Parents: 
// - /node_modules/nuxt-graphql-client/dist/runtime/composables/index.mjs ($id_0ab5e784)
// Dependencies: 
// - /node_modules/graphql-request/dist/index.js ($id_3c4dd26c)
// --------------------
const $id_514a6b66 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/graphql-request/dist/index.js");

var Enum_Category_Type = /* @__PURE__ */ ((Enum_Category_Type2) => {
  Enum_Category_Type2["Category"] = "category";
  Enum_Category_Type2["Section"] = "section";
  Enum_Category_Type2["Subcategory"] = "subcategory";
  return Enum_Category_Type2;
})(Enum_Category_Type || {});
Object.defineProperty(__vite_ssr_exports__, "Enum_Category_Type", { enumerable: true, configurable: true, get(){ return Enum_Category_Type }});
var PublicationState = /* @__PURE__ */ ((PublicationState2) => {
  PublicationState2["LIVE"] = "LIVE";
  PublicationState2["PREVIEW"] = "PREVIEW";
  return PublicationState2;
})(PublicationState || {});
Object.defineProperty(__vite_ssr_exports__, "PublicationState", { enumerable: true, configurable: true, get(){ return PublicationState }});
const GetRootCategoriesDocument = __vite_ssr_import_0__.gql`
    query getRootCategories($type: String) {
  categories(filters: {type: {eq: $type}}) {
    data {
      attributes {
        slug
        title
        parent {
          data {
            attributes {
              title
            }
          }
        }
        items {
          data {
            attributes {
              title
              slug
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;
Object.defineProperty(__vite_ssr_exports__, "GetRootCategoriesDocument", { enumerable: true, configurable: true, get(){ return GetRootCategoriesDocument }});
const GetCategoryBySlugDocument = __vite_ssr_import_0__.gql`
    query getCategoryBySlug($slug: String) {
  categories(filters: {slug: {eq: $slug}}) {
    data {
      attributes {
        slug
        title
        showProducts
        showRelated
        parent {
          data {
            attributes {
              title
              slug
            }
          }
        }
        items {
          data {
            attributes {
              title
              slug
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        related {
          data {
            attributes {
              title
              slug
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  brands(filters: {products: {category: {slug: {eq: $slug}}}}) {
    data {
      id
      attributes {
        title
      }
    }
  }
}
    `;
Object.defineProperty(__vite_ssr_exports__, "GetCategoryBySlugDocument", { enumerable: true, configurable: true, get(){ return GetCategoryBySlugDocument }});
const CatalogMenuDocument = __vite_ssr_import_0__.gql`
    query CatalogMenu {
  categories(filters: {showInNav: {eq: true}, and: {type: {eq: "section"}}}) {
    data {
      id
      attributes {
        title
        navIcon {
          data {
            attributes {
              url
            }
          }
        }
        items(filters: {showInNav: {eq: true}, and: {type: {eq: "category"}}}) {
          data {
            id
            attributes {
              title
              slug
              items(filters: {showInNav: {eq: true}, and: {type: {eq: "subcategory"}}}) {
                data {
                  id
                  attributes {
                    title
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;
Object.defineProperty(__vite_ssr_exports__, "CatalogMenuDocument", { enumerable: true, configurable: true, get(){ return CatalogMenuDocument }});
const SearchEntitiesByTitleDocument = __vite_ssr_import_0__.gql`
    query SearchEntitiesByTitle($value: String) {
  categories(filters: {title: {contains: $value}}) {
    data {
      id
      attributes {
        title
        slug
      }
    }
  }
  products(filters: {title: {contains: $value}}) {
    data {
      id
      attributes {
        title
        article
        parent {
          data {
            attributes {
              slug
            }
          }
        }
      }
    }
  }
}
    `;
Object.defineProperty(__vite_ssr_exports__, "SearchEntitiesByTitleDocument", { enumerable: true, configurable: true, get(){ return SearchEntitiesByTitleDocument }});
const MainSearchDocument = __vite_ssr_import_0__.gql`
    query MainSearch($value: String) {
  products(filters: {article: {eq: $value}}) {
    data {
      attributes {
        article
        parent {
          data {
            attributes {
              slug
            }
          }
        }
      }
    }
  }
  categories(filters: {title: {contains: $value}}) {
    data {
      attributes {
        slug
      }
    }
  }
}
    `;
Object.defineProperty(__vite_ssr_exports__, "MainSearchDocument", { enumerable: true, configurable: true, get(){ return MainSearchDocument }});
const ProductByArticleDocument = __vite_ssr_import_0__.gql`
    query ProductByArticle($article: String) {
  products(filters: {article: {eq: $article}}) {
    data {
      attributes {
        article
        title
        price
        amount
        description {
          value
        }
        color {
          value
          title
        }
        size {
          value
        }
        images {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;
Object.defineProperty(__vite_ssr_exports__, "ProductByArticleDocument", { enumerable: true, configurable: true, get(){ return ProductByArticleDocument }});
const ProductCardDataBySlugDocument = __vite_ssr_import_0__.gql`
    query ProductCardDataBySlug($slug: String) {
  productCards(filters: {slug: {eq: $slug}}) {
    data {
      attributes {
        title
        slug
        images {
          data {
            id
            attributes {
              url
            }
          }
        }
        items {
          data {
            attributes {
              article
              color {
                title
                value
              }
              size {
                value
              }
            }
          }
        }
        category {
          data {
            attributes {
              title
              slug
            }
          }
        }
      }
    }
  }
}
    `;
Object.defineProperty(__vite_ssr_exports__, "ProductCardDataBySlugDocument", { enumerable: true, configurable: true, get(){ return ProductCardDataBySlugDocument }});
const ProductsBySubcategorySlugDocument = __vite_ssr_import_0__.gql`
    query ProductsBySubcategorySlug($slug: String, $brands: [ID], $priceFrom: Int, $priceTo: Int) {
  products(
    filters: {parent: {category: {slug: {eq: $slug}}, brand: {id: {in: $brands}}}, and: {price: {gte: $priceFrom, lte: $priceTo}}}
  ) {
    data {
      attributes {
        title
        article
        price
        color {
          title
        }
        size {
          value
        }
        parent {
          data {
            attributes {
              slug
              brand {
                data {
                  attributes {
                    title
                  }
                  id
                }
              }
            }
          }
        }
        images {
          data {
            id
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;
Object.defineProperty(__vite_ssr_exports__, "ProductsBySubcategorySlugDocument", { enumerable: true, configurable: true, get(){ return ProductsBySubcategorySlugDocument }});
const defaultWrapper = (action, _operationName, _operationType) => action();
function getSdk(client, withWrapper = defaultWrapper) {
  return {
    getRootCategories(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(GetRootCategoriesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "getRootCategories", "query");
    },
    getCategoryBySlug(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(GetCategoryBySlugDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "getCategoryBySlug", "query");
    },
    CatalogMenu(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(CatalogMenuDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "CatalogMenu", "query");
    },
    SearchEntitiesByTitle(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(SearchEntitiesByTitleDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "SearchEntitiesByTitle", "query");
    },
    MainSearch(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(MainSearchDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "MainSearch", "query");
    },
    ProductByArticle(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(ProductByArticleDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "ProductByArticle", "query");
    },
    ProductCardDataBySlug(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(ProductCardDataBySlugDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "ProductCardDataBySlug", "query");
    },
    ProductsBySubcategorySlug(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(ProductsBySubcategorySlugDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "ProductsBySubcategorySlug", "query");
    }
  };
}
Object.defineProperty(__vite_ssr_exports__, "getSdk", { enumerable: true, configurable: true, get(){ return getSdk }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/composables.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs ($id_0aa4a4c2)
// Dependencies: 

// --------------------
const $id_ff6ed455 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const warnRuntimeUsage = (method) => console.warn(`${method}() is a compiler-hint helper that is only usable inside the script block of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
const definePageMeta = (meta) => {
  if (true) {
    warnRuntimeUsage("definePageMeta");
  }
};
Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return definePageMeta }});
;
}


// --------------------
// Request: /components/UI/TabsWrapper.vue
// Parents: 
// - /components/ExpandMenu/ExpandMenu.vue ($id_be3b5d3c)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/UI/TabsWrapper.vue?vue&type=style&index=0&scoped=true&lang.postcss ($id_eabcf406)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e6a8446c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  props: {
    column: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const config = __vite_ssr_import_0__.useRuntimeConfig();
    const isColumn = __vite_ssr_import_1__.ref(props.column);

    const tabSmall = __vite_ssr_import_1__.ref(false);
    const toggleSize = (value) => {
      tabSmall.value = value;
    };

    const tabs = __vite_ssr_import_1__.ref(
      slots.default()[0].children.map((tab) => tab.props.settings)
    );

    const selectedTabID = __vite_ssr_import_1__.ref(tabs.value[0].id);
    __vite_ssr_import_1__.provide("selectedTabID", selectedTabID);

    const tabIcon = (icon) => {
      if (!icon || (icon && !icon.data)) {
        return "none";
      }
      const url = icon.data.attributes.url;
      if (!url) {
        return "none";
      }
      return `${config.API_URL}${url}`;
    };

    return { selectedTabID, tabs, tabIcon, isColumn, tabSmall, toggleSize };
  },
};

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({
      class: ["tabs", { flex: $setup.isColumn }]
    }, _attrs))
  } data-v-018a7dd6><ul class="${
    __vite_ssr_import_3__.ssrRenderClass([{
        'flex-col  min-w-[350px]': $setup.isColumn,
      }, "tabs__header"])
  }" data-v-018a7dd6><!--[-->`)
  __vite_ssr_import_3__.ssrRenderList($setup.tabs, (tab) => {
    _push(`<li class="tabs__header-item" data-v-018a7dd6><button class="${__vite_ssr_import_3__.ssrRenderClass([{
            active: tab.id == $setup.selectedTabID,
          }, "tabs__header-item__button"])}" data-v-018a7dd6>`)
    if (tab.attributes.navIcon) {
      _push(`<div class="icon mr-[20px] w-full max-w-[22px] h-[22px] bg-center bg-contain bg-no-repeat" style="${__vite_ssr_import_3__.ssrRenderStyle({
              backgroundImage: `url(${$setup.tabIcon(tab.attributes.navIcon)})`,
            })}" data-v-018a7dd6></div>`)
    } else {
      _push(`<!---->`)
    }
    _push(`<div class="text text-left grow mr-[10px] capitalize" data-v-018a7dd6>${
      __vite_ssr_import_3__.ssrInterpolate(tab.attributes.title)
    }</div><svg class="${
      __vite_ssr_import_3__.ssrRenderClass([{ 'text-orange': tab.id == $setup.selectedTabID }, "arrow w-4 h-4 text-grey-text"])
    }" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-018a7dd6><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-018a7dd6></path></svg></button></li>`)
  })
  _push(`<!--]--></ul><div class="tabs-content" data-v-018a7dd6><div class="divider mr-[60px] bg-grey-light w-[2px] rounded shadow-divider h-full min-h-screen" data-v-018a7dd6></div>`)
  __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/UI/TabsWrapper.vue?vue&type=style&index=0&scoped=true&lang.postcss");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/UI/TabsWrapper.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-018a7dd6"],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/components/UI/TabsWrapper.vue"]]);
}


// --------------------
// Request: /components/UI/TabsWrapper.vue?vue&type=style&index=0&scoped=true&lang.postcss
// Parents: 
// - /components/UI/TabsWrapper.vue ($id_e6a8446c)
// Dependencies: 

// --------------------
const $id_eabcf406 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".tabs[data-v-018a7dd6]{align-items:flex-start;gap:60px;justify-content:flex-start;width:100%}.tabs__header[data-v-018a7dd6]{display:flex;list-style-type:none;margin-top:60px;padding:0}.tabs__header-item__button[data-v-018a7dd6]{--tw-text-opacity:1;align-items:center;border-radius:4px;color:rgb(51 51 51/var(--tw-text-opacity));display:flex;font-size:21px;margin-left:-10px;margin-right:-10px;padding:10px;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);width:100%}.tabs__header-item__button[data-v-018a7dd6]:hover{--tw-bg-opacity:1;background-color:rgb(241 241 241/var(--tw-bg-opacity))}.tabs__header-item__button.active[data-v-018a7dd6]{--tw-text-opacity:1;color:rgb(255 66 6/var(--tw-text-opacity));pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tabs__header-item__button.active[data-v-018a7dd6]:hover{--tw-bg-opacity:0}.tabs__header-item__button[data-v-018a7dd6]:not(.active):active{--tw-scale-x:.95;--tw-scale-y:.95;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.tabs-content[data-v-018a7dd6]{align-items:flex-start;display:flex}";
}


// --------------------
// Request: /components/UI/Tab.vue
// Parents: 
// - /components/ExpandMenu/ExpandMenu.vue ($id_be3b5d3c)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/UI/Tab.vue?vue&type=style&index=0&scoped=true&lang.postcss ($id_22803469)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_119df125 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  props: {
    settings: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const selectedTabID = __vite_ssr_import_0__.inject("selectedTabID");

    return {
      selectedTabID,
    };
  },
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "flex" }, _attrs))
  } data-v-aa720d16><div class="left top absolute" style="${
    __vite_ssr_import_2__.ssrRenderStyle(($setup.selectedTabID == $props.settings.id) ? null : { display: "none" })
  }" data-v-aa720d16>`)
  __vite_ssr_import_2__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/UI/Tab.vue?vue&type=style&index=0&scoped=true&lang.postcss");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/UI/Tab.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-aa720d16"],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/components/UI/Tab.vue"]]);
}


// --------------------
// Request: /components/UI/Tab.vue?vue&type=style&index=0&scoped=true&lang.postcss
// Parents: 
// - /components/UI/Tab.vue ($id_119df125)
// Dependencies: 

// --------------------
const $id_22803469 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".slide-up-enter-active[data-v-aa720d16],.slide-up-leave-active[data-v-aa720d16]{transition:all .1s ease-in-out}.slide-up-enter-from[data-v-aa720d16]{opacity:0;transform:translateY(50px)}.slide-up-leave-to[data-v-aa720d16]{opacity:0;transform:translateY(-30px)}";
}


// --------------------
// Request: /components/ExpandMenu/ExpandMenu.vue?vue&type=style&index=0&scoped=true&lang.postcss
// Parents: 
// - /components/ExpandMenu/ExpandMenu.vue ($id_be3b5d3c)
// Dependencies: 

// --------------------
const $id_f1f7ce30 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".expand-menu[data-v-3efd3624]{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));bottom:0;height:100vh;left:0;overflow:auto;position:absolute;right:0;top:80px;width:100%;z-index:50}.ease-out-overlay-enter-active[data-v-3efd3624],.ease-out-overlay-leave-active[data-v-3efd3624]{opacity:1;transition-duration:.3s}.ease-out-overlay-enter[data-v-3efd3624],.ease-out-overlay-leave-to[data-v-3efd3624]{opacity:0;transition-duration:.3s}";
}


// --------------------
// Request: /components/SearchBar.vue
// Parents: 
// - /components/PrometeiHeader.vue ($id_7562f2a2)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs ($id_63a2fd8b)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/SearchBar.vue?vue&type=style&index=0&lang.css ($id_3d69483f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_007b1c70 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs");

const _sfc_main = {
  name: 'SearchBar',
  setup(__props, { expose }) {
  expose();

const router = __vite_ssr_import_1__.useRouter();
const searchString = __vite_ssr_import_2__.ref(null);

const productsList = __vite_ssr_import_2__.ref([]);

const categoriesList = __vite_ssr_import_2__.ref([]);

const expandResults = __vite_ssr_import_2__.ref(false);

const hasResults = __vite_ssr_import_2__.computed(
  () => !!productsList.value.length || !!categoriesList.value.length
);

const toggleExpand = (value) => {
  setTimeout(() => {
    expandResults.value = value;
  }, 200);
};

const loading = __vite_ssr_import_2__.ref(false);
const debounceTimeout = __vite_ssr_import_2__.ref(null);

const searchByEntities = async () => {
  if (searchString.value.length <= 0) {
    return false;
  }

  loading.value = true;
  const response = await __vite_ssr_import_3__.GqlSearchEntitiesByTitle({
    value: searchString.value.toLowerCase(),
  });

  console.log(response);

  categoriesList.value = [];
  productsList.value = [];

  if (response.categories?.data) {
    response.categories?.data.forEach((category) => {
      const categoryItem = {
        title: category.attributes.title,
        slug: category.attributes.slug,
      };
      categoriesList.value.push(categoryItem);
    });
  }
  if (response.products?.data) {
    response.products?.data.forEach((product) => {
      const productItem = {
        title: product.attributes.title,
        article: product.attributes.article,
        cardSlug: product.attributes.parent.data.attributes.slug,
      };
      productsList.value.push(productItem);
    });
  }

  toggleExpand(true);
  loading.value = false;
};

const debounceSearch = () => {
  clearTimeout(debounceTimeout.value);
  debounceTimeout.value = setTimeout(searchByEntities, 300);
};

const mainSearch = async () => {
  if (!searchString.value || searchString.value === "") {
    return false;
  }

  const result = await __vite_ssr_import_3__.GqlMainSearch({
    value: searchString.value.toString().toLowerCase(),
  });
  const foundProducts = result?.products?.data;
  const foundCategories = result?.categories?.data;
  result.products.data[0];
  if (foundProducts && foundProducts[0]) {
    const foundProduct = foundProducts[0]?.attributes;
    const article = foundProduct?.article;
    const parentSlug = foundProduct?.parent?.data?.attributes?.slug;
    if (article && parentSlug) {
      router.push(`/products/${parentSlug}_${article}`);
    }
  } else if (foundCategories && foundCategories[0]) {
    const foundCategory = foundCategories[0]?.attributes;
    const categorySlug = foundCategory.slug;
    if (categorySlug) {
      router.push(`/categories/${categorySlug}`);
    }
  } else {
    router.push(`/404`);
  }
};

const __returned__ = { router, searchString, productsList, categoriesList, expandResults, hasResults, toggleExpand, loading, debounceTimeout, searchByEntities, debounceSearch, mainSearch }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "h-[50px] w-[500px] flex justify-between items-center" }, _attrs))
  }><span class="${
    __vite_ssr_import_5__.ssrRenderClass([{
        'rounded-bl-[4px]': !$setup.expandResults || !$setup.hasResults,
        'border-b-grey-text': $setup.expandResults && $setup.hasResults,
      }, "h-[50px] relative flex-1 border-y-[2px] border-l-[2px] rounded-tl-[4px] border-primary flex justify-center items-center transition-all duration-300"])
  }"><input${
    __vite_ssr_import_5__.ssrRenderAttr("value", $setup.searchString)
  } type="text" class="w-[360px] outline-none placeholder:text-grey-text" placeholder="?????????? ??????????????">`)
  if ($setup.expandResults && $setup.hasResults) {
    _push(`<div class="absolute top-[100%] right-[-2px] left-[-2px] z-[99] bg-white border-primary border-x-[2px] border-b-[2px] rounded-b-[4px] flex flex-col gap-[10px] py-[10px] transition-all duration-300"><span class="h-[2px] bg-grey-light flex rounded-full mx-[20px]"></span>`)
    if ($setup.productsList.length) {
      _push(`<div class="result-list px-[10px]"><span class="text-grey-text text-[14px] font-thin pointer-events-none select-none">????????????</span><!--[-->`)
      __vite_ssr_import_5__.ssrRenderList($setup.productsList, (item) => {
        _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtLink, {
          class: "result-item px-[10px] py-[5px] hover:bg-grey-light cursor-pointer rounded-[4px] flex items-center justify-between",
          to: `/products/${item.cardSlug}_${item.article}`
        }, {
          default: __vite_ssr_import_4__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<span class="text-secondary capitalize"${
                _scopeId
              }>${
                __vite_ssr_import_5__.ssrInterpolate(item.title)
              }</span>`)
            } else {
              return [
                __vite_ssr_import_4__.createVNode("span", { class: "text-secondary capitalize" }, __vite_ssr_import_4__.toDisplayString(item.title), 1 /* TEXT */)
              ]
            }
          }),
          _: 2 /* DYNAMIC */
        }, _parent))
      })
      _push(`<!--]--></div>`)
    } else {
      _push(`<!---->`)
    }
    if ($setup.categoriesList.length) {
      _push(`<div class="result-list px-[10px]"><span class="text-grey-text text-[14px] font-thin pointer-events-none select-none">??????????????????</span><!--[-->`)
      __vite_ssr_import_5__.ssrRenderList($setup.categoriesList, (item) => {
        _push(__vite_ssr_import_5__.ssrRenderComponent(_component_NuxtLink, {
          class: "result-item px-[10px] py-[5px] hover:bg-grey-light cursor-pointer rounded-[4px] flex items-center justify-between",
          to: `/categories/${item.slug}`
        }, {
          default: __vite_ssr_import_4__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<span class="text-secondary capitalize"${
                _scopeId
              }>${
                __vite_ssr_import_5__.ssrInterpolate(item.title)
              }</span>`)
            } else {
              return [
                __vite_ssr_import_4__.createVNode("span", { class: "text-secondary capitalize" }, __vite_ssr_import_4__.toDisplayString(item.title), 1 /* TEXT */)
              ]
            }
          }),
          _: 2 /* DYNAMIC */
        }, _parent))
      })
      _push(`<!--]--></div>`)
    } else {
      _push(`<!---->`)
    }
    _push(`</div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</span><button class="h-[50px] px-[27px] rounded-r-[4px] flex justify-center items-center text-white bg-primary outline-none"> ?????????? </button></div>`)
}

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/SearchBar.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/SearchBar.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/components/SearchBar.vue"]]);
}


// --------------------
// Request: /components/SearchBar.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /components/SearchBar.vue ($id_007b1c70)
// Dependencies: 

// --------------------
const $id_3d69483f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".fade-enter-active,.fade-leave-active{transition:all .3s ease}.fade-enter-from,.fade-leave-to{opacity:0}";
}


// --------------------
// Request: /store/menu/menu.js
// Parents: 
// - /components/PrometeiHeader.vue ($id_7562f2a2)
// - /layouts/shop.vue ($id_8067d08d)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 
// - /node_modules/pinia/dist/pinia.mjs ($id_b1920624)
// --------------------
const $id_53cdf039 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/pinia/dist/pinia.mjs");


const useMenuToggler = __vite_ssr_import_0__.defineStore("menu", {
  state: () => {
    return {
      isExpandMenuOpen: false,
    };
  },
  actions: {
    toggleMenu(value) {
      this.isExpandMenuOpen = value;
    },
  },
});
Object.defineProperty(__vite_ssr_exports__, "useMenuToggler", { enumerable: true, configurable: true, get(){ return useMenuToggler }});
;
}


// --------------------
// Request: /node_modules/pinia/dist/pinia.mjs
// Parents: 
// - /store/menu/menu.js ($id_53cdf039)
// - /store/cart/cart.js ($id_08ef3e2f)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/dist.plugin.029268ea.mjs ($id_f53014de)
// Dependencies: 

// --------------------
const $id_b1920624 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/pinia/dist/pinia.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/pinia/dist/pinia.mjs\".")
  })


// --------------------
// Request: /store/cart/cart.js
// Parents: 
// - /components/PrometeiHeader.vue ($id_7562f2a2)
// - /layouts/shop.vue ($id_8067d08d)
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /pages/categories/[slug]/index.vue?macro=true ($id_b19ac374)
// - /pages/products/[params].vue?macro=true ($id_5fe5d068)
// - /pages/cart/index.vue ($id_3fa45d07)
// - /pages/categories/[slug]/index.vue ($id_a38e0b82)
// - /pages/products/[params].vue ($id_e6c5b58b)
// Dependencies: 
// - /node_modules/pinia/dist/pinia.mjs ($id_b1920624)
// --------------------
const $id_08ef3e2f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/pinia/dist/pinia.mjs");


const useCart = __vite_ssr_import_0__.defineStore("cart", {
  state: () => {
    return {
      cartItems: [],
      selectedDelivery: "delivery",
    };
  },
  getters: {
    items: ({ cartItems }) => cartItems,
  },
  actions: {
    updateDelivery(value) {
      this.selectedDelivery = value;
    },
    initCart(cartData) {
      this.cartItems = cartData;
    },
    addToCart(product) {
      const newArr = JSON.parse(JSON.stringify(this.cartItems));
      newArr.push(product);
      this.cartItems = newArr;
    },
    updateCartItem(itemData) {
      this.cartItems = this.items.map((item) => {
        if (item.article === itemData.article) {
          return itemData;
        }
        return item;
      });
    },
    removeAllCartItems() {
      this.cartItems = [];
    },
    removeFromCart(productArticle) {
      const newArr = [];
      for (let index in this.cartItems) {
        const item = this.cartItems[index];
        if (item.article !== productArticle) {
          newArr.push(item);
        }
      }
      // console.log(newArr);
      this.cartItems = newArr;
    },
  },
});
Object.defineProperty(__vite_ssr_exports__, "useCart", { enumerable: true, configurable: true, get(){ return useCart }});
;
}


// --------------------
// Request: /assets/images/header-logo.svg
// Parents: 
// - /components/PrometeiHeader.vue ($id_7562f2a2)
// Dependencies: 

// --------------------
const $id_1ab94e98 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/header-logo.svg";
}


// --------------------
// Request: /components/PrometeiFooter.vue
// Parents: 
// - /layouts/shop.vue ($id_8067d08d)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /assets/images/footer-logo.svg ($id_79b8e24e)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_04928ae8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const _sfc_main = {
  name: 'PrometeiFooter',
  setup(__props, { expose }) {
  expose();

const footerData = {
  phones: [
    {
      call: "799910020030",
      title: "+7 (999) 100 200 30",
    },
    {
      call: "792122814880",
      title: "+7 (921) 228 148 80",
    },
  ],
};

const __returned__ = { footerData }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/assets/images/footer-logo.svg");



function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<footer${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "bg-secondary w-full pt-[40px] pb-[50px]" }, _attrs))}><div class="text-white max-w-screen-xl w-full mx-auto flex justify-between items-start">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "footer-logo"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img${
          __vite_ssr_import_2__.ssrRenderAttr("src", __vite_ssr_import_3__.default)
        } alt=""${
          _scopeId
        }>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("img", {
            src: __vite_ssr_import_3__.default,
            alt: ""
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div class="footer-columns flex items-start"><div class="footer-column mr-[120px] last:mr-0"><h6 class="text-primary text-[21px]">????????????????????</h6><ul class="mt-[20px]"><li class="hover:text-orange mb-[20px] last:mb-0">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, { to: "/payments" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`?????????????? ????????????`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("?????????????? ????????????")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li><li class="hover:text-orange mb-[20px] last:mb-0">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, { to: "/delivery" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`????????????????`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("????????????????")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li></ul></div><div class="footer-column mr-[120px] last:mr-0"><h6 class="text-primary text-[21px]">????????????????</h6><ul class="mt-[20px]"><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($setup.footerData.phones, (phone, index) => {
    _push(`<li class="hover:text-orange mb-[20px] last:mb-0"><a${
      __vite_ssr_import_2__.ssrRenderAttr("href", `tel:${phone.call}`)
    }>${
      __vite_ssr_import_2__.ssrInterpolate(phone.title)
    }</a></li>`)
  })
  _push(`<!--]--></ul></div><div class="footer-column mr-[120px] last:mr-0"><h6 class="text-primary text-[21px]">??????????</h6><ul class="mt-[20px]"><li class="hover:text-orange mb-[20px] last:mb-0">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, { to: "/address" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`????????????????????????,<br${_scopeId}>?????????????????????? 7??`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("????????????????????????,"),
          __vite_ssr_import_1__.createVNode("br"),
          __vite_ssr_import_1__.createTextVNode("?????????????????????? 7??")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li></ul></div><div class="footer-column mr-[120px] last:mr-0"><h6 class="text-primary text-[21px]">???????????????????? ????????</h6><ul class="mt-[20px] flex justify-start items-center"><li class="mr-[27px] last:mr-0">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"${
          _scopeId
        }><path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="url(#paint0_linear_1507_24)"${
          _scopeId
        }></path><path d="M10.1538 16.0967L11.9334 21.0224C11.9334 21.0224 12.1559 21.4833 12.3942 21.4833C12.6324 21.4833 16.1761 17.7968 16.1761 17.7968L20.1167 10.1855L10.2173 14.8252L10.1538 16.0967Z" fill="#C8DAEA"${
          _scopeId
        }></path><path d="M12.5131 17.3594L12.1715 20.9901C12.1715 20.9901 12.0285 22.1026 13.1408 20.9901C14.253 19.8776 15.3176 19.0197 15.3176 19.0197" fill="#A9C6D8"${
          _scopeId
        }></path><path d="M10.1855 16.2724L6.52477 15.0796C6.52477 15.0796 6.08727 14.9021 6.22814 14.4996C6.25714 14.4166 6.31564 14.346 6.49064 14.2246C7.30177 13.6592 21.5039 8.55461 21.5039 8.55461C21.5039 8.55461 21.9049 8.41949 22.1414 8.50936C22.1999 8.52747 22.2525 8.5608 22.2939 8.60593C22.3353 8.65107 22.364 8.70639 22.377 8.76624C22.4026 8.87194 22.4133 8.9807 22.4088 9.08936C22.4076 9.18336 22.3963 9.27049 22.3876 9.40711C22.3011 10.8027 19.7126 21.2187 19.7126 21.2187C19.7126 21.2187 19.5578 21.8282 19.0029 21.8491C18.8665 21.8535 18.7307 21.8304 18.6034 21.7812C18.4762 21.732 18.3602 21.6576 18.2623 21.5626C17.1734 20.626 13.4099 18.0967 12.5783 17.5405C12.5595 17.5277 12.5437 17.511 12.5319 17.4916C12.5202 17.4722 12.5127 17.4505 12.51 17.428C12.4984 17.3694 12.5621 17.2967 12.5621 17.2967C12.5621 17.2967 19.1154 11.4717 19.2898 10.8602C19.3033 10.8129 19.2523 10.7895 19.1838 10.8102C18.7485 10.9704 11.2033 15.7352 10.3705 16.2611C10.3106 16.2792 10.2472 16.2831 10.1855 16.2724V16.2724Z" fill="white"${
          _scopeId
        }></path><defs${
          _scopeId
        }><linearGradient id="paint0_linear_1507_24" x1="15" y1="30" x2="15" y2="0" gradientUnits="userSpaceOnUse"${
          _scopeId
        }><stop stop-color="#1D93D2"${
          _scopeId
        }></stop><stop offset="1" stop-color="#38B0E3"${
          _scopeId
        }></stop></linearGradient></defs></svg>`)
      } else {
        return [
          (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("svg", {
            width: "30",
            height: "30",
            viewBox: "0 0 30 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            __vite_ssr_import_1__.createVNode("path", {
              d: "M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z",
              fill: "url(#paint0_linear_1507_24)"
            }),
            __vite_ssr_import_1__.createVNode("path", {
              d: "M10.1538 16.0967L11.9334 21.0224C11.9334 21.0224 12.1559 21.4833 12.3942 21.4833C12.6324 21.4833 16.1761 17.7968 16.1761 17.7968L20.1167 10.1855L10.2173 14.8252L10.1538 16.0967Z",
              fill: "#C8DAEA"
            }),
            __vite_ssr_import_1__.createVNode("path", {
              d: "M12.5131 17.3594L12.1715 20.9901C12.1715 20.9901 12.0285 22.1026 13.1408 20.9901C14.253 19.8776 15.3176 19.0197 15.3176 19.0197",
              fill: "#A9C6D8"
            }),
            __vite_ssr_import_1__.createVNode("path", {
              d: "M10.1855 16.2724L6.52477 15.0796C6.52477 15.0796 6.08727 14.9021 6.22814 14.4996C6.25714 14.4166 6.31564 14.346 6.49064 14.2246C7.30177 13.6592 21.5039 8.55461 21.5039 8.55461C21.5039 8.55461 21.9049 8.41949 22.1414 8.50936C22.1999 8.52747 22.2525 8.5608 22.2939 8.60593C22.3353 8.65107 22.364 8.70639 22.377 8.76624C22.4026 8.87194 22.4133 8.9807 22.4088 9.08936C22.4076 9.18336 22.3963 9.27049 22.3876 9.40711C22.3011 10.8027 19.7126 21.2187 19.7126 21.2187C19.7126 21.2187 19.5578 21.8282 19.0029 21.8491C18.8665 21.8535 18.7307 21.8304 18.6034 21.7812C18.4762 21.732 18.3602 21.6576 18.2623 21.5626C17.1734 20.626 13.4099 18.0967 12.5783 17.5405C12.5595 17.5277 12.5437 17.511 12.5319 17.4916C12.5202 17.4722 12.5127 17.4505 12.51 17.428C12.4984 17.3694 12.5621 17.2967 12.5621 17.2967C12.5621 17.2967 19.1154 11.4717 19.2898 10.8602C19.3033 10.8129 19.2523 10.7895 19.1838 10.8102C18.7485 10.9704 11.2033 15.7352 10.3705 16.2611C10.3106 16.2792 10.2472 16.2831 10.1855 16.2724V16.2724Z",
              fill: "white"
            }),
            __vite_ssr_import_1__.createVNode("defs", null, [
              __vite_ssr_import_1__.createVNode("linearGradient", {
                id: "paint0_linear_1507_24",
                x1: "15",
                y1: "30",
                x2: "15",
                y2: "0",
                gradientUnits: "userSpaceOnUse"
              }, [
                __vite_ssr_import_1__.createVNode("stop", { "stop-color": "#1D93D2" }),
                __vite_ssr_import_1__.createVNode("stop", {
                  offset: "1",
                  "stop-color": "#38B0E3"
                })
              ])
            ])
          ]))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li><li class="mr-[27px] last:mr-0">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"${
          _scopeId
        }><path d="M0 30.1346L2.1192 22.3969C0.81215 20.1325 0.124495 17.5635 0.125333 14.9317C0.128683 6.69834 6.82899 0 15.0627 0C19.0582 0.00194894 22.8084 1.55688 25.629 4.37939C28.4487 7.20191 30.0014 10.9535 30 14.9438C29.9964 23.1766 23.2949 29.8761 15.0627 29.8761C15.0621 29.8761 15.0633 29.8761 15.0627 29.8761H15.0562C12.5566 29.875 10.1002 29.248 7.91838 28.0582L0 30.1346Z" fill="white"${
          _scopeId
        }></path><path d="M15.0675 2.52246C8.21924 2.52246 2.64998 8.08969 2.64746 14.9327C2.64645 17.2776 3.3027 19.5616 4.5454 21.5378L4.84083 22.0073L3.58631 26.587L8.28526 25.3549L8.739 25.6238C10.6447 26.7549 12.8297 27.353 15.058 27.3541H15.0627C21.9057 27.3541 27.4749 21.7863 27.4777 14.9427C27.479 11.6264 26.1889 8.50793 23.8448 6.16213C21.5007 3.81633 18.3838 2.52386 15.0675 2.52246Z" fill="url(#paint0_linear_1507_23)"${
          _scopeId
        }></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.3295 8.68869C11.0497 8.06734 10.7554 8.05475 10.4896 8.04384C10.272 8.0346 10.023 8.03516 9.77426 8.03516C9.52527 8.03516 9.12101 8.1286 8.77915 8.50209C8.437 8.87557 7.47266 9.77836 7.47266 11.6147C7.47266 13.4511 8.8102 15.2253 8.99652 15.4746C9.18312 15.7236 11.5784 19.6123 15.3723 21.1082C18.5249 22.3514 19.1664 22.1041 19.851 22.042C20.5353 21.9799 22.0592 21.1392 22.37 20.2678C22.6811 19.3963 22.6811 18.6496 22.5879 18.4935C22.4945 18.3377 22.2458 18.2445 21.8723 18.0579C21.4991 17.8713 19.6641 16.9682 19.322 16.8437C18.9798 16.7193 18.7311 16.6571 18.4821 17.0306C18.2334 17.4041 17.5186 18.2445 17.3007 18.4935C17.083 18.7428 16.8654 18.7738 16.4919 18.5872C16.1187 18.4001 14.9166 18.0064 13.4906 16.7349C12.3811 15.7457 11.6322 14.524 11.4142 14.1505C11.1966 13.777 11.391 13.575 11.5782 13.389C11.7457 13.2217 11.9514 12.9531 12.1382 12.7352C12.3243 12.5172 12.3867 12.3617 12.5109 12.113C12.6354 11.8637 12.5733 11.6458 12.4798 11.4592C12.3867 11.2726 11.6613 9.4267 11.3295 8.68869" fill="white"${
          _scopeId
        }></path><defs${
          _scopeId
        }><linearGradient id="paint0_linear_1507_23" x1="14.8098" y1="4.01263" x2="14.9358" y2="25.2327" gradientUnits="userSpaceOnUse"${
          _scopeId
        }><stop stop-color="#57D163"${
          _scopeId
        }></stop><stop offset="1" stop-color="#23B33A"${
          _scopeId
        }></stop></linearGradient></defs></svg>`)
      } else {
        return [
          (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("svg", {
            width: "30",
            height: "31",
            viewBox: "0 0 30 31",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            __vite_ssr_import_1__.createVNode("path", {
              d: "M0 30.1346L2.1192 22.3969C0.81215 20.1325 0.124495 17.5635 0.125333 14.9317C0.128683 6.69834 6.82899 0 15.0627 0C19.0582 0.00194894 22.8084 1.55688 25.629 4.37939C28.4487 7.20191 30.0014 10.9535 30 14.9438C29.9964 23.1766 23.2949 29.8761 15.0627 29.8761C15.0621 29.8761 15.0633 29.8761 15.0627 29.8761H15.0562C12.5566 29.875 10.1002 29.248 7.91838 28.0582L0 30.1346Z",
              fill: "white"
            }),
            __vite_ssr_import_1__.createVNode("path", {
              d: "M15.0675 2.52246C8.21924 2.52246 2.64998 8.08969 2.64746 14.9327C2.64645 17.2776 3.3027 19.5616 4.5454 21.5378L4.84083 22.0073L3.58631 26.587L8.28526 25.3549L8.739 25.6238C10.6447 26.7549 12.8297 27.353 15.058 27.3541H15.0627C21.9057 27.3541 27.4749 21.7863 27.4777 14.9427C27.479 11.6264 26.1889 8.50793 23.8448 6.16213C21.5007 3.81633 18.3838 2.52386 15.0675 2.52246Z",
              fill: "url(#paint0_linear_1507_23)"
            }),
            __vite_ssr_import_1__.createVNode("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M11.3295 8.68869C11.0497 8.06734 10.7554 8.05475 10.4896 8.04384C10.272 8.0346 10.023 8.03516 9.77426 8.03516C9.52527 8.03516 9.12101 8.1286 8.77915 8.50209C8.437 8.87557 7.47266 9.77836 7.47266 11.6147C7.47266 13.4511 8.8102 15.2253 8.99652 15.4746C9.18312 15.7236 11.5784 19.6123 15.3723 21.1082C18.5249 22.3514 19.1664 22.1041 19.851 22.042C20.5353 21.9799 22.0592 21.1392 22.37 20.2678C22.6811 19.3963 22.6811 18.6496 22.5879 18.4935C22.4945 18.3377 22.2458 18.2445 21.8723 18.0579C21.4991 17.8713 19.6641 16.9682 19.322 16.8437C18.9798 16.7193 18.7311 16.6571 18.4821 17.0306C18.2334 17.4041 17.5186 18.2445 17.3007 18.4935C17.083 18.7428 16.8654 18.7738 16.4919 18.5872C16.1187 18.4001 14.9166 18.0064 13.4906 16.7349C12.3811 15.7457 11.6322 14.524 11.4142 14.1505C11.1966 13.777 11.391 13.575 11.5782 13.389C11.7457 13.2217 11.9514 12.9531 12.1382 12.7352C12.3243 12.5172 12.3867 12.3617 12.5109 12.113C12.6354 11.8637 12.5733 11.6458 12.4798 11.4592C12.3867 11.2726 11.6613 9.4267 11.3295 8.68869",
              fill: "white"
            }),
            __vite_ssr_import_1__.createVNode("defs", null, [
              __vite_ssr_import_1__.createVNode("linearGradient", {
                id: "paint0_linear_1507_23",
                x1: "14.8098",
                y1: "4.01263",
                x2: "14.9358",
                y2: "25.2327",
                gradientUnits: "userSpaceOnUse"
              }, [
                __vite_ssr_import_1__.createVNode("stop", { "stop-color": "#57D163" }),
                __vite_ssr_import_1__.createVNode("stop", {
                  offset: "1",
                  "stop-color": "#23B33A"
                })
              ])
            ])
          ]))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li><li class="mr-[27px] last:mr-0">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"${
          _scopeId
        }><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4 0H19.6C28 0 30 2 30 10.4V19.6C30 28 28 30 19.6 30H10.4C2 30 0 28 0 19.6V10.4C0 2 2 0 10.4 0Z" fill="#2787F5"${
          _scopeId
        }></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.5678 10.3353C24.7068 9.87184 24.5678 9.53125 23.9063 9.53125H21.7188C21.1625 9.53125 20.9061 9.82547 20.7671 10.1499C20.7671 10.1499 19.6546 12.8614 18.0787 14.6227C17.5689 15.1325 17.3371 15.2947 17.059 15.2947C16.92 15.2947 16.7187 15.1325 16.7187 14.6691V10.3353C16.7187 9.77914 16.5573 9.53125 16.0938 9.53125H12.6563C12.3087 9.53125 12.0996 9.7894 12.0996 10.0341C12.0996 10.5613 12.8875 10.6829 12.9688 12.1662V15.3875C12.9688 16.0937 12.8412 16.2218 12.5631 16.2218C11.8215 16.2218 10.0177 13.4982 8.94778 10.3817C8.73812 9.77594 8.52782 9.53125 7.96876 9.53125H5.78126C5.15626 9.53125 5.03125 9.82547 5.03125 10.1499C5.03125 10.7293 5.77286 13.603 8.48431 17.4037C10.2919 19.9993 12.8388 21.4062 15.1563 21.4062C16.5467 21.4062 16.7188 21.0937 16.7188 20.5555V18.5938C16.7188 17.9688 16.8505 17.844 17.2908 17.844C17.6152 17.844 18.1715 18.0062 19.4693 19.2577C20.9525 20.7409 21.197 21.4062 22.0313 21.4062H24.2188C24.8438 21.4062 25.1563 21.0938 24.976 20.477C24.7787 19.8624 24.0706 18.9706 23.1309 17.9135C22.621 17.311 21.8563 16.6621 21.6245 16.3376C21.3001 15.9205 21.3928 15.7351 21.6245 15.3643C21.6245 15.3643 24.2897 11.6099 24.5678 10.3353V10.3353Z" fill="white"${
          _scopeId
        }></path></svg>`)
      } else {
        return [
          (__vite_ssr_import_1__.openBlock(), __vite_ssr_import_1__.createBlock("svg", {
            width: "30",
            height: "30",
            viewBox: "0 0 30 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            __vite_ssr_import_1__.createVNode("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M10.4 0H19.6C28 0 30 2 30 10.4V19.6C30 28 28 30 19.6 30H10.4C2 30 0 28 0 19.6V10.4C0 2 2 0 10.4 0Z",
              fill: "#2787F5"
            }),
            __vite_ssr_import_1__.createVNode("path", {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M24.5678 10.3353C24.7068 9.87184 24.5678 9.53125 23.9063 9.53125H21.7188C21.1625 9.53125 20.9061 9.82547 20.7671 10.1499C20.7671 10.1499 19.6546 12.8614 18.0787 14.6227C17.5689 15.1325 17.3371 15.2947 17.059 15.2947C16.92 15.2947 16.7187 15.1325 16.7187 14.6691V10.3353C16.7187 9.77914 16.5573 9.53125 16.0938 9.53125H12.6563C12.3087 9.53125 12.0996 9.7894 12.0996 10.0341C12.0996 10.5613 12.8875 10.6829 12.9688 12.1662V15.3875C12.9688 16.0937 12.8412 16.2218 12.5631 16.2218C11.8215 16.2218 10.0177 13.4982 8.94778 10.3817C8.73812 9.77594 8.52782 9.53125 7.96876 9.53125H5.78126C5.15626 9.53125 5.03125 9.82547 5.03125 10.1499C5.03125 10.7293 5.77286 13.603 8.48431 17.4037C10.2919 19.9993 12.8388 21.4062 15.1563 21.4062C16.5467 21.4062 16.7188 21.0937 16.7188 20.5555V18.5938C16.7188 17.9688 16.8505 17.844 17.2908 17.844C17.6152 17.844 18.1715 18.0062 19.4693 19.2577C20.9525 20.7409 21.197 21.4062 22.0313 21.4062H24.2188C24.8438 21.4062 25.1563 21.0938 24.976 20.477C24.7787 19.8624 24.0706 18.9706 23.1309 17.9135C22.621 17.311 21.8563 16.6621 21.6245 16.3376C21.3001 15.9205 21.3928 15.7351 21.6245 15.3643C21.6245 15.3643 24.2897 11.6099 24.5678 10.3353V10.3353Z",
              fill: "white"
            })
          ]))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li></ul></div></div></div></footer>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/PrometeiFooter.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/components/PrometeiFooter.vue"]]);
}


// --------------------
// Request: /assets/images/footer-logo.svg
// Parents: 
// - /components/PrometeiFooter.vue ($id_04928ae8)
// Dependencies: 

// --------------------
const $id_79b8e24e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/footer-logo.svg";
}


// --------------------
// Request: /layouts/shop.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /layouts/shop.vue ($id_8067d08d)
// Dependencies: 

// --------------------
const $id_cad6a901 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "*{font-family:inherit}body{font-family:\"Exo 2\",sans-serif}";
}


// --------------------
// Request: /pages/cart/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs ($id_eb849233)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /store/cart/cart.js ($id_08ef3e2f)
// - /components/UI/AmountCounter.vue ($id_5db0a46a)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/cart/index.vue?vue&type=style&index=0&lang.css ($id_b6616365)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7c49fc15 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/store/cart/cart.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/UI/AmountCounter.vue");



const _sfc_main = {
  name: 'index',
  setup(__props, { expose }) {
  expose();

const cart = __vite_ssr_import_5__.useCart();

const cartItems = __vite_ssr_import_2__.computed(() => {
  return cart.items;
});

const updateCartItemAmount = (item) => {
  cart.updateCartItem(item);
};

const deleteItem = (item) => {
  cart.removeFromCart(item);
};

const config = __vite_ssr_import_3__.useRuntimeConfig();

const getImageLink = (imageUrl) => {
  return `${config.API_URL}${imageUrl}`;
};

const pickedDelivery = __vite_ssr_import_2__.computed(() =>
  cartItems.value.length ? cart.$state.selectedDelivery : null
);

const selectDelivery = (value) => {
  cart.updateDelivery(value);
};

const cartTotalCounter = __vite_ssr_import_2__.computed(() =>
  cartItems.value.reduce((acc, item) => acc + item.count, 0)
);

const cartTotalSum = __vite_ssr_import_2__.computed(() =>
  cartItems.value.reduce((acc, item) => acc + item.count * item.price, 0)
);

__vite_ssr_import_4__.useHead({
  title: `???????????????? ??? ??????????????`,
});

const __returned__ = { cart, cartItems, updateCartItemAmount, deleteItem, config, getImageLink, pickedDelivery, selectDelivery, cartTotalCounter, cartTotalSum, useCart: __vite_ssr_import_5__.useCart, AmountCounter: __vite_ssr_import_6__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtLink = __vite_ssr_import_1__.default

  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_7__.mergeProps({ name: "shop" }, _attrs), {
    default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex-grow"${
          _scopeId
        }><main class="mt-[102px] mb-[40px] flex-grow"${
          _scopeId
        }><div class="max-w-screen-xl w-full mx-auto"${
          _scopeId
        }><div class="page-header flex items-center"${
          _scopeId
        }><div class="flex items-center"${
          _scopeId
        }>`)
        _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
        }, {
          default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
                _scopeId
              }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"${
                _scopeId
              }></path></svg><span class="ml-[5px]"${
                _scopeId
              }>???? ??????????????</span>`)
            } else {
              return [
                (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("svg", {
                  class: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  __vite_ssr_import_7__.createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  })
                ])),
                __vite_ssr_import_7__.createVNode("span", { class: "ml-[5px]" }, "???? ??????????????")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`</div></div><div class="page-header mb-[20px] flex items-center"${
          _scopeId
        }><h1 class="flex-grow text-primary text-[36px] font-bold"${
          _scopeId
        }> ?????????????? </h1></div><div class="flex gap-[40px]"${
          _scopeId
        }><div class="flex-1"${
          _scopeId
        }><ul class="flex flex-col gap-[20px]"${
          _scopeId
        }><!--[-->`)
        if (!$setup.cartItems.length) {
          _push(`<div${
            _scopeId
          }><div class="flex flex-col justify-center items-center font-medium text-secondary"${
            _scopeId
          }><span class="text-[26px]"${
            _scopeId
          }>?????? ???????? ??????????.</span><span class="text-[21px] mb-[25px]"${
            _scopeId
          }>?????????????????????????? ???????? ?????????????????? ????????????????!</span><div class="text-[21px] text-center"${
            _scopeId
          }>??\\_(???)_/??</div></div></div>`)
        } else {
          _push(`<!--[-->`)
          __vite_ssr_import_8__.ssrRenderList($setup.cartItems, (item) => {
            _push(`<li class="flex items-center justify-between rounded-[4px] border-[2px] border-grey-text p-[50px]"${_scopeId}>`)
            _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtLink, {
              to: `/products/${item.productCard}_${item.article}`,
              class: "breadcrumb flex items-start"
            }, {
              default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                if (_push) {
                  _push(`<div class="image w-[120px] h-[120px] bg-center bg-cover bg-no-repeat mr-[40px]" style="${
                    __vite_ssr_import_8__.ssrRenderStyle(`background-image: url('${$setup.getImageLink(
                            item.imageUrl
                          )}')`)
                  }"${
                    _scopeId
                  }></div><div class="flex flex-col max-w-[180px]"${
                    _scopeId
                  }><span class="text-[16px] text-grey-text"${
                    _scopeId
                  }> ?????????????? ${
                    __vite_ssr_import_8__.ssrInterpolate(item.article)
                  }</span><span class="text-[21px] text-secondary leading-[25px] font-medium capitalize"${
                    _scopeId
                  }>${
                    __vite_ssr_import_8__.ssrInterpolate(item.title)
                  }</span><span${
                    _scopeId
                  }>${
                    __vite_ssr_import_8__.ssrInterpolate(item.color.title)
                  }, ${
                    __vite_ssr_import_8__.ssrInterpolate(item.size.value)
                  }</span></div>`)
                } else {
                  return [
                    __vite_ssr_import_7__.createVNode("div", {
                      class: "image w-[120px] h-[120px] bg-center bg-cover bg-no-repeat mr-[40px]",
                      style: `background-image: url('${$setup.getImageLink(
                            item.imageUrl
                          )}')`
                    }, null, 4 /* STYLE */),
                    __vite_ssr_import_7__.createVNode("div", { class: "flex flex-col max-w-[180px]" }, [
                      __vite_ssr_import_7__.createVNode("span", { class: "text-[16px] text-grey-text" }, " ?????????????? " + __vite_ssr_import_7__.toDisplayString(item.article), 1 /* TEXT */),
                      __vite_ssr_import_7__.createVNode("span", { class: "text-[21px] text-secondary leading-[25px] font-medium capitalize" }, __vite_ssr_import_7__.toDisplayString(item.title), 1 /* TEXT */),
                      __vite_ssr_import_7__.createVNode("span", null, __vite_ssr_import_7__.toDisplayString(item.color.title) + ", " + __vite_ssr_import_7__.toDisplayString(item.size.value), 1 /* TEXT */)
                    ])
                  ]
                }
              }),
              _: 2 /* DYNAMIC */
            }, _parent, _scopeId))
            _push(`<div class="ml-[40px] flex flex-1 justify-between items-center"${
              _scopeId
            }><div class="relative"${
              _scopeId
            }>`)
            _push(__vite_ssr_import_8__.ssrRenderComponent($setup["AmountCounter"], {
              modelValue: item.count,
              "onUpdate:modelValue": [$event => ((item.count) = $event), $event => ($setup.updateCartItemAmount(item))],
              max: item.amount
            }, null, _parent, _scopeId))
            if (item.count > 1) {
              _push(`<span class="absolute bottom-[calc(-100%+5px)] left-0 text-[21px] text-grey-text font-medium"${
                _scopeId
              }>${
                __vite_ssr_import_8__.ssrInterpolate(item.price)
              } ???/ ????</span>`)
            } else {
              _push(`<!---->`)
            }
            _push(`</div><div class="text-[21px] text-secondary font-medium"${
              _scopeId
            }>${
              __vite_ssr_import_8__.ssrInterpolate(item.count * item.price)
            } ??? </div><button class="text-secondary hover:text-orange hover:bg-grey-light rounded-[4px] p-[5px] h-[40px] w-[40px] transition-colors"${
              _scopeId
            }><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
              _scopeId
            }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"${
              _scopeId
            }></path></svg></button></div></li>`)
          })
          _push(`<!--]-->`)
        }
        _push(`<!--]--></ul></div><div class="w-[300px] relative"${
          _scopeId
        }><div class="left-0 top-0 sidebar"${
          _scopeId
        }><div class="flex flex-col gap-[10px] mb-[10px]"${
          _scopeId
        }><button class="${
          __vite_ssr_import_8__.ssrRenderClass([{
                      'border-grey-text': $setup.pickedDelivery !== 'delivery',
                      'border-primary cursor-default':
                        $setup.pickedDelivery === 'delivery',
                    }, "flex flex-col px-[13px] py-[10px] rounded-[4px] border-[2px] w-full relative"])
        }"${
          (__vite_ssr_import_8__.ssrIncludeBooleanAttr(!$setup.cartItems.length)) ? " disabled" : ""
        }${
          _scopeId
        }><span class="text-secondary font-medium text-[21px]"${
          _scopeId
        }>????????????????</span><span class="text-grey-text"${
          _scopeId
        }>?????????? ????????????, DHL, Boxberry</span>`)
        if ($setup.pickedDelivery === 'delivery') {
          _push(`<div class="absolute flex justify-center items-center top-[-10px] right-[-10px] bg-white p-[4px]"${
            _scopeId
          }><div class="flex justify-center items-center h-[24px] w-[24px] bg-primary rounded-[4px] text-white"${
            _scopeId
          }><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
            _scopeId
          }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"${
            _scopeId
          }></path></svg></div></div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`</button><button class="${
          __vite_ssr_import_8__.ssrRenderClass([{
                      'border-grey-text': $setup.pickedDelivery !== 'pickup',
                      'border-primary': $setup.pickedDelivery === 'pickup',
                    }, "flex flex-col px-[13px] py-[10px] rounded-[4px] border-[2px] w-full relative"])
        }"${
          (__vite_ssr_import_8__.ssrIncludeBooleanAttr(!$setup.cartItems.length)) ? " disabled" : ""
        }${
          _scopeId
        }><span class="text-secondary font-medium text-[21px]"${
          _scopeId
        }>??????????????????</span><span class="text-grey-text"${
          _scopeId
        }>???????????????? ?????????? ?? ????????????????</span>`)
        if ($setup.pickedDelivery === 'pickup') {
          _push(`<div class="absolute flex justify-center items-center top-[-10px] right-[-10px] bg-white p-[4px]"${
            _scopeId
          }><div class="flex justify-center items-center h-[24px] w-[24px] bg-primary rounded-[4px] text-white"${
            _scopeId
          }><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
            _scopeId
          }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"${
            _scopeId
          }></path></svg></div></div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`</button></div><div class="flex flex-col gap-[15px] pt-[32px] px-[13px] pb-[20px] rounded-[4px] border-[2px] border-grey-text"${
          _scopeId
        }><div class="flex justify-between items-center text-[21px] text-grey-text"${
          _scopeId
        }><div${
          _scopeId
        }>???????????? (${
          __vite_ssr_import_8__.ssrInterpolate($setup.cartTotalCounter)
        }):</div><div${
          _scopeId
        }>${
          __vite_ssr_import_8__.ssrInterpolate($setup.cartTotalSum)
        } ???</div></div><div class="flex justify-between items-center text-[21px]"${
          _scopeId
        }><div class="text-grey-text"${
          _scopeId
        }>????????????????:</div><div class="text-primary"${
          _scopeId
        }>${
          __vite_ssr_import_8__.ssrInterpolate($setup.pickedDelivery === "delivery" ? "????????????????" : "??????????????????")
        }</div></div><div class="divider shadow-divider w-full h-[2px] bg-grey-light rounded-full"${
          _scopeId
        }></div><div class="flex justify-between items-center text-[21px] text-secondary"${
          _scopeId
        }><div${
          _scopeId
        }>??????????:</div><div${
          _scopeId
        }>${
          __vite_ssr_import_8__.ssrInterpolate($setup.cartTotalSum)
        } ???</div></div><div class="divider shadow-divider w-full h-[2px] bg-grey-light rounded-full"${
          _scopeId
        }></div><button class="${
          __vite_ssr_import_8__.ssrRenderClass([{
                      'bg-grey-light text-grey-text': $setup.cartTotalSum === 0,
                      'hover:bg-white border-[2px] border-primary hover:text-primary text-white ':
                        $setup.cartTotalSum !== 0,
                    }, "bg-primary text-[21px] text-center py-[12px] rounded-[4px] transition-colors"])
        }"${
          (__vite_ssr_import_8__.ssrIncludeBooleanAttr($setup.cartTotalSum === 0)) ? " disabled" : ""
        }${
          _scopeId
        }> ?????????????? ?? ???????????????????? </button></div></div></div></div></div></main></div>`)
      } else {
        return [
          __vite_ssr_import_7__.createVNode("div", { class: "flex-grow" }, [
            __vite_ssr_import_7__.createVNode("main", { class: "mt-[102px] mb-[40px] flex-grow" }, [
              __vite_ssr_import_7__.createVNode("div", { class: "max-w-screen-xl w-full mx-auto" }, [
                __vite_ssr_import_7__.createVNode("div", { class: "page-header flex items-center" }, [
                  __vite_ssr_import_7__.createVNode("div", { class: "flex items-center" }, [
                    __vite_ssr_import_7__.createVNode(_component_NuxtLink, {
                      to: "/",
                      class: "breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
                    }, {
                      default: __vite_ssr_import_7__.withCtx(() => [
                        (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("svg", {
                          class: "w-6 h-6",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          __vite_ssr_import_7__.createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          })
                        ])),
                        __vite_ssr_import_7__.createVNode("span", { class: "ml-[5px]" }, "???? ??????????????")
                      ]),
                      _: 1 /* STABLE */
                    })
                  ])
                ]),
                __vite_ssr_import_7__.createVNode("div", { class: "page-header mb-[20px] flex items-center" }, [
                  __vite_ssr_import_7__.createVNode("h1", { class: "flex-grow text-primary text-[36px] font-bold" }, " ?????????????? ")
                ]),
                __vite_ssr_import_7__.createVNode("div", { class: "flex gap-[40px]" }, [
                  __vite_ssr_import_7__.createVNode("div", { class: "flex-1" }, [
                    __vite_ssr_import_7__.createVNode("ul", { class: "flex flex-col gap-[20px]" }, [
                      __vite_ssr_import_7__.createVNode(__vite_ssr_import_7__.TransitionGroup, { name: "list" }, {
                        default: __vite_ssr_import_7__.withCtx(() => [
                          (!$setup.cartItems.length)
                            ? (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", { key: 0 }, [
                                __vite_ssr_import_7__.createVNode("div", { class: "flex flex-col justify-center items-center font-medium text-secondary" }, [
                                  __vite_ssr_import_7__.createVNode("span", { class: "text-[26px]" }, "?????? ???????? ??????????."),
                                  __vite_ssr_import_7__.createVNode("span", { class: "text-[21px] mb-[25px]" }, "?????????????????????????? ???????? ?????????????????? ????????????????!"),
                                  __vite_ssr_import_7__.createVNode("div", { class: "text-[21px] text-center" }, "??\\_(???)_/??")
                                ])
                              ]))
                            : (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, { key: 1 }, __vite_ssr_import_7__.renderList($setup.cartItems, (item) => {
                                return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", { class: "flex items-center justify-between rounded-[4px] border-[2px] border-grey-text p-[50px]" }, [
                                  __vite_ssr_import_7__.createVNode(_component_NuxtLink, {
                                    to: `/products/${item.productCard}_${item.article}`,
                                    class: "breadcrumb flex items-start"
                                  }, {
                                    default: __vite_ssr_import_7__.withCtx(() => [
                                      __vite_ssr_import_7__.createVNode("div", {
                                        class: "image w-[120px] h-[120px] bg-center bg-cover bg-no-repeat mr-[40px]",
                                        style: `background-image: url('${$setup.getImageLink(
                            item.imageUrl
                          )}')`
                                      }, null, 4 /* STYLE */),
                                      __vite_ssr_import_7__.createVNode("div", { class: "flex flex-col max-w-[180px]" }, [
                                        __vite_ssr_import_7__.createVNode("span", { class: "text-[16px] text-grey-text" }, " ?????????????? " + __vite_ssr_import_7__.toDisplayString(item.article), 1 /* TEXT */),
                                        __vite_ssr_import_7__.createVNode("span", { class: "text-[21px] text-secondary leading-[25px] font-medium capitalize" }, __vite_ssr_import_7__.toDisplayString(item.title), 1 /* TEXT */),
                                        __vite_ssr_import_7__.createVNode("span", null, __vite_ssr_import_7__.toDisplayString(item.color.title) + ", " + __vite_ssr_import_7__.toDisplayString(item.size.value), 1 /* TEXT */)
                                      ])
                                    ]),
                                    _: 2 /* DYNAMIC */
                                  }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]),
                                  __vite_ssr_import_7__.createVNode("div", { class: "ml-[40px] flex flex-1 justify-between items-center" }, [
                                    __vite_ssr_import_7__.createVNode("div", { class: "relative" }, [
                                      __vite_ssr_import_7__.createVNode($setup["AmountCounter"], {
                                        modelValue: item.count,
                                        "onUpdate:modelValue": [$event => ((item.count) = $event), $event => ($setup.updateCartItemAmount(item))],
                                        max: item.amount
                                      }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue", "max"]),
                                      (item.count > 1)
                                        ? (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("span", {
                                            key: 0,
                                            class: "absolute bottom-[calc(-100%+5px)] left-0 text-[21px] text-grey-text font-medium"
                                          }, __vite_ssr_import_7__.toDisplayString(item.price) + " ???/ ????", 1 /* TEXT */))
                                        : __vite_ssr_import_7__.createCommentVNode("v-if", true)
                                    ]),
                                    __vite_ssr_import_7__.createVNode("div", { class: "text-[21px] text-secondary font-medium" }, __vite_ssr_import_7__.toDisplayString(item.count * item.price) + " ??? ", 1 /* TEXT */),
                                    __vite_ssr_import_7__.createVNode("button", {
                                      class: "text-secondary hover:text-orange hover:bg-grey-light rounded-[4px] p-[5px] h-[40px] w-[40px] transition-colors",
                                      onClick: $event => ($setup.deleteItem(item.article))
                                    }, [
                                      (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("svg", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg"
                                      }, [
                                        __vite_ssr_import_7__.createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        })
                                      ]))
                                    ], 8 /* PROPS */, ["onClick"])
                                  ])
                                ]))
                              }), 256 /* UNKEYED_FRAGMENT */))
                        ]),
                        _: 1 /* STABLE */
                      })
                    ])
                  ]),
                  __vite_ssr_import_7__.createVNode("div", { class: "w-[300px] relative" }, [
                    __vite_ssr_import_7__.createVNode("div", { class: "left-0 top-0 sidebar" }, [
                      __vite_ssr_import_7__.createVNode("div", { class: "flex flex-col gap-[10px] mb-[10px]" }, [
                        __vite_ssr_import_7__.createVNode("button", {
                          class: ["flex flex-col px-[13px] py-[10px] rounded-[4px] border-[2px] w-full relative", {
                      'border-grey-text': $setup.pickedDelivery !== 'delivery',
                      'border-primary cursor-default':
                        $setup.pickedDelivery === 'delivery',
                    }],
                          disabled: !$setup.cartItems.length,
                          onClick: $event => ($setup.selectDelivery('delivery'))
                        }, [
                          __vite_ssr_import_7__.createVNode("span", { class: "text-secondary font-medium text-[21px]" }, "????????????????"),
                          __vite_ssr_import_7__.createVNode("span", { class: "text-grey-text" }, "?????????? ????????????, DHL, Boxberry"),
                          ($setup.pickedDelivery === 'delivery')
                            ? (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                                key: 0,
                                class: "absolute flex justify-center items-center top-[-10px] right-[-10px] bg-white p-[4px]"
                              }, [
                                __vite_ssr_import_7__.createVNode("div", { class: "flex justify-center items-center h-[24px] w-[24px] bg-primary rounded-[4px] text-white" }, [
                                  (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    __vite_ssr_import_7__.createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M5 13l4 4L19 7"
                                    })
                                  ]))
                                ])
                              ]))
                            : __vite_ssr_import_7__.createCommentVNode("v-if", true)
                        ], 10 /* CLASS, PROPS */, ["disabled", "onClick"]),
                        __vite_ssr_import_7__.createVNode("button", {
                          class: ["flex flex-col px-[13px] py-[10px] rounded-[4px] border-[2px] w-full relative", {
                      'border-grey-text': $setup.pickedDelivery !== 'pickup',
                      'border-primary': $setup.pickedDelivery === 'pickup',
                    }],
                          disabled: !$setup.cartItems.length,
                          onClick: $event => ($setup.selectDelivery('pickup'))
                        }, [
                          __vite_ssr_import_7__.createVNode("span", { class: "text-secondary font-medium text-[21px]" }, "??????????????????"),
                          __vite_ssr_import_7__.createVNode("span", { class: "text-grey-text" }, "???????????????? ?????????? ?? ????????????????"),
                          ($setup.pickedDelivery === 'pickup')
                            ? (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                                key: 0,
                                class: "absolute flex justify-center items-center top-[-10px] right-[-10px] bg-white p-[4px]"
                              }, [
                                __vite_ssr_import_7__.createVNode("div", { class: "flex justify-center items-center h-[24px] w-[24px] bg-primary rounded-[4px] text-white" }, [
                                  (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    __vite_ssr_import_7__.createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M5 13l4 4L19 7"
                                    })
                                  ]))
                                ])
                              ]))
                            : __vite_ssr_import_7__.createCommentVNode("v-if", true)
                        ], 10 /* CLASS, PROPS */, ["disabled", "onClick"])
                      ]),
                      __vite_ssr_import_7__.createVNode("div", { class: "flex flex-col gap-[15px] pt-[32px] px-[13px] pb-[20px] rounded-[4px] border-[2px] border-grey-text" }, [
                        __vite_ssr_import_7__.createVNode("div", { class: "flex justify-between items-center text-[21px] text-grey-text" }, [
                          __vite_ssr_import_7__.createVNode("div", null, "???????????? (" + __vite_ssr_import_7__.toDisplayString($setup.cartTotalCounter) + "):", 1 /* TEXT */),
                          __vite_ssr_import_7__.createVNode("div", null, __vite_ssr_import_7__.toDisplayString($setup.cartTotalSum) + " ???", 1 /* TEXT */)
                        ]),
                        __vite_ssr_import_7__.createVNode("div", { class: "flex justify-between items-center text-[21px]" }, [
                          __vite_ssr_import_7__.createVNode("div", { class: "text-grey-text" }, "????????????????:"),
                          __vite_ssr_import_7__.createVNode("div", { class: "text-primary" }, __vite_ssr_import_7__.toDisplayString($setup.pickedDelivery === "delivery" ? "????????????????" : "??????????????????"), 1 /* TEXT */)
                        ]),
                        __vite_ssr_import_7__.createVNode("div", { class: "divider shadow-divider w-full h-[2px] bg-grey-light rounded-full" }),
                        __vite_ssr_import_7__.createVNode("div", { class: "flex justify-between items-center text-[21px] text-secondary" }, [
                          __vite_ssr_import_7__.createVNode("div", null, "??????????:"),
                          __vite_ssr_import_7__.createVNode("div", null, __vite_ssr_import_7__.toDisplayString($setup.cartTotalSum) + " ???", 1 /* TEXT */)
                        ]),
                        __vite_ssr_import_7__.createVNode("div", { class: "divider shadow-divider w-full h-[2px] bg-grey-light rounded-full" }),
                        __vite_ssr_import_7__.createVNode("button", {
                          class: ["bg-primary text-[21px] text-center py-[12px] rounded-[4px] transition-colors", {
                      'bg-grey-light text-grey-text': $setup.cartTotalSum === 0,
                      'hover:bg-white border-[2px] border-primary hover:text-primary text-white ':
                        $setup.cartTotalSum !== 0,
                    }],
                          disabled: $setup.cartTotalSum === 0
                        }, " ?????????????? ?? ???????????????????? ", 10 /* CLASS, PROPS */, ["disabled"])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}

const __vite_ssr_import_9__ = await __vite_ssr_import__("/pages/cart/index.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/cart/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_11__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/cart/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/UI/AmountCounter.vue
// Parents: 
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /pages/cart/index.vue ($id_3fa45d07)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5db0a46a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_main = {
  name: 'AmountCounter',
  props: {
  modelValue: {
    type: [String, Number],
    default: 1,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  max: {
    type: [Number, String],
    default: 1,
  },
},
  setup(__props, { expose, emit }) {
  expose();

const props = __props




const counter = __vite_ssr_import_0__.ref(0);

counter.value = props.modelValue;

const changeCounterValue = (value) => {
  const newValue = Number(counter.value) + value;
  if (counter.value > 0 && newValue > 0) {
    counter.value = newValue;
  }
  emit("update:modelValue", counter.value);
};

const increaseCounter = () => {
  changeCounterValue(1);
};
const decreaseCounter = () => {
  changeCounterValue(-1);
};

const increaseDisabled = __vite_ssr_import_0__.computed(() => counter.value + 1 > props.max);

const setCounterValue = (value) => {
  counter.value = value;
  emit("update:modelValue", counter.value);
};

const nullOrEmptyHandler = () => {
  typeHandler();

  if (counter.value === null || counter.value === "" || counter.value == 0) {
    setCounterValue(1);
  } else if (counter.value > props.max) {
    setCounterValue(props.max);
  }
};

const typeHandler = () => {
  const newValue = counter.value.toString().replace(/[^0-9]/g, "");
  setCounterValue(Number(newValue));
};

const __returned__ = { emit, props, counter, changeCounterValue, increaseCounter, decreaseCounter, increaseDisabled, setCounterValue, nullOrEmptyHandler, typeHandler }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "flex justify-between items-center gap-[5px] h-[50px]" }, _attrs))
  }><button class="${
    __vite_ssr_import_2__.ssrRenderClass([{
        'cursor-pointer hover:text-white hover:bg-orange': !$props.disabled,
      }, "w-[54px] h-[54px] p-[12px] flex justify-center items-center text-grey-text transition-colors rounded-[4px] bg-grey-light"])
  }"${
    (__vite_ssr_import_2__.ssrIncludeBooleanAttr($props.disabled)) ? " disabled" : ""
  }><svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg></button><input${
    __vite_ssr_import_2__.ssrRenderAttr("value", $setup.counter)
  } class="h-[60px] w-[60px] text-center focus:border-primary focus:border-[2px] outline-none text-secondary border-grey-light border-[2px] rounded-[4px]"${
    (__vite_ssr_import_2__.ssrIncludeBooleanAttr($props.disabled)) ? " disabled" : ""
  }><button class="${
    __vite_ssr_import_2__.ssrRenderClass([{
        'cursor-pointer hover:bg-primary hover:text-white': !$setup.increaseDisabled,
        'bg-grey-text text-grey-light': $setup.increaseDisabled,
      }, "w-[54px] h-[54px] p-[12px] flex justify-center items-center text-grey-text transition-colors rounded-[4px] bg-grey-light"])
  }"${
    (__vite_ssr_import_2__.ssrIncludeBooleanAttr($setup.increaseDisabled)) ? " disabled" : ""
  }><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></button></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/UI/AmountCounter.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/components/UI/AmountCounter.vue"]]);
}


// --------------------
// Request: /pages/cart/index.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /pages/cart/index.vue?macro=true ($id_7c49fc15)
// - /pages/cart/index.vue ($id_3fa45d07)
// Dependencies: 

// --------------------
const $id_b6616365 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ":root{--space:120px}.sidebar{--offset:var(--space);position:-webkit-sticky;position:sticky;top:var(--offset)}.list-enter-active{transition:all .5s ease-out;transition-delay:.3s}.list-leave-active{transition:all .3s ease-out}.list-enter-from{opacity:0;transform:translateY(-30px)}.list-leave-to{opacity:0;transform:translateX(-30px)}";
}


// --------------------
// Request: /pages/categories/[slug]/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs ($id_eb849233)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs ($id_63a2fd8b)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /store/cart/cart.js ($id_08ef3e2f)
// - /components/ProductFilter.vue ($id_16ebd3b1)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b19ac374 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/store/cart/cart.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/components/ProductFilter.vue");



const _sfc_main = {
  name: 'index',
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const config = __vite_ssr_import_2__.useRuntimeConfig();
const route = __vite_ssr_import_2__.useRoute();
const router = __vite_ssr_import_2__.useRouter();

const categorySlug = route.params.slug;
const dataProducts = __vite_ssr_import_3__.ref([]);
const loading = __vite_ssr_import_3__.ref(false);

const data = (
  ([__temp,__restore] = __vite_ssr_import_6__.withAsyncContext(() => __vite_ssr_import_4__.GqlGetCategoryBySlug({ slug: categorySlug }))),
  __temp = await __temp,
  __restore(),
  __temp
);

const categoryBrands = __vite_ssr_import_3__.computed(() => data.brands.data);

const currentCategory = data?.categories?.data[0]?.attributes;

if (
  !currentCategory.value ||
  (currentCategory.value && !currentCategory.value.lenght)
) {
  // router.push("/404");
}

const isProductsVisible = __vite_ssr_import_3__.computed(() => currentCategory.showProducts);
const isRelatedCategoriesVisible = __vite_ssr_import_3__.computed(
  () => currentCategory.showRelated
);

const relatedCategories = __vite_ssr_import_3__.computed(
  () => currentCategory.related.data
);

const parentCategory = __vite_ssr_import_3__.computed(() => currentCategory.parent?.data?.attributes);

const getProducts = async (query) => {
  loading.value = true;
  const productsData = __vite_ssr_import_3__.ref([]);
  const toSendData = {
    slug: currentCategory.slug,
  };

  if (query) {
    const brandsList = query.brandsList;
    const price = query.price;

    if (brandsList && brandsList.length) {
      toSendData.brands = brandsList;
    }

    if (price) {
      if (price.from) {
        toSendData.priceFrom = Number(price.from);
      }

      if (price.to) {
        toSendData.priceTo = Number(price.to);
      }
    }
  }
  // turn on filter
  if (Object.keys(toSendData).length > 1) {
    filterIsActive.value = true;
  }

  productsData.value = await __vite_ssr_import_4__.GqlProductsBySubcategorySlug(toSendData);

  dataProducts.value = productsData.value.products.data;
  loading.value = false;
};

const filterIsActive = __vite_ssr_import_3__.ref(false);

const clearFilter = async () => {
  await getProducts();
};

const getFilteredProducts = async () => {
  const query = {};
  const brands = route.query.brands;
  const from = route.query.from;
  const to = route.query.to;
  if (brands) {
    query.brandsList = brands.split(",").map((item) => Number(item));
  }

  if (from) {
    if (!query.price) {
      query.price = {};
    }
    query.price.from = from;
  }
  if (to) {
    if (!query.price) {
      query.price = {};
    }
    query.price.to = to;
  }

  await getProducts(query);
};

const preSearchQuery = __vite_ssr_import_3__.ref({});
if (route.query.from) {
  if (!preSearchQuery.value.price) {
    preSearchQuery.value.price = {};
  }
  preSearchQuery.value.price.from = route.query.from;
}

if (route.query.to) {
  if (!preSearchQuery.value.price) {
    preSearchQuery.value.price = {};
  }
  preSearchQuery.value.price.to = route.query.to;
}

if (route.query.brands) {
  preSearchQuery.value.brandsList = route.query.brands.split(",");
}

;(
  ([__temp,__restore] = __vite_ssr_import_6__.withAsyncContext(() => getProducts(preSearchQuery.value))),
  await __temp,
  __restore()
);

const categoryUrl = (category) => {
  const url = category.attributes?.image?.data?.attributes?.url;
  if (url) {
    return `${config.public.API_URL}${url}`;
  }
  return "";
};

const productUrl = (product) => {
  const url = product.attributes?.images?.data[0]?.attributes?.url;
  if (url) {
    return `${config.public.API_URL}${url}`;
  }
  return "";
};

const cart = __vite_ssr_import_7__.useCart();

const cartItems = __vite_ssr_import_3__.computed(() => {
  return cart.items;
});

const productInCart = (product) => {
  const foundItem = cartItems.value.find(
    (item) => item.article === product.attributes.article
  );

  return !!foundItem;
};

const cartHandler = (product) => {
  if (productInCart(product)) {
    cart.removeFromCart(product.attributes.article);
  } else {
    cart.addToCart({
      count: 1,
      color: product.attributes.color,
      article: product.attributes.article,
      amount: product.attributes.amount,
      size: product.attributes.size,
      title: product.attributes.title,
      price: product.attributes.price,
      imageUrl: product.attributes.images.data[0]?.attributes?.url,
      productCard: product.attributes.parent.slug,
    });
  }
};

__vite_ssr_import_5__.useHead({
  title: `???????????????? ??? ${data.categories.data[0].attributes.title}`,
});

const __returned__ = { config, route, router, categorySlug, dataProducts, loading, data, categoryBrands, currentCategory, isProductsVisible, isRelatedCategoriesVisible, relatedCategories, parentCategory, getProducts, filterIsActive, clearFilter, getFilteredProducts, preSearchQuery, categoryUrl, productUrl, cart, cartItems, productInCart, cartHandler, useCart: __vite_ssr_import_7__.useCart, ProductFilter: __vite_ssr_import_8__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtLink = __vite_ssr_import_1__.default

  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_9__.mergeProps({ name: "shop" }, _attrs), {
    default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex-grow"${
          _scopeId
        }><main class="mt-[102px] mb-[40px] flex-grow"${
          _scopeId
        }><div class="max-w-screen-xl w-full mx-auto"${
          _scopeId
        }><div class="flex items-center"${
          _scopeId
        }>`)
        _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
        }, {
          default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
                _scopeId
              }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"${
                _scopeId
              }></path></svg><span class="ml-[5px]"${
                _scopeId
              }>???? ??????????????</span>`)
            } else {
              return [
                (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("svg", {
                  class: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  __vite_ssr_import_9__.createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  })
                ])),
                __vite_ssr_import_9__.createVNode("span", { class: "ml-[5px]" }, "???? ??????????????")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<div class="divider bg-grey-text ml-[13px] mr-[13px] w-[4px] h-[4px] rounded-full justify-center items-center"${_scopeId}></div>`)
        _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
          to: {
                path: `/categories`,
              },
          class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
        }, {
          default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<span${_scopeId}>?????? ??????????????????</span>`)
            } else {
              return [
                __vite_ssr_import_9__.createVNode("span", null, "?????? ??????????????????")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        if ($setup.parentCategory) {
          _push(`<!--[--><div class="divider bg-grey-text ml-[13px] mr-[13px] w-[4px] h-[4px] rounded-full justify-center items-center"${_scopeId}></div>`)
          _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
            to: {
                  path: `/categories/${$setup.parentCategory.slug}`,
                },
            class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange capitalize"
          }, {
            default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<span${
                  _scopeId
                }>${
                  __vite_ssr_import_10__.ssrInterpolate($setup.parentCategory.title)
                }</span>`)
              } else {
                return [
                  __vite_ssr_import_9__.createVNode("span", null, __vite_ssr_import_9__.toDisplayString($setup.parentCategory.title), 1 /* TEXT */)
                ]
              }
            }),
            _: 1 /* STABLE */
          }, _parent, _scopeId))
          _push(`<!--]-->`)
        } else {
          _push(`<!---->`)
        }
        _push(`</div><div class="page-header mb-[20px] flex items-center"${
          _scopeId
        }><h1 class="flex-grow text-primary text-[36px] font-bold capitalize"${
          _scopeId
        }>${
          __vite_ssr_import_10__.ssrInterpolate($setup.currentCategory.title)
        }</h1></div>`)
        if (
              $setup.currentCategory.items.data && $setup.currentCategory.items.data.length
            ) {
          _push(`<div class="cards flex items-center gap-[20px]"${_scopeId}><!--[-->`)
          __vite_ssr_import_10__.ssrRenderList($setup.currentCategory.items.data, (category) => {
            _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
              to: {
                path: `/categories/${category.attributes.slug}`,
              },
              class: "card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
            }, {
              default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
                if (_push) {
                  _push(`<div class="card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain" style="${
                    __vite_ssr_import_10__.ssrRenderStyle(`background-image: url('${$setup.categoryUrl(category)}')`)
                  }"${
                    _scopeId
                  }></div><div class="flex flex-grow card-text text-[21px] text-secondary capitalize"${
                    _scopeId
                  }>${
                    __vite_ssr_import_10__.ssrInterpolate(category.attributes.title)
                  }</div>`)
                } else {
                  return [
                    __vite_ssr_import_9__.createVNode("div", {
                      class: "card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",
                      style: `background-image: url('${$setup.categoryUrl(category)}')`
                    }, null, 4 /* STYLE */),
                    __vite_ssr_import_9__.createVNode("div", { class: "flex flex-grow card-text text-[21px] text-secondary capitalize" }, __vite_ssr_import_9__.toDisplayString(category.attributes.title), 1 /* TEXT */)
                  ]
                }
              }),
              _: 2 /* DYNAMIC */
            }, _parent, _scopeId))
          })
          _push(`<!--]--></div>`)
        } else {
          _push(`<!---->`)
        }
        if (
              $setup.isProductsVisible &&
              $setup.currentCategory.items.data &&
              $setup.currentCategory.items.data.length
            ) {
          _push(`<div class="section-divider w-full h-[2px] bg-grey-light shadow-divider my-[40px] rounded-full"${_scopeId}></div>`)
        } else {
          _push(`<!---->`)
        }
        if ($setup.isProductsVisible) {
          _push(`<div class="flex justify-between items-start gap-[40px]"${
            _scopeId
          }><aside class="catalog-filter min-w-[300px] flex flex-col"${
            _scopeId
          }>`)
          _push(__vite_ssr_import_10__.ssrRenderComponent($setup["ProductFilter"], {
            modelValue: $setup.filterIsActive,
            "onUpdate:modelValue": $event => (($setup.filterIsActive) = $event),
            brands: $setup.categoryBrands,
            onApply: $setup.getFilteredProducts,
            onClear: $event => ($setup.clearFilter())
          }, null, _parent, _scopeId))
          _push(`</aside><!-- loading-cards -->`)
          if ($setup.loading) {
            _push(`<div class="catalog-list flex-grow flex flex-wrap gap-[25px]"${_scopeId}><!--[-->`)
            __vite_ssr_import_10__.ssrRenderList(4, (item) => {
              _push(`<div class="catalog-list-item font-medium text-[21px] bg-grey w-[calc(33.33%-16.7px)] h-[450px] shadow-card rounded-[4px] relative flex flex-col justify-start p-[30px] animate-pulse"${_scopeId}></div>`)
            })
            _push(`<!--]--></div>`)
          } else if ($setup.dataProducts && $setup.dataProducts.length) {
            _push(`<!--[--><!-- products-list --><div class="catalog-list flex-grow flex flex-wrap gap-[25px]"${_scopeId}><!--[-->`)
            __vite_ssr_import_10__.ssrRenderList($setup.dataProducts, (product, index) => {
              _push(`<div class="catalog-list-item font-medium text-[21px] h-[450px] shadow-card w-[calc(33.33%-16.7px)] hover:shadow-card-hover rounded-[4px] relative flex flex-col justify-start items-center p-[30px] transition-all"${_scopeId}>`)
              _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
                to: `/products/${product.attributes.parent.data.attributes.slug}_${product.attributes.article}`,
                class: "flex item-image bg-center bg-no-repeat bg-cover w-[256px] h-[256px]",
                style: `background-image: url('${$setup.productUrl(product)}')`
              }, null, _parent, _scopeId))
              _push(`<div class="item-content flex flex-1 flex-col justify-between text-center"${
                _scopeId
              }><div class="flex flex-1 item-title font-medium justify-center items-center capitalize capitalize"${
                _scopeId
              }>${
                __vite_ssr_import_10__.ssrInterpolate(product.attributes.title)
              }</div><div class="flex gap-[5px]"${
                _scopeId
              }><div class="flex-1 item-button border-[2px] border-primary rounded-[4px] flex justify-center items-center cursor-default select-none"${
                _scopeId
              }>${
                __vite_ssr_import_10__.ssrInterpolate(product.attributes.price)
              } ??? </div><button class="${
                __vite_ssr_import_10__.ssrRenderClass([{
                          'hover:bg-white border-[2px] border-primary hover:text-primary':
                            !$setup.productInCart(product),
                          'hover:bg-orange': $setup.productInCart(product),
                        }, "item-button py-[4px] w-[70px] h-[40px] bg-primary text-white rounded-[4px] flex justify-center items-center active:scale-95 transition-all"])
              }"${
                _scopeId
              }>`)
              if ($setup.productInCart(product)) {
                _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
                  _scopeId
                }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"${
                  _scopeId
                }></path></svg>`)
              } else {
                _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
                  _scopeId
                }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"${
                  _scopeId
                }></path></svg>`)
              }
              _push(`</button></div></div></div>`)
            })
            _push(`<!--]--></div><!--]-->`)
          } else {
            _push(`<div class="flex flex-1 flex-col justify-center items-center font-medium text-secondary"${
              _scopeId
            }><span class="text-[26px]"${
              _scopeId
            }>??????????</span><span class="text-[21px] mb-[25px]"${
              _scopeId
            }>???? ?????????????????? ???????????????????? ?????????????? ???????????? ???? ??????????????</span><div class="text-[21px] text-center"${
              _scopeId
            }>??\\_(???)_/??</div></div>`)
          }
          _push(`</div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`<!-- related-categories -->`)
        if ($setup.isRelatedCategoriesVisible && $setup.relatedCategories.length) {
          _push(`<!--[--><div class="my-[40px] flex items-center gap-[70px]"${
            _scopeId
          }><h4 class="text-[36px] text-secondary font-bold"${
            _scopeId
          }> ?????????????????????????? ?????????????????? </h4><div class="section-divider flex-1 h-[2px] bg-grey-light shadow-divider my-[40px] rounded-full"${
            _scopeId
          }></div></div><div class="cards flex items-center gap-[20px]"${
            _scopeId
          }><!--[-->`)
          __vite_ssr_import_10__.ssrRenderList($setup.relatedCategories, (category) => {
            _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
              to: {
                  path: `/categories/${category.attributes.slug}`,
                },
              class: "card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
            }, {
              default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
                if (_push) {
                  _push(`<div class="card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain" style="${
                    __vite_ssr_import_10__.ssrRenderStyle(`background-image: url('${$setup.categoryUrl(category)}')`)
                  }"${
                    _scopeId
                  }></div><div class="flex flex-grow card-text text-[21px] capitalize"${
                    _scopeId
                  }>${
                    __vite_ssr_import_10__.ssrInterpolate(category.attributes.title)
                  }</div>`)
                } else {
                  return [
                    __vite_ssr_import_9__.createVNode("div", {
                      class: "card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",
                      style: `background-image: url('${$setup.categoryUrl(category)}')`
                    }, null, 4 /* STYLE */),
                    __vite_ssr_import_9__.createVNode("div", { class: "flex flex-grow card-text text-[21px] capitalize" }, __vite_ssr_import_9__.toDisplayString(category.attributes.title), 1 /* TEXT */)
                  ]
                }
              }),
              _: 2 /* DYNAMIC */
            }, _parent, _scopeId))
          })
          _push(`<!--]--></div><!--]-->`)
        } else {
          _push(`<!---->`)
        }
        _push(`</div></main></div>`)
      } else {
        return [
          __vite_ssr_import_9__.createVNode("div", { class: "flex-grow" }, [
            __vite_ssr_import_9__.createVNode("main", { class: "mt-[102px] mb-[40px] flex-grow" }, [
              __vite_ssr_import_9__.createVNode("div", { class: "max-w-screen-xl w-full mx-auto" }, [
                __vite_ssr_import_9__.createVNode("div", { class: "flex items-center" }, [
                  __vite_ssr_import_9__.createVNode(_component_NuxtLink, {
                    to: "/",
                    class: "breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
                  }, {
                    default: __vite_ssr_import_9__.withCtx(() => [
                      (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("svg", {
                        class: "w-6 h-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        __vite_ssr_import_9__.createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        })
                      ])),
                      __vite_ssr_import_9__.createVNode("span", { class: "ml-[5px]" }, "???? ??????????????")
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_9__.createVNode("div", { class: "divider bg-grey-text ml-[13px] mr-[13px] w-[4px] h-[4px] rounded-full justify-center items-center" }),
                  __vite_ssr_import_9__.createVNode(_component_NuxtLink, {
                    to: {
                path: `/categories`,
              },
                    class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                  }, {
                    default: __vite_ssr_import_9__.withCtx(() => [
                      __vite_ssr_import_9__.createVNode("span", null, "?????? ??????????????????")
                    ]),
                    _: 1 /* STABLE */
                  }),
                  ($setup.parentCategory)
                    ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, { key: 0 }, [
                        __vite_ssr_import_9__.createVNode("div", { class: "divider bg-grey-text ml-[13px] mr-[13px] w-[4px] h-[4px] rounded-full justify-center items-center" }),
                        __vite_ssr_import_9__.createVNode(_component_NuxtLink, {
                          to: {
                  path: `/categories/${$setup.parentCategory.slug}`,
                },
                          class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange capitalize"
                        }, {
                          default: __vite_ssr_import_9__.withCtx(() => [
                            __vite_ssr_import_9__.createVNode("span", null, __vite_ssr_import_9__.toDisplayString($setup.parentCategory.title), 1 /* TEXT */)
                          ]),
                          _: 1 /* STABLE */
                        }, 8 /* PROPS */, ["to"])
                      ], 64 /* STABLE_FRAGMENT */))
                    : __vite_ssr_import_9__.createCommentVNode("v-if", true)
                ]),
                __vite_ssr_import_9__.createVNode("div", { class: "page-header mb-[20px] flex items-center" }, [
                  __vite_ssr_import_9__.createVNode("h1", { class: "flex-grow text-primary text-[36px] font-bold capitalize" }, __vite_ssr_import_9__.toDisplayString($setup.currentCategory.title), 1 /* TEXT */)
                ]),
                (
              $setup.currentCategory.items.data && $setup.currentCategory.items.data.length
            )
                  ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                      key: 0,
                      class: "cards flex items-center gap-[20px]"
                    }, [
                      (__vite_ssr_import_9__.openBlock(true), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, null, __vite_ssr_import_9__.renderList($setup.currentCategory.items.data, (category) => {
                        return (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock(_component_NuxtLink, {
                          to: {
                path: `/categories/${category.attributes.slug}`,
              },
                          class: "card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
                        }, {
                          default: __vite_ssr_import_9__.withCtx(() => [
                            __vite_ssr_import_9__.createVNode("div", {
                              class: "card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",
                              style: `background-image: url('${$setup.categoryUrl(category)}')`
                            }, null, 4 /* STYLE */),
                            __vite_ssr_import_9__.createVNode("div", { class: "flex flex-grow card-text text-[21px] text-secondary capitalize" }, __vite_ssr_import_9__.toDisplayString(category.attributes.title), 1 /* TEXT */)
                          ]),
                          _: 2 /* DYNAMIC */
                        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]))
                      }), 256 /* UNKEYED_FRAGMENT */))
                    ]))
                  : __vite_ssr_import_9__.createCommentVNode("v-if", true),
                (
              $setup.isProductsVisible &&
              $setup.currentCategory.items.data &&
              $setup.currentCategory.items.data.length
            )
                  ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                      key: 1,
                      class: "section-divider w-full h-[2px] bg-grey-light shadow-divider my-[40px] rounded-full"
                    }))
                  : __vite_ssr_import_9__.createCommentVNode("v-if", true),
                ($setup.isProductsVisible)
                  ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                      key: 2,
                      class: "flex justify-between items-start gap-[40px]"
                    }, [
                      __vite_ssr_import_9__.createVNode("aside", { class: "catalog-filter min-w-[300px] flex flex-col" }, [
                        __vite_ssr_import_9__.createVNode($setup["ProductFilter"], {
                          modelValue: $setup.filterIsActive,
                          "onUpdate:modelValue": $event => (($setup.filterIsActive) = $event),
                          brands: $setup.categoryBrands,
                          onApply: $setup.getFilteredProducts,
                          onClear: $event => ($setup.clearFilter())
                        }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue", "brands", "onClear"])
                      ]),
                      __vite_ssr_import_9__.createCommentVNode(" loading-cards "),
                      ($setup.loading)
                        ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                            key: 0,
                            class: "catalog-list flex-grow flex flex-wrap gap-[25px]"
                          }, [
                            (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, null, __vite_ssr_import_9__.renderList(4, (item) => {
                              return __vite_ssr_import_9__.createVNode("div", { class: "catalog-list-item font-medium text-[21px] bg-grey w-[calc(33.33%-16.7px)] h-[450px] shadow-card rounded-[4px] relative flex flex-col justify-start p-[30px] animate-pulse" })
                            }), 64 /* STABLE_FRAGMENT */))
                          ]))
                        : ($setup.dataProducts && $setup.dataProducts.length)
                          ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, { key: 1 }, [
                              __vite_ssr_import_9__.createCommentVNode(" products-list "),
                              __vite_ssr_import_9__.createVNode("div", { class: "catalog-list flex-grow flex flex-wrap gap-[25px]" }, [
                                (__vite_ssr_import_9__.openBlock(true), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, null, __vite_ssr_import_9__.renderList($setup.dataProducts, (product, index) => {
                                  return (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                                    key: index,
                                    class: "catalog-list-item font-medium text-[21px] h-[450px] shadow-card w-[calc(33.33%-16.7px)] hover:shadow-card-hover rounded-[4px] relative flex flex-col justify-start items-center p-[30px] transition-all"
                                  }, [
                                    __vite_ssr_import_9__.createVNode(_component_NuxtLink, {
                                      to: `/products/${product.attributes.parent.data.attributes.slug}_${product.attributes.article}`,
                                      class: "flex item-image bg-center bg-no-repeat bg-cover w-[256px] h-[256px]",
                                      style: `background-image: url('${$setup.productUrl(product)}')`
                                    }, null, 8 /* PROPS */, ["to", "style"]),
                                    __vite_ssr_import_9__.createVNode("div", { class: "item-content flex flex-1 flex-col justify-between text-center" }, [
                                      __vite_ssr_import_9__.createVNode("div", { class: "flex flex-1 item-title font-medium justify-center items-center capitalize capitalize" }, __vite_ssr_import_9__.toDisplayString(product.attributes.title), 1 /* TEXT */),
                                      __vite_ssr_import_9__.createVNode("div", { class: "flex gap-[5px]" }, [
                                        __vite_ssr_import_9__.createVNode("div", { class: "flex-1 item-button border-[2px] border-primary rounded-[4px] flex justify-center items-center cursor-default select-none" }, __vite_ssr_import_9__.toDisplayString(product.attributes.price) + " ??? ", 1 /* TEXT */),
                                        __vite_ssr_import_9__.createVNode("button", {
                                          class: ["item-button py-[4px] w-[70px] h-[40px] bg-primary text-white rounded-[4px] flex justify-center items-center active:scale-95 transition-all", {
                          'hover:bg-white border-[2px] border-primary hover:text-primary':
                            !$setup.productInCart(product),
                          'hover:bg-orange': $setup.productInCart(product),
                        }],
                                          onClick: $event => ($setup.cartHandler(product))
                                        }, [
                                          ($setup.productInCart(product))
                                            ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("svg", {
                                                key: 0,
                                                class: "w-6 h-6",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg"
                                              }, [
                                                __vite_ssr_import_9__.createVNode("path", {
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  "stroke-width": "2",
                                                  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                })
                                              ]))
                                            : (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("svg", {
                                                key: 1,
                                                class: "w-6 h-6",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg"
                                              }, [
                                                __vite_ssr_import_9__.createVNode("path", {
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  "stroke-width": "2",
                                                  d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                                })
                                              ]))
                                        ], 10 /* CLASS, PROPS */, ["onClick"])
                                      ])
                                    ])
                                  ]))
                                }), 128 /* KEYED_FRAGMENT */))
                              ])
                            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
                          : (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                              key: 2,
                              class: "flex flex-1 flex-col justify-center items-center font-medium text-secondary"
                            }, [
                              __vite_ssr_import_9__.createVNode("span", { class: "text-[26px]" }, "??????????"),
                              __vite_ssr_import_9__.createVNode("span", { class: "text-[21px] mb-[25px]" }, "???? ?????????????????? ???????????????????? ?????????????? ???????????? ???? ??????????????"),
                              __vite_ssr_import_9__.createVNode("div", { class: "text-[21px] text-center" }, "??\\_(???)_/??")
                            ]))
                    ]))
                  : __vite_ssr_import_9__.createCommentVNode("v-if", true),
                __vite_ssr_import_9__.createCommentVNode(" related-categories "),
                ($setup.isRelatedCategoriesVisible && $setup.relatedCategories.length)
                  ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, { key: 3 }, [
                      __vite_ssr_import_9__.createVNode("div", { class: "my-[40px] flex items-center gap-[70px]" }, [
                        __vite_ssr_import_9__.createVNode("h4", { class: "text-[36px] text-secondary font-bold" }, " ?????????????????????????? ?????????????????? "),
                        __vite_ssr_import_9__.createVNode("div", { class: "section-divider flex-1 h-[2px] bg-grey-light shadow-divider my-[40px] rounded-full" })
                      ]),
                      __vite_ssr_import_9__.createVNode("div", { class: "cards flex items-center gap-[20px]" }, [
                        (__vite_ssr_import_9__.openBlock(true), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, null, __vite_ssr_import_9__.renderList($setup.relatedCategories, (category) => {
                          return (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock(_component_NuxtLink, {
                            to: {
                  path: `/categories/${category.attributes.slug}`,
                },
                            class: "card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
                          }, {
                            default: __vite_ssr_import_9__.withCtx(() => [
                              __vite_ssr_import_9__.createVNode("div", {
                                class: "card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",
                                style: `background-image: url('${$setup.categoryUrl(category)}')`
                              }, null, 4 /* STYLE */),
                              __vite_ssr_import_9__.createVNode("div", { class: "flex flex-grow card-text text-[21px] capitalize" }, __vite_ssr_import_9__.toDisplayString(category.attributes.title), 1 /* TEXT */)
                            ]),
                            _: 2 /* DYNAMIC */
                          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]))
                        }), 256 /* UNKEYED_FRAGMENT */))
                      ])
                    ], 64 /* STABLE_FRAGMENT */))
                  : __vite_ssr_import_9__.createCommentVNode("v-if", true)
              ])
            ])
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/categories/[slug]/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_12__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/categories/[slug]/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/ProductFilter.vue
// Parents: 
// - /pages/categories/[slug]/index.vue?macro=true ($id_b19ac374)
// - /pages/categories/[slug]/index.vue ($id_a38e0b82)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/BrandsSelect.vue ($id_a68b9e82)
// - /components/PriceSelect.vue ($id_894078cd)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_16ebd3b1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/BrandsSelect.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/PriceSelect.vue");



const _sfc_main = {
  name: 'ProductFilter',
  props: {
  modelValue: Boolean,
  brands: Array,
  price: Object,
},
  emits: ["apply", "clear", "update:modelValue"],
  setup(__props, { expose, emit }) {
  expose();

const props = __props

const route = __vite_ssr_import_0__.useRoute();
const router = __vite_ssr_import_0__.useRouter();





const brandsList = __vite_ssr_import_1__.computed(() => props.brands);

const activeBrandsList = __vite_ssr_import_1__.ref([]);

let activeBrands = __vite_ssr_import_1__.computed({
  get() {
    return activeBrandsList.value;
  },
  set(newValue) {
    activeBrandsList.value = [...newValue].sort();
  },
});

const priceRange = __vite_ssr_import_1__.ref({
  from: null,
  to: null,
});

const currentBrandsFilter = __vite_ssr_import_1__.computed(() => route.query?.brands?.split(","));
const currentPriceFilter = __vite_ssr_import_1__.computed(() => {
  let query = null;
  if (route.query?.from) {
    if (!query) {
      query = {};
    }
    query.from = route.query.from;
  }

  if (route.query?.to) {
    if (!query) {
      query = {};
    }
    query.to = route.query.to;
  }

  return query;
});

if (currentBrandsFilter.value) {
  activeBrands.value = currentBrandsFilter.value;
}

if (currentPriceFilter.value) {
  if (currentPriceFilter.value.from) {
    priceRange.value.from = currentPriceFilter.value.from;
  }

  if (currentPriceFilter.value.to) {
    priceRange.value.to = currentPriceFilter.value.to;
  }
}

const brandsHandler = (type, brand) => {
  if (type === "add") {
    activeBrands.value = [...activeBrands.value, brand.id];
  }
  if (type === "remove") {
    activeBrands.value = activeBrands.value.filter((item) => item !== brand.id);
  }
};

// ?????????????????????????? ?????? ?????? (???????????? ???? ????, ?????????? ???? ??????????)
// ???????????? ???? ???????????? ?????????????????? ??????????????
// ???????????? ???? ????????
// ???????????????????? ???? ?????????????? ???????????? ?????????????? ???? ?????????????? ?? ??????????????
// ???????????????????? ???? ?????????????? ???????? ???? ?????? ?? ??????????????

// ?????????????????????????????? "??????????????????":
// ???????????? ???? ?????????????? ?? ?????????? ??????????????????

// !isActive && allIsEmpty

// ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

// ???????????????? "??????????????????":
// 1 ??? ?????????? ?????????????????? ?? ??????-???? ??????????????
// 2 ??? ?????????? ?????????????? ?? ?????????????? ??????-???? ??????????

// 1 ??? !isActive && isNotSame
// 2 ??? isActive && !allIsEmpty

// ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

// ???????????????? "????????????????":
// ?????????? ?????????????? ?? ?????????????????? ???????????????? ???????????????? ?????????????? ?? ????????????????????????

// isActive && isSame

// ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????

// helpers:
let filterIsActive = __vite_ssr_import_1__.computed(() => props.modelValue);

const usedBrands = __vite_ssr_import_1__.computed(
  () => (route.query.brands && route.query.brands.split(",")) || []
);
const usedPriceFrom = __vite_ssr_import_1__.computed(() => route.query.from || null);
const usedPriceTo = __vite_ssr_import_1__.computed(() => route.query.to || null);
// brands
const brandsSame = __vite_ssr_import_1__.computed(
  () => JSON.stringify(usedBrands.value) === JSON.stringify(activeBrands.value)
);
const brandsIsEmpty = __vite_ssr_import_1__.computed(() =>
  activeBrands.value && activeBrands.value.length ? false : true
);
// price
const priceIsSame = __vite_ssr_import_1__.computed(() => {
  if (
    priceRange.value.from === usedPriceFrom.value &&
    priceRange.value.to === usedPriceTo.value
  ) {
    return true;
  }
  return false;
});
const priceIsEmpty = __vite_ssr_import_1__.computed(
  () =>
    (!priceRange.value.from || priceRange.value.from === "") &&
    (!priceRange.value.to || priceRange.value.to === "")
);

// button
const applyDisabled = __vite_ssr_import_1__.computed(
  () => !filterIsActive.value && priceIsEmpty.value && brandsIsEmpty.value
);

const applyDisplay = __vite_ssr_import_1__.computed(
  () =>
    (!filterIsActive.value && (priceIsSame.value || brandsSame.value)) ||
    (!filterIsActive.value && (!priceIsSame.value || !brandsSame.value)) ||
    (filterIsActive.value && (!priceIsSame.value || !brandsSame.value))
);

const cancelDisplay = __vite_ssr_import_1__.computed(
  () => filterIsActive.value && priceIsSame.value && brandsSame.value
);

const filterHandler = () => {
  if (filterIsActive.value && brandsSame.value && priceIsSame.value) {
    activeBrands.value = [];
    priceRange.value.from = null;
    priceRange.value.to = null;
    emit("update:modelValue", false);
    // filterIsActive = false;
    router.push({ query: null });
    emit("clear");
  } else {
    const query = {};

    if (activeBrands.value && activeBrands.value.length) {
      query.brands = activeBrands.value.sort().join(",");
    }

    if (priceRange.value.from) {
      query.from = priceRange.value.from;
    }

    if (priceRange.value.to) {
      query.to = priceRange.value.to;
    }

    router.replace({
      query,
    });

    setTimeout(() => {
      emit("apply");
    }, 0);
    emit("update:modelValue", true);
    // filterIsActive = true;
  }
};

const __returned__ = { route, router, props, emit, brandsList, activeBrandsList, activeBrands, priceRange, currentBrandsFilter, currentPriceFilter, brandsHandler, filterIsActive, usedBrands, usedPriceFrom, usedPriceTo, brandsSame, brandsIsEmpty, priceIsSame, priceIsEmpty, applyDisabled, applyDisplay, cancelDisplay, filterHandler, BrandsSelect: __vite_ssr_import_2__.default, PriceSelect: __vite_ssr_import_3__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="filter-block flex flex-col items-center">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["BrandsSelect"], {
    list: $setup.brandsList,
    modelValue: $setup.activeBrands,
    "onUpdate:modelValue": $event => (($setup.activeBrands) = $event),
    onRemoveBrand: (value) => $setup.brandsHandler('remove', value),
    onAddBrand: (value) => $setup.brandsHandler('add', value)
  }, null, _parent))
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["PriceSelect"], {
    modelValue: $setup.priceRange,
    "onUpdate:modelValue": $event => (($setup.priceRange) = $event)
  }, null, _parent))
  _push(`</div><!-- <div>
    <pre>
      filterIsActive: {{ filterIsActive }}
      applyDisabled: {{ applyDisabled }}
      usedBrands: {{ usedBrands }}
      activeBrands: {{ activeBrands }}
      brandsSame: {{ brandsSame }}
      brandsIsEmpty: {{ brandsIsEmpty }}
      priceIsSame: {{ priceIsSame }}
      priceIsEmpty: {{ priceIsEmpty }}
    </pre>
  </div> --><button class="${
    __vite_ssr_import_4__.ssrRenderClass([{
      'bg-orange bg-opacity-70': $setup.cancelDisplay,
      'disabled bg-opacity-70': $setup.applyDisabled,
    }, "bg-primary text-white text-[21px] py-[10px] w-full rounded-[4px] mt-[20px] mx-auto flex justify-center items-center transition-all"])
  }"${
    (__vite_ssr_import_4__.ssrIncludeBooleanAttr($setup.applyDisabled)) ? " disabled" : ""
  }>`)
  if ($setup.cancelDisplay) {
    _push(`<span class="flex justify-center items-center"><span class="mr-[5px]">???????????????? ????????????</span><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></span>`)
  } else {
    _push(`<!---->`)
  }
  if ($setup.applyDisplay) {
    _push(`<span class="flex justify-center items-center"><span class="mr-[5px]">?????????????????? ????????????</span></span>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</button><!--]-->`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/ProductFilter.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/components/ProductFilter.vue"]]);
}


// --------------------
// Request: /components/BrandsSelect.vue
// Parents: 
// - /components/ProductFilter.vue ($id_16ebd3b1)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a68b9e82 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {
  name: 'BrandsSelect',
  props: {
  modelValue: Array,
  list: Array,
},
  setup(__props, { expose, emit }) {
  expose();

const props = __props




const isActive = (brand) => {
  const foundBrand = props.modelValue.find((item) => item === brand.id);

  return !!foundBrand;
};

const brandHandler = (brand) => {
  if (isActive(brand)) {
    emit("removeBrand", brand);
  } else {
    emit("addBrand", brand);
  }
};

const __returned__ = { emit, props, isActive, brandHandler }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "filter-block mb-[20px] w-full" }, _attrs))}><div class="filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]"> ???????????? </div><ul class="filter-block-content py-[10px] mx-[30px]"><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($props.list, (brand) => {
    _push(`<li class="${
      __vite_ssr_import_1__.ssrRenderClass([{
          'text-primary border-primary bg-white active:border-orange active:border-opacity-70 active:text-orange': $setup.isActive(brand),
          'border-white bg-white text-secondary hover:bg-grey-light active:scale-95 active:bg-primary active:bg-opacity-20': !$setup.isActive(brand),
        }, "px-[18px] py-[10px] my-[5px] border-2 text-[16px] rounded-[4px] flex justify-center items-center cursor-pointer transition-all"])
    }"><span class="flex-grow capitalize">${
      __vite_ssr_import_1__.ssrInterpolate(brand.attributes.title)
    }</span>`)
    if ($setup.isActive(brand)) {
      _push(`<span><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></span>`)
    } else {
      _push(`<!---->`)
    }
    _push(`</li>`)
  })
  _push(`<!--]--></ul></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/BrandsSelect.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/components/BrandsSelect.vue"]]);
}


// --------------------
// Request: /components/PriceSelect.vue
// Parents: 
// - /components/ProductFilter.vue ($id_16ebd3b1)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_894078cd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {
  name: 'PriceSelect',
  props: {
  modelValue: Object,
},
  setup(__props, { expose }) {
  expose();

const props = __props



const __returned__ = { props }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "w-full" }, _attrs))
  }><div class="filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]"> ????????, ??????. </div><div class="filter-block-content py-[10px] mx-[30px]"><div class="mt-[20px] flex justify-between items-center w-full"><input class="py-[10px] px-[5px] bg-grey-light rounded-[4px] max-w-[100px] text-[16px] shadow-inner outline-none text-center"${
    __vite_ssr_import_1__.ssrRenderAttr("value", $props.modelValue.from)
  } type="text" placeholder="799"><span class="w-[20px] h-[2px] bg-grey-light"></span><input class="py-[10px] px-[5px] bg-grey-light rounded-[4px] max-w-[100px] text-[16px] shadow-inner outline-none text-center"${
    __vite_ssr_import_1__.ssrRenderAttr("value", $props.modelValue.to)
  } type="text" placeholder="13000"></div></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/PriceSelect.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/components/PriceSelect.vue"]]);
}


// --------------------
// Request: /pages/categories/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs ($id_eb849233)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs ($id_63a2fd8b)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b04deb14 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  name: 'index',
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const config = __vite_ssr_import_2__.useRuntimeConfig();

const { data, error } = (
  ([__temp,__restore] = __vite_ssr_import_5__.withAsyncContext(() => __vite_ssr_import_2__.useAsyncData("root-categories", () =>
  __vite_ssr_import_3__.GqlGetRootCategories({ type: "section" })
))),
  __temp = await __temp,
  __restore(),
  __temp
);

console.log(data.value);
const categoriesList = data.value?.categories?.data;

__vite_ssr_import_4__.useHead({
  title: `???????????????? ??? ?????? ??????????????????`,
});

const imageUrl = (category) => {
  const url = category.attributes?.image?.data?.attributes?.url;
  if (url) {
    return `${config.public.API_URL}${url}`;
  }
  return "";
};

const __returned__ = { config, data, error, categoriesList, imageUrl }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtLink = __vite_ssr_import_1__.default

  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_6__.mergeProps({ name: "shop" }, _attrs), {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex-grow"${
          _scopeId
        }><main class="mt-[102px] mb-[40px] flex-grow"${
          _scopeId
        }><div class="max-w-screen-xl w-full mx-auto"${
          _scopeId
        }><div class="flex items-center"${
          _scopeId
        }>`)
        _push(__vite_ssr_import_7__.ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
        }, {
          default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
                _scopeId
              }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"${
                _scopeId
              }></path></svg><span class="ml-[5px]"${
                _scopeId
              }>???? ??????????????</span>`)
            } else {
              return [
                (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("svg", {
                  class: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  __vite_ssr_import_6__.createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  })
                ])),
                __vite_ssr_import_6__.createVNode("span", { class: "ml-[5px]" }, "???? ??????????????")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`</div><div class="page-header mb-[20px] flex items-center"${
          _scopeId
        }><h1 class="flex-grow text-primary text-[36px] font-bold"${
          _scopeId
        }> ?????? ?????????????????? </h1></div>`)
        if ($setup.categoriesList && $setup.categoriesList.length) {
          _push(`<div class="cards flex items-center gap-[20px]"${_scopeId}><!--[-->`)
          __vite_ssr_import_7__.ssrRenderList($setup.categoriesList, (category) => {
            _push(__vite_ssr_import_7__.ssrRenderComponent(_component_NuxtLink, {
              to: {
                path: `/categories/${category.attributes.slug}`,
              },
              class: "card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
            }, {
              default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
                if (_push) {
                  _push(`<div class="card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain" style="${
                    __vite_ssr_import_7__.ssrRenderStyle(`background-image: url('${$setup.imageUrl(category)}')`)
                  }"${
                    _scopeId
                  }></div><div class="flex flex-grow card-text text-[21px] text-secondary capitalize"${
                    _scopeId
                  }>${
                    __vite_ssr_import_7__.ssrInterpolate(category.attributes.title)
                  }</div>`)
                } else {
                  return [
                    __vite_ssr_import_6__.createVNode("div", {
                      class: "card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",
                      style: `background-image: url('${$setup.imageUrl(category)}')`
                    }, null, 4 /* STYLE */),
                    __vite_ssr_import_6__.createVNode("div", { class: "flex flex-grow card-text text-[21px] text-secondary capitalize" }, __vite_ssr_import_6__.toDisplayString(category.attributes.title), 1 /* TEXT */)
                  ]
                }
              }),
              _: 2 /* DYNAMIC */
            }, _parent, _scopeId))
          })
          _push(`<!--]--></div>`)
        } else {
          _push(`<h4 class="text-[26px]"${
            _scopeId
          }><div class="flex flex-col justify-center items-center font-medium text-secondary"${
            _scopeId
          }><span class="text-[26px]"${
            _scopeId
          }>?????? ???????? ??????????.</span><span class="text-[21px] mb-[25px]"${
            _scopeId
          }>?????????????????????????? ???????? ??????????????!</span><div class="text-[21px] text-center"${
            _scopeId
          }>??\\_(???)_/??</div></div></h4>`)
        }
        _push(`</div></main></div>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("div", { class: "flex-grow" }, [
            __vite_ssr_import_6__.createVNode("main", { class: "mt-[102px] mb-[40px] flex-grow" }, [
              __vite_ssr_import_6__.createVNode("div", { class: "max-w-screen-xl w-full mx-auto" }, [
                __vite_ssr_import_6__.createVNode("div", { class: "flex items-center" }, [
                  __vite_ssr_import_6__.createVNode(_component_NuxtLink, {
                    to: "/",
                    class: "breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
                  }, {
                    default: __vite_ssr_import_6__.withCtx(() => [
                      (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("svg", {
                        class: "w-6 h-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        __vite_ssr_import_6__.createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        })
                      ])),
                      __vite_ssr_import_6__.createVNode("span", { class: "ml-[5px]" }, "???? ??????????????")
                    ]),
                    _: 1 /* STABLE */
                  })
                ]),
                __vite_ssr_import_6__.createVNode("div", { class: "page-header mb-[20px] flex items-center" }, [
                  __vite_ssr_import_6__.createVNode("h1", { class: "flex-grow text-primary text-[36px] font-bold" }, " ?????? ?????????????????? ")
                ]),
                ($setup.categoriesList && $setup.categoriesList.length)
                  ? (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("div", {
                      key: 0,
                      class: "cards flex items-center gap-[20px]"
                    }, [
                      (__vite_ssr_import_6__.openBlock(true), __vite_ssr_import_6__.createBlock(__vite_ssr_import_6__.Fragment, null, __vite_ssr_import_6__.renderList($setup.categoriesList, (category) => {
                        return (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock(_component_NuxtLink, {
                          to: {
                path: `/categories/${category.attributes.slug}`,
              },
                          class: "card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
                        }, {
                          default: __vite_ssr_import_6__.withCtx(() => [
                            __vite_ssr_import_6__.createVNode("div", {
                              class: "card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",
                              style: `background-image: url('${$setup.imageUrl(category)}')`
                            }, null, 4 /* STYLE */),
                            __vite_ssr_import_6__.createVNode("div", { class: "flex flex-grow card-text text-[21px] text-secondary capitalize" }, __vite_ssr_import_6__.toDisplayString(category.attributes.title), 1 /* TEXT */)
                          ]),
                          _: 2 /* DYNAMIC */
                        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]))
                      }), 256 /* UNKEYED_FRAGMENT */))
                    ]))
                  : (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("h4", {
                      key: 1,
                      class: "text-[26px]"
                    }, [
                      __vite_ssr_import_6__.createVNode("div", { class: "flex flex-col justify-center items-center font-medium text-secondary" }, [
                        __vite_ssr_import_6__.createVNode("span", { class: "text-[26px]" }, "?????? ???????? ??????????."),
                        __vite_ssr_import_6__.createVNode("span", { class: "text-[21px] mb-[25px]" }, "?????????????????????????? ???????? ??????????????!"),
                        __vite_ssr_import_6__.createVNode("div", { class: "text-[21px] text-center" }, "??\\_(???)_/??")
                      ])
                    ]))
              ])
            ])
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/categories/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/categories/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/delivery/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs ($id_eb849233)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e1d04ef1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_1__.mergeProps({ name: "shop" }, _attrs), {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex-grow"${
          _scopeId
        }><main class="mt-[135px] mb-[40px] flex-grow"${
          _scopeId
        }>delivery</main></div>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("div", { class: "flex-grow" }, [
            __vite_ssr_import_1__.createVNode("main", { class: "mt-[135px] mb-[40px] flex-grow" }, "delivery")
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/delivery/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/delivery/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs ($id_eb849233)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /store/menu/menu.js ($id_53cdf039)
// - /assets/images/voleyball.png ($id_b4d47dcb)
// - /assets/images/basketball.png ($id_b631c89c)
// - /assets/images/football.png ($id_dfb3bf7a)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5dd70240 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/store/menu/menu.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/assets/images/voleyball.png");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/assets/images/basketball.png");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/assets/images/football.png");


const _sfc_main = {
  name: 'index',
  setup(__props, { expose }) {
  expose();

const menuStore = __vite_ssr_import_4__.useMenuToggler();

const isExpandMenuShow = __vite_ssr_import_2__.computed(() => {
  return menuStore.$state.isExpandMenuOpen;
});

const getLocalBackgroundImageUrl = (name) => {
  switch (name) {
    case "voleyball":
      return __vite_ssr_import_5__.default;
    case "football":
      return __vite_ssr_import_7__.default;
    case "basketball":
      return __vite_ssr_import_6__.default;
    default:
      return "";
  }
};

__vite_ssr_import_3__.useHead({
  title: `???????????????? ??? ?????????????? ?????????????????????? ??????????????????`,
});

const __returned__ = { menuStore, isExpandMenuShow, getLocalBackgroundImageUrl, useMenuToggler: __vite_ssr_import_4__.useMenuToggler, voleyball: __vite_ssr_import_5__.default, basketball: __vite_ssr_import_6__.default, football: __vite_ssr_import_7__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtLink = __vite_ssr_import_1__.default

  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_8__.mergeProps({ name: "shop" }, _attrs), {
    default: __vite_ssr_import_8__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="${
          __vite_ssr_import_9__.ssrRenderClass([{
        'overflow-hidden': $setup.isExpandMenuShow,
      }, "flex-grow"])
        }"${
          _scopeId
        }><main class="mt-[102px] mb-[40px] flex-grow"${
          _scopeId
        }><div class="max-w-screen-xl w-full mx-auto"${
          _scopeId
        }><div class="page-header flex items-center"${
          _scopeId
        }><h1 class="flex-grow text-primary text-[36px] font-bold"${
          _scopeId
        }> ???????????????????? ?????????????????? </h1><div${
          _scopeId
        }>`)
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_NuxtLink, {
          to: "/categories",
          class: "flex items-center justify-center text-[21px] text-primary hover:text-orange"
        }, {
          default: __vite_ssr_import_8__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<span class="mr-[5px]"${
                _scopeId
              }>?????? ??????????????????</span><svg class="w-6 h-6 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
                _scopeId
              }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${
                _scopeId
              }></path></svg>`)
            } else {
              return [
                __vite_ssr_import_8__.createVNode("span", { class: "mr-[5px]" }, "?????? ??????????????????"),
                (__vite_ssr_import_8__.openBlock(), __vite_ssr_import_8__.createBlock("svg", {
                  class: "w-6 h-6 mt-[2px]",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  __vite_ssr_import_8__.createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M9 5l7 7-7 7"
                  })
                ]))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`</div></div><div class="slider-image mt-[40px] image-slider flex justify-between gap-[25px]"${
          _scopeId
        }><div class="cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative" style="${
          __vite_ssr_import_9__.ssrRenderStyle({
                backgroundImage: `url(${$setup.getLocalBackgroundImageUrl(
                  'basketball'
                )})`,
              })
        }"${
          _scopeId
        }><span class="absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider"${
          _scopeId
        }>????????????<br${
          _scopeId
        }>??????</span></div><div class="cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative" style="${
          __vite_ssr_import_9__.ssrRenderStyle({
                backgroundImage: `url(${$setup.getLocalBackgroundImageUrl(
                  'football'
                )})`,
              })
        }"${
          _scopeId
        }><span class="absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider"${
          _scopeId
        }>??????<br${
          _scopeId
        }>??????</span></div><div class="cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative" style="${
          __vite_ssr_import_9__.ssrRenderStyle({
                backgroundImage: `url(${$setup.getLocalBackgroundImageUrl(
                  'voleyball'
                )})`,
              })
        }"${
          _scopeId
        }><span class="absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider"${
          _scopeId
        }>??????????<br${
          _scopeId
        }>??????</span></div></div><div class="slider-category"${
          _scopeId
        }></div></div></main></div>`)
      } else {
        return [
          __vite_ssr_import_8__.createVNode("div", {
            class: ["flex-grow", {
        'overflow-hidden': $setup.isExpandMenuShow,
      }]
          }, [
            __vite_ssr_import_8__.createVNode("main", { class: "mt-[102px] mb-[40px] flex-grow" }, [
              __vite_ssr_import_8__.createVNode("div", { class: "max-w-screen-xl w-full mx-auto" }, [
                __vite_ssr_import_8__.createVNode("div", { class: "page-header flex items-center" }, [
                  __vite_ssr_import_8__.createVNode("h1", { class: "flex-grow text-primary text-[36px] font-bold" }, " ???????????????????? ?????????????????? "),
                  __vite_ssr_import_8__.createVNode("div", null, [
                    __vite_ssr_import_8__.createVNode(_component_NuxtLink, {
                      to: "/categories",
                      class: "flex items-center justify-center text-[21px] text-primary hover:text-orange"
                    }, {
                      default: __vite_ssr_import_8__.withCtx(() => [
                        __vite_ssr_import_8__.createVNode("span", { class: "mr-[5px]" }, "?????? ??????????????????"),
                        (__vite_ssr_import_8__.openBlock(), __vite_ssr_import_8__.createBlock("svg", {
                          class: "w-6 h-6 mt-[2px]",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          __vite_ssr_import_8__.createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 5l7 7-7 7"
                          })
                        ]))
                      ]),
                      _: 1 /* STABLE */
                    })
                  ])
                ]),
                __vite_ssr_import_8__.createVNode("div", { class: "slider-image mt-[40px] image-slider flex justify-between gap-[25px]" }, [
                  __vite_ssr_import_8__.createVNode("div", {
                    class: "cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative",
                    style: {
                backgroundImage: `url(${$setup.getLocalBackgroundImageUrl(
                  'basketball'
                )})`,
              }
                  }, [
                    __vite_ssr_import_8__.createVNode("span", { class: "absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider" }, [
                      __vite_ssr_import_8__.createTextVNode("????????????"),
                      __vite_ssr_import_8__.createVNode("br"),
                      __vite_ssr_import_8__.createTextVNode("??????")
                    ])
                  ], 4 /* STYLE */),
                  __vite_ssr_import_8__.createVNode("div", {
                    class: "cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative",
                    style: {
                backgroundImage: `url(${$setup.getLocalBackgroundImageUrl(
                  'football'
                )})`,
              }
                  }, [
                    __vite_ssr_import_8__.createVNode("span", { class: "absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider" }, [
                      __vite_ssr_import_8__.createTextVNode("??????"),
                      __vite_ssr_import_8__.createVNode("br"),
                      __vite_ssr_import_8__.createTextVNode("??????")
                    ])
                  ], 4 /* STYLE */),
                  __vite_ssr_import_8__.createVNode("div", {
                    class: "cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative",
                    style: {
                backgroundImage: `url(${$setup.getLocalBackgroundImageUrl(
                  'voleyball'
                )})`,
              }
                  }, [
                    __vite_ssr_import_8__.createVNode("span", { class: "absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider" }, [
                      __vite_ssr_import_8__.createTextVNode("??????????"),
                      __vite_ssr_import_8__.createVNode("br"),
                      __vite_ssr_import_8__.createTextVNode("??????")
                    ])
                  ], 4 /* STYLE */)
                ]),
                __vite_ssr_import_8__.createVNode("div", { class: "slider-category" })
              ])
            ])
          ], 2 /* CLASS */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_11__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /assets/images/voleyball.png
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 

// --------------------
const $id_b4d47dcb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/voleyball.png";
}


// --------------------
// Request: /assets/images/basketball.png
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 

// --------------------
const $id_b631c89c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/basketball.png";
}


// --------------------
// Request: /assets/images/football.png
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 

// --------------------
const $id_dfb3bf7a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/football.png";
}


// --------------------
// Request: /pages/payments/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs ($id_eb849233)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_db8db898 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_1__.mergeProps({ name: "shop" }, _attrs), {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex-grow"${
          _scopeId
        }><main class="mt-[135px] mb-[40px] flex-grow"${
          _scopeId
        }>payments</main></div>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("div", { class: "flex-grow" }, [
            __vite_ssr_import_1__.createVNode("main", { class: "mt-[135px] mb-[40px] flex-grow" }, "payments")
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/payments/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/payments/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/products/[params].vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs ($id_eb849233)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs ($id_63a2fd8b)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /components/UI/ImageViewer.vue ($id_9bcbfe6f)
// - /store/cart/cart.js ($id_08ef3e2f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/products/[params].vue?vue&type=style&index=0&scoped=true&lang.css ($id_5109f25b)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5fe5d068 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/UI/ImageViewer.vue");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/store/cart/cart.js");



const _sfc_main = {
  name: '[params]',
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const router = __vite_ssr_import_2__.useRouter();
const route = __vite_ssr_import_2__.useRoute();

const productParams = route.params.params;

const [productCardSlug, article] = productParams.split("_");

const { data, error } = (
  ([__temp,__restore] = __vite_ssr_import_6__.withAsyncContext(() => __vite_ssr_import_2__.useAsyncData(
  `product-card-data-by-slug-${productCardSlug}`,
  () => __vite_ssr_import_3__.GqlProductCardDataBySlug({ slug: productCardSlug })
))),
  __temp = await __temp,
  __restore(),
  __temp
);

const productCard = __vite_ssr_import_4__.computed(() => data?.value?.productCards?.data[0]);

if (!productCard.value) {
  router.push("/404");
}

const category = productCard.value.attributes.category.data.attributes;

const productData = (
  ([__temp,__restore] = __vite_ssr_import_6__.withAsyncContext(() => __vite_ssr_import_3__.GqlProductByArticle({ article: article }))),
  __temp = await __temp,
  __restore(),
  __temp
);

if (!productData.products.data.length) {
  router.push("/404");
}

const currentProduct = __vite_ssr_import_4__.computed(() => productData.products.data[0]);

const productTitle = __vite_ssr_import_4__.computed(
  () =>
    currentProduct.value.attributes.title ||
    productCard.value.attributes.title ||
    ""
);

const productPrice = __vite_ssr_import_4__.computed(() => currentProduct.value.attributes.price || 0);

// images

const constProductCardImages = __vite_ssr_import_4__.computed(
  () => productCard.value?.attributes?.images?.data || []
);

const productImages = __vite_ssr_import_4__.computed(
  () => currentProduct.value?.attributes?.images?.data || []
);

const imagesGalery = __vite_ssr_import_4__.computed(() => [
  ...productImages.value,
  ...constProductCardImages.value,
]);

const productArticle = __vite_ssr_import_4__.computed(
  () => currentProduct.value.attributes.article || "???"
);

const productDescription = __vite_ssr_import_4__.computed(
  () => currentProduct.value.attributes.description
);

const productAmount = __vite_ssr_import_4__.computed(() => currentProduct.value.attributes.amount);

const productCardProducts = __vite_ssr_import_4__.computed(
  () => productCard.value.attributes.items.data
);

// colors
const productCardColors = __vite_ssr_import_4__.computed(() =>
  unique(productCardProducts.value, "color")
);

const productColor = __vite_ssr_import_4__.computed(() => currentProduct.value.attributes.color);

const colorIsActive = (value) => {
  return productColor.value.value === value;
};

const disabledColor = (color) => {
  const foundProduct = productCardProducts.value.find((product) => {
    if (
      product.attributes.color.value === color.value &&
      productSize.value.value === product.attributes.size.value
    ) {
      return true;
    }
  });
  if (foundProduct) {
    return false;
  }
  return true;
};

const colorHandler = (color) => {
  const totalMatch = productCardProducts.value.find((product) => {
    if (
      product.attributes.color.value === color.value &&
      productSize.value.value === product.attributes.size.value
    ) {
      return true;
    }
  });
  if (totalMatch) {
    router.push(`${productCardSlug}_${totalMatch.attributes.article}`);
  } else {
    const secondMatch = productCardProducts.value.find((product) => {
      if (product.attributes.color.value === color.value) {
        return true;
      }
    });
    if (secondMatch) {
      router.push(`${productCardSlug}_${secondMatch.attributes.article}`);
    }
  }
};

// sizes
const productCardSizes = __vite_ssr_import_4__.computed(() =>
  unique(productCardProducts.value, "size")
);

const productSize = __vite_ssr_import_4__.computed(() => currentProduct.value.attributes.size);

const sizeIsActive = (value) => {
  return productSize.value.value === value;
};

const disabledSize = (size) => {
  const foundProduct = productCardProducts.value.find((product) => {
    if (
      product.attributes.size.value === size.value &&
      productColor.value.value === product.attributes.color.value
    ) {
      return true;
    }
  });
  if (foundProduct) {
    return false;
  }
  return true;
};

const sizeHandler = (size) => {
  const totalMatch = productCardProducts.value.find((product) => {
    if (
      product.attributes.size.value === size.value &&
      productColor.value.value === product.attributes.color.value
    ) {
      return true;
    }
  });
  if (totalMatch) {
    router.push(`${productCardSlug}_${totalMatch.attributes.article}`);
  } else {
    const secondMatch = productCardProducts.value.find((product) => {
      if (product.attributes.size.value === size.value) {
        return true;
      }
    });
    if (secondMatch) {
      router.push(`${productCardSlug}_${secondMatch.attributes.article}`);
    }
  }
};

// amount and work with cart

const isCartHandlerDisabled = __vite_ssr_import_4__.computed(
  () => currentProduct.value.attributes.amount <= 0
);

const cart = __vite_ssr_import_8__.useCart();

const cartItem = __vite_ssr_import_4__.computed(() =>
  cart.items.find(
    (item) => item.article === currentProduct.value.attributes.article
  )
);

const productCounter = __vite_ssr_import_4__.computed(() => cartItem?.value?.count || 1);

const productInCart = __vite_ssr_import_4__.computed(() => {
  return !!cartItem.value;
});

const increaseAlowed = __vite_ssr_import_4__.computed(() => {
  const sum = productCounter.value + 1;
  return !(sum > productAmount.value);
});

const addToCart = () => {
  cart.addToCart({
    count: Number(productCounter.value),
    amount: productAmount.value,
    color: productColor.value,
    article: productArticle.value,
    size: productSize.value,
    title: productTitle.value,
    price: productPrice.value,
    productCard: productCard.value.attributes.slug,
    imageUrl: imagesGalery.value[0]?.attributes?.url,
  });
};

const updateCartStateItem = (value) => {
  cart.updateCartItem({
    count: Number(value),
    amount: productAmount.value,
    color: productColor.value,
    article: productArticle.value,
    size: productSize.value,
    title: productTitle.value,
    price: productPrice.value,
    productCard: productCard.value.attributes.slug,
    imageUrl: imagesGalery.value[0]?.attributes?.url,
  });
};

const selectCounter = (value) => {
  const newValue = Number(productCounter.value) + value;
  if (productCounter.value > 0 && newValue > 0) {
    productCounter.value = newValue;
    updateCartStateItem(newValue);
  } else {
    removeFromStateCart();
  }
};

const cartHandler = () => {
  if (!productInCart.value) {
    addToCart();
  }
};

const removeFromStateCart = () => {
  cart.removeFromCart(currentProduct.value.attributes.article);
};

function unique(arr, param) {
  const uniqueArr = [];
  const usedProps = [];

  arr.forEach((item) => {
    if (!usedProps.includes(item.attributes[param].value)) {
      uniqueArr.push(item.attributes[param]);
      usedProps.push(item.attributes[param].value);
    }
  });

  return uniqueArr;
}

__vite_ssr_import_5__.useHead({
  title: `???????????????? ??? ${productCard.value.attributes.title}`,
});

const __returned__ = { router, route, productParams, productCardSlug, article, data, error, productCard, category, productData, currentProduct, productTitle, productPrice, constProductCardImages, productImages, imagesGalery, productArticle, productDescription, productAmount, productCardProducts, productCardColors, productColor, colorIsActive, disabledColor, colorHandler, productCardSizes, productSize, sizeIsActive, disabledSize, sizeHandler, isCartHandlerDisabled, cart, cartItem, productCounter, productInCart, increaseAlowed, addToCart, updateCartStateItem, selectCounter, cartHandler, removeFromStateCart, unique, ImageViewer: __vite_ssr_import_7__.default, useCart: __vite_ssr_import_8__.useCart }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtLink = __vite_ssr_import_1__.default

  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_9__.mergeProps({ name: "shop" }, _attrs), {
    default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex-grow" data-v-5076c47e${
          _scopeId
        }><main class="mt-[102px] mb-[40px] flex-grow" data-v-5076c47e${
          _scopeId
        }><div class="max-w-screen-xl w-full mx-auto" data-v-5076c47e${
          _scopeId
        }><div class="page-header flex items-center" data-v-5076c47e${
          _scopeId
        }><div class="flex items-center" data-v-5076c47e${
          _scopeId
        }>`)
        _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
        }, {
          default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-5076c47e${
                _scopeId
              }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" data-v-5076c47e${
                _scopeId
              }></path></svg><span class="ml-[5px]" data-v-5076c47e${
                _scopeId
              }>???? ??????????????</span>`)
            } else {
              return [
                (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("svg", {
                  class: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  __vite_ssr_import_9__.createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  })
                ])),
                __vite_ssr_import_9__.createVNode("span", { class: "ml-[5px]" }, "???? ??????????????")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<div class="divider bg-grey-text ml-[13px] mr-[13px] w-[4px] h-[4px] rounded-full justify-center items-center" data-v-5076c47e${_scopeId}></div>`)
        _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
          to: {
                  path: `/categories`,
                },
          class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
        }, {
          default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<span data-v-5076c47e${_scopeId}>?????? ??????????????????</span>`)
            } else {
              return [
                __vite_ssr_import_9__.createVNode("span", null, "?????? ??????????????????")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        if ($setup.category) {
          _push(`<!--[--><div class="divider bg-grey-text ml-[13px] mr-[13px] w-[4px] h-[4px] rounded-full justify-center items-center" data-v-5076c47e${_scopeId}></div>`)
          _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
            to: {
                    path: `/categories/${$setup.category.slug}`,
                  },
            class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange capitalize"
          }, {
            default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<span data-v-5076c47e${
                  _scopeId
                }>${
                  __vite_ssr_import_10__.ssrInterpolate($setup.category.title)
                }</span>`)
              } else {
                return [
                  __vite_ssr_import_9__.createVNode("span", null, __vite_ssr_import_9__.toDisplayString($setup.category.title), 1 /* TEXT */)
                ]
              }
            }),
            _: 1 /* STABLE */
          }, _parent, _scopeId))
          _push(`<!--]-->`)
        } else {
          _push(`<!---->`)
        }
        _push(`</div></div><div class="product flex items-start gap-[190px]" data-v-5076c47e${
          _scopeId
        }><div class="product-card flex-grow" data-v-5076c47e${
          _scopeId
        }><div class="product-title text-[36px] font-bold text-secondary capitalize" data-v-5076c47e${
          _scopeId
        }>${
          __vite_ssr_import_10__.ssrInterpolate($setup.productTitle)
        }</div><div class="product-content flex items-start justify-between" data-v-5076c47e${
          _scopeId
        }><div class="product-info" data-v-5076c47e${
          _scopeId
        }><div class="product-article text-grey-text mb-[40px]" data-v-5076c47e${
          _scopeId
        }> ?????? ????????????????: ${
          __vite_ssr_import_10__.ssrInterpolate($setup.productArticle)
        }</div><ul class="product-specifics flex flex-col text-left justify-start items-start gap-[15px]" data-v-5076c47e${
          _scopeId
        }><!--[-->`)
        __vite_ssr_import_10__.ssrRenderList($setup.productDescription, (item) => {
          _push(`<li class="product-specific px-[13px] py-[10px] border-[2px] rounded-[4px] border-primary text-primary" data-v-5076c47e${
            _scopeId
          }>${
            __vite_ssr_import_10__.ssrInterpolate(item.value)
          }</li>`)
        })
        _push(`<!--]--></ul></div><div class="product-image" data-v-5076c47e${_scopeId}>`)
        _push(__vite_ssr_import_10__.ssrRenderComponent($setup["ImageViewer"], {
          modelValue: $setup.imagesGalery,
          "onUpdate:modelValue": $event => (($setup.imagesGalery) = $event)
        }, null, _parent, _scopeId))
        _push(`</div></div></div><aside class="product-action w-1/5" data-v-5076c47e${
          _scopeId
        }><div class="flex flex-col" data-v-5076c47e${
          _scopeId
        }><span class="text-[36px] font-bold text-secondary" data-v-5076c47e${
          _scopeId
        }>${
          __vite_ssr_import_10__.ssrInterpolate($setup.productPrice)
        } ??????.</span>`)
        if ($setup.productCardColors && $setup.productCardColors.length) {
          _push(`<div class="divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full" data-v-5076c47e${_scopeId}></div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`<div class="flex flex-col" data-v-5076c47e${
          _scopeId
        }><span class="text-[21px] text-secondary mb-[10px]" data-v-5076c47e${
          _scopeId
        }>???????????????? ????????</span><div class="grid grid-cols-2 gap-[10px]" data-v-5076c47e${
          _scopeId
        }><!--[-->`)
        __vite_ssr_import_10__.ssrRenderList($setup.productCardColors, (color) => {
          _push(`<button class="${
            __vite_ssr_import_10__.ssrRenderClass([{
                        'opacity-50 disabled': $setup.disabledColor(color),
                        'hover:bg-primary active:bg-opacity-40 active:border-primary active:border-opacity-0':
                          !$setup.disabledColor(color),
                        'bg-primary text-white border-opacity-90 active:bg-opacity-100':
                          $setup.colorIsActive(color.value),
                        'bg-grey-light': !$setup.colorIsActive(color.value),
                        'hover:bg-opacity-20':
                          !$setup.disabledColor(color) && !$setup.colorIsActive(color.value),
                      }, "w-[120px] h-[80px] rounded-[4px] flex flex-col justify-center items-center transition-colors"])
          }" data-v-5076c47e${
            _scopeId
          }><span class="w-[36px] h-[36px] rounded-[4px] shadow-product-color" style="${
            __vite_ssr_import_10__.ssrRenderStyle({
                          backgroundColor: `${color.value}`,
                        })
          }" data-v-5076c47e${
            _scopeId
          }></span><span data-v-5076c47e${
            _scopeId
          }>${
            __vite_ssr_import_10__.ssrInterpolate(color.title)
          }</span></button>`)
        })
        _push(`<!--]--></div></div>`)
        if ($setup.productCardSizes && $setup.productCardSizes.length) {
          _push(`<div class="divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full" data-v-5076c47e${_scopeId}></div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`<div class="flex flex-col" data-v-5076c47e${
          _scopeId
        }><span class="text-[21px] text-secondary mb-[10px]" data-v-5076c47e${
          _scopeId
        }>???????????????? ????????????</span><div class="grid grid-cols-2 gap-[10px]" data-v-5076c47e${
          _scopeId
        }><!--[-->`)
        __vite_ssr_import_10__.ssrRenderList($setup.productCardSizes, (size) => {
          _push(`<button class="${
            __vite_ssr_import_10__.ssrRenderClass([{
                        'bg-primary text-white border-opacity-90 cursor-default active:bg-opacity-100':
                          $setup.sizeIsActive(size.value),
                        'bg-grey-light': !$setup.sizeIsActive(size.value),
                        'opacity-50 disabled': $setup.disabledSize(size),
                        'hover:bg-primary active:bg-opacity-40':
                          !$setup.disabledSize(size),
                        'hover:bg-opacity-20':
                          !$setup.disabledSize(size) && !$setup.sizeIsActive(size.value),
                      }, "w-[120px] h-[40px] rounded-[4px] flex flex-col justify-center items-center transition-colors"])
          }" data-v-5076c47e${
            _scopeId
          }>${
            __vite_ssr_import_10__.ssrInterpolate(size.value)
          }</button>`)
        })
        _push(`<!--]--></div></div><div class="divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full" data-v-5076c47e${_scopeId}></div>`)
        if (!$setup.productInCart) {
          _push(`<button class="${
            __vite_ssr_import_10__.ssrRenderClass([{
                    'bg-grey-text cursor-not-allowed': $setup.isCartHandlerDisabled,
                  }, "bg-primary h-[70px] text-[21px] font-medium text-white rounded-[4px] transition-all flex justify-center items-center"])
          }"${
            (__vite_ssr_import_10__.ssrIncludeBooleanAttr($setup.isCartHandlerDisabled)) ? " disabled" : ""
          } data-v-5076c47e${
            _scopeId
          }> ???????????????? ?? ?????????????? </button>`)
        } else {
          _push(`<div class="h-[70px] text-[18px] flex items-center justify-between" data-v-5076c47e${
            _scopeId
          }><button class="h-[30px] w-[30px] p-[2px] text-grey-text transition-colors rounded-[4px] bg-grey-light cursor-pointer hover:text-white hover:bg-orange" data-v-5076c47e${
            _scopeId
          }><svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-5076c47e${
            _scopeId
          }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" data-v-5076c47e${
            _scopeId
          }></path></svg></button>`)
          _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, { to: "/cart" }, {
            default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`?????? ?????????????? ( ${__vite_ssr_import_10__.ssrInterpolate($setup.productCounter)} )`)
              } else {
                return [
                  __vite_ssr_import_9__.createTextVNode("?????? ?????????????? ( " + __vite_ssr_import_9__.toDisplayString($setup.productCounter) + " )", 1 /* TEXT */)
                ]
              }
            }),
            _: 1 /* STABLE */
          }, _parent, _scopeId))
          _push(`<button class="${
            __vite_ssr_import_10__.ssrRenderClass([{
                      'cursor-not-allowed bg-grey-text hover:bg-grey-text text-grey-light':
                        !$setup.increaseAlowed,
                    }, "h-[30px] w-[30px] p-[2px] text-grey-text transition-colors rounded-[4px] bg-grey-light cursor-pointer hover:bg-primary hover:text-white"])
          }"${
            (__vite_ssr_import_10__.ssrIncludeBooleanAttr(!$setup.increaseAlowed)) ? " disabled" : ""
          } data-v-5076c47e${
            _scopeId
          }><svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-5076c47e${
            _scopeId
          }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-5076c47e${
            _scopeId
          }></path></svg></button></div>`)
        }
        if ($setup.isCartHandlerDisabled) {
          _push(`<div class="text-center" data-v-5076c47e${_scopeId}> ???????????? ?????? ?? ?????????????? </div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`</div></aside></div></div></main></div>`)
      } else {
        return [
          __vite_ssr_import_9__.createVNode("div", { class: "flex-grow" }, [
            __vite_ssr_import_9__.createVNode("main", { class: "mt-[102px] mb-[40px] flex-grow" }, [
              __vite_ssr_import_9__.createVNode("div", { class: "max-w-screen-xl w-full mx-auto" }, [
                __vite_ssr_import_9__.createVNode("div", { class: "page-header flex items-center" }, [
                  __vite_ssr_import_9__.createVNode("div", { class: "flex items-center" }, [
                    __vite_ssr_import_9__.createVNode(_component_NuxtLink, {
                      to: "/",
                      class: "breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
                    }, {
                      default: __vite_ssr_import_9__.withCtx(() => [
                        (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("svg", {
                          class: "w-6 h-6",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          __vite_ssr_import_9__.createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          })
                        ])),
                        __vite_ssr_import_9__.createVNode("span", { class: "ml-[5px]" }, "???? ??????????????")
                      ]),
                      _: 1 /* STABLE */
                    }),
                    __vite_ssr_import_9__.createVNode("div", { class: "divider bg-grey-text ml-[13px] mr-[13px] w-[4px] h-[4px] rounded-full justify-center items-center" }),
                    __vite_ssr_import_9__.createVNode(_component_NuxtLink, {
                      to: {
                  path: `/categories`,
                },
                      class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                    }, {
                      default: __vite_ssr_import_9__.withCtx(() => [
                        __vite_ssr_import_9__.createVNode("span", null, "?????? ??????????????????")
                      ]),
                      _: 1 /* STABLE */
                    }),
                    ($setup.category)
                      ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, { key: 0 }, [
                          __vite_ssr_import_9__.createVNode("div", { class: "divider bg-grey-text ml-[13px] mr-[13px] w-[4px] h-[4px] rounded-full justify-center items-center" }),
                          __vite_ssr_import_9__.createVNode(_component_NuxtLink, {
                            to: {
                    path: `/categories/${$setup.category.slug}`,
                  },
                            class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange capitalize"
                          }, {
                            default: __vite_ssr_import_9__.withCtx(() => [
                              __vite_ssr_import_9__.createVNode("span", null, __vite_ssr_import_9__.toDisplayString($setup.category.title), 1 /* TEXT */)
                            ]),
                            _: 1 /* STABLE */
                          }, 8 /* PROPS */, ["to"])
                        ], 64 /* STABLE_FRAGMENT */))
                      : __vite_ssr_import_9__.createCommentVNode("v-if", true)
                  ])
                ]),
                __vite_ssr_import_9__.createVNode("div", { class: "product flex items-start gap-[190px]" }, [
                  __vite_ssr_import_9__.createVNode("div", { class: "product-card flex-grow" }, [
                    __vite_ssr_import_9__.createVNode("div", { class: "product-title text-[36px] font-bold text-secondary capitalize" }, __vite_ssr_import_9__.toDisplayString($setup.productTitle), 1 /* TEXT */),
                    __vite_ssr_import_9__.createVNode("div", { class: "product-content flex items-start justify-between" }, [
                      __vite_ssr_import_9__.createVNode("div", { class: "product-info" }, [
                        __vite_ssr_import_9__.createVNode("div", { class: "product-article text-grey-text mb-[40px]" }, " ?????? ????????????????: " + __vite_ssr_import_9__.toDisplayString($setup.productArticle), 1 /* TEXT */),
                        __vite_ssr_import_9__.createVNode("ul", { class: "product-specifics flex flex-col text-left justify-start items-start gap-[15px]" }, [
                          (__vite_ssr_import_9__.openBlock(true), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, null, __vite_ssr_import_9__.renderList($setup.productDescription, (item) => {
                            return (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("li", { class: "product-specific px-[13px] py-[10px] border-[2px] rounded-[4px] border-primary text-primary" }, __vite_ssr_import_9__.toDisplayString(item.value), 1 /* TEXT */))
                          }), 256 /* UNKEYED_FRAGMENT */))
                        ])
                      ]),
                      __vite_ssr_import_9__.createVNode("div", { class: "product-image" }, [
                        __vite_ssr_import_9__.createVNode($setup["ImageViewer"], {
                          modelValue: $setup.imagesGalery,
                          "onUpdate:modelValue": $event => (($setup.imagesGalery) = $event)
                        }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ]),
                  __vite_ssr_import_9__.createVNode("aside", { class: "product-action w-1/5" }, [
                    __vite_ssr_import_9__.createVNode("div", { class: "flex flex-col" }, [
                      __vite_ssr_import_9__.createVNode("span", { class: "text-[36px] font-bold text-secondary" }, __vite_ssr_import_9__.toDisplayString($setup.productPrice) + " ??????.", 1 /* TEXT */),
                      ($setup.productCardColors && $setup.productCardColors.length)
                        ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                            key: 0,
                            class: "divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full"
                          }))
                        : __vite_ssr_import_9__.createCommentVNode("v-if", true),
                      __vite_ssr_import_9__.createVNode("div", { class: "flex flex-col" }, [
                        __vite_ssr_import_9__.createVNode("span", { class: "text-[21px] text-secondary mb-[10px]" }, "???????????????? ????????"),
                        __vite_ssr_import_9__.createVNode("div", { class: "grid grid-cols-2 gap-[10px]" }, [
                          (__vite_ssr_import_9__.openBlock(true), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, null, __vite_ssr_import_9__.renderList($setup.productCardColors, (color) => {
                            return (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("button", {
                              class: [{
                        'opacity-50 disabled': $setup.disabledColor(color),
                        'hover:bg-primary active:bg-opacity-40 active:border-primary active:border-opacity-0':
                          !$setup.disabledColor(color),
                        'bg-primary text-white border-opacity-90 active:bg-opacity-100':
                          $setup.colorIsActive(color.value),
                        'bg-grey-light': !$setup.colorIsActive(color.value),
                        'hover:bg-opacity-20':
                          !$setup.disabledColor(color) && !$setup.colorIsActive(color.value),
                      }, "w-[120px] h-[80px] rounded-[4px] flex flex-col justify-center items-center transition-colors"],
                              onClick: $event => ($setup.colorHandler(color))
                            }, [
                              __vite_ssr_import_9__.createVNode("span", {
                                class: "w-[36px] h-[36px] rounded-[4px] shadow-product-color",
                                style: {
                          backgroundColor: `${color.value}`,
                        }
                              }, null, 4 /* STYLE */),
                              __vite_ssr_import_9__.createVNode("span", null, __vite_ssr_import_9__.toDisplayString(color.title), 1 /* TEXT */)
                            ], 10 /* CLASS, PROPS */, ["onClick"]))
                          }), 256 /* UNKEYED_FRAGMENT */))
                        ])
                      ]),
                      ($setup.productCardSizes && $setup.productCardSizes.length)
                        ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                            key: 1,
                            class: "divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full"
                          }))
                        : __vite_ssr_import_9__.createCommentVNode("v-if", true),
                      __vite_ssr_import_9__.createVNode("div", { class: "flex flex-col" }, [
                        __vite_ssr_import_9__.createVNode("span", { class: "text-[21px] text-secondary mb-[10px]" }, "???????????????? ????????????"),
                        __vite_ssr_import_9__.createVNode("div", { class: "grid grid-cols-2 gap-[10px]" }, [
                          (__vite_ssr_import_9__.openBlock(true), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, null, __vite_ssr_import_9__.renderList($setup.productCardSizes, (size) => {
                            return (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("button", {
                              class: [{
                        'bg-primary text-white border-opacity-90 cursor-default active:bg-opacity-100':
                          $setup.sizeIsActive(size.value),
                        'bg-grey-light': !$setup.sizeIsActive(size.value),
                        'opacity-50 disabled': $setup.disabledSize(size),
                        'hover:bg-primary active:bg-opacity-40':
                          !$setup.disabledSize(size),
                        'hover:bg-opacity-20':
                          !$setup.disabledSize(size) && !$setup.sizeIsActive(size.value),
                      }, "w-[120px] h-[40px] rounded-[4px] flex flex-col justify-center items-center transition-colors"],
                              onClick: $event => ($setup.sizeHandler(size))
                            }, __vite_ssr_import_9__.toDisplayString(size.value), 11 /* TEXT, CLASS, PROPS */, ["onClick"]))
                          }), 256 /* UNKEYED_FRAGMENT */))
                        ])
                      ]),
                      __vite_ssr_import_9__.createVNode("div", { class: "divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full" }),
                      (!$setup.productInCart)
                        ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("button", {
                            key: 2,
                            class: ["bg-primary h-[70px] text-[21px] font-medium text-white rounded-[4px] transition-all flex justify-center items-center", {
                    'bg-grey-text cursor-not-allowed': $setup.isCartHandlerDisabled,
                  }],
                            disabled: $setup.isCartHandlerDisabled,
                            onClick: $event => ($setup.cartHandler())
                          }, " ???????????????? ?? ?????????????? ", 10 /* CLASS, PROPS */, ["disabled", "onClick"]))
                        : (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                            key: 3,
                            class: "h-[70px] text-[18px] flex items-center justify-between"
                          }, [
                            __vite_ssr_import_9__.createVNode("button", {
                              class: "h-[30px] w-[30px] p-[2px] text-grey-text transition-colors rounded-[4px] bg-grey-light cursor-pointer hover:text-white hover:bg-orange",
                              onClick: $event => ($setup.selectCounter(-1))
                            }, [
                              (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("svg", {
                                class: "w-full h-full",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                __vite_ssr_import_9__.createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M20 12H4"
                                })
                              ]))
                            ], 8 /* PROPS */, ["onClick"]),
                            __vite_ssr_import_9__.createVNode(_component_NuxtLink, { to: "/cart" }, {
                              default: __vite_ssr_import_9__.withCtx(() => [
                                __vite_ssr_import_9__.createTextVNode("?????? ?????????????? ( " + __vite_ssr_import_9__.toDisplayString($setup.productCounter) + " )", 1 /* TEXT */)
                              ]),
                              _: 1 /* STABLE */
                            }),
                            __vite_ssr_import_9__.createVNode("button", {
                              class: ["h-[30px] w-[30px] p-[2px] text-grey-text transition-colors rounded-[4px] bg-grey-light cursor-pointer hover:bg-primary hover:text-white", {
                      'cursor-not-allowed bg-grey-text hover:bg-grey-text text-grey-light':
                        !$setup.increaseAlowed,
                    }],
                              disabled: !$setup.increaseAlowed,
                              onClick: $event => ($setup.selectCounter(1))
                            }, [
                              (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("svg", {
                                class: "w-full h-full",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                __vite_ssr_import_9__.createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                })
                              ]))
                            ], 10 /* CLASS, PROPS */, ["disabled", "onClick"])
                          ])),
                      ($setup.isCartHandlerDisabled)
                        ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                            key: 4,
                            class: "text-center"
                          }, " ???????????? ?????? ?? ?????????????? "))
                        : __vite_ssr_import_9__.createCommentVNode("v-if", true)
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}

const __vite_ssr_import_11__ = await __vite_ssr_import__("/pages/products/[params].vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_12__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_12__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/products/[params].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_13__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_13__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-5076c47e"],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/products/[params].vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/UI/ImageViewer.vue
// Parents: 
// - /pages/products/[params].vue?macro=true ($id_5fe5d068)
// - /pages/products/[params].vue ($id_e6c5b58b)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9bcbfe6f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  name: "image-viewer",
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const images = props.modelValue;

    const config = __vite_ssr_import_0__.useRuntimeConfig();

    const getImageLink = (image) => {
      const link = image.attributes.url;
      return `${config.API_URL}${link}`;
    };

    const imagesWithImageLink = images.map((image) => ({
      imageLink: getImageLink(image),
      ...image,
    }));

    const currentImage = __vite_ssr_import_1__.ref({});

    const selectImage = (image) => {
      currentImage.value = image;
    };

    if (imagesWithImageLink && imagesWithImageLink.length) {
      selectImage(imagesWithImageLink[0]);
    }

    return { currentImage, selectImage, imagesWithImageLink };
  },
};

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "w-[400px]" }, _attrs))
  }><div class="w-full h-[400px] bg-center bg-cover mb-[10px] rounded-[4px]" style="${
    __vite_ssr_import_3__.ssrRenderStyle(`background-image: url('${$setup.currentImage.imageLink}')`)
  }"></div><div class="flex gap-[10px]"><!--[-->`)
  __vite_ssr_import_3__.ssrRenderList($setup.imagesWithImageLink, (imageItem) => {
    _push(`<button class="${
      __vite_ssr_import_3__.ssrRenderClass([{
          'border-[2px] border-primary': $setup.currentImage.id === imageItem.id,
        }, "w-[86px] h-[86px] flex items-center justify-center rounded-[4px]"])
    }"><div class="w-[70px] h-[70px] bg-center bg-cover" style="${
      __vite_ssr_import_3__.ssrRenderStyle(`background-image: url('${imageItem.imageLink}')`)
    }"> ??? </div></button>`)
  })
  _push(`<!--]--></div></div>`)
}


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/UI/ImageViewer.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/components/UI/ImageViewer.vue"]]);
}


// --------------------
// Request: /pages/products/[params].vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /pages/products/[params].vue?macro=true ($id_5fe5d068)
// - /pages/products/[params].vue ($id_e6c5b58b)
// Dependencies: 

// --------------------
const $id_5109f25b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".skeleton[data-v-5076c47e]{-webkit-animation:shine-loading-container-items-5076c47e 2s ease-out infinite;animation:shine-loading-container-items-5076c47e 2s ease-out infinite;background:#ececec;background-image:linear-gradient(90deg,#ececec,#ddd 40px,#ececec 80px);background-size:240px;border-radius:4px;height:100%;min-height:40px;width:100%}@-webkit-keyframes shine-loading-container-items-5076c47e{0%{background-position:-100px}40%,to{background-position:100px}}@keyframes shine-loading-container-items-5076c47e{0%{background-position:-100px}40%,to{background-position:100px}}";
}


// --------------------
// Request: /pages/address/index.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs ($id_eb849233)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bac860df = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_1__.mergeProps({ name: "shop" }, _attrs), {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex-grow"${
          _scopeId
        }><main class="mt-[135px] mb-[40px] flex-grow"${
          _scopeId
        }>address</main></div>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("div", { class: "flex-grow" }, [
            __vite_ssr_import_1__.createVNode("main", { class: "mt-[135px] mb-[40px] flex-grow" }, "address")
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/address/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/address/index.vue"]]);
}


// --------------------
// Request: /pages/cart/index.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs ($id_eb849233)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /store/cart/cart.js ($id_08ef3e2f)
// - /components/UI/AmountCounter.vue ($id_5db0a46a)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/cart/index.vue?vue&type=style&index=0&lang.css ($id_b6616365)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_3fa45d07 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/store/cart/cart.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/UI/AmountCounter.vue");



const _sfc_main = {
  name: 'index',
  setup(__props, { expose }) {
  expose();

const cart = __vite_ssr_import_5__.useCart();

const cartItems = __vite_ssr_import_2__.computed(() => {
  return cart.items;
});

const updateCartItemAmount = (item) => {
  cart.updateCartItem(item);
};

const deleteItem = (item) => {
  cart.removeFromCart(item);
};

const config = __vite_ssr_import_3__.useRuntimeConfig();

const getImageLink = (imageUrl) => {
  return `${config.API_URL}${imageUrl}`;
};

const pickedDelivery = __vite_ssr_import_2__.computed(() =>
  cartItems.value.length ? cart.$state.selectedDelivery : null
);

const selectDelivery = (value) => {
  cart.updateDelivery(value);
};

const cartTotalCounter = __vite_ssr_import_2__.computed(() =>
  cartItems.value.reduce((acc, item) => acc + item.count, 0)
);

const cartTotalSum = __vite_ssr_import_2__.computed(() =>
  cartItems.value.reduce((acc, item) => acc + item.count * item.price, 0)
);

__vite_ssr_import_4__.useHead({
  title: `???????????????? ??? ??????????????`,
});

const __returned__ = { cart, cartItems, updateCartItemAmount, deleteItem, config, getImageLink, pickedDelivery, selectDelivery, cartTotalCounter, cartTotalSum, useCart: __vite_ssr_import_5__.useCart, AmountCounter: __vite_ssr_import_6__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtLink = __vite_ssr_import_1__.default

  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_7__.mergeProps({ name: "shop" }, _attrs), {
    default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex-grow"${
          _scopeId
        }><main class="mt-[102px] mb-[40px] flex-grow"${
          _scopeId
        }><div class="max-w-screen-xl w-full mx-auto"${
          _scopeId
        }><div class="page-header flex items-center"${
          _scopeId
        }><div class="flex items-center"${
          _scopeId
        }>`)
        _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
        }, {
          default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
                _scopeId
              }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"${
                _scopeId
              }></path></svg><span class="ml-[5px]"${
                _scopeId
              }>???? ??????????????</span>`)
            } else {
              return [
                (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("svg", {
                  class: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  __vite_ssr_import_7__.createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  })
                ])),
                __vite_ssr_import_7__.createVNode("span", { class: "ml-[5px]" }, "???? ??????????????")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`</div></div><div class="page-header mb-[20px] flex items-center"${
          _scopeId
        }><h1 class="flex-grow text-primary text-[36px] font-bold"${
          _scopeId
        }> ?????????????? </h1></div><div class="flex gap-[40px]"${
          _scopeId
        }><div class="flex-1"${
          _scopeId
        }><ul class="flex flex-col gap-[20px]"${
          _scopeId
        }><!--[-->`)
        if (!$setup.cartItems.length) {
          _push(`<div${
            _scopeId
          }><div class="flex flex-col justify-center items-center font-medium text-secondary"${
            _scopeId
          }><span class="text-[26px]"${
            _scopeId
          }>?????? ???????? ??????????.</span><span class="text-[21px] mb-[25px]"${
            _scopeId
          }>?????????????????????????? ???????? ?????????????????? ????????????????!</span><div class="text-[21px] text-center"${
            _scopeId
          }>??\\_(???)_/??</div></div></div>`)
        } else {
          _push(`<!--[-->`)
          __vite_ssr_import_8__.ssrRenderList($setup.cartItems, (item) => {
            _push(`<li class="flex items-center justify-between rounded-[4px] border-[2px] border-grey-text p-[50px]"${_scopeId}>`)
            _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtLink, {
              to: `/products/${item.productCard}_${item.article}`,
              class: "breadcrumb flex items-start"
            }, {
              default: __vite_ssr_import_7__.withCtx((_, _push, _parent, _scopeId) => {
                if (_push) {
                  _push(`<div class="image w-[120px] h-[120px] bg-center bg-cover bg-no-repeat mr-[40px]" style="${
                    __vite_ssr_import_8__.ssrRenderStyle(`background-image: url('${$setup.getImageLink(
                            item.imageUrl
                          )}')`)
                  }"${
                    _scopeId
                  }></div><div class="flex flex-col max-w-[180px]"${
                    _scopeId
                  }><span class="text-[16px] text-grey-text"${
                    _scopeId
                  }> ?????????????? ${
                    __vite_ssr_import_8__.ssrInterpolate(item.article)
                  }</span><span class="text-[21px] text-secondary leading-[25px] font-medium capitalize"${
                    _scopeId
                  }>${
                    __vite_ssr_import_8__.ssrInterpolate(item.title)
                  }</span><span${
                    _scopeId
                  }>${
                    __vite_ssr_import_8__.ssrInterpolate(item.color.title)
                  }, ${
                    __vite_ssr_import_8__.ssrInterpolate(item.size.value)
                  }</span></div>`)
                } else {
                  return [
                    __vite_ssr_import_7__.createVNode("div", {
                      class: "image w-[120px] h-[120px] bg-center bg-cover bg-no-repeat mr-[40px]",
                      style: `background-image: url('${$setup.getImageLink(
                            item.imageUrl
                          )}')`
                    }, null, 4 /* STYLE */),
                    __vite_ssr_import_7__.createVNode("div", { class: "flex flex-col max-w-[180px]" }, [
                      __vite_ssr_import_7__.createVNode("span", { class: "text-[16px] text-grey-text" }, " ?????????????? " + __vite_ssr_import_7__.toDisplayString(item.article), 1 /* TEXT */),
                      __vite_ssr_import_7__.createVNode("span", { class: "text-[21px] text-secondary leading-[25px] font-medium capitalize" }, __vite_ssr_import_7__.toDisplayString(item.title), 1 /* TEXT */),
                      __vite_ssr_import_7__.createVNode("span", null, __vite_ssr_import_7__.toDisplayString(item.color.title) + ", " + __vite_ssr_import_7__.toDisplayString(item.size.value), 1 /* TEXT */)
                    ])
                  ]
                }
              }),
              _: 2 /* DYNAMIC */
            }, _parent, _scopeId))
            _push(`<div class="ml-[40px] flex flex-1 justify-between items-center"${
              _scopeId
            }><div class="relative"${
              _scopeId
            }>`)
            _push(__vite_ssr_import_8__.ssrRenderComponent($setup["AmountCounter"], {
              modelValue: item.count,
              "onUpdate:modelValue": [$event => ((item.count) = $event), $event => ($setup.updateCartItemAmount(item))],
              max: item.amount
            }, null, _parent, _scopeId))
            if (item.count > 1) {
              _push(`<span class="absolute bottom-[calc(-100%+5px)] left-0 text-[21px] text-grey-text font-medium"${
                _scopeId
              }>${
                __vite_ssr_import_8__.ssrInterpolate(item.price)
              } ???/ ????</span>`)
            } else {
              _push(`<!---->`)
            }
            _push(`</div><div class="text-[21px] text-secondary font-medium"${
              _scopeId
            }>${
              __vite_ssr_import_8__.ssrInterpolate(item.count * item.price)
            } ??? </div><button class="text-secondary hover:text-orange hover:bg-grey-light rounded-[4px] p-[5px] h-[40px] w-[40px] transition-colors"${
              _scopeId
            }><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
              _scopeId
            }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"${
              _scopeId
            }></path></svg></button></div></li>`)
          })
          _push(`<!--]-->`)
        }
        _push(`<!--]--></ul></div><div class="w-[300px] relative"${
          _scopeId
        }><div class="left-0 top-0 sidebar"${
          _scopeId
        }><div class="flex flex-col gap-[10px] mb-[10px]"${
          _scopeId
        }><button class="${
          __vite_ssr_import_8__.ssrRenderClass([{
                      'border-grey-text': $setup.pickedDelivery !== 'delivery',
                      'border-primary cursor-default':
                        $setup.pickedDelivery === 'delivery',
                    }, "flex flex-col px-[13px] py-[10px] rounded-[4px] border-[2px] w-full relative"])
        }"${
          (__vite_ssr_import_8__.ssrIncludeBooleanAttr(!$setup.cartItems.length)) ? " disabled" : ""
        }${
          _scopeId
        }><span class="text-secondary font-medium text-[21px]"${
          _scopeId
        }>????????????????</span><span class="text-grey-text"${
          _scopeId
        }>?????????? ????????????, DHL, Boxberry</span>`)
        if ($setup.pickedDelivery === 'delivery') {
          _push(`<div class="absolute flex justify-center items-center top-[-10px] right-[-10px] bg-white p-[4px]"${
            _scopeId
          }><div class="flex justify-center items-center h-[24px] w-[24px] bg-primary rounded-[4px] text-white"${
            _scopeId
          }><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
            _scopeId
          }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"${
            _scopeId
          }></path></svg></div></div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`</button><button class="${
          __vite_ssr_import_8__.ssrRenderClass([{
                      'border-grey-text': $setup.pickedDelivery !== 'pickup',
                      'border-primary': $setup.pickedDelivery === 'pickup',
                    }, "flex flex-col px-[13px] py-[10px] rounded-[4px] border-[2px] w-full relative"])
        }"${
          (__vite_ssr_import_8__.ssrIncludeBooleanAttr(!$setup.cartItems.length)) ? " disabled" : ""
        }${
          _scopeId
        }><span class="text-secondary font-medium text-[21px]"${
          _scopeId
        }>??????????????????</span><span class="text-grey-text"${
          _scopeId
        }>???????????????? ?????????? ?? ????????????????</span>`)
        if ($setup.pickedDelivery === 'pickup') {
          _push(`<div class="absolute flex justify-center items-center top-[-10px] right-[-10px] bg-white p-[4px]"${
            _scopeId
          }><div class="flex justify-center items-center h-[24px] w-[24px] bg-primary rounded-[4px] text-white"${
            _scopeId
          }><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
            _scopeId
          }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"${
            _scopeId
          }></path></svg></div></div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`</button></div><div class="flex flex-col gap-[15px] pt-[32px] px-[13px] pb-[20px] rounded-[4px] border-[2px] border-grey-text"${
          _scopeId
        }><div class="flex justify-between items-center text-[21px] text-grey-text"${
          _scopeId
        }><div${
          _scopeId
        }>???????????? (${
          __vite_ssr_import_8__.ssrInterpolate($setup.cartTotalCounter)
        }):</div><div${
          _scopeId
        }>${
          __vite_ssr_import_8__.ssrInterpolate($setup.cartTotalSum)
        } ???</div></div><div class="flex justify-between items-center text-[21px]"${
          _scopeId
        }><div class="text-grey-text"${
          _scopeId
        }>????????????????:</div><div class="text-primary"${
          _scopeId
        }>${
          __vite_ssr_import_8__.ssrInterpolate($setup.pickedDelivery === "delivery" ? "????????????????" : "??????????????????")
        }</div></div><div class="divider shadow-divider w-full h-[2px] bg-grey-light rounded-full"${
          _scopeId
        }></div><div class="flex justify-between items-center text-[21px] text-secondary"${
          _scopeId
        }><div${
          _scopeId
        }>??????????:</div><div${
          _scopeId
        }>${
          __vite_ssr_import_8__.ssrInterpolate($setup.cartTotalSum)
        } ???</div></div><div class="divider shadow-divider w-full h-[2px] bg-grey-light rounded-full"${
          _scopeId
        }></div><button class="${
          __vite_ssr_import_8__.ssrRenderClass([{
                      'bg-grey-light text-grey-text': $setup.cartTotalSum === 0,
                      'hover:bg-white border-[2px] border-primary hover:text-primary text-white ':
                        $setup.cartTotalSum !== 0,
                    }, "bg-primary text-[21px] text-center py-[12px] rounded-[4px] transition-colors"])
        }"${
          (__vite_ssr_import_8__.ssrIncludeBooleanAttr($setup.cartTotalSum === 0)) ? " disabled" : ""
        }${
          _scopeId
        }> ?????????????? ?? ???????????????????? </button></div></div></div></div></div></main></div>`)
      } else {
        return [
          __vite_ssr_import_7__.createVNode("div", { class: "flex-grow" }, [
            __vite_ssr_import_7__.createVNode("main", { class: "mt-[102px] mb-[40px] flex-grow" }, [
              __vite_ssr_import_7__.createVNode("div", { class: "max-w-screen-xl w-full mx-auto" }, [
                __vite_ssr_import_7__.createVNode("div", { class: "page-header flex items-center" }, [
                  __vite_ssr_import_7__.createVNode("div", { class: "flex items-center" }, [
                    __vite_ssr_import_7__.createVNode(_component_NuxtLink, {
                      to: "/",
                      class: "breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
                    }, {
                      default: __vite_ssr_import_7__.withCtx(() => [
                        (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("svg", {
                          class: "w-6 h-6",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          __vite_ssr_import_7__.createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          })
                        ])),
                        __vite_ssr_import_7__.createVNode("span", { class: "ml-[5px]" }, "???? ??????????????")
                      ]),
                      _: 1 /* STABLE */
                    })
                  ])
                ]),
                __vite_ssr_import_7__.createVNode("div", { class: "page-header mb-[20px] flex items-center" }, [
                  __vite_ssr_import_7__.createVNode("h1", { class: "flex-grow text-primary text-[36px] font-bold" }, " ?????????????? ")
                ]),
                __vite_ssr_import_7__.createVNode("div", { class: "flex gap-[40px]" }, [
                  __vite_ssr_import_7__.createVNode("div", { class: "flex-1" }, [
                    __vite_ssr_import_7__.createVNode("ul", { class: "flex flex-col gap-[20px]" }, [
                      __vite_ssr_import_7__.createVNode(__vite_ssr_import_7__.TransitionGroup, { name: "list" }, {
                        default: __vite_ssr_import_7__.withCtx(() => [
                          (!$setup.cartItems.length)
                            ? (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", { key: 0 }, [
                                __vite_ssr_import_7__.createVNode("div", { class: "flex flex-col justify-center items-center font-medium text-secondary" }, [
                                  __vite_ssr_import_7__.createVNode("span", { class: "text-[26px]" }, "?????? ???????? ??????????."),
                                  __vite_ssr_import_7__.createVNode("span", { class: "text-[21px] mb-[25px]" }, "?????????????????????????? ???????? ?????????????????? ????????????????!"),
                                  __vite_ssr_import_7__.createVNode("div", { class: "text-[21px] text-center" }, "??\\_(???)_/??")
                                ])
                              ]))
                            : (__vite_ssr_import_7__.openBlock(true), __vite_ssr_import_7__.createBlock(__vite_ssr_import_7__.Fragment, { key: 1 }, __vite_ssr_import_7__.renderList($setup.cartItems, (item) => {
                                return (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("li", { class: "flex items-center justify-between rounded-[4px] border-[2px] border-grey-text p-[50px]" }, [
                                  __vite_ssr_import_7__.createVNode(_component_NuxtLink, {
                                    to: `/products/${item.productCard}_${item.article}`,
                                    class: "breadcrumb flex items-start"
                                  }, {
                                    default: __vite_ssr_import_7__.withCtx(() => [
                                      __vite_ssr_import_7__.createVNode("div", {
                                        class: "image w-[120px] h-[120px] bg-center bg-cover bg-no-repeat mr-[40px]",
                                        style: `background-image: url('${$setup.getImageLink(
                            item.imageUrl
                          )}')`
                                      }, null, 4 /* STYLE */),
                                      __vite_ssr_import_7__.createVNode("div", { class: "flex flex-col max-w-[180px]" }, [
                                        __vite_ssr_import_7__.createVNode("span", { class: "text-[16px] text-grey-text" }, " ?????????????? " + __vite_ssr_import_7__.toDisplayString(item.article), 1 /* TEXT */),
                                        __vite_ssr_import_7__.createVNode("span", { class: "text-[21px] text-secondary leading-[25px] font-medium capitalize" }, __vite_ssr_import_7__.toDisplayString(item.title), 1 /* TEXT */),
                                        __vite_ssr_import_7__.createVNode("span", null, __vite_ssr_import_7__.toDisplayString(item.color.title) + ", " + __vite_ssr_import_7__.toDisplayString(item.size.value), 1 /* TEXT */)
                                      ])
                                    ]),
                                    _: 2 /* DYNAMIC */
                                  }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]),
                                  __vite_ssr_import_7__.createVNode("div", { class: "ml-[40px] flex flex-1 justify-between items-center" }, [
                                    __vite_ssr_import_7__.createVNode("div", { class: "relative" }, [
                                      __vite_ssr_import_7__.createVNode($setup["AmountCounter"], {
                                        modelValue: item.count,
                                        "onUpdate:modelValue": [$event => ((item.count) = $event), $event => ($setup.updateCartItemAmount(item))],
                                        max: item.amount
                                      }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue", "max"]),
                                      (item.count > 1)
                                        ? (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("span", {
                                            key: 0,
                                            class: "absolute bottom-[calc(-100%+5px)] left-0 text-[21px] text-grey-text font-medium"
                                          }, __vite_ssr_import_7__.toDisplayString(item.price) + " ???/ ????", 1 /* TEXT */))
                                        : __vite_ssr_import_7__.createCommentVNode("v-if", true)
                                    ]),
                                    __vite_ssr_import_7__.createVNode("div", { class: "text-[21px] text-secondary font-medium" }, __vite_ssr_import_7__.toDisplayString(item.count * item.price) + " ??? ", 1 /* TEXT */),
                                    __vite_ssr_import_7__.createVNode("button", {
                                      class: "text-secondary hover:text-orange hover:bg-grey-light rounded-[4px] p-[5px] h-[40px] w-[40px] transition-colors",
                                      onClick: $event => ($setup.deleteItem(item.article))
                                    }, [
                                      (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("svg", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg"
                                      }, [
                                        __vite_ssr_import_7__.createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        })
                                      ]))
                                    ], 8 /* PROPS */, ["onClick"])
                                  ])
                                ]))
                              }), 256 /* UNKEYED_FRAGMENT */))
                        ]),
                        _: 1 /* STABLE */
                      })
                    ])
                  ]),
                  __vite_ssr_import_7__.createVNode("div", { class: "w-[300px] relative" }, [
                    __vite_ssr_import_7__.createVNode("div", { class: "left-0 top-0 sidebar" }, [
                      __vite_ssr_import_7__.createVNode("div", { class: "flex flex-col gap-[10px] mb-[10px]" }, [
                        __vite_ssr_import_7__.createVNode("button", {
                          class: ["flex flex-col px-[13px] py-[10px] rounded-[4px] border-[2px] w-full relative", {
                      'border-grey-text': $setup.pickedDelivery !== 'delivery',
                      'border-primary cursor-default':
                        $setup.pickedDelivery === 'delivery',
                    }],
                          disabled: !$setup.cartItems.length,
                          onClick: $event => ($setup.selectDelivery('delivery'))
                        }, [
                          __vite_ssr_import_7__.createVNode("span", { class: "text-secondary font-medium text-[21px]" }, "????????????????"),
                          __vite_ssr_import_7__.createVNode("span", { class: "text-grey-text" }, "?????????? ????????????, DHL, Boxberry"),
                          ($setup.pickedDelivery === 'delivery')
                            ? (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                                key: 0,
                                class: "absolute flex justify-center items-center top-[-10px] right-[-10px] bg-white p-[4px]"
                              }, [
                                __vite_ssr_import_7__.createVNode("div", { class: "flex justify-center items-center h-[24px] w-[24px] bg-primary rounded-[4px] text-white" }, [
                                  (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    __vite_ssr_import_7__.createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M5 13l4 4L19 7"
                                    })
                                  ]))
                                ])
                              ]))
                            : __vite_ssr_import_7__.createCommentVNode("v-if", true)
                        ], 10 /* CLASS, PROPS */, ["disabled", "onClick"]),
                        __vite_ssr_import_7__.createVNode("button", {
                          class: ["flex flex-col px-[13px] py-[10px] rounded-[4px] border-[2px] w-full relative", {
                      'border-grey-text': $setup.pickedDelivery !== 'pickup',
                      'border-primary': $setup.pickedDelivery === 'pickup',
                    }],
                          disabled: !$setup.cartItems.length,
                          onClick: $event => ($setup.selectDelivery('pickup'))
                        }, [
                          __vite_ssr_import_7__.createVNode("span", { class: "text-secondary font-medium text-[21px]" }, "??????????????????"),
                          __vite_ssr_import_7__.createVNode("span", { class: "text-grey-text" }, "???????????????? ?????????? ?? ????????????????"),
                          ($setup.pickedDelivery === 'pickup')
                            ? (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("div", {
                                key: 0,
                                class: "absolute flex justify-center items-center top-[-10px] right-[-10px] bg-white p-[4px]"
                              }, [
                                __vite_ssr_import_7__.createVNode("div", { class: "flex justify-center items-center h-[24px] w-[24px] bg-primary rounded-[4px] text-white" }, [
                                  (__vite_ssr_import_7__.openBlock(), __vite_ssr_import_7__.createBlock("svg", {
                                    class: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    __vite_ssr_import_7__.createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M5 13l4 4L19 7"
                                    })
                                  ]))
                                ])
                              ]))
                            : __vite_ssr_import_7__.createCommentVNode("v-if", true)
                        ], 10 /* CLASS, PROPS */, ["disabled", "onClick"])
                      ]),
                      __vite_ssr_import_7__.createVNode("div", { class: "flex flex-col gap-[15px] pt-[32px] px-[13px] pb-[20px] rounded-[4px] border-[2px] border-grey-text" }, [
                        __vite_ssr_import_7__.createVNode("div", { class: "flex justify-between items-center text-[21px] text-grey-text" }, [
                          __vite_ssr_import_7__.createVNode("div", null, "???????????? (" + __vite_ssr_import_7__.toDisplayString($setup.cartTotalCounter) + "):", 1 /* TEXT */),
                          __vite_ssr_import_7__.createVNode("div", null, __vite_ssr_import_7__.toDisplayString($setup.cartTotalSum) + " ???", 1 /* TEXT */)
                        ]),
                        __vite_ssr_import_7__.createVNode("div", { class: "flex justify-between items-center text-[21px]" }, [
                          __vite_ssr_import_7__.createVNode("div", { class: "text-grey-text" }, "????????????????:"),
                          __vite_ssr_import_7__.createVNode("div", { class: "text-primary" }, __vite_ssr_import_7__.toDisplayString($setup.pickedDelivery === "delivery" ? "????????????????" : "??????????????????"), 1 /* TEXT */)
                        ]),
                        __vite_ssr_import_7__.createVNode("div", { class: "divider shadow-divider w-full h-[2px] bg-grey-light rounded-full" }),
                        __vite_ssr_import_7__.createVNode("div", { class: "flex justify-between items-center text-[21px] text-secondary" }, [
                          __vite_ssr_import_7__.createVNode("div", null, "??????????:"),
                          __vite_ssr_import_7__.createVNode("div", null, __vite_ssr_import_7__.toDisplayString($setup.cartTotalSum) + " ???", 1 /* TEXT */)
                        ]),
                        __vite_ssr_import_7__.createVNode("div", { class: "divider shadow-divider w-full h-[2px] bg-grey-light rounded-full" }),
                        __vite_ssr_import_7__.createVNode("button", {
                          class: ["bg-primary text-[21px] text-center py-[12px] rounded-[4px] transition-colors", {
                      'bg-grey-light text-grey-text': $setup.cartTotalSum === 0,
                      'hover:bg-white border-[2px] border-primary hover:text-primary text-white ':
                        $setup.cartTotalSum !== 0,
                    }],
                          disabled: $setup.cartTotalSum === 0
                        }, " ?????????????? ?? ???????????????????? ", 10 /* CLASS, PROPS */, ["disabled"])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}

const __vite_ssr_import_9__ = await __vite_ssr_import__("/pages/cart/index.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/cart/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_11__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/cart/index.vue"]]);
}


// --------------------
// Request: /pages/categories/[slug]/index.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs ($id_eb849233)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs ($id_63a2fd8b)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /store/cart/cart.js ($id_08ef3e2f)
// - /components/ProductFilter.vue ($id_16ebd3b1)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a38e0b82 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/store/cart/cart.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/components/ProductFilter.vue");



const _sfc_main = {
  name: 'index',
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const config = __vite_ssr_import_2__.useRuntimeConfig();
const route = __vite_ssr_import_2__.useRoute();
const router = __vite_ssr_import_2__.useRouter();

const categorySlug = route.params.slug;
const dataProducts = __vite_ssr_import_3__.ref([]);
const loading = __vite_ssr_import_3__.ref(false);

const data = (
  ([__temp,__restore] = __vite_ssr_import_6__.withAsyncContext(() => __vite_ssr_import_4__.GqlGetCategoryBySlug({ slug: categorySlug }))),
  __temp = await __temp,
  __restore(),
  __temp
);

const categoryBrands = __vite_ssr_import_3__.computed(() => data.brands.data);

const currentCategory = data?.categories?.data[0]?.attributes;

if (
  !currentCategory.value ||
  (currentCategory.value && !currentCategory.value.lenght)
) {
  // router.push("/404");
}

const isProductsVisible = __vite_ssr_import_3__.computed(() => currentCategory.showProducts);
const isRelatedCategoriesVisible = __vite_ssr_import_3__.computed(
  () => currentCategory.showRelated
);

const relatedCategories = __vite_ssr_import_3__.computed(
  () => currentCategory.related.data
);

const parentCategory = __vite_ssr_import_3__.computed(() => currentCategory.parent?.data?.attributes);

const getProducts = async (query) => {
  loading.value = true;
  const productsData = __vite_ssr_import_3__.ref([]);
  const toSendData = {
    slug: currentCategory.slug,
  };

  if (query) {
    const brandsList = query.brandsList;
    const price = query.price;

    if (brandsList && brandsList.length) {
      toSendData.brands = brandsList;
    }

    if (price) {
      if (price.from) {
        toSendData.priceFrom = Number(price.from);
      }

      if (price.to) {
        toSendData.priceTo = Number(price.to);
      }
    }
  }
  // turn on filter
  if (Object.keys(toSendData).length > 1) {
    filterIsActive.value = true;
  }

  productsData.value = await __vite_ssr_import_4__.GqlProductsBySubcategorySlug(toSendData);

  dataProducts.value = productsData.value.products.data;
  loading.value = false;
};

const filterIsActive = __vite_ssr_import_3__.ref(false);

const clearFilter = async () => {
  await getProducts();
};

const getFilteredProducts = async () => {
  const query = {};
  const brands = route.query.brands;
  const from = route.query.from;
  const to = route.query.to;
  if (brands) {
    query.brandsList = brands.split(",").map((item) => Number(item));
  }

  if (from) {
    if (!query.price) {
      query.price = {};
    }
    query.price.from = from;
  }
  if (to) {
    if (!query.price) {
      query.price = {};
    }
    query.price.to = to;
  }

  await getProducts(query);
};

const preSearchQuery = __vite_ssr_import_3__.ref({});
if (route.query.from) {
  if (!preSearchQuery.value.price) {
    preSearchQuery.value.price = {};
  }
  preSearchQuery.value.price.from = route.query.from;
}

if (route.query.to) {
  if (!preSearchQuery.value.price) {
    preSearchQuery.value.price = {};
  }
  preSearchQuery.value.price.to = route.query.to;
}

if (route.query.brands) {
  preSearchQuery.value.brandsList = route.query.brands.split(",");
}

;(
  ([__temp,__restore] = __vite_ssr_import_6__.withAsyncContext(() => getProducts(preSearchQuery.value))),
  await __temp,
  __restore()
);

const categoryUrl = (category) => {
  const url = category.attributes?.image?.data?.attributes?.url;
  if (url) {
    return `${config.public.API_URL}${url}`;
  }
  return "";
};

const productUrl = (product) => {
  const url = product.attributes?.images?.data[0]?.attributes?.url;
  if (url) {
    return `${config.public.API_URL}${url}`;
  }
  return "";
};

const cart = __vite_ssr_import_7__.useCart();

const cartItems = __vite_ssr_import_3__.computed(() => {
  return cart.items;
});

const productInCart = (product) => {
  const foundItem = cartItems.value.find(
    (item) => item.article === product.attributes.article
  );

  return !!foundItem;
};

const cartHandler = (product) => {
  if (productInCart(product)) {
    cart.removeFromCart(product.attributes.article);
  } else {
    cart.addToCart({
      count: 1,
      color: product.attributes.color,
      article: product.attributes.article,
      amount: product.attributes.amount,
      size: product.attributes.size,
      title: product.attributes.title,
      price: product.attributes.price,
      imageUrl: product.attributes.images.data[0]?.attributes?.url,
      productCard: product.attributes.parent.slug,
    });
  }
};

__vite_ssr_import_5__.useHead({
  title: `???????????????? ??? ${data.categories.data[0].attributes.title}`,
});

const __returned__ = { config, route, router, categorySlug, dataProducts, loading, data, categoryBrands, currentCategory, isProductsVisible, isRelatedCategoriesVisible, relatedCategories, parentCategory, getProducts, filterIsActive, clearFilter, getFilteredProducts, preSearchQuery, categoryUrl, productUrl, cart, cartItems, productInCart, cartHandler, useCart: __vite_ssr_import_7__.useCart, ProductFilter: __vite_ssr_import_8__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtLink = __vite_ssr_import_1__.default

  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_9__.mergeProps({ name: "shop" }, _attrs), {
    default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex-grow"${
          _scopeId
        }><main class="mt-[102px] mb-[40px] flex-grow"${
          _scopeId
        }><div class="max-w-screen-xl w-full mx-auto"${
          _scopeId
        }><div class="flex items-center"${
          _scopeId
        }>`)
        _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
        }, {
          default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
                _scopeId
              }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"${
                _scopeId
              }></path></svg><span class="ml-[5px]"${
                _scopeId
              }>???? ??????????????</span>`)
            } else {
              return [
                (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("svg", {
                  class: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  __vite_ssr_import_9__.createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  })
                ])),
                __vite_ssr_import_9__.createVNode("span", { class: "ml-[5px]" }, "???? ??????????????")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<div class="divider bg-grey-text ml-[13px] mr-[13px] w-[4px] h-[4px] rounded-full justify-center items-center"${_scopeId}></div>`)
        _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
          to: {
                path: `/categories`,
              },
          class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
        }, {
          default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<span${_scopeId}>?????? ??????????????????</span>`)
            } else {
              return [
                __vite_ssr_import_9__.createVNode("span", null, "?????? ??????????????????")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        if ($setup.parentCategory) {
          _push(`<!--[--><div class="divider bg-grey-text ml-[13px] mr-[13px] w-[4px] h-[4px] rounded-full justify-center items-center"${_scopeId}></div>`)
          _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
            to: {
                  path: `/categories/${$setup.parentCategory.slug}`,
                },
            class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange capitalize"
          }, {
            default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<span${
                  _scopeId
                }>${
                  __vite_ssr_import_10__.ssrInterpolate($setup.parentCategory.title)
                }</span>`)
              } else {
                return [
                  __vite_ssr_import_9__.createVNode("span", null, __vite_ssr_import_9__.toDisplayString($setup.parentCategory.title), 1 /* TEXT */)
                ]
              }
            }),
            _: 1 /* STABLE */
          }, _parent, _scopeId))
          _push(`<!--]-->`)
        } else {
          _push(`<!---->`)
        }
        _push(`</div><div class="page-header mb-[20px] flex items-center"${
          _scopeId
        }><h1 class="flex-grow text-primary text-[36px] font-bold capitalize"${
          _scopeId
        }>${
          __vite_ssr_import_10__.ssrInterpolate($setup.currentCategory.title)
        }</h1></div>`)
        if (
              $setup.currentCategory.items.data && $setup.currentCategory.items.data.length
            ) {
          _push(`<div class="cards flex items-center gap-[20px]"${_scopeId}><!--[-->`)
          __vite_ssr_import_10__.ssrRenderList($setup.currentCategory.items.data, (category) => {
            _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
              to: {
                path: `/categories/${category.attributes.slug}`,
              },
              class: "card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
            }, {
              default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
                if (_push) {
                  _push(`<div class="card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain" style="${
                    __vite_ssr_import_10__.ssrRenderStyle(`background-image: url('${$setup.categoryUrl(category)}')`)
                  }"${
                    _scopeId
                  }></div><div class="flex flex-grow card-text text-[21px] text-secondary capitalize"${
                    _scopeId
                  }>${
                    __vite_ssr_import_10__.ssrInterpolate(category.attributes.title)
                  }</div>`)
                } else {
                  return [
                    __vite_ssr_import_9__.createVNode("div", {
                      class: "card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",
                      style: `background-image: url('${$setup.categoryUrl(category)}')`
                    }, null, 4 /* STYLE */),
                    __vite_ssr_import_9__.createVNode("div", { class: "flex flex-grow card-text text-[21px] text-secondary capitalize" }, __vite_ssr_import_9__.toDisplayString(category.attributes.title), 1 /* TEXT */)
                  ]
                }
              }),
              _: 2 /* DYNAMIC */
            }, _parent, _scopeId))
          })
          _push(`<!--]--></div>`)
        } else {
          _push(`<!---->`)
        }
        if (
              $setup.isProductsVisible &&
              $setup.currentCategory.items.data &&
              $setup.currentCategory.items.data.length
            ) {
          _push(`<div class="section-divider w-full h-[2px] bg-grey-light shadow-divider my-[40px] rounded-full"${_scopeId}></div>`)
        } else {
          _push(`<!---->`)
        }
        if ($setup.isProductsVisible) {
          _push(`<div class="flex justify-between items-start gap-[40px]"${
            _scopeId
          }><aside class="catalog-filter min-w-[300px] flex flex-col"${
            _scopeId
          }>`)
          _push(__vite_ssr_import_10__.ssrRenderComponent($setup["ProductFilter"], {
            modelValue: $setup.filterIsActive,
            "onUpdate:modelValue": $event => (($setup.filterIsActive) = $event),
            brands: $setup.categoryBrands,
            onApply: $setup.getFilteredProducts,
            onClear: $event => ($setup.clearFilter())
          }, null, _parent, _scopeId))
          _push(`</aside><!-- loading-cards -->`)
          if ($setup.loading) {
            _push(`<div class="catalog-list flex-grow flex flex-wrap gap-[25px]"${_scopeId}><!--[-->`)
            __vite_ssr_import_10__.ssrRenderList(4, (item) => {
              _push(`<div class="catalog-list-item font-medium text-[21px] bg-grey w-[calc(33.33%-16.7px)] h-[450px] shadow-card rounded-[4px] relative flex flex-col justify-start p-[30px] animate-pulse"${_scopeId}></div>`)
            })
            _push(`<!--]--></div>`)
          } else if ($setup.dataProducts && $setup.dataProducts.length) {
            _push(`<!--[--><!-- products-list --><div class="catalog-list flex-grow flex flex-wrap gap-[25px]"${_scopeId}><!--[-->`)
            __vite_ssr_import_10__.ssrRenderList($setup.dataProducts, (product, index) => {
              _push(`<div class="catalog-list-item font-medium text-[21px] h-[450px] shadow-card w-[calc(33.33%-16.7px)] hover:shadow-card-hover rounded-[4px] relative flex flex-col justify-start items-center p-[30px] transition-all"${_scopeId}>`)
              _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
                to: `/products/${product.attributes.parent.data.attributes.slug}_${product.attributes.article}`,
                class: "flex item-image bg-center bg-no-repeat bg-cover w-[256px] h-[256px]",
                style: `background-image: url('${$setup.productUrl(product)}')`
              }, null, _parent, _scopeId))
              _push(`<div class="item-content flex flex-1 flex-col justify-between text-center"${
                _scopeId
              }><div class="flex flex-1 item-title font-medium justify-center items-center capitalize capitalize"${
                _scopeId
              }>${
                __vite_ssr_import_10__.ssrInterpolate(product.attributes.title)
              }</div><div class="flex gap-[5px]"${
                _scopeId
              }><div class="flex-1 item-button border-[2px] border-primary rounded-[4px] flex justify-center items-center cursor-default select-none"${
                _scopeId
              }>${
                __vite_ssr_import_10__.ssrInterpolate(product.attributes.price)
              } ??? </div><button class="${
                __vite_ssr_import_10__.ssrRenderClass([{
                          'hover:bg-white border-[2px] border-primary hover:text-primary':
                            !$setup.productInCart(product),
                          'hover:bg-orange': $setup.productInCart(product),
                        }, "item-button py-[4px] w-[70px] h-[40px] bg-primary text-white rounded-[4px] flex justify-center items-center active:scale-95 transition-all"])
              }"${
                _scopeId
              }>`)
              if ($setup.productInCart(product)) {
                _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
                  _scopeId
                }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"${
                  _scopeId
                }></path></svg>`)
              } else {
                _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
                  _scopeId
                }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"${
                  _scopeId
                }></path></svg>`)
              }
              _push(`</button></div></div></div>`)
            })
            _push(`<!--]--></div><!--]-->`)
          } else {
            _push(`<div class="flex flex-1 flex-col justify-center items-center font-medium text-secondary"${
              _scopeId
            }><span class="text-[26px]"${
              _scopeId
            }>??????????</span><span class="text-[21px] mb-[25px]"${
              _scopeId
            }>???? ?????????????????? ???????????????????? ?????????????? ???????????? ???? ??????????????</span><div class="text-[21px] text-center"${
              _scopeId
            }>??\\_(???)_/??</div></div>`)
          }
          _push(`</div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`<!-- related-categories -->`)
        if ($setup.isRelatedCategoriesVisible && $setup.relatedCategories.length) {
          _push(`<!--[--><div class="my-[40px] flex items-center gap-[70px]"${
            _scopeId
          }><h4 class="text-[36px] text-secondary font-bold"${
            _scopeId
          }> ?????????????????????????? ?????????????????? </h4><div class="section-divider flex-1 h-[2px] bg-grey-light shadow-divider my-[40px] rounded-full"${
            _scopeId
          }></div></div><div class="cards flex items-center gap-[20px]"${
            _scopeId
          }><!--[-->`)
          __vite_ssr_import_10__.ssrRenderList($setup.relatedCategories, (category) => {
            _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
              to: {
                  path: `/categories/${category.attributes.slug}`,
                },
              class: "card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
            }, {
              default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
                if (_push) {
                  _push(`<div class="card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain" style="${
                    __vite_ssr_import_10__.ssrRenderStyle(`background-image: url('${$setup.categoryUrl(category)}')`)
                  }"${
                    _scopeId
                  }></div><div class="flex flex-grow card-text text-[21px] capitalize"${
                    _scopeId
                  }>${
                    __vite_ssr_import_10__.ssrInterpolate(category.attributes.title)
                  }</div>`)
                } else {
                  return [
                    __vite_ssr_import_9__.createVNode("div", {
                      class: "card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",
                      style: `background-image: url('${$setup.categoryUrl(category)}')`
                    }, null, 4 /* STYLE */),
                    __vite_ssr_import_9__.createVNode("div", { class: "flex flex-grow card-text text-[21px] capitalize" }, __vite_ssr_import_9__.toDisplayString(category.attributes.title), 1 /* TEXT */)
                  ]
                }
              }),
              _: 2 /* DYNAMIC */
            }, _parent, _scopeId))
          })
          _push(`<!--]--></div><!--]-->`)
        } else {
          _push(`<!---->`)
        }
        _push(`</div></main></div>`)
      } else {
        return [
          __vite_ssr_import_9__.createVNode("div", { class: "flex-grow" }, [
            __vite_ssr_import_9__.createVNode("main", { class: "mt-[102px] mb-[40px] flex-grow" }, [
              __vite_ssr_import_9__.createVNode("div", { class: "max-w-screen-xl w-full mx-auto" }, [
                __vite_ssr_import_9__.createVNode("div", { class: "flex items-center" }, [
                  __vite_ssr_import_9__.createVNode(_component_NuxtLink, {
                    to: "/",
                    class: "breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
                  }, {
                    default: __vite_ssr_import_9__.withCtx(() => [
                      (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("svg", {
                        class: "w-6 h-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        __vite_ssr_import_9__.createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        })
                      ])),
                      __vite_ssr_import_9__.createVNode("span", { class: "ml-[5px]" }, "???? ??????????????")
                    ]),
                    _: 1 /* STABLE */
                  }),
                  __vite_ssr_import_9__.createVNode("div", { class: "divider bg-grey-text ml-[13px] mr-[13px] w-[4px] h-[4px] rounded-full justify-center items-center" }),
                  __vite_ssr_import_9__.createVNode(_component_NuxtLink, {
                    to: {
                path: `/categories`,
              },
                    class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                  }, {
                    default: __vite_ssr_import_9__.withCtx(() => [
                      __vite_ssr_import_9__.createVNode("span", null, "?????? ??????????????????")
                    ]),
                    _: 1 /* STABLE */
                  }),
                  ($setup.parentCategory)
                    ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, { key: 0 }, [
                        __vite_ssr_import_9__.createVNode("div", { class: "divider bg-grey-text ml-[13px] mr-[13px] w-[4px] h-[4px] rounded-full justify-center items-center" }),
                        __vite_ssr_import_9__.createVNode(_component_NuxtLink, {
                          to: {
                  path: `/categories/${$setup.parentCategory.slug}`,
                },
                          class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange capitalize"
                        }, {
                          default: __vite_ssr_import_9__.withCtx(() => [
                            __vite_ssr_import_9__.createVNode("span", null, __vite_ssr_import_9__.toDisplayString($setup.parentCategory.title), 1 /* TEXT */)
                          ]),
                          _: 1 /* STABLE */
                        }, 8 /* PROPS */, ["to"])
                      ], 64 /* STABLE_FRAGMENT */))
                    : __vite_ssr_import_9__.createCommentVNode("v-if", true)
                ]),
                __vite_ssr_import_9__.createVNode("div", { class: "page-header mb-[20px] flex items-center" }, [
                  __vite_ssr_import_9__.createVNode("h1", { class: "flex-grow text-primary text-[36px] font-bold capitalize" }, __vite_ssr_import_9__.toDisplayString($setup.currentCategory.title), 1 /* TEXT */)
                ]),
                (
              $setup.currentCategory.items.data && $setup.currentCategory.items.data.length
            )
                  ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                      key: 0,
                      class: "cards flex items-center gap-[20px]"
                    }, [
                      (__vite_ssr_import_9__.openBlock(true), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, null, __vite_ssr_import_9__.renderList($setup.currentCategory.items.data, (category) => {
                        return (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock(_component_NuxtLink, {
                          to: {
                path: `/categories/${category.attributes.slug}`,
              },
                          class: "card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
                        }, {
                          default: __vite_ssr_import_9__.withCtx(() => [
                            __vite_ssr_import_9__.createVNode("div", {
                              class: "card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",
                              style: `background-image: url('${$setup.categoryUrl(category)}')`
                            }, null, 4 /* STYLE */),
                            __vite_ssr_import_9__.createVNode("div", { class: "flex flex-grow card-text text-[21px] text-secondary capitalize" }, __vite_ssr_import_9__.toDisplayString(category.attributes.title), 1 /* TEXT */)
                          ]),
                          _: 2 /* DYNAMIC */
                        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]))
                      }), 256 /* UNKEYED_FRAGMENT */))
                    ]))
                  : __vite_ssr_import_9__.createCommentVNode("v-if", true),
                (
              $setup.isProductsVisible &&
              $setup.currentCategory.items.data &&
              $setup.currentCategory.items.data.length
            )
                  ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                      key: 1,
                      class: "section-divider w-full h-[2px] bg-grey-light shadow-divider my-[40px] rounded-full"
                    }))
                  : __vite_ssr_import_9__.createCommentVNode("v-if", true),
                ($setup.isProductsVisible)
                  ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                      key: 2,
                      class: "flex justify-between items-start gap-[40px]"
                    }, [
                      __vite_ssr_import_9__.createVNode("aside", { class: "catalog-filter min-w-[300px] flex flex-col" }, [
                        __vite_ssr_import_9__.createVNode($setup["ProductFilter"], {
                          modelValue: $setup.filterIsActive,
                          "onUpdate:modelValue": $event => (($setup.filterIsActive) = $event),
                          brands: $setup.categoryBrands,
                          onApply: $setup.getFilteredProducts,
                          onClear: $event => ($setup.clearFilter())
                        }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue", "brands", "onClear"])
                      ]),
                      __vite_ssr_import_9__.createCommentVNode(" loading-cards "),
                      ($setup.loading)
                        ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                            key: 0,
                            class: "catalog-list flex-grow flex flex-wrap gap-[25px]"
                          }, [
                            (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, null, __vite_ssr_import_9__.renderList(4, (item) => {
                              return __vite_ssr_import_9__.createVNode("div", { class: "catalog-list-item font-medium text-[21px] bg-grey w-[calc(33.33%-16.7px)] h-[450px] shadow-card rounded-[4px] relative flex flex-col justify-start p-[30px] animate-pulse" })
                            }), 64 /* STABLE_FRAGMENT */))
                          ]))
                        : ($setup.dataProducts && $setup.dataProducts.length)
                          ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, { key: 1 }, [
                              __vite_ssr_import_9__.createCommentVNode(" products-list "),
                              __vite_ssr_import_9__.createVNode("div", { class: "catalog-list flex-grow flex flex-wrap gap-[25px]" }, [
                                (__vite_ssr_import_9__.openBlock(true), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, null, __vite_ssr_import_9__.renderList($setup.dataProducts, (product, index) => {
                                  return (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                                    key: index,
                                    class: "catalog-list-item font-medium text-[21px] h-[450px] shadow-card w-[calc(33.33%-16.7px)] hover:shadow-card-hover rounded-[4px] relative flex flex-col justify-start items-center p-[30px] transition-all"
                                  }, [
                                    __vite_ssr_import_9__.createVNode(_component_NuxtLink, {
                                      to: `/products/${product.attributes.parent.data.attributes.slug}_${product.attributes.article}`,
                                      class: "flex item-image bg-center bg-no-repeat bg-cover w-[256px] h-[256px]",
                                      style: `background-image: url('${$setup.productUrl(product)}')`
                                    }, null, 8 /* PROPS */, ["to", "style"]),
                                    __vite_ssr_import_9__.createVNode("div", { class: "item-content flex flex-1 flex-col justify-between text-center" }, [
                                      __vite_ssr_import_9__.createVNode("div", { class: "flex flex-1 item-title font-medium justify-center items-center capitalize capitalize" }, __vite_ssr_import_9__.toDisplayString(product.attributes.title), 1 /* TEXT */),
                                      __vite_ssr_import_9__.createVNode("div", { class: "flex gap-[5px]" }, [
                                        __vite_ssr_import_9__.createVNode("div", { class: "flex-1 item-button border-[2px] border-primary rounded-[4px] flex justify-center items-center cursor-default select-none" }, __vite_ssr_import_9__.toDisplayString(product.attributes.price) + " ??? ", 1 /* TEXT */),
                                        __vite_ssr_import_9__.createVNode("button", {
                                          class: ["item-button py-[4px] w-[70px] h-[40px] bg-primary text-white rounded-[4px] flex justify-center items-center active:scale-95 transition-all", {
                          'hover:bg-white border-[2px] border-primary hover:text-primary':
                            !$setup.productInCart(product),
                          'hover:bg-orange': $setup.productInCart(product),
                        }],
                                          onClick: $event => ($setup.cartHandler(product))
                                        }, [
                                          ($setup.productInCart(product))
                                            ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("svg", {
                                                key: 0,
                                                class: "w-6 h-6",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg"
                                              }, [
                                                __vite_ssr_import_9__.createVNode("path", {
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  "stroke-width": "2",
                                                  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                })
                                              ]))
                                            : (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("svg", {
                                                key: 1,
                                                class: "w-6 h-6",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg"
                                              }, [
                                                __vite_ssr_import_9__.createVNode("path", {
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  "stroke-width": "2",
                                                  d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                                })
                                              ]))
                                        ], 10 /* CLASS, PROPS */, ["onClick"])
                                      ])
                                    ])
                                  ]))
                                }), 128 /* KEYED_FRAGMENT */))
                              ])
                            ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
                          : (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                              key: 2,
                              class: "flex flex-1 flex-col justify-center items-center font-medium text-secondary"
                            }, [
                              __vite_ssr_import_9__.createVNode("span", { class: "text-[26px]" }, "??????????"),
                              __vite_ssr_import_9__.createVNode("span", { class: "text-[21px] mb-[25px]" }, "???? ?????????????????? ???????????????????? ?????????????? ???????????? ???? ??????????????"),
                              __vite_ssr_import_9__.createVNode("div", { class: "text-[21px] text-center" }, "??\\_(???)_/??")
                            ]))
                    ]))
                  : __vite_ssr_import_9__.createCommentVNode("v-if", true),
                __vite_ssr_import_9__.createCommentVNode(" related-categories "),
                ($setup.isRelatedCategoriesVisible && $setup.relatedCategories.length)
                  ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, { key: 3 }, [
                      __vite_ssr_import_9__.createVNode("div", { class: "my-[40px] flex items-center gap-[70px]" }, [
                        __vite_ssr_import_9__.createVNode("h4", { class: "text-[36px] text-secondary font-bold" }, " ?????????????????????????? ?????????????????? "),
                        __vite_ssr_import_9__.createVNode("div", { class: "section-divider flex-1 h-[2px] bg-grey-light shadow-divider my-[40px] rounded-full" })
                      ]),
                      __vite_ssr_import_9__.createVNode("div", { class: "cards flex items-center gap-[20px]" }, [
                        (__vite_ssr_import_9__.openBlock(true), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, null, __vite_ssr_import_9__.renderList($setup.relatedCategories, (category) => {
                          return (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock(_component_NuxtLink, {
                            to: {
                  path: `/categories/${category.attributes.slug}`,
                },
                            class: "card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
                          }, {
                            default: __vite_ssr_import_9__.withCtx(() => [
                              __vite_ssr_import_9__.createVNode("div", {
                                class: "card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",
                                style: `background-image: url('${$setup.categoryUrl(category)}')`
                              }, null, 4 /* STYLE */),
                              __vite_ssr_import_9__.createVNode("div", { class: "flex flex-grow card-text text-[21px] capitalize" }, __vite_ssr_import_9__.toDisplayString(category.attributes.title), 1 /* TEXT */)
                            ]),
                            _: 2 /* DYNAMIC */
                          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]))
                        }), 256 /* UNKEYED_FRAGMENT */))
                      ])
                    ], 64 /* STABLE_FRAGMENT */))
                  : __vite_ssr_import_9__.createCommentVNode("v-if", true)
              ])
            ])
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/categories/[slug]/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_12__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/categories/[slug]/index.vue"]]);
}


// --------------------
// Request: /pages/categories/index.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs ($id_eb849233)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs ($id_63a2fd8b)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_8d9b42c9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const _sfc_main = {
  name: 'index',
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const config = __vite_ssr_import_2__.useRuntimeConfig();

const { data, error } = (
  ([__temp,__restore] = __vite_ssr_import_5__.withAsyncContext(() => __vite_ssr_import_2__.useAsyncData("root-categories", () =>
  __vite_ssr_import_3__.GqlGetRootCategories({ type: "section" })
))),
  __temp = await __temp,
  __restore(),
  __temp
);

console.log(data.value);
const categoriesList = data.value?.categories?.data;

__vite_ssr_import_4__.useHead({
  title: `???????????????? ??? ?????? ??????????????????`,
});

const imageUrl = (category) => {
  const url = category.attributes?.image?.data?.attributes?.url;
  if (url) {
    return `${config.public.API_URL}${url}`;
  }
  return "";
};

const __returned__ = { config, data, error, categoriesList, imageUrl }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtLink = __vite_ssr_import_1__.default

  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_6__.mergeProps({ name: "shop" }, _attrs), {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex-grow"${
          _scopeId
        }><main class="mt-[102px] mb-[40px] flex-grow"${
          _scopeId
        }><div class="max-w-screen-xl w-full mx-auto"${
          _scopeId
        }><div class="flex items-center"${
          _scopeId
        }>`)
        _push(__vite_ssr_import_7__.ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
        }, {
          default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
                _scopeId
              }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"${
                _scopeId
              }></path></svg><span class="ml-[5px]"${
                _scopeId
              }>???? ??????????????</span>`)
            } else {
              return [
                (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("svg", {
                  class: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  __vite_ssr_import_6__.createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  })
                ])),
                __vite_ssr_import_6__.createVNode("span", { class: "ml-[5px]" }, "???? ??????????????")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`</div><div class="page-header mb-[20px] flex items-center"${
          _scopeId
        }><h1 class="flex-grow text-primary text-[36px] font-bold"${
          _scopeId
        }> ?????? ?????????????????? </h1></div>`)
        if ($setup.categoriesList && $setup.categoriesList.length) {
          _push(`<div class="cards flex items-center gap-[20px]"${_scopeId}><!--[-->`)
          __vite_ssr_import_7__.ssrRenderList($setup.categoriesList, (category) => {
            _push(__vite_ssr_import_7__.ssrRenderComponent(_component_NuxtLink, {
              to: {
                path: `/categories/${category.attributes.slug}`,
              },
              class: "card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
            }, {
              default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
                if (_push) {
                  _push(`<div class="card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain" style="${
                    __vite_ssr_import_7__.ssrRenderStyle(`background-image: url('${$setup.imageUrl(category)}')`)
                  }"${
                    _scopeId
                  }></div><div class="flex flex-grow card-text text-[21px] text-secondary capitalize"${
                    _scopeId
                  }>${
                    __vite_ssr_import_7__.ssrInterpolate(category.attributes.title)
                  }</div>`)
                } else {
                  return [
                    __vite_ssr_import_6__.createVNode("div", {
                      class: "card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",
                      style: `background-image: url('${$setup.imageUrl(category)}')`
                    }, null, 4 /* STYLE */),
                    __vite_ssr_import_6__.createVNode("div", { class: "flex flex-grow card-text text-[21px] text-secondary capitalize" }, __vite_ssr_import_6__.toDisplayString(category.attributes.title), 1 /* TEXT */)
                  ]
                }
              }),
              _: 2 /* DYNAMIC */
            }, _parent, _scopeId))
          })
          _push(`<!--]--></div>`)
        } else {
          _push(`<h4 class="text-[26px]"${
            _scopeId
          }><div class="flex flex-col justify-center items-center font-medium text-secondary"${
            _scopeId
          }><span class="text-[26px]"${
            _scopeId
          }>?????? ???????? ??????????.</span><span class="text-[21px] mb-[25px]"${
            _scopeId
          }>?????????????????????????? ???????? ??????????????!</span><div class="text-[21px] text-center"${
            _scopeId
          }>??\\_(???)_/??</div></div></h4>`)
        }
        _push(`</div></main></div>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("div", { class: "flex-grow" }, [
            __vite_ssr_import_6__.createVNode("main", { class: "mt-[102px] mb-[40px] flex-grow" }, [
              __vite_ssr_import_6__.createVNode("div", { class: "max-w-screen-xl w-full mx-auto" }, [
                __vite_ssr_import_6__.createVNode("div", { class: "flex items-center" }, [
                  __vite_ssr_import_6__.createVNode(_component_NuxtLink, {
                    to: "/",
                    class: "breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
                  }, {
                    default: __vite_ssr_import_6__.withCtx(() => [
                      (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("svg", {
                        class: "w-6 h-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        __vite_ssr_import_6__.createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        })
                      ])),
                      __vite_ssr_import_6__.createVNode("span", { class: "ml-[5px]" }, "???? ??????????????")
                    ]),
                    _: 1 /* STABLE */
                  })
                ]),
                __vite_ssr_import_6__.createVNode("div", { class: "page-header mb-[20px] flex items-center" }, [
                  __vite_ssr_import_6__.createVNode("h1", { class: "flex-grow text-primary text-[36px] font-bold" }, " ?????? ?????????????????? ")
                ]),
                ($setup.categoriesList && $setup.categoriesList.length)
                  ? (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("div", {
                      key: 0,
                      class: "cards flex items-center gap-[20px]"
                    }, [
                      (__vite_ssr_import_6__.openBlock(true), __vite_ssr_import_6__.createBlock(__vite_ssr_import_6__.Fragment, null, __vite_ssr_import_6__.renderList($setup.categoriesList, (category) => {
                        return (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock(_component_NuxtLink, {
                          to: {
                path: `/categories/${category.attributes.slug}`,
              },
                          class: "card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
                        }, {
                          default: __vite_ssr_import_6__.withCtx(() => [
                            __vite_ssr_import_6__.createVNode("div", {
                              class: "card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",
                              style: `background-image: url('${$setup.imageUrl(category)}')`
                            }, null, 4 /* STYLE */),
                            __vite_ssr_import_6__.createVNode("div", { class: "flex flex-grow card-text text-[21px] text-secondary capitalize" }, __vite_ssr_import_6__.toDisplayString(category.attributes.title), 1 /* TEXT */)
                          ]),
                          _: 2 /* DYNAMIC */
                        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]))
                      }), 256 /* UNKEYED_FRAGMENT */))
                    ]))
                  : (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock("h4", {
                      key: 1,
                      class: "text-[26px]"
                    }, [
                      __vite_ssr_import_6__.createVNode("div", { class: "flex flex-col justify-center items-center font-medium text-secondary" }, [
                        __vite_ssr_import_6__.createVNode("span", { class: "text-[26px]" }, "?????? ???????? ??????????."),
                        __vite_ssr_import_6__.createVNode("span", { class: "text-[21px] mb-[25px]" }, "?????????????????????????? ???????? ??????????????!"),
                        __vite_ssr_import_6__.createVNode("div", { class: "text-[21px] text-center" }, "??\\_(???)_/??")
                      ])
                    ]))
              ])
            ])
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/categories/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/categories/index.vue"]]);
}


// --------------------
// Request: /pages/delivery/index.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs ($id_eb849233)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6d69d13a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_1__.mergeProps({ name: "shop" }, _attrs), {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex-grow"${
          _scopeId
        }><main class="mt-[135px] mb-[40px] flex-grow"${
          _scopeId
        }>delivery</main></div>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("div", { class: "flex-grow" }, [
            __vite_ssr_import_1__.createVNode("main", { class: "mt-[135px] mb-[40px] flex-grow" }, "delivery")
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/delivery/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/delivery/index.vue"]]);
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs ($id_eb849233)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /store/menu/menu.js ($id_53cdf039)
// - /assets/images/voleyball.png ($id_b4d47dcb)
// - /assets/images/basketball.png ($id_b631c89c)
// - /assets/images/football.png ($id_dfb3bf7a)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/store/menu/menu.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/assets/images/voleyball.png");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/assets/images/basketball.png");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/assets/images/football.png");


const _sfc_main = {
  name: 'index',
  setup(__props, { expose }) {
  expose();

const menuStore = __vite_ssr_import_4__.useMenuToggler();

const isExpandMenuShow = __vite_ssr_import_2__.computed(() => {
  return menuStore.$state.isExpandMenuOpen;
});

const getLocalBackgroundImageUrl = (name) => {
  switch (name) {
    case "voleyball":
      return __vite_ssr_import_5__.default;
    case "football":
      return __vite_ssr_import_7__.default;
    case "basketball":
      return __vite_ssr_import_6__.default;
    default:
      return "";
  }
};

__vite_ssr_import_3__.useHead({
  title: `???????????????? ??? ?????????????? ?????????????????????? ??????????????????`,
});

const __returned__ = { menuStore, isExpandMenuShow, getLocalBackgroundImageUrl, useMenuToggler: __vite_ssr_import_4__.useMenuToggler, voleyball: __vite_ssr_import_5__.default, basketball: __vite_ssr_import_6__.default, football: __vite_ssr_import_7__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtLink = __vite_ssr_import_1__.default

  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_8__.mergeProps({ name: "shop" }, _attrs), {
    default: __vite_ssr_import_8__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="${
          __vite_ssr_import_9__.ssrRenderClass([{
        'overflow-hidden': $setup.isExpandMenuShow,
      }, "flex-grow"])
        }"${
          _scopeId
        }><main class="mt-[102px] mb-[40px] flex-grow"${
          _scopeId
        }><div class="max-w-screen-xl w-full mx-auto"${
          _scopeId
        }><div class="page-header flex items-center"${
          _scopeId
        }><h1 class="flex-grow text-primary text-[36px] font-bold"${
          _scopeId
        }> ???????????????????? ?????????????????? </h1><div${
          _scopeId
        }>`)
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_NuxtLink, {
          to: "/categories",
          class: "flex items-center justify-center text-[21px] text-primary hover:text-orange"
        }, {
          default: __vite_ssr_import_8__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<span class="mr-[5px]"${
                _scopeId
              }>?????? ??????????????????</span><svg class="w-6 h-6 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${
                _scopeId
              }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${
                _scopeId
              }></path></svg>`)
            } else {
              return [
                __vite_ssr_import_8__.createVNode("span", { class: "mr-[5px]" }, "?????? ??????????????????"),
                (__vite_ssr_import_8__.openBlock(), __vite_ssr_import_8__.createBlock("svg", {
                  class: "w-6 h-6 mt-[2px]",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  __vite_ssr_import_8__.createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M9 5l7 7-7 7"
                  })
                ]))
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`</div></div><div class="slider-image mt-[40px] image-slider flex justify-between gap-[25px]"${
          _scopeId
        }><div class="cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative" style="${
          __vite_ssr_import_9__.ssrRenderStyle({
                backgroundImage: `url(${$setup.getLocalBackgroundImageUrl(
                  'basketball'
                )})`,
              })
        }"${
          _scopeId
        }><span class="absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider"${
          _scopeId
        }>????????????<br${
          _scopeId
        }>??????</span></div><div class="cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative" style="${
          __vite_ssr_import_9__.ssrRenderStyle({
                backgroundImage: `url(${$setup.getLocalBackgroundImageUrl(
                  'football'
                )})`,
              })
        }"${
          _scopeId
        }><span class="absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider"${
          _scopeId
        }>??????<br${
          _scopeId
        }>??????</span></div><div class="cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative" style="${
          __vite_ssr_import_9__.ssrRenderStyle({
                backgroundImage: `url(${$setup.getLocalBackgroundImageUrl(
                  'voleyball'
                )})`,
              })
        }"${
          _scopeId
        }><span class="absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider"${
          _scopeId
        }>??????????<br${
          _scopeId
        }>??????</span></div></div><div class="slider-category"${
          _scopeId
        }></div></div></main></div>`)
      } else {
        return [
          __vite_ssr_import_8__.createVNode("div", {
            class: ["flex-grow", {
        'overflow-hidden': $setup.isExpandMenuShow,
      }]
          }, [
            __vite_ssr_import_8__.createVNode("main", { class: "mt-[102px] mb-[40px] flex-grow" }, [
              __vite_ssr_import_8__.createVNode("div", { class: "max-w-screen-xl w-full mx-auto" }, [
                __vite_ssr_import_8__.createVNode("div", { class: "page-header flex items-center" }, [
                  __vite_ssr_import_8__.createVNode("h1", { class: "flex-grow text-primary text-[36px] font-bold" }, " ???????????????????? ?????????????????? "),
                  __vite_ssr_import_8__.createVNode("div", null, [
                    __vite_ssr_import_8__.createVNode(_component_NuxtLink, {
                      to: "/categories",
                      class: "flex items-center justify-center text-[21px] text-primary hover:text-orange"
                    }, {
                      default: __vite_ssr_import_8__.withCtx(() => [
                        __vite_ssr_import_8__.createVNode("span", { class: "mr-[5px]" }, "?????? ??????????????????"),
                        (__vite_ssr_import_8__.openBlock(), __vite_ssr_import_8__.createBlock("svg", {
                          class: "w-6 h-6 mt-[2px]",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          __vite_ssr_import_8__.createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M9 5l7 7-7 7"
                          })
                        ]))
                      ]),
                      _: 1 /* STABLE */
                    })
                  ])
                ]),
                __vite_ssr_import_8__.createVNode("div", { class: "slider-image mt-[40px] image-slider flex justify-between gap-[25px]" }, [
                  __vite_ssr_import_8__.createVNode("div", {
                    class: "cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative",
                    style: {
                backgroundImage: `url(${$setup.getLocalBackgroundImageUrl(
                  'basketball'
                )})`,
              }
                  }, [
                    __vite_ssr_import_8__.createVNode("span", { class: "absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider" }, [
                      __vite_ssr_import_8__.createTextVNode("????????????"),
                      __vite_ssr_import_8__.createVNode("br"),
                      __vite_ssr_import_8__.createTextVNode("??????")
                    ])
                  ], 4 /* STYLE */),
                  __vite_ssr_import_8__.createVNode("div", {
                    class: "cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative",
                    style: {
                backgroundImage: `url(${$setup.getLocalBackgroundImageUrl(
                  'football'
                )})`,
              }
                  }, [
                    __vite_ssr_import_8__.createVNode("span", { class: "absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider" }, [
                      __vite_ssr_import_8__.createTextVNode("??????"),
                      __vite_ssr_import_8__.createVNode("br"),
                      __vite_ssr_import_8__.createTextVNode("??????")
                    ])
                  ], 4 /* STYLE */),
                  __vite_ssr_import_8__.createVNode("div", {
                    class: "cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative",
                    style: {
                backgroundImage: `url(${$setup.getLocalBackgroundImageUrl(
                  'voleyball'
                )})`,
              }
                  }, [
                    __vite_ssr_import_8__.createVNode("span", { class: "absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider" }, [
                      __vite_ssr_import_8__.createTextVNode("??????????"),
                      __vite_ssr_import_8__.createVNode("br"),
                      __vite_ssr_import_8__.createTextVNode("??????")
                    ])
                  ], 4 /* STYLE */)
                ]),
                __vite_ssr_import_8__.createVNode("div", { class: "slider-category" })
              ])
            ])
          ], 2 /* CLASS */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_11__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/index.vue"]]);
}


// --------------------
// Request: /pages/payments/index.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs ($id_eb849233)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0bf09ea3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_1__.mergeProps({ name: "shop" }, _attrs), {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex-grow"${
          _scopeId
        }><main class="mt-[135px] mb-[40px] flex-grow"${
          _scopeId
        }>payments</main></div>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("div", { class: "flex-grow" }, [
            __vite_ssr_import_1__.createVNode("main", { class: "mt-[135px] mb-[40px] flex-grow" }, "payments")
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/payments/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/payments/index.vue"]]);
}


// --------------------
// Request: /pages/products/[params].vue
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs ($id_eb849233)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs ($id_63a2fd8b)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /components/UI/ImageViewer.vue ($id_9bcbfe6f)
// - /store/cart/cart.js ($id_08ef3e2f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/products/[params].vue?vue&type=style&index=0&scoped=true&lang.css ($id_5109f25b)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e6c5b58b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/UI/ImageViewer.vue");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/store/cart/cart.js");



const _sfc_main = {
  name: '[params]',
  async setup(__props, { expose }) {
  expose();

let __temp, __restore

const router = __vite_ssr_import_2__.useRouter();
const route = __vite_ssr_import_2__.useRoute();

const productParams = route.params.params;

const [productCardSlug, article] = productParams.split("_");

const { data, error } = (
  ([__temp,__restore] = __vite_ssr_import_6__.withAsyncContext(() => __vite_ssr_import_2__.useAsyncData(
  `product-card-data-by-slug-${productCardSlug}`,
  () => __vite_ssr_import_3__.GqlProductCardDataBySlug({ slug: productCardSlug })
))),
  __temp = await __temp,
  __restore(),
  __temp
);

const productCard = __vite_ssr_import_4__.computed(() => data?.value?.productCards?.data[0]);

if (!productCard.value) {
  router.push("/404");
}

const category = productCard.value.attributes.category.data.attributes;

const productData = (
  ([__temp,__restore] = __vite_ssr_import_6__.withAsyncContext(() => __vite_ssr_import_3__.GqlProductByArticle({ article: article }))),
  __temp = await __temp,
  __restore(),
  __temp
);

if (!productData.products.data.length) {
  router.push("/404");
}

const currentProduct = __vite_ssr_import_4__.computed(() => productData.products.data[0]);

const productTitle = __vite_ssr_import_4__.computed(
  () =>
    currentProduct.value.attributes.title ||
    productCard.value.attributes.title ||
    ""
);

const productPrice = __vite_ssr_import_4__.computed(() => currentProduct.value.attributes.price || 0);

// images

const constProductCardImages = __vite_ssr_import_4__.computed(
  () => productCard.value?.attributes?.images?.data || []
);

const productImages = __vite_ssr_import_4__.computed(
  () => currentProduct.value?.attributes?.images?.data || []
);

const imagesGalery = __vite_ssr_import_4__.computed(() => [
  ...productImages.value,
  ...constProductCardImages.value,
]);

const productArticle = __vite_ssr_import_4__.computed(
  () => currentProduct.value.attributes.article || "???"
);

const productDescription = __vite_ssr_import_4__.computed(
  () => currentProduct.value.attributes.description
);

const productAmount = __vite_ssr_import_4__.computed(() => currentProduct.value.attributes.amount);

const productCardProducts = __vite_ssr_import_4__.computed(
  () => productCard.value.attributes.items.data
);

// colors
const productCardColors = __vite_ssr_import_4__.computed(() =>
  unique(productCardProducts.value, "color")
);

const productColor = __vite_ssr_import_4__.computed(() => currentProduct.value.attributes.color);

const colorIsActive = (value) => {
  return productColor.value.value === value;
};

const disabledColor = (color) => {
  const foundProduct = productCardProducts.value.find((product) => {
    if (
      product.attributes.color.value === color.value &&
      productSize.value.value === product.attributes.size.value
    ) {
      return true;
    }
  });
  if (foundProduct) {
    return false;
  }
  return true;
};

const colorHandler = (color) => {
  const totalMatch = productCardProducts.value.find((product) => {
    if (
      product.attributes.color.value === color.value &&
      productSize.value.value === product.attributes.size.value
    ) {
      return true;
    }
  });
  if (totalMatch) {
    router.push(`${productCardSlug}_${totalMatch.attributes.article}`);
  } else {
    const secondMatch = productCardProducts.value.find((product) => {
      if (product.attributes.color.value === color.value) {
        return true;
      }
    });
    if (secondMatch) {
      router.push(`${productCardSlug}_${secondMatch.attributes.article}`);
    }
  }
};

// sizes
const productCardSizes = __vite_ssr_import_4__.computed(() =>
  unique(productCardProducts.value, "size")
);

const productSize = __vite_ssr_import_4__.computed(() => currentProduct.value.attributes.size);

const sizeIsActive = (value) => {
  return productSize.value.value === value;
};

const disabledSize = (size) => {
  const foundProduct = productCardProducts.value.find((product) => {
    if (
      product.attributes.size.value === size.value &&
      productColor.value.value === product.attributes.color.value
    ) {
      return true;
    }
  });
  if (foundProduct) {
    return false;
  }
  return true;
};

const sizeHandler = (size) => {
  const totalMatch = productCardProducts.value.find((product) => {
    if (
      product.attributes.size.value === size.value &&
      productColor.value.value === product.attributes.color.value
    ) {
      return true;
    }
  });
  if (totalMatch) {
    router.push(`${productCardSlug}_${totalMatch.attributes.article}`);
  } else {
    const secondMatch = productCardProducts.value.find((product) => {
      if (product.attributes.size.value === size.value) {
        return true;
      }
    });
    if (secondMatch) {
      router.push(`${productCardSlug}_${secondMatch.attributes.article}`);
    }
  }
};

// amount and work with cart

const isCartHandlerDisabled = __vite_ssr_import_4__.computed(
  () => currentProduct.value.attributes.amount <= 0
);

const cart = __vite_ssr_import_8__.useCart();

const cartItem = __vite_ssr_import_4__.computed(() =>
  cart.items.find(
    (item) => item.article === currentProduct.value.attributes.article
  )
);

const productCounter = __vite_ssr_import_4__.computed(() => cartItem?.value?.count || 1);

const productInCart = __vite_ssr_import_4__.computed(() => {
  return !!cartItem.value;
});

const increaseAlowed = __vite_ssr_import_4__.computed(() => {
  const sum = productCounter.value + 1;
  return !(sum > productAmount.value);
});

const addToCart = () => {
  cart.addToCart({
    count: Number(productCounter.value),
    amount: productAmount.value,
    color: productColor.value,
    article: productArticle.value,
    size: productSize.value,
    title: productTitle.value,
    price: productPrice.value,
    productCard: productCard.value.attributes.slug,
    imageUrl: imagesGalery.value[0]?.attributes?.url,
  });
};

const updateCartStateItem = (value) => {
  cart.updateCartItem({
    count: Number(value),
    amount: productAmount.value,
    color: productColor.value,
    article: productArticle.value,
    size: productSize.value,
    title: productTitle.value,
    price: productPrice.value,
    productCard: productCard.value.attributes.slug,
    imageUrl: imagesGalery.value[0]?.attributes?.url,
  });
};

const selectCounter = (value) => {
  const newValue = Number(productCounter.value) + value;
  if (productCounter.value > 0 && newValue > 0) {
    productCounter.value = newValue;
    updateCartStateItem(newValue);
  } else {
    removeFromStateCart();
  }
};

const cartHandler = () => {
  if (!productInCart.value) {
    addToCart();
  }
};

const removeFromStateCart = () => {
  cart.removeFromCart(currentProduct.value.attributes.article);
};

function unique(arr, param) {
  const uniqueArr = [];
  const usedProps = [];

  arr.forEach((item) => {
    if (!usedProps.includes(item.attributes[param].value)) {
      uniqueArr.push(item.attributes[param]);
      usedProps.push(item.attributes[param].value);
    }
  });

  return uniqueArr;
}

__vite_ssr_import_5__.useHead({
  title: `???????????????? ??? ${productCard.value.attributes.title}`,
});

const __returned__ = { router, route, productParams, productCardSlug, article, data, error, productCard, category, productData, currentProduct, productTitle, productPrice, constProductCardImages, productImages, imagesGalery, productArticle, productDescription, productAmount, productCardProducts, productCardColors, productColor, colorIsActive, disabledColor, colorHandler, productCardSizes, productSize, sizeIsActive, disabledSize, sizeHandler, isCartHandlerDisabled, cart, cartItem, productCounter, productInCart, increaseAlowed, addToCart, updateCartStateItem, selectCounter, cartHandler, removeFromStateCart, unique, ImageViewer: __vite_ssr_import_7__.default, useCart: __vite_ssr_import_8__.useCart }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtLink = __vite_ssr_import_1__.default

  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLayout, __vite_ssr_import_9__.mergeProps({ name: "shop" }, _attrs), {
    default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="flex-grow" data-v-5076c47e${
          _scopeId
        }><main class="mt-[102px] mb-[40px] flex-grow" data-v-5076c47e${
          _scopeId
        }><div class="max-w-screen-xl w-full mx-auto" data-v-5076c47e${
          _scopeId
        }><div class="page-header flex items-center" data-v-5076c47e${
          _scopeId
        }><div class="flex items-center" data-v-5076c47e${
          _scopeId
        }>`)
        _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
        }, {
          default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-5076c47e${
                _scopeId
              }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" data-v-5076c47e${
                _scopeId
              }></path></svg><span class="ml-[5px]" data-v-5076c47e${
                _scopeId
              }>???? ??????????????</span>`)
            } else {
              return [
                (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("svg", {
                  class: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  __vite_ssr_import_9__.createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  })
                ])),
                __vite_ssr_import_9__.createVNode("span", { class: "ml-[5px]" }, "???? ??????????????")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(`<div class="divider bg-grey-text ml-[13px] mr-[13px] w-[4px] h-[4px] rounded-full justify-center items-center" data-v-5076c47e${_scopeId}></div>`)
        _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
          to: {
                  path: `/categories`,
                },
          class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
        }, {
          default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<span data-v-5076c47e${_scopeId}>?????? ??????????????????</span>`)
            } else {
              return [
                __vite_ssr_import_9__.createVNode("span", null, "?????? ??????????????????")
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        if ($setup.category) {
          _push(`<!--[--><div class="divider bg-grey-text ml-[13px] mr-[13px] w-[4px] h-[4px] rounded-full justify-center items-center" data-v-5076c47e${_scopeId}></div>`)
          _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, {
            to: {
                    path: `/categories/${$setup.category.slug}`,
                  },
            class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange capitalize"
          }, {
            default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<span data-v-5076c47e${
                  _scopeId
                }>${
                  __vite_ssr_import_10__.ssrInterpolate($setup.category.title)
                }</span>`)
              } else {
                return [
                  __vite_ssr_import_9__.createVNode("span", null, __vite_ssr_import_9__.toDisplayString($setup.category.title), 1 /* TEXT */)
                ]
              }
            }),
            _: 1 /* STABLE */
          }, _parent, _scopeId))
          _push(`<!--]-->`)
        } else {
          _push(`<!---->`)
        }
        _push(`</div></div><div class="product flex items-start gap-[190px]" data-v-5076c47e${
          _scopeId
        }><div class="product-card flex-grow" data-v-5076c47e${
          _scopeId
        }><div class="product-title text-[36px] font-bold text-secondary capitalize" data-v-5076c47e${
          _scopeId
        }>${
          __vite_ssr_import_10__.ssrInterpolate($setup.productTitle)
        }</div><div class="product-content flex items-start justify-between" data-v-5076c47e${
          _scopeId
        }><div class="product-info" data-v-5076c47e${
          _scopeId
        }><div class="product-article text-grey-text mb-[40px]" data-v-5076c47e${
          _scopeId
        }> ?????? ????????????????: ${
          __vite_ssr_import_10__.ssrInterpolate($setup.productArticle)
        }</div><ul class="product-specifics flex flex-col text-left justify-start items-start gap-[15px]" data-v-5076c47e${
          _scopeId
        }><!--[-->`)
        __vite_ssr_import_10__.ssrRenderList($setup.productDescription, (item) => {
          _push(`<li class="product-specific px-[13px] py-[10px] border-[2px] rounded-[4px] border-primary text-primary" data-v-5076c47e${
            _scopeId
          }>${
            __vite_ssr_import_10__.ssrInterpolate(item.value)
          }</li>`)
        })
        _push(`<!--]--></ul></div><div class="product-image" data-v-5076c47e${_scopeId}>`)
        _push(__vite_ssr_import_10__.ssrRenderComponent($setup["ImageViewer"], {
          modelValue: $setup.imagesGalery,
          "onUpdate:modelValue": $event => (($setup.imagesGalery) = $event)
        }, null, _parent, _scopeId))
        _push(`</div></div></div><aside class="product-action w-1/5" data-v-5076c47e${
          _scopeId
        }><div class="flex flex-col" data-v-5076c47e${
          _scopeId
        }><span class="text-[36px] font-bold text-secondary" data-v-5076c47e${
          _scopeId
        }>${
          __vite_ssr_import_10__.ssrInterpolate($setup.productPrice)
        } ??????.</span>`)
        if ($setup.productCardColors && $setup.productCardColors.length) {
          _push(`<div class="divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full" data-v-5076c47e${_scopeId}></div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`<div class="flex flex-col" data-v-5076c47e${
          _scopeId
        }><span class="text-[21px] text-secondary mb-[10px]" data-v-5076c47e${
          _scopeId
        }>???????????????? ????????</span><div class="grid grid-cols-2 gap-[10px]" data-v-5076c47e${
          _scopeId
        }><!--[-->`)
        __vite_ssr_import_10__.ssrRenderList($setup.productCardColors, (color) => {
          _push(`<button class="${
            __vite_ssr_import_10__.ssrRenderClass([{
                        'opacity-50 disabled': $setup.disabledColor(color),
                        'hover:bg-primary active:bg-opacity-40 active:border-primary active:border-opacity-0':
                          !$setup.disabledColor(color),
                        'bg-primary text-white border-opacity-90 active:bg-opacity-100':
                          $setup.colorIsActive(color.value),
                        'bg-grey-light': !$setup.colorIsActive(color.value),
                        'hover:bg-opacity-20':
                          !$setup.disabledColor(color) && !$setup.colorIsActive(color.value),
                      }, "w-[120px] h-[80px] rounded-[4px] flex flex-col justify-center items-center transition-colors"])
          }" data-v-5076c47e${
            _scopeId
          }><span class="w-[36px] h-[36px] rounded-[4px] shadow-product-color" style="${
            __vite_ssr_import_10__.ssrRenderStyle({
                          backgroundColor: `${color.value}`,
                        })
          }" data-v-5076c47e${
            _scopeId
          }></span><span data-v-5076c47e${
            _scopeId
          }>${
            __vite_ssr_import_10__.ssrInterpolate(color.title)
          }</span></button>`)
        })
        _push(`<!--]--></div></div>`)
        if ($setup.productCardSizes && $setup.productCardSizes.length) {
          _push(`<div class="divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full" data-v-5076c47e${_scopeId}></div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`<div class="flex flex-col" data-v-5076c47e${
          _scopeId
        }><span class="text-[21px] text-secondary mb-[10px]" data-v-5076c47e${
          _scopeId
        }>???????????????? ????????????</span><div class="grid grid-cols-2 gap-[10px]" data-v-5076c47e${
          _scopeId
        }><!--[-->`)
        __vite_ssr_import_10__.ssrRenderList($setup.productCardSizes, (size) => {
          _push(`<button class="${
            __vite_ssr_import_10__.ssrRenderClass([{
                        'bg-primary text-white border-opacity-90 cursor-default active:bg-opacity-100':
                          $setup.sizeIsActive(size.value),
                        'bg-grey-light': !$setup.sizeIsActive(size.value),
                        'opacity-50 disabled': $setup.disabledSize(size),
                        'hover:bg-primary active:bg-opacity-40':
                          !$setup.disabledSize(size),
                        'hover:bg-opacity-20':
                          !$setup.disabledSize(size) && !$setup.sizeIsActive(size.value),
                      }, "w-[120px] h-[40px] rounded-[4px] flex flex-col justify-center items-center transition-colors"])
          }" data-v-5076c47e${
            _scopeId
          }>${
            __vite_ssr_import_10__.ssrInterpolate(size.value)
          }</button>`)
        })
        _push(`<!--]--></div></div><div class="divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full" data-v-5076c47e${_scopeId}></div>`)
        if (!$setup.productInCart) {
          _push(`<button class="${
            __vite_ssr_import_10__.ssrRenderClass([{
                    'bg-grey-text cursor-not-allowed': $setup.isCartHandlerDisabled,
                  }, "bg-primary h-[70px] text-[21px] font-medium text-white rounded-[4px] transition-all flex justify-center items-center"])
          }"${
            (__vite_ssr_import_10__.ssrIncludeBooleanAttr($setup.isCartHandlerDisabled)) ? " disabled" : ""
          } data-v-5076c47e${
            _scopeId
          }> ???????????????? ?? ?????????????? </button>`)
        } else {
          _push(`<div class="h-[70px] text-[18px] flex items-center justify-between" data-v-5076c47e${
            _scopeId
          }><button class="h-[30px] w-[30px] p-[2px] text-grey-text transition-colors rounded-[4px] bg-grey-light cursor-pointer hover:text-white hover:bg-orange" data-v-5076c47e${
            _scopeId
          }><svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-5076c47e${
            _scopeId
          }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" data-v-5076c47e${
            _scopeId
          }></path></svg></button>`)
          _push(__vite_ssr_import_10__.ssrRenderComponent(_component_NuxtLink, { to: "/cart" }, {
            default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`?????? ?????????????? ( ${__vite_ssr_import_10__.ssrInterpolate($setup.productCounter)} )`)
              } else {
                return [
                  __vite_ssr_import_9__.createTextVNode("?????? ?????????????? ( " + __vite_ssr_import_9__.toDisplayString($setup.productCounter) + " )", 1 /* TEXT */)
                ]
              }
            }),
            _: 1 /* STABLE */
          }, _parent, _scopeId))
          _push(`<button class="${
            __vite_ssr_import_10__.ssrRenderClass([{
                      'cursor-not-allowed bg-grey-text hover:bg-grey-text text-grey-light':
                        !$setup.increaseAlowed,
                    }, "h-[30px] w-[30px] p-[2px] text-grey-text transition-colors rounded-[4px] bg-grey-light cursor-pointer hover:bg-primary hover:text-white"])
          }"${
            (__vite_ssr_import_10__.ssrIncludeBooleanAttr(!$setup.increaseAlowed)) ? " disabled" : ""
          } data-v-5076c47e${
            _scopeId
          }><svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-5076c47e${
            _scopeId
          }><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-5076c47e${
            _scopeId
          }></path></svg></button></div>`)
        }
        if ($setup.isCartHandlerDisabled) {
          _push(`<div class="text-center" data-v-5076c47e${_scopeId}> ???????????? ?????? ?? ?????????????? </div>`)
        } else {
          _push(`<!---->`)
        }
        _push(`</div></aside></div></div></main></div>`)
      } else {
        return [
          __vite_ssr_import_9__.createVNode("div", { class: "flex-grow" }, [
            __vite_ssr_import_9__.createVNode("main", { class: "mt-[102px] mb-[40px] flex-grow" }, [
              __vite_ssr_import_9__.createVNode("div", { class: "max-w-screen-xl w-full mx-auto" }, [
                __vite_ssr_import_9__.createVNode("div", { class: "page-header flex items-center" }, [
                  __vite_ssr_import_9__.createVNode("div", { class: "flex items-center" }, [
                    __vite_ssr_import_9__.createVNode(_component_NuxtLink, {
                      to: "/",
                      class: "breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
                    }, {
                      default: __vite_ssr_import_9__.withCtx(() => [
                        (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("svg", {
                          class: "w-6 h-6",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          __vite_ssr_import_9__.createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          })
                        ])),
                        __vite_ssr_import_9__.createVNode("span", { class: "ml-[5px]" }, "???? ??????????????")
                      ]),
                      _: 1 /* STABLE */
                    }),
                    __vite_ssr_import_9__.createVNode("div", { class: "divider bg-grey-text ml-[13px] mr-[13px] w-[4px] h-[4px] rounded-full justify-center items-center" }),
                    __vite_ssr_import_9__.createVNode(_component_NuxtLink, {
                      to: {
                  path: `/categories`,
                },
                      class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                    }, {
                      default: __vite_ssr_import_9__.withCtx(() => [
                        __vite_ssr_import_9__.createVNode("span", null, "?????? ??????????????????")
                      ]),
                      _: 1 /* STABLE */
                    }),
                    ($setup.category)
                      ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, { key: 0 }, [
                          __vite_ssr_import_9__.createVNode("div", { class: "divider bg-grey-text ml-[13px] mr-[13px] w-[4px] h-[4px] rounded-full justify-center items-center" }),
                          __vite_ssr_import_9__.createVNode(_component_NuxtLink, {
                            to: {
                    path: `/categories/${$setup.category.slug}`,
                  },
                            class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange capitalize"
                          }, {
                            default: __vite_ssr_import_9__.withCtx(() => [
                              __vite_ssr_import_9__.createVNode("span", null, __vite_ssr_import_9__.toDisplayString($setup.category.title), 1 /* TEXT */)
                            ]),
                            _: 1 /* STABLE */
                          }, 8 /* PROPS */, ["to"])
                        ], 64 /* STABLE_FRAGMENT */))
                      : __vite_ssr_import_9__.createCommentVNode("v-if", true)
                  ])
                ]),
                __vite_ssr_import_9__.createVNode("div", { class: "product flex items-start gap-[190px]" }, [
                  __vite_ssr_import_9__.createVNode("div", { class: "product-card flex-grow" }, [
                    __vite_ssr_import_9__.createVNode("div", { class: "product-title text-[36px] font-bold text-secondary capitalize" }, __vite_ssr_import_9__.toDisplayString($setup.productTitle), 1 /* TEXT */),
                    __vite_ssr_import_9__.createVNode("div", { class: "product-content flex items-start justify-between" }, [
                      __vite_ssr_import_9__.createVNode("div", { class: "product-info" }, [
                        __vite_ssr_import_9__.createVNode("div", { class: "product-article text-grey-text mb-[40px]" }, " ?????? ????????????????: " + __vite_ssr_import_9__.toDisplayString($setup.productArticle), 1 /* TEXT */),
                        __vite_ssr_import_9__.createVNode("ul", { class: "product-specifics flex flex-col text-left justify-start items-start gap-[15px]" }, [
                          (__vite_ssr_import_9__.openBlock(true), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, null, __vite_ssr_import_9__.renderList($setup.productDescription, (item) => {
                            return (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("li", { class: "product-specific px-[13px] py-[10px] border-[2px] rounded-[4px] border-primary text-primary" }, __vite_ssr_import_9__.toDisplayString(item.value), 1 /* TEXT */))
                          }), 256 /* UNKEYED_FRAGMENT */))
                        ])
                      ]),
                      __vite_ssr_import_9__.createVNode("div", { class: "product-image" }, [
                        __vite_ssr_import_9__.createVNode($setup["ImageViewer"], {
                          modelValue: $setup.imagesGalery,
                          "onUpdate:modelValue": $event => (($setup.imagesGalery) = $event)
                        }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ]),
                  __vite_ssr_import_9__.createVNode("aside", { class: "product-action w-1/5" }, [
                    __vite_ssr_import_9__.createVNode("div", { class: "flex flex-col" }, [
                      __vite_ssr_import_9__.createVNode("span", { class: "text-[36px] font-bold text-secondary" }, __vite_ssr_import_9__.toDisplayString($setup.productPrice) + " ??????.", 1 /* TEXT */),
                      ($setup.productCardColors && $setup.productCardColors.length)
                        ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                            key: 0,
                            class: "divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full"
                          }))
                        : __vite_ssr_import_9__.createCommentVNode("v-if", true),
                      __vite_ssr_import_9__.createVNode("div", { class: "flex flex-col" }, [
                        __vite_ssr_import_9__.createVNode("span", { class: "text-[21px] text-secondary mb-[10px]" }, "???????????????? ????????"),
                        __vite_ssr_import_9__.createVNode("div", { class: "grid grid-cols-2 gap-[10px]" }, [
                          (__vite_ssr_import_9__.openBlock(true), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, null, __vite_ssr_import_9__.renderList($setup.productCardColors, (color) => {
                            return (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("button", {
                              class: [{
                        'opacity-50 disabled': $setup.disabledColor(color),
                        'hover:bg-primary active:bg-opacity-40 active:border-primary active:border-opacity-0':
                          !$setup.disabledColor(color),
                        'bg-primary text-white border-opacity-90 active:bg-opacity-100':
                          $setup.colorIsActive(color.value),
                        'bg-grey-light': !$setup.colorIsActive(color.value),
                        'hover:bg-opacity-20':
                          !$setup.disabledColor(color) && !$setup.colorIsActive(color.value),
                      }, "w-[120px] h-[80px] rounded-[4px] flex flex-col justify-center items-center transition-colors"],
                              onClick: $event => ($setup.colorHandler(color))
                            }, [
                              __vite_ssr_import_9__.createVNode("span", {
                                class: "w-[36px] h-[36px] rounded-[4px] shadow-product-color",
                                style: {
                          backgroundColor: `${color.value}`,
                        }
                              }, null, 4 /* STYLE */),
                              __vite_ssr_import_9__.createVNode("span", null, __vite_ssr_import_9__.toDisplayString(color.title), 1 /* TEXT */)
                            ], 10 /* CLASS, PROPS */, ["onClick"]))
                          }), 256 /* UNKEYED_FRAGMENT */))
                        ])
                      ]),
                      ($setup.productCardSizes && $setup.productCardSizes.length)
                        ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                            key: 1,
                            class: "divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full"
                          }))
                        : __vite_ssr_import_9__.createCommentVNode("v-if", true),
                      __vite_ssr_import_9__.createVNode("div", { class: "flex flex-col" }, [
                        __vite_ssr_import_9__.createVNode("span", { class: "text-[21px] text-secondary mb-[10px]" }, "???????????????? ????????????"),
                        __vite_ssr_import_9__.createVNode("div", { class: "grid grid-cols-2 gap-[10px]" }, [
                          (__vite_ssr_import_9__.openBlock(true), __vite_ssr_import_9__.createBlock(__vite_ssr_import_9__.Fragment, null, __vite_ssr_import_9__.renderList($setup.productCardSizes, (size) => {
                            return (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("button", {
                              class: [{
                        'bg-primary text-white border-opacity-90 cursor-default active:bg-opacity-100':
                          $setup.sizeIsActive(size.value),
                        'bg-grey-light': !$setup.sizeIsActive(size.value),
                        'opacity-50 disabled': $setup.disabledSize(size),
                        'hover:bg-primary active:bg-opacity-40':
                          !$setup.disabledSize(size),
                        'hover:bg-opacity-20':
                          !$setup.disabledSize(size) && !$setup.sizeIsActive(size.value),
                      }, "w-[120px] h-[40px] rounded-[4px] flex flex-col justify-center items-center transition-colors"],
                              onClick: $event => ($setup.sizeHandler(size))
                            }, __vite_ssr_import_9__.toDisplayString(size.value), 11 /* TEXT, CLASS, PROPS */, ["onClick"]))
                          }), 256 /* UNKEYED_FRAGMENT */))
                        ])
                      ]),
                      __vite_ssr_import_9__.createVNode("div", { class: "divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full" }),
                      (!$setup.productInCart)
                        ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("button", {
                            key: 2,
                            class: ["bg-primary h-[70px] text-[21px] font-medium text-white rounded-[4px] transition-all flex justify-center items-center", {
                    'bg-grey-text cursor-not-allowed': $setup.isCartHandlerDisabled,
                  }],
                            disabled: $setup.isCartHandlerDisabled,
                            onClick: $event => ($setup.cartHandler())
                          }, " ???????????????? ?? ?????????????? ", 10 /* CLASS, PROPS */, ["disabled", "onClick"]))
                        : (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                            key: 3,
                            class: "h-[70px] text-[18px] flex items-center justify-between"
                          }, [
                            __vite_ssr_import_9__.createVNode("button", {
                              class: "h-[30px] w-[30px] p-[2px] text-grey-text transition-colors rounded-[4px] bg-grey-light cursor-pointer hover:text-white hover:bg-orange",
                              onClick: $event => ($setup.selectCounter(-1))
                            }, [
                              (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("svg", {
                                class: "w-full h-full",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                __vite_ssr_import_9__.createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M20 12H4"
                                })
                              ]))
                            ], 8 /* PROPS */, ["onClick"]),
                            __vite_ssr_import_9__.createVNode(_component_NuxtLink, { to: "/cart" }, {
                              default: __vite_ssr_import_9__.withCtx(() => [
                                __vite_ssr_import_9__.createTextVNode("?????? ?????????????? ( " + __vite_ssr_import_9__.toDisplayString($setup.productCounter) + " )", 1 /* TEXT */)
                              ]),
                              _: 1 /* STABLE */
                            }),
                            __vite_ssr_import_9__.createVNode("button", {
                              class: ["h-[30px] w-[30px] p-[2px] text-grey-text transition-colors rounded-[4px] bg-grey-light cursor-pointer hover:bg-primary hover:text-white", {
                      'cursor-not-allowed bg-grey-text hover:bg-grey-text text-grey-light':
                        !$setup.increaseAlowed,
                    }],
                              disabled: !$setup.increaseAlowed,
                              onClick: $event => ($setup.selectCounter(1))
                            }, [
                              (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("svg", {
                                class: "w-full h-full",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                __vite_ssr_import_9__.createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                })
                              ]))
                            ], 10 /* CLASS, PROPS */, ["disabled", "onClick"])
                          ])),
                      ($setup.isCartHandlerDisabled)
                        ? (__vite_ssr_import_9__.openBlock(), __vite_ssr_import_9__.createBlock("div", {
                            key: 4,
                            class: "text-center"
                          }, " ???????????? ?????? ?? ?????????????? "))
                        : __vite_ssr_import_9__.createCommentVNode("v-if", true)
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}

const __vite_ssr_import_11__ = await __vite_ssr_import__("/pages/products/[params].vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_12__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_12__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/products/[params].vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_13__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_13__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-5076c47e"],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/products/[params].vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_0bcf2fb2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_f04638e2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/dist.plugin.029268ea.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/plugins/server.mjs ($id_b1ef6d38)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// - /node_modules/pinia/dist/pinia.mjs ($id_b1920624)
// --------------------
const $id_f53014de = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/pinia/dist/pinia.mjs");


if (__vite_ssr_import_1__.isVue2) {
  __vite_ssr_import_1__.install();
  const Vue = "default" in __vite_ssr_import_1__.Vue2 ? __vite_ssr_import_1__.Vue2.default : __vite_ssr_import_1__.Vue2;
  Vue.use(__vite_ssr_import_2__.PiniaVuePlugin);
}
const PiniaNuxtPlugin = (context, inject) => {
  const pinia = __vite_ssr_import_2__.createPinia();
  if (__vite_ssr_import_1__.isVue2) {
    context.app.pinia = pinia;
  } else {
    context.vueApp.use(pinia);
  }
  inject("pinia", pinia);
  context.pinia = pinia;
  __vite_ssr_import_2__.setActivePinia(pinia);
  pinia._p.push(({ store }) => {
    Object.defineProperty(store, "$nuxt", { value: context });
  });
  if (true) {
    if (__vite_ssr_import_1__.isVue2) {
      context.beforeNuxtRender(({ nuxtState }) => {
        nuxtState.pinia = pinia.state.value;
      });
    } else {
      context.nuxtState.pinia = pinia.state.value;
    }
  } else if (context.nuxtState && context.nuxtState.pinia) {
    pinia.state.value = context.nuxtState.pinia;
  }
};


Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return PiniaNuxtPlugin }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/root-component.mjs
// Parents: 
// - /Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/nuxt/dist/app/entry ($id_14eba4bc)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// --------------------
const $id_ca37bfae = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/root-component.mjs ($id_ca37bfae)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/error-component.mjs ($id_922b3587)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e9bfada3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

// @ts-ignore
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/error-component.mjs");



const _sfc_main = {
  name: 'nuxt-root',
  setup(__props, { expose }) {
  expose();

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.throwError, [err])
  }
})

const __returned__ = { nuxtApp, onResolve, results, error, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, throwError: __vite_ssr_import_1__.throwError, useError: __vite_ssr_import_1__.useError, useNuxtApp: __vite_ssr_import_1__.useNuxtApp, ErrorComponent: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_3__.resolveComponent("App")

  __vite_ssr_import_4__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// --------------------
const $id_922b3587 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/error-component.mjs ($id_922b3587)
// Dependencies: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_8cc6d73f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue");



const _sfc_main = {
  name: 'nuxt-error-page',
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
          line.includes('internal') ||
          line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = String(error.statusCode || 500)
const is404 = statusCode === '404'

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

const ErrorTemplate = is404 ? __vite_ssr_import_0__.default : true ? __vite_ssr_import_2__.default : __vite_ssr_import_1__.default

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, ErrorTemplate, Error404: __vite_ssr_import_0__.default, Error500: __vite_ssr_import_1__.default, ErrorDev: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_3__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs ($id_0aa4a4c2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css ($id_e68b6b38)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b90d4d0f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs");


const _sfc_main = {
  name: 'error-404',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "404"
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-573335c0><div class="fixed left-0 right-0 spotlight z-10" data-v-573335c0></div><div class="max-w-520px text-center z-20" data-v-573335c0><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-573335c0>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-573335c0"],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 

// --------------------
const $id_e68b6b38 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-573335c0]{cursor:pointer}.flex[data-v-573335c0]{display:flex}.grid[data-v-573335c0]{display:-ms-grid;display:grid}.place-content-center[data-v-573335c0]{place-content:center}.items-center[data-v-573335c0]{align-items:center}.justify-center[data-v-573335c0]{justify-content:center}.font-sans[data-v-573335c0]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-573335c0]{font-weight:500}.font-light[data-v-573335c0]{font-weight:300}.text-8xl[data-v-573335c0]{font-size:6rem;line-height:1}.text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-573335c0]{line-height:1.25}.mb-8[data-v-573335c0]{margin-bottom:2rem}.mb-16[data-v-573335c0]{margin-bottom:4rem}.max-w-520px[data-v-573335c0]{max-width:520px}.min-h-screen[data-v-573335c0]{min-height:100vh}.overflow-hidden[data-v-573335c0]{overflow:hidden}.px-8[data-v-573335c0]{padding-left:2rem;padding-right:2rem}.py-2[data-v-573335c0]{padding-bottom:.5rem;padding-top:.5rem}.px-4[data-v-573335c0]{padding-left:1rem;padding-right:1rem}.fixed[data-v-573335c0]{position:fixed}.left-0[data-v-573335c0]{left:0}.right-0[data-v-573335c0]{right:0}.text-center[data-v-573335c0]{text-align:center}.text-black[data-v-573335c0]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-573335c0]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-573335c0]{width:100%}.z-10[data-v-573335c0]{z-index:10}.z-20[data-v-573335c0]{z-index:20}@media (min-width:640px){.sm\\:text-4xl[data-v-573335c0]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-573335c0]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-573335c0]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-573335c0]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:px-6[data-v-573335c0]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-573335c0]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-573335c0]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-573335c0]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-573335c0]{background-color:#ffffff4d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-573335c0]{background-color:#1414144d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-573335c0]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:\"\";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-573335c0]:hover:before{background-position:-50% 0;opacity:1}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs ($id_0aa4a4c2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css ($id_a2b3b709)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_14c8b574 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs");


const _sfc_main = {
  name: 'error-500',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-0914425d><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-0914425d></div><div class="max-w-520px text-center" data-v-0914425d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0914425d"],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// Dependencies: 

// --------------------
const $id_a2b3b709 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-0914425d]{display:-ms-grid;display:grid}.place-content-center[data-v-0914425d]{place-content:center}.font-sans[data-v-0914425d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-0914425d]{font-weight:500}.font-light[data-v-0914425d]{font-weight:300}.h-1\\/2[data-v-0914425d]{height:50%}.text-8xl[data-v-0914425d]{font-size:6rem;line-height:1}.text-xl[data-v-0914425d]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-0914425d]{line-height:1.25}.mb-8[data-v-0914425d]{margin-bottom:2rem}.mb-16[data-v-0914425d]{margin-bottom:4rem}.max-w-520px[data-v-0914425d]{max-width:520px}.min-h-screen[data-v-0914425d]{min-height:100vh}.overflow-hidden[data-v-0914425d]{overflow:hidden}.px-8[data-v-0914425d]{padding-left:2rem;padding-right:2rem}.fixed[data-v-0914425d]{position:fixed}.left-0[data-v-0914425d]{left:0}.right-0[data-v-0914425d]{right:0}.-bottom-1\\/2[data-v-0914425d]{bottom:-50%}.text-center[data-v-0914425d]{text-align:center}.text-black[data-v-0914425d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-0914425d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width:640px){.sm\\:text-4xl[data-v-0914425d]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-0914425d]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-0914425d]{padding-left:0;padding-right:0}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-0914425d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-0914425d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs ($id_0aa4a4c2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css ($id_2691164c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bc2d74a1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs");


const _sfc_main = {
  name: 'error-dev',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-1da4697d><div class="fixed left-0 right-0 spotlight" data-v-1da4697d></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-1da4697d><pre class="text-xl font-light leading-tight z-10 p-8" data-v-1da4697d>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-1da4697d"],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 

// --------------------
const $id_2691164c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-1da4697d]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-1da4697d]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-1da4697d]{display:flex}.flex-col[data-v-1da4697d]{flex-direction:column}.flex-1[data-v-1da4697d]{flex:1 1 0%}.font-sans[data-v-1da4697d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-1da4697d]{font-weight:500}.font-light[data-v-1da4697d]{font-weight:300}.h-auto[data-v-1da4697d]{height:auto}.text-xl[data-v-1da4697d]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-1da4697d]{font-size:3.75rem;line-height:1}.leading-tight[data-v-1da4697d]{line-height:1.25}.mb-8[data-v-1da4697d]{margin-bottom:2rem}.mb-6[data-v-1da4697d]{margin-bottom:1.5rem}.min-h-screen[data-v-1da4697d]{min-height:100vh}.overflow-y-auto[data-v-1da4697d]{overflow-y:auto}.p-8[data-v-1da4697d]{padding:2rem}.px-10[data-v-1da4697d]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-1da4697d]{padding-top:3.5rem}.fixed[data-v-1da4697d]{position:fixed}.left-0[data-v-1da4697d]{left:0}.right-0[data-v-1da4697d]{right:0}.text-black[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-1da4697d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-1da4697d]{z-index:10}@media (min-width:640px){.sm\\:text-8xl[data-v-1da4697d]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-1da4697d]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-1da4697d]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-1da4697d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}";
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/app-component.mjs
// Parents: 
// - /Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/nuxt/dist/app/entry ($id_14eba4bc)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// --------------------
const $id_24981336 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/app.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/app-component.mjs ($id_24981336)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6c61010f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_1__.resolveComponent("NuxtPage")

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_NuxtPage)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/nuxt/dist/pages/runtime/app.vue"]]);
}


const __modules__ = {
  "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/nuxt/dist/app/entry": $id_14eba4bc,
  "/node_modules/vue/dist/vue.cjs.js": $id_60f0615f,
  "/node_modules/ohmyfetch/dist/index.mjs": $id_780217c4,
  "/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/paths.mjs": $id_9efd46b4,
  "/node_modules/ufo/dist/index.mjs": $id_614de060,
  "/node_modules/nuxt/dist/app/index.mjs": $id_36927477,
  "/node_modules/nuxt/dist/app/nuxt.mjs": $id_e069d411,
  "/node_modules/hookable/dist/index.mjs": $id_a2c811c4,
  "/node_modules/unctx/dist/index.mjs": $id_a569ca2d,
  "/node_modules/nuxt/dist/app/compat/legacy-app.mjs": $id_a48341bc,
  "/node_modules/unenv/runtime/mock/proxy.mjs": $id_39e12da7,
  "/node_modules/nuxt/dist/app/composables/index.mjs": $id_b067a79a,
  "/node_modules/nuxt/dist/app/composables/component.mjs": $id_53345950,
  "/node_modules/vue-router/dist/vue-router.cjs.js": $id_f9a4a698,
  "/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_d5b6a221,
  "/node_modules/nuxt/dist/app/composables/utils.mjs": $id_df511336,
  "/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_0063df1b,
  "/node_modules/nuxt/dist/app/composables/state.mjs": $id_7d872108,
  "/node_modules/nuxt/dist/app/composables/error.mjs": $id_6fe050f1,
  "/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_41f5ae4e,
  "/node_modules/ohash/dist/index.mjs": $id_b1b82cf3,
  "/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_511b441d,
  "/node_modules/cookie-es/dist/index.mjs": $id_f4975261,
  "/node_modules/h3/dist/index.mjs": $id_57d7ded6,
  "/node_modules/destr/dist/index.mjs": $id_03d15ecd,
  "/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_c4866ba7,
  "/node_modules/nuxt/dist/app/composables/router.mjs": $id_db4d90a8,
  "/node_modules/nuxt/dist/app/components/index.mjs": $id_161bfe9f,
  "/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_ffac87b5,
  "/node_modules/nuxt/dist/head/runtime/index.mjs": $id_b7351483,
  "/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_04ea9504,
  "/node_modules/@vue/shared/dist/shared.cjs.js": $id_852b06a2,
  "/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/css.mjs": $id_fcbe2579,
  "/node_modules/@nuxtjs/tailwindcss/dist/runtime/tailwind.css": $id_0a1402e6,
  "/assets/styles/app.scss": $id_d5ae0c9c,
  "/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/plugins/server.mjs": $id_b1ef6d38,
  "/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_9871bba0,
  "/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/components.plugin.mjs": $id_33a10ead,
  "/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_e6f12003,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_c032264e,
  "/node_modules/defu/dist/defu.mjs": $id_d7afab65,
  "/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_a2650341,
  "/node_modules/nuxt/dist/head/runtime/components.mjs": $id_b2a29d6f,
  "/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/meta.config.mjs": $id_7edea047,
  "/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_a090977b,
  "/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_5fc14cdc,
  "/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_80f433aa,
  "/node_modules/nuxt/dist/app/components/utils.mjs": $id_69c52686,
  "/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/routes.mjs": $id_eb849233,
  "/pages/address/index.vue?macro=true": $id_d0ec39cf,
  "/node_modules/nuxt/dist/app/components/layout.mjs": $id_39003883,
  "/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/layouts.mjs": $id_26611196,
  "/layouts/shop.vue": $id_8067d08d,
  "/components/PrometeiHeader.vue": $id_7562f2a2,
  "/components/ExpandMenu/ExpandMenu.vue": $id_be3b5d3c,
  "/components/ExpandMenu/ExpandMenuContentItem.vue": $id_e8f7e8fb,
  "/node_modules/vue/server-renderer/index.js": $id_b215fa1c,
  "/@id/plugin-vue:export-helper": $id_bbb863c1,
  "/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/gql.mjs": $id_63a2fd8b,
  "/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/imports.mjs": $id_0aa4a4c2,
  "/node_modules/nuxt/dist/app/compat/vue-demi.mjs": $id_a8110be7,
  "/node_modules/nuxt/dist/app/compat/capi.mjs": $id_0c5717a4,
  "/node_modules/nuxt-graphql-client/dist/runtime/composables/index.mjs": $id_0ab5e784,
  "/node_modules/graphql-request/dist/index.js": $id_3c4dd26c,
  "/node_modules/nuxt-graphql-client/dist/runtime/utils.mjs": $id_0876cc71,
  "/.nuxt/gql-sdk.ts": $id_514a6b66,
  "/node_modules/nuxt/dist/pages/runtime/composables.mjs": $id_ff6ed455,
  "/components/UI/TabsWrapper.vue": $id_e6a8446c,
  "/components/UI/TabsWrapper.vue?vue&type=style&index=0&scoped=true&lang.postcss": $id_eabcf406,
  "/components/UI/Tab.vue": $id_119df125,
  "/components/UI/Tab.vue?vue&type=style&index=0&scoped=true&lang.postcss": $id_22803469,
  "/components/ExpandMenu/ExpandMenu.vue?vue&type=style&index=0&scoped=true&lang.postcss": $id_f1f7ce30,
  "/components/SearchBar.vue": $id_007b1c70,
  "/components/SearchBar.vue?vue&type=style&index=0&lang.css": $id_3d69483f,
  "/store/menu/menu.js": $id_53cdf039,
  "/node_modules/pinia/dist/pinia.mjs": $id_b1920624,
  "/store/cart/cart.js": $id_08ef3e2f,
  "/assets/images/header-logo.svg": $id_1ab94e98,
  "/components/PrometeiFooter.vue": $id_04928ae8,
  "/assets/images/footer-logo.svg": $id_79b8e24e,
  "/layouts/shop.vue?vue&type=style&index=0&lang.css": $id_cad6a901,
  "/pages/cart/index.vue?macro=true": $id_7c49fc15,
  "/components/UI/AmountCounter.vue": $id_5db0a46a,
  "/pages/cart/index.vue?vue&type=style&index=0&lang.css": $id_b6616365,
  "/pages/categories/[slug]/index.vue?macro=true": $id_b19ac374,
  "/components/ProductFilter.vue": $id_16ebd3b1,
  "/components/BrandsSelect.vue": $id_a68b9e82,
  "/components/PriceSelect.vue": $id_894078cd,
  "/pages/categories/index.vue?macro=true": $id_b04deb14,
  "/pages/delivery/index.vue?macro=true": $id_e1d04ef1,
  "/pages/index.vue?macro=true": $id_5dd70240,
  "/assets/images/voleyball.png": $id_b4d47dcb,
  "/assets/images/basketball.png": $id_b631c89c,
  "/assets/images/football.png": $id_dfb3bf7a,
  "/pages/payments/index.vue?macro=true": $id_db8db898,
  "/pages/products/[params].vue?macro=true": $id_5fe5d068,
  "/components/UI/ImageViewer.vue": $id_9bcbfe6f,
  "/pages/products/[params].vue?vue&type=style&index=0&scoped=true&lang.css": $id_5109f25b,
  "/pages/address/index.vue": $id_bac860df,
  "/pages/cart/index.vue": $id_3fa45d07,
  "/pages/categories/[slug]/index.vue": $id_a38e0b82,
  "/pages/categories/index.vue": $id_8d9b42c9,
  "/pages/delivery/index.vue": $id_6d69d13a,
  "/pages/index.vue": $id_cca58e97,
  "/pages/payments/index.vue": $id_0bf09ea3,
  "/pages/products/[params].vue": $id_e6c5b58b,
  "/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/router.options.mjs": $id_0bcf2fb2,
  "/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/middleware.mjs": $id_f04638e2,
  "/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/dist.plugin.029268ea.mjs": $id_f53014de,
  "/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/root-component.mjs": $id_ca37bfae,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_e9bfada3,
  "/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/error-component.mjs": $id_922b3587,
  "/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_8cc6d73f,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_b90d4d0f,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css": $id_e68b6b38,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_14c8b574,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css": $id_a2b3b709,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_bc2d74a1,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css": $id_2691164c,
  "/@id/virtual:nuxt:/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/.nuxt/app-component.mjs": $id_24981336,
  "/node_modules/nuxt/dist/pages/runtime/app.vue": $id_6c61010f
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/node_modules/nuxt/dist/app/entry")