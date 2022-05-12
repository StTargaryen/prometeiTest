import { v as vue_cjs_prod, s as serverRenderer, r as require$$0 } from '../index.mjs';
import { hasProtocol, joinURL, withBase, withQuery } from 'ufo';
import { gql, GraphQLClient } from 'graphql-request';
import { defineStore, createPinia, setActivePinia } from 'pinia/dist/pinia.mjs';
import { u as useRuntimeConfig$1 } from '../nitro/node-server.mjs';
import 'unenv/runtime/mock/proxy';
import 'stream';
import 'unenv/runtime/polyfill/fetch.node';
import 'http';
import 'https';
import 'destr';
import 'h3';
import 'ohmyfetch';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'unstorage';

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
const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^["{[]|^-?[0-9][0-9.]{0,14}$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor") {
    return;
  }
  return value;
}
function destr(val) {
  if (typeof val !== "string") {
    return val;
  }
  const _lval = val.toLowerCase();
  if (_lval === "true") {
    return true;
  }
  if (_lval === "false") {
    return false;
  }
  if (_lval === "null") {
    return null;
  }
  if (_lval === "nan") {
    return NaN;
  }
  if (_lval === "infinity") {
    return Infinity;
  }
  if (_lval === "undefined") {
    return void 0;
  }
  if (!JsonSigRx.test(val)) {
    return val;
  }
  try {
    if (suspectProtoRx.test(val) || suspectConstructorRx.test(val)) {
      return JSON.parse(val, jsonParseTransform);
    }
    return JSON.parse(val);
  } catch (_e) {
    return val;
  }
}
class FetchError extends Error {
  constructor() {
    super(...arguments);
    this.name = "FetchError";
  }
}
function createFetchError(request, error, response) {
  let message = "";
  if (request && response) {
    message = `${response.status} ${response.statusText} (${request.toString()})`;
  }
  if (error) {
    message = `${error.message} (${message})`;
  }
  const fetchError = new FetchError(message);
  Object.defineProperty(fetchError, "request", { get() {
    return request;
  } });
  Object.defineProperty(fetchError, "response", { get() {
    return response;
  } });
  Object.defineProperty(fetchError, "data", { get() {
    return response && response._data;
  } });
  return fetchError;
}
const payloadMethods = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(val) {
  if (val === void 0) {
    return false;
  }
  const t = typeof val;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(val)) {
    return true;
  }
  return val.constructor && val.constructor.name === "Object" || typeof val.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*`\-.^~]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift();
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  409,
  425,
  429,
  500,
  502,
  503,
  504
]);
function createFetch(globalOptions) {
  const { fetch: fetch2, Headers: Headers2 } = globalOptions;
  function onError(ctx) {
    if (ctx.options.retry !== false) {
      const retries = typeof ctx.options.retry === "number" ? ctx.options.retry : isPayloadMethod(ctx.options.method) ? 0 : 1;
      const responseCode = ctx.response && ctx.response.status || 500;
      if (retries > 0 && retryStatusCodes.has(responseCode)) {
        return $fetchRaw(ctx.request, __spreadProps(__spreadValues({}, ctx.options), {
          retry: retries - 1
        }));
      }
    }
    const err = createFetchError(ctx.request, ctx.error, ctx.response);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(err, $fetchRaw);
    }
    throw err;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _opts = {}) {
    const ctx = {
      request: _request,
      options: __spreadValues(__spreadValues({}, globalOptions.defaults), _opts),
      response: void 0,
      error: void 0
    };
    if (ctx.options.onRequest) {
      await ctx.options.onRequest(ctx);
    }
    if (typeof ctx.request === "string") {
      if (ctx.options.baseURL) {
        ctx.request = withBase(ctx.request, ctx.options.baseURL);
      }
      if (ctx.options.params) {
        ctx.request = withQuery(ctx.request, ctx.options.params);
      }
      if (ctx.options.body && isPayloadMethod(ctx.options.method)) {
        if (isJSONSerializable(ctx.options.body)) {
          ctx.options.body = JSON.stringify(ctx.options.body);
          ctx.options.headers = new Headers2(ctx.options.headers);
          if (!ctx.options.headers.has("content-type")) {
            ctx.options.headers.set("content-type", "application/json");
          }
          if (!ctx.options.headers.has("accept")) {
            ctx.options.headers.set("accept", "application/json");
          }
        }
      }
    }
    ctx.response = await fetch2(ctx.request, ctx.options).catch(async (error) => {
      ctx.error = error;
      if (ctx.options.onRequestError) {
        await ctx.options.onRequestError(ctx);
      }
      return onError(ctx);
    });
    const responseType = (ctx.options.parseResponse ? "json" : ctx.options.responseType) || detectResponseType(ctx.response.headers.get("content-type") || "");
    if (responseType === "json") {
      const data = await ctx.response.text();
      const parseFn = ctx.options.parseResponse || destr;
      ctx.response._data = parseFn(data);
    } else {
      ctx.response._data = await ctx.response[responseType]();
    }
    if (ctx.options.onResponse) {
      await ctx.options.onResponse(ctx);
    }
    if (!ctx.response.ok) {
      if (ctx.options.onResponseError) {
        await ctx.options.onResponseError(ctx);
      }
    }
    return ctx.response.ok ? ctx.response : onError(ctx);
  };
  const $fetch2 = function $fetch22(request, opts) {
    return $fetchRaw(request, opts).then((r) => r._data);
  };
  $fetch2.raw = $fetchRaw;
  $fetch2.create = (defaultOptions = {}) => createFetch(__spreadProps(__spreadValues({}, globalOptions), {
    defaults: __spreadValues(__spreadValues({}, globalOptions.defaults), defaultOptions)
  }));
  return $fetch2;
}
const _globalThis$2 = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
}();
const fetch = _globalThis$2.fetch || (() => Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!")));
const Headers = _globalThis$2.Headers;
const $fetch$1 = createFetch({ fetch, Headers });
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const buildAssetsDir = () => appConfig.buildAssetsDir;
const buildAssetsURL = (...path) => joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
};
function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
function serialCaller(hooks, args) {
  return hooks.reduce((promise, hookFn) => promise.then(() => hookFn.apply(void 0, args)), Promise.resolve(null));
}
function parallelCaller(hooks, args) {
  return Promise.all(hooks.map((hook) => hook.apply(void 0, args)));
}
class Hookable {
  constructor() {
    this._hooks = {};
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, fn) {
    if (!name || typeof fn !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let deprecatedHookObj;
    while (this._deprecatedHooks[name]) {
      const deprecatedHook = this._deprecatedHooks[name];
      if (typeof deprecatedHook === "string") {
        deprecatedHookObj = { to: deprecatedHook };
      } else {
        deprecatedHookObj = deprecatedHook;
      }
      name = deprecatedHookObj.to;
    }
    if (deprecatedHookObj) {
      if (!deprecatedHookObj.message) {
        console.warn(`${originalName} hook has been deprecated` + (deprecatedHookObj.to ? `, please use ${deprecatedHookObj.to}` : ""));
      } else {
        console.warn(deprecatedHookObj.message);
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(fn);
    return () => {
      if (fn) {
        this.removeHook(name, fn);
        fn = null;
      }
    };
  }
  hookOnce(name, fn) {
    let _unreg;
    let _fn = (...args) => {
      _unreg();
      _unreg = null;
      _fn = null;
      return fn(...args);
    };
    _unreg = this.hook(name, _fn);
    return _unreg;
  }
  removeHook(name, fn) {
    if (this._hooks[name]) {
      const idx = this._hooks[name].indexOf(fn);
      if (idx !== -1) {
        this._hooks[name].splice(idx, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = deprecated;
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
    return () => {
      removeFns.splice(0, removeFns.length).forEach((unreg) => unreg());
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  callHook(name, ...args) {
    return serialCaller(this._hooks[name] || [], args);
  }
  callHookParallel(name, ...args) {
    return parallelCaller(this._hooks[name] || [], args);
  }
  callHookWith(caller, name, ...args) {
    return caller(this._hooks[name] || [], args);
  }
}
function createHooks() {
  return new Hookable();
}
function createContext() {
  let currentInstance = null;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  return {
    use: () => currentInstance,
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = null;
      isSingleton = false;
    },
    call: (instance, cb) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return cb();
      } finally {
        if (!isSingleton) {
          currentInstance = null;
        }
      }
    },
    async callAsync(instance, cb) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = cb();
        if (!isSingleton) {
          currentInstance = null;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace() {
  const contexts = {};
  return {
    get(key) {
      if (!contexts[key]) {
        contexts[key] = createContext();
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis$1[globalKey] || (_globalThis$1[globalKey] = createNamespace());
const getContext = (key) => defaultNamespace.get(key);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis$1[asyncHandlersKey] || (_globalThis$1[asyncHandlersKey] = /* @__PURE__ */ new Set());
function createMock(name, overrides = {}) {
  const fn = function() {
  };
  fn.prototype.name = name;
  const props = {};
  return new Proxy(fn, {
    get(_target, prop) {
      if (prop === "caller") {
        return null;
      }
      if (prop === "__createMock__") {
        return createMock;
      }
      if (prop in overrides) {
        return overrides[prop];
      }
      return props[prop] = props[prop] || createMock(`${name}.${prop.toString()}`);
    },
    apply(_target, _this, _args) {
      return createMock(`${name}()`);
    },
    construct(_target, _args, _newT) {
      return createMock(`[${name}]`);
    },
    enumerate(_target) {
      return [];
    }
  });
}
const mockContext = createMock("mock");
function mock(warning) {
  console.warn(warning);
  return mockContext;
}
const unsupported = /* @__PURE__ */ new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = /* @__PURE__ */ new Set([
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
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: false,
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
        return useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
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
};
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  const nuxtApp = __spreadValues({
    provide: void 0,
    globalName: "nuxt",
    payload: vue_cjs_prod.reactive(__spreadValues({
      data: {},
      state: {},
      _errors: {}
    }, { serverRendered: true })),
    isHydrating: false,
    _asyncDataPromises: {}
  }, options);
  nuxtApp.hooks = createHooks();
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
  {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a;
      if (prop === "public") {
        return target.public;
      }
      return (_a = target[prop]) != null ? _a : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  let needsLegacyContext = false;
  const plugins2 = _plugins2.map((plugin) => {
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
    plugins2.unshift(legacyPlugin);
  }
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const vm = vue_cjs_prod.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var vueRouter_cjs_prod = {};
/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var vue = require$$0;
  const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
  const PolySymbol = (name) => hasSymbol ? Symbol(name) : "_vr_" + name;
  const matchedRouteKey = /* @__PURE__ */ PolySymbol("rvlm");
  const viewDepthKey = /* @__PURE__ */ PolySymbol("rvd");
  const routerKey = /* @__PURE__ */ PolySymbol("r");
  const routeLocationKey = /* @__PURE__ */ PolySymbol("rl");
  const routerViewLocationKey = /* @__PURE__ */ PolySymbol("rvl");
  function isESModule(obj) {
    return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === "Module";
  }
  const assign = Object.assign;
  function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
      const value = params[key];
      newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
  }
  const noop = () => {
  };
  const TRAILING_SLASH_RE = /\/$/;
  const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
  function parseURL(parseQuery2, location2, currentLocation = "/") {
    let path, query = {}, searchString = "", hash2 = "";
    const searchPos = location2.indexOf("?");
    const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
    if (searchPos > -1) {
      path = location2.slice(0, searchPos);
      searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
      query = parseQuery2(searchString);
    }
    if (hashPos > -1) {
      path = path || location2.slice(0, hashPos);
      hash2 = location2.slice(hashPos, location2.length);
    }
    path = resolveRelativePath(path != null ? path : location2, currentLocation);
    return {
      fullPath: path + (searchString && "?") + searchString + hash2,
      path,
      query,
      hash: hash2
    };
  }
  function stringifyURL(stringifyQuery2, location2) {
    const query = location2.query ? stringifyQuery2(location2.query) : "";
    return location2.path + (query && "?") + query + (location2.hash || "");
  }
  function stripBase(pathname, base) {
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
      return pathname;
    return pathname.slice(base.length) || "/";
  }
  function isSameRouteLocation(stringifyQuery2, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
  }
  function isSameRouteRecord(a, b) {
    return (a.aliasOf || a) === (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
      return false;
    for (const key in a) {
      if (!isSameRouteLocationParamsValue(a[key], b[key]))
        return false;
    }
    return true;
  }
  function isSameRouteLocationParamsValue(a, b) {
    return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
  }
  function isEquivalentArray(a, b) {
    return Array.isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
  }
  function resolveRelativePath(to, from) {
    if (to.startsWith("/"))
      return to;
    if (!to)
      return from;
    const fromSegments = from.split("/");
    const toSegments = to.split("/");
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
      segment = toSegments[toPosition];
      if (position === 1 || segment === ".")
        continue;
      if (segment === "..")
        position--;
      else
        break;
    }
    return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
  }
  var NavigationType;
  (function(NavigationType2) {
    NavigationType2["pop"] = "pop";
    NavigationType2["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function(NavigationDirection2) {
    NavigationDirection2["back"] = "back";
    NavigationDirection2["forward"] = "forward";
    NavigationDirection2["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  const START = "";
  function normalizeBase(base) {
    if (!base) {
      {
        base = "/";
      }
    }
    if (base[0] !== "/" && base[0] !== "#")
      base = "/" + base;
    return removeTrailingSlash(base);
  }
  const BEFORE_HASH_RE = /^[^#]+#/;
  function createHref(base, location2) {
    return base.replace(BEFORE_HASH_RE, "#") + location2;
  }
  const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
  });
  let createBaseLocation = () => location.protocol + "//" + location.host;
  function createCurrentLocation(base, location2) {
    const { pathname, search, hash: hash2 } = location2;
    const hashPos = base.indexOf("#");
    if (hashPos > -1) {
      let slicePos = hash2.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
      let pathFromHash = hash2.slice(slicePos);
      if (pathFromHash[0] !== "/")
        pathFromHash = "/" + pathFromHash;
      return stripBase(pathFromHash, "");
    }
    const path = stripBase(pathname, base);
    return path + search + hash2;
  }
  function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    let pauseState = null;
    const popStateHandler = ({ state }) => {
      const to = createCurrentLocation(base, location);
      const from = currentLocation.value;
      const fromState = historyState.value;
      let delta = 0;
      if (state) {
        currentLocation.value = to;
        historyState.value = state;
        if (pauseState && pauseState === from) {
          pauseState = null;
          return;
        }
        delta = fromState ? state.position - fromState.position : 0;
      } else {
        replace(to);
      }
      listeners.forEach((listener) => {
        listener(currentLocation.value, from, {
          delta,
          type: NavigationType.pop,
          direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
        });
      });
    };
    function pauseListeners() {
      pauseState = currentLocation.value;
    }
    function listen(callback) {
      listeners.push(callback);
      const teardown = () => {
        const index2 = listeners.indexOf(callback);
        if (index2 > -1)
          listeners.splice(index2, 1);
      };
      teardowns.push(teardown);
      return teardown;
    }
    function beforeUnloadListener() {
      const { history: history2 } = window;
      if (!history2.state)
        return;
      history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
    }
    function destroy() {
      for (const teardown of teardowns)
        teardown();
      teardowns = [];
      window.removeEventListener("popstate", popStateHandler);
      window.removeEventListener("beforeunload", beforeUnloadListener);
    }
    window.addEventListener("popstate", popStateHandler);
    window.addEventListener("beforeunload", beforeUnloadListener);
    return {
      pauseListeners,
      listen,
      destroy
    };
  }
  function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
      back,
      current,
      forward,
      replaced,
      position: window.history.length,
      scroll: computeScroll ? computeScrollPosition() : null
    };
  }
  function useHistoryStateNavigation(base) {
    const { history: history2, location: location2 } = window;
    const currentLocation = {
      value: createCurrentLocation(base, location2)
    };
    const historyState = { value: history2.state };
    if (!historyState.value) {
      changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        position: history2.length - 1,
        replaced: true,
        scroll: null
      }, true);
    }
    function changeLocation(to, state, replace2) {
      const hashIndex = base.indexOf("#");
      const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
      try {
        history2[replace2 ? "replaceState" : "pushState"](state, "", url);
        historyState.value = state;
      } catch (err) {
        {
          console.error(err);
        }
        location2[replace2 ? "replace" : "assign"](url);
      }
    }
    function replace(to, data) {
      const state = assign({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position });
      changeLocation(to, state, true);
      currentLocation.value = to;
    }
    function push(to, data) {
      const currentState = assign({}, historyState.value, history2.state, {
        forward: to,
        scroll: computeScrollPosition()
      });
      changeLocation(currentState.current, currentState, true);
      const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
      changeLocation(to, state, false);
      currentLocation.value = to;
    }
    return {
      location: currentLocation,
      state: historyState,
      push,
      replace
    };
  }
  function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
      if (!triggerListeners)
        historyListeners.pauseListeners();
      history.go(delta);
    }
    const routerHistory = assign({
      location: "",
      base,
      go,
      createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => historyNavigation.location.value
    });
    Object.defineProperty(routerHistory, "state", {
      enumerable: true,
      get: () => historyNavigation.state.value
    });
    return routerHistory;
  }
  function createMemoryHistory(base = "") {
    let listeners = [];
    let queue = [START];
    let position = 0;
    base = normalizeBase(base);
    function setLocation(location2) {
      position++;
      if (position === queue.length) {
        queue.push(location2);
      } else {
        queue.splice(position);
        queue.push(location2);
      }
    }
    function triggerListeners(to, from, { direction, delta }) {
      const info = {
        direction,
        delta,
        type: NavigationType.pop
      };
      for (const callback of listeners) {
        callback(to, from, info);
      }
    }
    const routerHistory = {
      location: START,
      state: {},
      base,
      createHref: createHref.bind(null, base),
      replace(to) {
        queue.splice(position--, 1);
        setLocation(to);
      },
      push(to, data) {
        setLocation(to);
      },
      listen(callback) {
        listeners.push(callback);
        return () => {
          const index2 = listeners.indexOf(callback);
          if (index2 > -1)
            listeners.splice(index2, 1);
        };
      },
      destroy() {
        listeners = [];
        queue = [START];
        position = 0;
      },
      go(delta, shouldTrigger = true) {
        const from = this.location;
        const direction = delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
        position = Math.max(0, Math.min(position + delta, queue.length - 1));
        if (shouldTrigger) {
          triggerListeners(this.location, from, {
            direction,
            delta
          });
        }
      }
    };
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => queue[position]
    });
    return routerHistory;
  }
  function createWebHashHistory(base) {
    base = location.host ? base || location.pathname + location.search : "";
    if (!base.includes("#"))
      base += "#";
    return createWebHistory(base);
  }
  function isRouteLocation(route) {
    return typeof route === "string" || route && typeof route === "object";
  }
  function isRouteName(name) {
    return typeof name === "string" || typeof name === "symbol";
  }
  const START_LOCATION_NORMALIZED = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  const NavigationFailureSymbol = /* @__PURE__ */ PolySymbol("nf");
  exports.NavigationFailureType = void 0;
  (function(NavigationFailureType) {
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
  })(exports.NavigationFailureType || (exports.NavigationFailureType = {}));
  const ErrorTypeMessages = {
    [1]({ location: location2, currentLocation }) {
      return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
    },
    [2]({ from, to }) {
      return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [4]({ from, to }) {
      return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [8]({ from, to }) {
      return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [16]({ from, to }) {
      return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    }
  };
  function createRouterError(type, params) {
    {
      return assign(new Error(ErrorTypeMessages[type](params)), {
        type,
        [NavigationFailureSymbol]: true
      }, params);
    }
  }
  function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
  }
  const propertiesToLog = ["params", "query", "hash"];
  function stringifyRoute(to) {
    if (typeof to === "string")
      return to;
    if ("path" in to)
      return to.path;
    const location2 = {};
    for (const key of propertiesToLog) {
      if (key in to)
        location2[key] = to[key];
    }
    return JSON.stringify(location2, null, 2);
  }
  const BASE_PARAM_PATTERN = "[^/]+?";
  const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
  function tokensToParser(segments, extraOptions) {
    const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    const score = [];
    let pattern = options.start ? "^" : "";
    const keys = [];
    for (const segment of segments) {
      const segmentScores = segment.length ? [] : [90];
      if (options.strict && !segment.length)
        pattern += "/";
      for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        const token = segment[tokenIndex];
        let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
        if (token.type === 0) {
          if (!tokenIndex)
            pattern += "/";
          pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
          subSegmentScore += 40;
        } else if (token.type === 1) {
          const { value, repeatable, optional, regexp } = token;
          keys.push({
            name: value,
            repeatable,
            optional
          });
          const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
          if (re2 !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10;
            try {
              new RegExp(`(${re2})`);
            } catch (err) {
              throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
            }
          }
          let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
          if (!tokenIndex)
            subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
          if (optional)
            subPattern += "?";
          pattern += subPattern;
          subSegmentScore += 20;
          if (optional)
            subSegmentScore += -8;
          if (repeatable)
            subSegmentScore += -20;
          if (re2 === ".*")
            subSegmentScore += -50;
        }
        segmentScores.push(subSegmentScore);
      }
      score.push(segmentScores);
    }
    if (options.strict && options.end) {
      const i = score.length - 1;
      score[i][score[i].length - 1] += 0.7000000000000001;
    }
    if (!options.strict)
      pattern += "/?";
    if (options.end)
      pattern += "$";
    else if (options.strict)
      pattern += "(?:/|$)";
    const re = new RegExp(pattern, options.sensitive ? "" : "i");
    function parse2(path) {
      const match = path.match(re);
      const params = {};
      if (!match)
        return null;
      for (let i = 1; i < match.length; i++) {
        const value = match[i] || "";
        const key = keys[i - 1];
        params[key.name] = value && key.repeatable ? value.split("/") : value;
      }
      return params;
    }
    function stringify(params) {
      let path = "";
      let avoidDuplicatedSlash = false;
      for (const segment of segments) {
        if (!avoidDuplicatedSlash || !path.endsWith("/"))
          path += "/";
        avoidDuplicatedSlash = false;
        for (const token of segment) {
          if (token.type === 0) {
            path += token.value;
          } else if (token.type === 1) {
            const { value, repeatable, optional } = token;
            const param = value in params ? params[value] : "";
            if (Array.isArray(param) && !repeatable)
              throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
            const text = Array.isArray(param) ? param.join("/") : param;
            if (!text) {
              if (optional) {
                if (segment.length < 2) {
                  if (path.endsWith("/"))
                    path = path.slice(0, -1);
                  else
                    avoidDuplicatedSlash = true;
                }
              } else
                throw new Error(`Missing required param "${value}"`);
            }
            path += text;
          }
        }
      }
      return path;
    }
    return {
      re,
      score,
      keys,
      parse: parse2,
      stringify
    };
  }
  function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
      const diff = b[i] - a[i];
      if (diff)
        return diff;
      i++;
    }
    if (a.length < b.length) {
      return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
    } else if (a.length > b.length) {
      return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
    }
    return 0;
  }
  function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
      const comp = compareScoreArray(aScore[i], bScore[i]);
      if (comp)
        return comp;
      i++;
    }
    return bScore.length - aScore.length;
  }
  const ROOT_TOKEN = {
    type: 0,
    value: ""
  };
  const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
  function tokenizePath(path) {
    if (!path)
      return [[]];
    if (path === "/")
      return [[ROOT_TOKEN]];
    if (!path.startsWith("/")) {
      throw new Error(`Invalid path "${path}"`);
    }
    function crash(message) {
      throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0;
    let previousState = state;
    const tokens = [];
    let segment;
    function finalizeSegment() {
      if (segment)
        tokens.push(segment);
      segment = [];
    }
    let i = 0;
    let char;
    let buffer = "";
    let customRe = "";
    function consumeBuffer() {
      if (!buffer)
        return;
      if (state === 0) {
        segment.push({
          type: 0,
          value: buffer
        });
      } else if (state === 1 || state === 2 || state === 3) {
        if (segment.length > 1 && (char === "*" || char === "+"))
          crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
        segment.push({
          type: 1,
          value: buffer,
          regexp: customRe,
          repeatable: char === "*" || char === "+",
          optional: char === "*" || char === "?"
        });
      } else {
        crash("Invalid state to consume buffer");
      }
      buffer = "";
    }
    function addCharToBuffer() {
      buffer += char;
    }
    while (i < path.length) {
      char = path[i++];
      if (char === "\\" && state !== 2) {
        previousState = state;
        state = 4;
        continue;
      }
      switch (state) {
        case 0:
          if (char === "/") {
            if (buffer) {
              consumeBuffer();
            }
            finalizeSegment();
          } else if (char === ":") {
            consumeBuffer();
            state = 1;
          } else {
            addCharToBuffer();
          }
          break;
        case 4:
          addCharToBuffer();
          state = previousState;
          break;
        case 1:
          if (char === "(") {
            state = 2;
          } else if (VALID_PARAM_RE.test(char)) {
            addCharToBuffer();
          } else {
            consumeBuffer();
            state = 0;
            if (char !== "*" && char !== "?" && char !== "+")
              i--;
          }
          break;
        case 2:
          if (char === ")") {
            if (customRe[customRe.length - 1] == "\\")
              customRe = customRe.slice(0, -1) + char;
            else
              state = 3;
          } else {
            customRe += char;
          }
          break;
        case 3:
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
          customRe = "";
          break;
        default:
          crash("Unknown state");
          break;
      }
    }
    if (state === 2)
      crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    return tokens;
  }
  function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = assign(parser, {
      record,
      parent,
      children: [],
      alias: []
    });
    if (parent) {
      if (!matcher.record.aliasOf === !parent.record.aliasOf)
        parent.children.push(matcher);
    }
    return matcher;
  }
  function createRouterMatcher(routes2, globalOptions) {
    const matchers = [];
    const matcherMap = /* @__PURE__ */ new Map();
    globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
      return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
      const isRootAdd = !originalRecord;
      const mainNormalizedRecord = normalizeRouteRecord(record);
      mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
      const options = mergeOptions(globalOptions, record);
      const normalizedRecords = [
        mainNormalizedRecord
      ];
      if ("alias" in record) {
        const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
        for (const alias of aliases) {
          normalizedRecords.push(assign({}, mainNormalizedRecord, {
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          }));
        }
      }
      let matcher;
      let originalMatcher;
      for (const normalizedRecord of normalizedRecords) {
        const { path } = normalizedRecord;
        if (parent && path[0] !== "/") {
          const parentPath = parent.record.path;
          const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
          normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
        }
        matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
        if (originalRecord) {
          originalRecord.alias.push(matcher);
        } else {
          originalMatcher = originalMatcher || matcher;
          if (originalMatcher !== matcher)
            originalMatcher.alias.push(matcher);
          if (isRootAdd && record.name && !isAliasRecord(matcher))
            removeRoute(record.name);
        }
        if ("children" in mainNormalizedRecord) {
          const children = mainNormalizedRecord.children;
          for (let i = 0; i < children.length; i++) {
            addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
          }
        }
        originalRecord = originalRecord || matcher;
        insertMatcher(matcher);
      }
      return originalMatcher ? () => {
        removeRoute(originalMatcher);
      } : noop;
    }
    function removeRoute(matcherRef) {
      if (isRouteName(matcherRef)) {
        const matcher = matcherMap.get(matcherRef);
        if (matcher) {
          matcherMap.delete(matcherRef);
          matchers.splice(matchers.indexOf(matcher), 1);
          matcher.children.forEach(removeRoute);
          matcher.alias.forEach(removeRoute);
        }
      } else {
        const index2 = matchers.indexOf(matcherRef);
        if (index2 > -1) {
          matchers.splice(index2, 1);
          if (matcherRef.record.name)
            matcherMap.delete(matcherRef.record.name);
          matcherRef.children.forEach(removeRoute);
          matcherRef.alias.forEach(removeRoute);
        }
      }
    }
    function getRoutes() {
      return matchers;
    }
    function insertMatcher(matcher) {
      let i = 0;
      while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))
        i++;
      matchers.splice(i, 0, matcher);
      if (matcher.record.name && !isAliasRecord(matcher))
        matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location2, currentLocation) {
      let matcher;
      let params = {};
      let path;
      let name;
      if ("name" in location2 && location2.name) {
        matcher = matcherMap.get(location2.name);
        if (!matcher)
          throw createRouterError(1, {
            location: location2
          });
        name = matcher.record.name;
        params = assign(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).map((k) => k.name)), location2.params);
        path = matcher.stringify(params);
      } else if ("path" in location2) {
        path = location2.path;
        matcher = matchers.find((m) => m.re.test(path));
        if (matcher) {
          params = matcher.parse(path);
          name = matcher.record.name;
        }
      } else {
        matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
        if (!matcher)
          throw createRouterError(1, {
            location: location2,
            currentLocation
          });
        name = matcher.record.name;
        params = assign({}, currentLocation.params, location2.params);
        path = matcher.stringify(params);
      }
      const matched = [];
      let parentMatcher = matcher;
      while (parentMatcher) {
        matched.unshift(parentMatcher.record);
        parentMatcher = parentMatcher.parent;
      }
      return {
        name,
        path,
        params,
        matched,
        meta: mergeMetaFields(matched)
      };
    }
    routes2.forEach((route) => addRoute(route));
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
  }
  function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys) {
      if (key in params)
        newParams[key] = params[key];
    }
    return newParams;
  }
  function normalizeRouteRecord(record) {
    return {
      path: record.path,
      redirect: record.redirect,
      name: record.name,
      meta: record.meta || {},
      aliasOf: void 0,
      beforeEnter: record.beforeEnter,
      props: normalizeRecordProps(record),
      children: record.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in record ? record.components || {} : { default: record.component }
    };
  }
  function normalizeRecordProps(record) {
    const propsObject = {};
    const props = record.props || false;
    if ("component" in record) {
      propsObject.default = props;
    } else {
      for (const name in record.components)
        propsObject[name] = typeof props === "boolean" ? props : props[name];
    }
    return propsObject;
  }
  function isAliasRecord(record) {
    while (record) {
      if (record.record.aliasOf)
        return true;
      record = record.parent;
    }
    return false;
  }
  function mergeMetaFields(matched) {
    return matched.reduce((meta2, record) => assign(meta2, record.meta), {});
  }
  function mergeOptions(defaults2, partialOptions) {
    const options = {};
    for (const key in defaults2) {
      options[key] = key in partialOptions ? partialOptions[key] : defaults2[key];
    }
    return options;
  }
  function isRecordChildOf(record, parent) {
    return parent.children.some((child) => child === record || isRecordChildOf(record, child));
  }
  const HASH_RE = /#/g;
  const AMPERSAND_RE = /&/g;
  const SLASH_RE = /\//g;
  const EQUAL_RE = /=/g;
  const IM_RE = /\?/g;
  const PLUS_RE = /\+/g;
  const ENC_BRACKET_OPEN_RE = /%5B/g;
  const ENC_BRACKET_CLOSE_RE = /%5D/g;
  const ENC_CARET_RE = /%5E/g;
  const ENC_BACKTICK_RE = /%60/g;
  const ENC_CURLY_OPEN_RE = /%7B/g;
  const ENC_PIPE_RE = /%7C/g;
  const ENC_CURLY_CLOSE_RE = /%7D/g;
  const ENC_SPACE_RE = /%20/g;
  function commonEncode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
  }
  function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryValue(text) {
    return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
  }
  function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
  }
  function encodeParam(text) {
    return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
  }
  function decode2(text) {
    try {
      return decodeURIComponent("" + text);
    } catch (err) {
    }
    return "" + text;
  }
  function parseQuery(search) {
    const query = {};
    if (search === "" || search === "?")
      return query;
    const hasLeadingIM = search[0] === "?";
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
    for (let i = 0; i < searchParams.length; ++i) {
      const searchParam = searchParams[i].replace(PLUS_RE, " ");
      const eqPos = searchParam.indexOf("=");
      const key = decode2(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
      const value = eqPos < 0 ? null : decode2(searchParam.slice(eqPos + 1));
      if (key in query) {
        let currentValue = query[key];
        if (!Array.isArray(currentValue)) {
          currentValue = query[key] = [currentValue];
        }
        currentValue.push(value);
      } else {
        query[key] = value;
      }
    }
    return query;
  }
  function stringifyQuery(query) {
    let search = "";
    for (let key in query) {
      const value = query[key];
      key = encodeQueryKey(key);
      if (value == null) {
        if (value !== void 0) {
          search += (search.length ? "&" : "") + key;
        }
        continue;
      }
      const values = Array.isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
      values.forEach((value2) => {
        if (value2 !== void 0) {
          search += (search.length ? "&" : "") + key;
          if (value2 != null)
            search += "=" + value2;
        }
      });
    }
    return search;
  }
  function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
      const value = query[key];
      if (value !== void 0) {
        normalizedQuery[key] = Array.isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
      }
    }
    return normalizedQuery;
  }
  function useCallbacks() {
    let handlers = [];
    function add(handler) {
      handlers.push(handler);
      return () => {
        const i = handlers.indexOf(handler);
        if (i > -1)
          handlers.splice(i, 1);
      };
    }
    function reset() {
      handlers = [];
    }
    return {
      add,
      list: () => handlers,
      reset
    };
  }
  function registerGuard(record, name, guard) {
    const removeFromList = () => {
      record[name].delete(guard);
    };
    vue.onUnmounted(removeFromList);
    vue.onDeactivated(removeFromList);
    vue.onActivated(() => {
      record[name].add(guard);
    });
    record[name].add(guard);
  }
  function onBeforeRouteLeave(leaveGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "leaveGuards", leaveGuard);
  }
  function onBeforeRouteUpdate(updateGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "updateGuards", updateGuard);
  }
  function guardToPromiseFn(guard, to, from, record, name) {
    const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve, reject) => {
      const next = (valid) => {
        if (valid === false)
          reject(createRouterError(4, {
            from,
            to
          }));
        else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2, {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
            enterCallbackArray.push(valid);
          resolve();
        }
      };
      const guardReturn = guard.call(record && record.instances[name], to, from, next);
      let guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3)
        guardCall = guardCall.then(next);
      guardCall.catch((err) => reject(err));
    });
  }
  function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
      for (const name in record.components) {
        let rawComponent = record.components[name];
        if (guardType !== "beforeRouteEnter" && !record.instances[name])
          continue;
        if (isRouteComponent(rawComponent)) {
          const options = rawComponent.__vccOpts || rawComponent;
          const guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
        } else {
          let componentPromise = rawComponent();
          guards.push(() => componentPromise.then((resolved) => {
            if (!resolved)
              return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
            const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
            record.components[name] = resolvedComponent;
            const options = resolvedComponent.__vccOpts || resolvedComponent;
            const guard = options[guardType];
            return guard && guardToPromiseFn(guard, to, from, record, name)();
          }));
        }
      }
    }
    return guards;
  }
  function isRouteComponent(component) {
    return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
  }
  function useLink(props) {
    const router = vue.inject(routerKey);
    const currentRoute = vue.inject(routeLocationKey);
    const route = vue.computed(() => router.resolve(vue.unref(props.to)));
    const activeRecordIndex = vue.computed(() => {
      const { matched } = route.value;
      const { length } = matched;
      const routeMatched = matched[length - 1];
      const currentMatched = currentRoute.matched;
      if (!routeMatched || !currentMatched.length)
        return -1;
      const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
      if (index2 > -1)
        return index2;
      const parentRecordPath = getOriginalPath(matched[length - 2]);
      return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2;
    });
    const isActive = vue.computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = vue.computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
      if (guardEvent(e)) {
        return router[vue.unref(props.replace) ? "replace" : "push"](vue.unref(props.to)).catch(noop);
      }
      return Promise.resolve();
    }
    return {
      route,
      href: vue.computed(() => route.value.href),
      isActive,
      isExactActive,
      navigate
    };
  }
  const RouterLinkImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterLink",
    props: {
      to: {
        type: [String, Object],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink,
    setup(props, { slots }) {
      const link = vue.reactive(useLink(props));
      const { options } = vue.inject(routerKey);
      const elClass = vue.computed(() => ({
        [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
        [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
      }));
      return () => {
        const children = slots.default && slots.default(link);
        return props.custom ? children : vue.h("a", {
          "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
          href: link.href,
          onClick: link.navigate,
          class: elClass.value
        }, children);
      };
    }
  });
  const RouterLink = RouterLinkImpl;
  function guardEvent(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
      return;
    if (e.defaultPrevented)
      return;
    if (e.button !== void 0 && e.button !== 0)
      return;
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const target = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(target))
        return;
    }
    if (e.preventDefault)
      e.preventDefault();
    return true;
  }
  function includesParams(outer, inner) {
    for (const key in inner) {
      const innerValue = inner[key];
      const outerValue = outer[key];
      if (typeof innerValue === "string") {
        if (innerValue !== outerValue)
          return false;
      } else {
        if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
          return false;
      }
    }
    return true;
  }
  function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
  }
  const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
  const RouterViewImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    setup(props, { attrs, slots }) {
      const injectedRoute = vue.inject(routerViewLocationKey);
      const routeToDisplay = vue.computed(() => props.route || injectedRoute.value);
      const depth = vue.inject(viewDepthKey, 0);
      const matchedRouteRef = vue.computed(() => routeToDisplay.value.matched[depth]);
      vue.provide(viewDepthKey, depth + 1);
      vue.provide(matchedRouteKey, matchedRouteRef);
      vue.provide(routerViewLocationKey, routeToDisplay);
      const viewRef = vue.ref();
      vue.watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
        if (to) {
          to.instances[name] = instance;
          if (from && from !== to && instance && instance === oldInstance) {
            if (!to.leaveGuards.size) {
              to.leaveGuards = from.leaveGuards;
            }
            if (!to.updateGuards.size) {
              to.updateGuards = from.updateGuards;
            }
          }
        }
        if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
          (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
        }
      }, { flush: "post" });
      return () => {
        const route = routeToDisplay.value;
        const matchedRoute = matchedRouteRef.value;
        const ViewComponent = matchedRoute && matchedRoute.components[props.name];
        const currentName = props.name;
        if (!ViewComponent) {
          return normalizeSlot(slots.default, { Component: ViewComponent, route });
        }
        const routePropsOption = matchedRoute.props[props.name];
        const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
        const onVnodeUnmounted = (vnode) => {
          if (vnode.component.isUnmounted) {
            matchedRoute.instances[currentName] = null;
          }
        };
        const component = vue.h(ViewComponent, assign({}, routeProps, attrs, {
          onVnodeUnmounted,
          ref: viewRef
        }));
        return normalizeSlot(slots.default, { Component: component, route }) || component;
      };
    }
  });
  function normalizeSlot(slot, data) {
    if (!slot)
      return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
  }
  const RouterView = RouterViewImpl;
  function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = vue.shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = applyToParams.bind(null, decode2);
    function addRoute(parentOrRoute, route) {
      let parent;
      let record;
      if (isRouteName(parentOrRoute)) {
        parent = matcher.getRecordMatcher(parentOrRoute);
        record = route;
      } else {
        record = parentOrRoute;
      }
      return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
      const recordMatcher = matcher.getRecordMatcher(name);
      if (recordMatcher) {
        matcher.removeRoute(recordMatcher);
      }
    }
    function getRoutes() {
      return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
    }
    function hasRoute(name) {
      return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
      currentLocation = assign({}, currentLocation || currentRoute.value);
      if (typeof rawLocation === "string") {
        const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
        const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
        const href2 = routerHistory.createHref(locationNormalized.fullPath);
        return assign(locationNormalized, matchedRoute2, {
          params: decodeParams(matchedRoute2.params),
          hash: decode2(locationNormalized.hash),
          redirectedFrom: void 0,
          href: href2
        });
      }
      let matcherLocation;
      if ("path" in rawLocation) {
        matcherLocation = assign({}, rawLocation, {
          path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
        });
      } else {
        const targetParams = assign({}, rawLocation.params);
        for (const key in targetParams) {
          if (targetParams[key] == null) {
            delete targetParams[key];
          }
        }
        matcherLocation = assign({}, rawLocation, {
          params: encodeParams(rawLocation.params)
        });
        currentLocation.params = encodeParams(currentLocation.params);
      }
      const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
      const hash2 = rawLocation.hash || "";
      matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
      const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
        hash: encodeHash(hash2),
        path: matchedRoute.path
      }));
      const href = routerHistory.createHref(fullPath);
      return assign({
        fullPath,
        hash: hash2,
        query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      }, matchedRoute, {
        redirectedFrom: void 0,
        href
      });
    }
    function locationAsObject(to) {
      return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
      if (pendingLocation !== to) {
        return createRouterError(8, {
          from,
          to
        });
      }
    }
    function push(to) {
      return pushWithRedirect(to);
    }
    function replace(to) {
      return push(assign(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
      const lastMatched = to.matched[to.matched.length - 1];
      if (lastMatched && lastMatched.redirect) {
        const { redirect } = lastMatched;
        let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
        if (typeof newTargetLocation === "string") {
          newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
          newTargetLocation.params = {};
        }
        return assign({
          query: to.query,
          hash: to.hash,
          params: to.params
        }, newTargetLocation);
      }
    }
    function pushWithRedirect(to, redirectedFrom) {
      const targetLocation = pendingLocation = resolve(to);
      const from = currentRoute.value;
      const data = to.state;
      const force = to.force;
      const replace2 = to.replace === true;
      const shouldRedirect = handleRedirectRecord(targetLocation);
      if (shouldRedirect)
        return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
          state: data,
          force,
          replace: replace2
        }), redirectedFrom || targetLocation);
      const toLocation = targetLocation;
      toLocation.redirectedFrom = redirectedFrom;
      let failure;
      if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
        failure = createRouterError(16, { to: toLocation, from });
        handleScroll();
      }
      return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
        if (failure2) {
          if (isNavigationFailure(failure2, 2)) {
            return pushWithRedirect(assign(locationAsObject(failure2.to), {
              state: data,
              force,
              replace: replace2
            }), redirectedFrom || toLocation);
          }
        } else {
          failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
        }
        triggerAfterEach(toLocation, from, failure2);
        return failure2;
      });
    }
    function checkCanceledNavigationAndReject(to, from) {
      const error = checkCanceledNavigation(to, from);
      return error ? Promise.reject(error) : Promise.resolve();
    }
    function navigate(to, from) {
      let guards;
      const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
      guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
      for (const record of leavingRecords) {
        record.leaveGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards).then(() => {
        guards = [];
        for (const guard of beforeGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
        for (const record of updatingRecords) {
          record.updateGuards.forEach((guard) => {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const record of to.matched) {
          if (record.beforeEnter && !from.matched.includes(record)) {
            if (Array.isArray(record.beforeEnter)) {
              for (const beforeEnter of record.beforeEnter)
                guards.push(guardToPromiseFn(beforeEnter, to, from));
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        to.matched.forEach((record) => record.enterCallbacks = {});
        guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const guard of beforeResolveGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
      for (const guard of afterGuards.list())
        guard(to, from, failure);
    }
    function finalizeNavigation(toLocation, from, isPush, replace2, data) {
      const error = checkCanceledNavigation(toLocation, from);
      if (error)
        return error;
      const isFirstNavigation = from === START_LOCATION_NORMALIZED;
      const state = {};
      if (isPush) {
        if (replace2 || isFirstNavigation)
          routerHistory.replace(toLocation.fullPath, assign({
            scroll: isFirstNavigation && state && state.scroll
          }, data));
        else
          routerHistory.push(toLocation.fullPath, data);
      }
      currentRoute.value = toLocation;
      handleScroll();
      markAsReady();
    }
    let removeHistoryListener;
    function setupListeners() {
      removeHistoryListener = routerHistory.listen((to, _from, info) => {
        const toLocation = resolve(to);
        const shouldRedirect = handleRedirectRecord(toLocation);
        if (shouldRedirect) {
          pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
          return;
        }
        pendingLocation = toLocation;
        const from = currentRoute.value;
        navigate(toLocation, from).catch((error) => {
          if (isNavigationFailure(error, 4 | 8)) {
            return error;
          }
          if (isNavigationFailure(error, 2)) {
            pushWithRedirect(error.to, toLocation).then((failure) => {
              if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
                routerHistory.go(-1, false);
              }
            }).catch(noop);
            return Promise.reject();
          }
          if (info.delta)
            routerHistory.go(-info.delta, false);
          return triggerError(error, toLocation, from);
        }).then((failure) => {
          failure = failure || finalizeNavigation(toLocation, from, false);
          if (failure) {
            if (info.delta) {
              routerHistory.go(-info.delta, false);
            } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
              routerHistory.go(-1, false);
            }
          }
          triggerAfterEach(toLocation, from, failure);
        }).catch(noop);
      });
    }
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    function triggerError(error, to, from) {
      markAsReady(error);
      const list = errorHandlers.list();
      if (list.length) {
        list.forEach((handler) => handler(error, to, from));
      } else {
        console.error(error);
      }
      return Promise.reject(error);
    }
    function isReady() {
      if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
        return Promise.resolve();
      return new Promise((resolve2, reject) => {
        readyHandlers.add([resolve2, reject]);
      });
    }
    function markAsReady(err) {
      if (!ready) {
        ready = !err;
        setupListeners();
        readyHandlers.list().forEach(([resolve2, reject]) => err ? reject(err) : resolve2());
        readyHandlers.reset();
      }
      return err;
    }
    function handleScroll(to, from, isPush, isFirstNavigation) {
      return Promise.resolve();
    }
    const go = (delta) => routerHistory.go(delta);
    const installedApps = /* @__PURE__ */ new Set();
    const router = {
      currentRoute,
      addRoute,
      removeRoute,
      hasRoute,
      getRoutes,
      resolve,
      options,
      push,
      replace,
      go,
      back: () => go(-1),
      forward: () => go(1),
      beforeEach: beforeGuards.add,
      beforeResolve: beforeResolveGuards.add,
      afterEach: afterGuards.add,
      onError: errorHandlers.add,
      isReady,
      install(app) {
        const router2 = this;
        app.component("RouterLink", RouterLink);
        app.component("RouterView", RouterView);
        app.config.globalProperties.$router = router2;
        Object.defineProperty(app.config.globalProperties, "$route", {
          enumerable: true,
          get: () => vue.unref(currentRoute)
        });
        const reactiveRoute = {};
        for (const key in START_LOCATION_NORMALIZED) {
          reactiveRoute[key] = vue.computed(() => currentRoute.value[key]);
        }
        app.provide(routerKey, router2);
        app.provide(routeLocationKey, vue.reactive(reactiveRoute));
        app.provide(routerViewLocationKey, currentRoute);
        const unmountApp = app.unmount;
        installedApps.add(app);
        app.unmount = function() {
          installedApps.delete(app);
          if (installedApps.size < 1) {
            pendingLocation = START_LOCATION_NORMALIZED;
            removeHistoryListener && removeHistoryListener();
            currentRoute.value = START_LOCATION_NORMALIZED;
            ready = false;
          }
          unmountApp();
        };
      }
    };
    return router;
  }
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
  }
  function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
      const recordFrom = from.matched[i];
      if (recordFrom) {
        if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
          updatingRecords.push(recordFrom);
        else
          leavingRecords.push(recordFrom);
      }
      const recordTo = to.matched[i];
      if (recordTo) {
        if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
          enteringRecords.push(recordTo);
        }
      }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
  }
  function useRouter2() {
    return vue.inject(routerKey);
  }
  function useRoute2() {
    return vue.inject(routeLocationKey);
  }
  exports.RouterLink = RouterLink;
  exports.RouterView = RouterView;
  exports.START_LOCATION = START_LOCATION_NORMALIZED;
  exports.createMemoryHistory = createMemoryHistory;
  exports.createRouter = createRouter;
  exports.createRouterMatcher = createRouterMatcher;
  exports.createWebHashHistory = createWebHashHistory;
  exports.createWebHistory = createWebHistory;
  exports.isNavigationFailure = isNavigationFailure;
  exports.matchedRouteKey = matchedRouteKey;
  exports.onBeforeRouteLeave = onBeforeRouteLeave;
  exports.onBeforeRouteUpdate = onBeforeRouteUpdate;
  exports.parseQuery = parseQuery;
  exports.routeLocationKey = routeLocationKey;
  exports.routerKey = routerKey;
  exports.routerViewLocationKey = routerViewLocationKey;
  exports.stringifyQuery = stringifyQuery;
  exports.useLink = useLink;
  exports.useRoute = useRoute2;
  exports.useRouter = useRouter2;
  exports.viewDepthKey = viewDepthKey;
})(vueRouter_cjs_prod);
const wrapInRef = (value) => vue_cjs_prod.isRef(value) ? value : vue_cjs_prod.ref(value);
const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  var _a, _b, _c, _d, _e;
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = __spreadValues({ server: true, default: getDefault }, options);
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = (_b = (_a = options.lazy) != null ? _a : options.defer) != null ? _b : false;
  options.initialCache = (_c = options.initialCache) != null ? _c : true;
  const nuxt = useNuxtApp();
  const instance = vue_cjs_prod.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      vue_cjs_prod.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      vue_cjs_prod.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: wrapInRef((_d = nuxt.payload.data[key]) != null ? _d : options.default()),
    pending: vue_cjs_prod.ref(!useInitialCache()),
    error: vue_cjs_prod.ref((_e = nuxt.payload._errors[key]) != null ? _e : null)
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
      asyncData.data.value = vue_cjs_prod.unref(options.default());
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
  if (fetchOnServer) {
    const promise = initialFetch();
    vue_cjs_prod.onServerPrefetch(() => promise);
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const useState = (key, init) => {
  const nuxt = useNuxtApp();
  const state = vue_cjs_prod.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (vue_cjs_prod.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
const useError = () => {
  const nuxtApp = useNuxtApp();
  return useState("error", () => nuxtApp.ssrContext.error);
};
const throwError = (_err) => {
  const nuxtApp = useNuxtApp();
  useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  }
  return err;
};
function murmurHash(key, seed = 0) {
  if (typeof key === "string") {
    key = createBuffer(key);
  }
  let i = 0;
  let h1 = seed;
  let k1;
  let h1b;
  const remainder = key.length & 3;
  const bytes = key.length - remainder;
  const c1 = 3432918353;
  const c2 = 461845907;
  while (i < bytes) {
    k1 = key[i] & 255 | (key[++i] & 255) << 8 | (key[++i] & 255) << 16 | (key[++i] & 255) << 24;
    ++i;
    k1 = (k1 & 65535) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295;
    k1 = k1 << 15 | k1 >>> 17;
    k1 = (k1 & 65535) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295;
    h1 ^= k1;
    h1 = h1 << 13 | h1 >>> 19;
    h1b = (h1 & 65535) * 5 + (((h1 >>> 16) * 5 & 65535) << 16) & 4294967295;
    h1 = (h1b & 65535) + 27492 + (((h1b >>> 16) + 58964 & 65535) << 16);
  }
  k1 = 0;
  switch (remainder) {
    case 3:
      k1 ^= (key[i + 2] & 255) << 16;
      break;
    case 2:
      k1 ^= (key[i + 1] & 255) << 8;
      break;
    case 1:
      k1 ^= key[i] & 255;
      k1 = (k1 & 65535) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295;
      k1 = k1 << 15 | k1 >>> 17;
      k1 = (k1 & 65535) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295;
      h1 ^= k1;
  }
  h1 ^= key.length;
  h1 ^= h1 >>> 16;
  h1 = (h1 & 65535) * 2246822507 + (((h1 >>> 16) * 2246822507 & 65535) << 16) & 4294967295;
  h1 ^= h1 >>> 13;
  h1 = (h1 & 65535) * 3266489909 + (((h1 >>> 16) * 3266489909 & 65535) << 16) & 4294967295;
  h1 ^= h1 >>> 16;
  return h1 >>> 0;
}
function createBuffer(val) {
  return new TextEncoder().encode(val);
}
const defaults = {
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false
};
function objectHash(object, options = {}) {
  options = __spreadValues(__spreadValues({}, defaults), options);
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
function createHasher(options) {
  const buff = [];
  let context = [];
  const write = (str) => {
    buff.push(str);
  };
  return {
    toString() {
      return buff.join("");
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this["_" + type](value);
    },
    _object(object) {
      const pattern = /\[object (.*)\]/i;
      const objString = Object.prototype.toString.call(object);
      const _objType = pattern.exec(objString);
      const objType = _objType ? _objType[1].toLowerCase() : "unknown:[" + objString.toLowerCase() + "]";
      let objectNumber = null;
      if ((objectNumber = context.indexOf(object)) >= 0) {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      } else {
        context.push(object);
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this["_" + objType]) {
          this["_" + objType](object);
        } else if (options.ignoreUnknown) {
          return write("[" + objType + "]");
        } else {
          throw new Error('Unknown object type "' + objType + '"');
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        if (options.respectType !== false && !isNativeFunction(object)) {
          keys.splice(0, 0, "prototype", "__proto__", "letructor");
        }
        if (options.excludeKeys) {
          keys = keys.filter(function(key) {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + keys.length + ":");
        return keys.forEach((key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        });
      }
    },
    _array(arr, unordered) {
      unordered = typeof unordered !== "undefined" ? unordered : options.unorderedArrays !== false;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        return arr.forEach((entry2) => {
          return this.dispatch(entry2);
        });
      }
      const contextAdditions = [];
      const entries = arr.map((entry2) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry2);
        contextAdditions.push(hasher.getContext());
        return hasher.toString();
      });
      context = context.concat(contextAdditions);
      entries.sort();
      return this._array(entries, false);
    },
    _date(date) {
      return write("date:" + date.toJSON());
    },
    _symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    _error(err) {
      return write("error:" + err.toString());
    },
    _boolean(bool) {
      return write("bool:" + bool.toString());
    },
    _string(string) {
      write("string:" + string.length + ":");
      write(string.toString());
    },
    _function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this._object(fn);
      }
    },
    _number(number) {
      return write("number:" + number.toString());
    },
    _xml(xml) {
      return write("xml:" + xml.toString());
    },
    _null() {
      return write("Null");
    },
    _undefined() {
      return write("Undefined");
    },
    _regexp(regex) {
      return write("regex:" + regex.toString());
    },
    _uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    _url(url) {
      return write("url:" + url.toString());
    },
    _map(map) {
      write("map:");
      const arr = Array.from(map);
      return this._array(arr, options.unorderedSets !== false);
    },
    _set(set) {
      write("set:");
      const arr = Array.from(set);
      return this._array(arr, options.unorderedSets !== false);
    },
    _file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    _blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error('Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n');
    },
    _domwindow() {
      return write("domwindow");
    },
    _bigint(number) {
      return write("bigint:" + number.toString());
    },
    _process() {
      return write("process");
    },
    _timer() {
      return write("timer");
    },
    _pipe() {
      return write("pipe");
    },
    _tcp() {
      return write("tcp");
    },
    _udp() {
      return write("udp");
    },
    _tty() {
      return write("tty");
    },
    _statwatcher() {
      return write("statwatcher");
    },
    _securecontext() {
      return write("securecontext");
    },
    _connection() {
      return write("connection");
    },
    _zlib() {
      return write("zlib");
    },
    _context() {
      return write("context");
    },
    _nodescript() {
      return write("nodescript");
    },
    _httpparser() {
      return write("httpparser");
    },
    _dataview() {
      return write("dataview");
    },
    _signal() {
      return write("signal");
    },
    _fsevent() {
      return write("fsevent");
    },
    _tlswrap() {
      return write("tlswrap");
    }
  };
}
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  const exp = /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i;
  return exp.exec(Function.prototype.toString.call(f)) != null;
}
function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return String(murmurHash(hashed));
}
function useFetch(request, opts = {}) {
  const key = "$f_" + (opts.key || hash([request, __spreadProps(__spreadValues({}, opts), { transform: null })]));
  const _request = vue_cjs_prod.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return vue_cjs_prod.isRef(r) ? r.value : r;
  });
  const _fetchOptions = __spreadProps(__spreadValues({}, opts), {
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = __spreadProps(__spreadValues({}, opts), {
    watch: [
      _request,
      ...opts.watch || []
    ]
  });
  const asyncData = useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
const decode = decodeURIComponent;
const encode = encodeURIComponent;
const pairSplitRegExp = /; */;
const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  let obj = {};
  let opt = options || {};
  let pairs = str.split(pairSplitRegExp);
  let dec = opt.decode || decode;
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i];
    let eq_idx = pair.indexOf("=");
    if (eq_idx < 0) {
      continue;
    }
    let key = pair.substr(0, eq_idx).trim();
    let val = pair.substr(++eq_idx, pair.length).trim();
    if (val[0] == '"') {
      val = val.slice(1, -1);
    }
    if (obj[key] == void 0) {
      obj[key] = tryDecode(val, dec);
    }
  }
  return obj;
}
function serialize(name, value, options) {
  let opt = options || {};
  let enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  let encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (opt.maxAge != null) {
    let maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== "function") {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.sameSite) {
    let sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e) {
    return str;
  }
}
const MIMES = {
  html: "text/html",
  json: "application/json"
};
const defer = typeof setImmediate !== "undefined" ? setImmediate : (fn) => fn();
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      event.res.end(data);
      resolve(void 0);
    });
  });
}
function defaultContentType(event, type) {
  if (type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", type);
  }
}
function sendRedirect(event, location2, code = 302) {
  event.res.statusCode = code;
  event.res.setHeader("Location", location2);
  return send(event, "Redirecting to " + location2, MIMES.html);
}
function appendHeader(event, name, value) {
  let current = event.res.getHeader(name);
  if (!current) {
    event.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.res.setHeader(name, current.concat(value));
}
class H3Error extends Error {
  constructor() {
    super(...arguments);
    this.statusCode = 500;
    this.statusMessage = "H3Error";
  }
}
function createError(input) {
  var _a;
  if (input instanceof H3Error) {
    return input;
  }
  const err = new H3Error((_a = input.message) != null ? _a : input.statusMessage);
  if (input.statusCode) {
    err.statusCode = input.statusCode;
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  }
  if (input.data) {
    err.data = input.data;
  }
  return err;
}
function useRequestHeaders(include) {
  var _a, _b;
  const headers = (_b = (_a = useNuxtApp().ssrContext) == null ? void 0 : _a.event.req.headers) != null ? _b : {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a, _b;
  const opts = __spreadValues(__spreadValues({}, CookieDefaults), _opts);
  const cookies = readRawCookies(opts);
  const cookie = wrapInRef((_b = cookies[name]) != null ? _b : (_a = opts.default) == null ? void 0 : _a.call(opts));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (cookie.value !== cookies[name]) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse(((_a = useRequestEvent()) == null ? void 0 : _a.req.headers.cookie) || "", opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return serialize(name, value, __spreadProps(__spreadValues({}, opts), { maxAge: -1 }));
  }
  return serialize(name, value, opts);
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  return useNuxtApp()._route;
};
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = router.resolve(to).fullPath;
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 301));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
  };
  return vue_cjs_prod.defineComponent({
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
      const router = useRouter();
      const to = vue_cjs_prod.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = vue_cjs_prod.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      return () => {
        var _a, _b;
        if (!isExternal.value) {
          return vue_cjs_prod.h(vue_cjs_prod.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? (_b = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _b : null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return vue_cjs_prod.h("a", { href, rel, target }, slots.default());
      };
    }
  });
}
const __nuxt_component_1 = defineNuxtLink({ componentName: "NuxtLink" });
var shared_cjs_prod = {};
Object.defineProperty(shared_cjs_prod, "__esModule", { value: true });
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `HYDRATE_EVENTS`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};
const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
const isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject$1(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  let ret = "";
  if (!styles || isString(styles)) {
    return ret;
  }
  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
    if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$1(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html = "";
  let escaped;
  let index2;
  let lastIndex = 0;
  for (index2 = match.index; index2 < str.length; index2++) {
    switch (str.charCodeAt(index2)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index2) {
      html += str.slice(lastIndex, index2);
    }
    lastIndex = index2 + 1;
    html += escaped;
  }
  return lastIndex !== index2 ? html + str.slice(lastIndex, index2) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length)
    return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b)
    return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject$1(a);
  bValidType = isObject$1(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject$1(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject$1(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => val instanceof Date;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$1 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$1(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
};
shared_cjs_prod.EMPTY_ARR = EMPTY_ARR;
shared_cjs_prod.EMPTY_OBJ = EMPTY_OBJ;
shared_cjs_prod.NO = NO;
shared_cjs_prod.NOOP = NOOP;
shared_cjs_prod.PatchFlagNames = PatchFlagNames;
shared_cjs_prod.camelize = camelize;
shared_cjs_prod.capitalize = capitalize;
shared_cjs_prod.def = def;
shared_cjs_prod.escapeHtml = escapeHtml;
shared_cjs_prod.escapeHtmlComment = escapeHtmlComment;
shared_cjs_prod.extend = extend;
shared_cjs_prod.generateCodeFrame = generateCodeFrame;
shared_cjs_prod.getGlobalThis = getGlobalThis;
shared_cjs_prod.hasChanged = hasChanged;
shared_cjs_prod.hasOwn = hasOwn;
shared_cjs_prod.hyphenate = hyphenate;
shared_cjs_prod.includeBooleanAttr = includeBooleanAttr;
shared_cjs_prod.invokeArrayFns = invokeArrayFns;
shared_cjs_prod.isArray = isArray;
shared_cjs_prod.isBooleanAttr = isBooleanAttr;
shared_cjs_prod.isBuiltInDirective = isBuiltInDirective;
shared_cjs_prod.isDate = isDate;
var isFunction_1 = shared_cjs_prod.isFunction = isFunction;
shared_cjs_prod.isGloballyWhitelisted = isGloballyWhitelisted;
shared_cjs_prod.isHTMLTag = isHTMLTag;
shared_cjs_prod.isIntegerKey = isIntegerKey;
shared_cjs_prod.isKnownHtmlAttr = isKnownHtmlAttr;
shared_cjs_prod.isKnownSvgAttr = isKnownSvgAttr;
shared_cjs_prod.isMap = isMap;
shared_cjs_prod.isModelListener = isModelListener;
shared_cjs_prod.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
shared_cjs_prod.isObject = isObject$1;
shared_cjs_prod.isOn = isOn;
shared_cjs_prod.isPlainObject = isPlainObject;
shared_cjs_prod.isPromise = isPromise;
shared_cjs_prod.isReservedProp = isReservedProp;
shared_cjs_prod.isSSRSafeAttrName = isSSRSafeAttrName;
shared_cjs_prod.isSVGTag = isSVGTag;
shared_cjs_prod.isSet = isSet;
shared_cjs_prod.isSpecialBooleanAttr = isSpecialBooleanAttr;
shared_cjs_prod.isString = isString;
shared_cjs_prod.isSymbol = isSymbol;
shared_cjs_prod.isVoidTag = isVoidTag;
shared_cjs_prod.looseEqual = looseEqual;
shared_cjs_prod.looseIndexOf = looseIndexOf;
shared_cjs_prod.makeMap = makeMap;
shared_cjs_prod.normalizeClass = normalizeClass;
shared_cjs_prod.normalizeProps = normalizeProps;
shared_cjs_prod.normalizeStyle = normalizeStyle;
shared_cjs_prod.objectToString = objectToString;
shared_cjs_prod.parseStringStyle = parseStringStyle;
shared_cjs_prod.propsToAttrMap = propsToAttrMap;
shared_cjs_prod.remove = remove;
shared_cjs_prod.slotFlagsText = slotFlagsText;
shared_cjs_prod.stringifyStyle = stringifyStyle;
shared_cjs_prod.toDisplayString = toDisplayString;
shared_cjs_prod.toHandlerKey = toHandlerKey;
shared_cjs_prod.toNumber = toNumber;
shared_cjs_prod.toRawType = toRawType;
shared_cjs_prod.toTypeString = toTypeString;
function useHead(meta2) {
  const resolvedMeta = isFunction_1(meta2) ? vue_cjs_prod.computed(meta2) : meta2;
  useNuxtApp()._useHead(resolvedMeta);
}
function useMeta(meta2) {
  return useHead(meta2);
}
const preload = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
const components = {};
function componentsPlugin_31fe6802(nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
}
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var createElement = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
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
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
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
      tags.push({ tag: key, props: __spreadValues2({ key: "default" }, obj[key]) });
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
var updateElements = (document2 = window.document, type, tags) => {
  var _a;
  const head = document2.head;
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
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document2));
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
              let index2 = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index2 = i;
                  break;
                }
              }
              if (index2 !== -1) {
                deduped.splice(index2, 1);
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
    updateDOM(document2 = window.document) {
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
        document2.title = title;
      }
      setAttrs(document2.documentElement, htmlAttrs);
      setAttrs(document2.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document2, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
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
      return stringifyAttrs(__spreadProps2(__spreadValues2({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps2(__spreadValues2({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
function isObject(val) {
  return val !== null && typeof val === "object";
}
function _defu(baseObj, defaults2, namespace = ".", merger) {
  if (!isObject(defaults2)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  const obj = Object.assign({}, defaults2);
  for (const key in baseObj) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const val = baseObj[key];
    if (val === null || val === void 0) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = val.concat(obj[key]);
    } else if (isObject(val) && isObject(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
function createDefu(merger) {
  return (...args) => args.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = createDefu();
const vueuseHead_ca41ef0e = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    vue_cjs_prod.watchEffect(() => {
      head.updateDOM();
    });
  });
  const titleTemplate = vue_cjs_prod.ref();
  nuxtApp._useHead = (_meta) => {
    const meta2 = vue_cjs_prod.ref(_meta);
    if ("titleTemplate" in meta2.value) {
      titleTemplate.value = meta2.value.titleTemplate;
    }
    const headObj = vue_cjs_prod.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta2.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta2.value.title) : titleTemplate.value.replace(/%s/g, meta2.value.title);
      }
      if (meta2.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta2.value.charset });
      }
      if (meta2.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta2.value.viewport });
      }
      return defu(overrides, meta2.value);
    });
    head.addHeadObjs(headObj);
    {
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = () => renderHeadToString(head);
  }
});
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory(__spreadValues(__spreadValues({}, removeUndefinedProps(props)), ctx.attrs), ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
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
const Script = vue_cjs_prod.defineComponent({
  name: "Script",
  props: __spreadProps(__spreadValues({}, globalProps), {
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
  }),
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
const Link = vue_cjs_prod.defineComponent({
  name: "Link",
  props: __spreadProps(__spreadValues({}, globalProps), {
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
  }),
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Base = vue_cjs_prod.defineComponent({
  name: "Base",
  props: __spreadProps(__spreadValues({}, globalProps), {
    href: String,
    target: String
  }),
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = vue_cjs_prod.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b;
    const title = ((_b = (_a = slots.default()) == null ? void 0 : _a[0]) == null ? void 0 : _b.children) || null;
    return {
      title
    };
  })
});
const Meta = vue_cjs_prod.defineComponent({
  name: "Meta",
  props: __spreadProps(__spreadValues({}, globalProps), {
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  }),
  setup: setupForUseMeta((meta2) => ({
    meta: [meta2]
  }))
});
const Style = vue_cjs_prod.defineComponent({
  name: "Style",
  props: __spreadProps(__spreadValues({}, globalProps), {
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  }),
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = __spreadValues({}, props);
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = vue_cjs_prod.defineComponent({
  name: "Head",
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const Html = vue_cjs_prod.defineComponent({
  name: "Html",
  props: __spreadProps(__spreadValues({}, globalProps), {
    manifest: String,
    version: String,
    xmlns: String
  }),
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = vue_cjs_prod.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const Components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Script,
  Link,
  Base,
  Title,
  Meta,
  Style,
  Head,
  Html,
  Body
}, Symbol.toStringTag, { value: "Module" }));
const metaConfig = { "globalMeta": { "charset": "utf-8", "viewport": "width=device-width, initial-scale=1", "meta": [], "link": [], "style": [], "script": [] } };
const metaMixin = {
  created() {
    const instance = vue_cjs_prod.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = useNuxtApp();
    const source = typeof options.head === "function" ? vue_cjs_prod.computed(() => options.head(nuxtApp)) : options.head;
    useHead(source);
  }
};
const plugin_f8825b26 = defineNuxtPlugin((nuxtApp) => {
  useHead(vue_cjs_prod.markRaw(metaConfig.globalMeta));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in Components) {
    nuxtApp.vueApp.component(name, Components[name]);
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a;
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = (_a = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a : interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? vue_cjs_prod.h(component, props === true ? {} : props, slots) : vue_cjs_prod.h(Fragment, {}, slots) };
};
const isNestedKey = Symbol("isNested");
const NuxtPage = vue_cjs_prod.defineComponent({
  name: "NuxtPage",
  props: {
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props) {
    const nuxtApp = useNuxtApp();
    const isNested = vue_cjs_prod.inject(isNestedKey, false);
    vue_cjs_prod.provide(isNestedKey, true);
    return () => {
      return vue_cjs_prod.h(vueRouter_cjs_prod.RouterView, {}, {
        default: (routeProps) => {
          var _a;
          return routeProps.Component && _wrapIf(vue_cjs_prod.Transition, (_a = routeProps.route.meta.pageTransition) != null ? _a : defaultPageTransition, wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? vue_cjs_prod.h(routeProps.Component, { key: generateRouteKey(props.pageKey, routeProps) }) : vue_cjs_prod.h(vue_cjs_prod.Suspense, {
            onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
            onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
          }, { default: () => vue_cjs_prod.h(routeProps.Component, { key: generateRouteKey(props.pageKey, routeProps) }) }))).default();
        }
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
const layouts = {
  shop: vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return shop;
  }))
};
const defaultLayoutTransition = { name: "layout", mode: "out-in" };
const __nuxt_component_0$1 = vue_cjs_prod.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = useRoute();
    return () => {
      var _a, _b, _c;
      const layout = (_b = (_a = vue_cjs_prod.isRef(props.name) ? props.name.value : props.name) != null ? _a : route.meta.layout) != null ? _b : "default";
      const hasLayout = layout && layout in layouts;
      return _wrapIf(vue_cjs_prod.Transition, hasLayout && ((_c = route.meta.layoutTransition) != null ? _c : defaultLayoutTransition), _wrapIf(layouts[layout], hasLayout, context.slots)).default();
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const meta$a = void 0;
const useCart = defineStore("cart", {
  state: () => {
    return {
      cartItems: []
    };
  },
  getters: {
    items: ({ cartItems }) => cartItems
  },
  actions: {
    initCart(cartData) {
      this.cartItems = cartData;
    },
    addToCart(product) {
      const newArr = JSON.parse(JSON.stringify(this.cartItems));
      newArr.push(product);
      this.cartItems = newArr;
    },
    updateCartItem(itemData) {
      this.cartItems.forEach((item) => {
        if (item.id === itemData.id) {
          item.amount = itemData.amount;
        }
      });
    },
    removeAllCartItems() {
      this.cartItems = [];
    },
    removeFromCart(product) {
      const newArr = [];
      for (let index2 in this.cartItems) {
        const item = this.cartItems[index2];
        if (item.id !== product.id) {
          newArr.push(item);
        }
      }
      this.cartItems = newArr;
    }
  }
});
const _sfc_main$p = {
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: [String, Number],
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { emit }) {
    const props = __props;
    const counter = vue_cjs_prod.ref(0);
    counter.value = props.modelValue;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "flex justify-between items-center gap-[5px] h-[50px]" }, _attrs))}><button class="${serverRenderer.exports.ssrRenderClass([{
        "cursor-pointer hover:text-white hover:bg-orange": !__props.disabled
      }, "w-[54px] h-[54px] p-[12px] flex justify-center items-center text-grey-text transition-colors rounded-[4px] bg-grey-light"])}"${serverRenderer.exports.ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}><svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg></button><input${serverRenderer.exports.ssrRenderAttr("value", counter.value)} class="h-[60px] w-[60px] text-center focus:border-primary focus:border-[2px] outline-none text-secondary border-grey-light border-[2px] rounded-[4px]"${serverRenderer.exports.ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}><button class="${serverRenderer.exports.ssrRenderClass([{
        "cursor-pointer hover:bg-primary hover:text-white": !__props.disabled
      }, "w-[54px] h-[54px] p-[12px] flex justify-center items-center text-grey-text transition-colors rounded-[4px] bg-grey-light"])}"${serverRenderer.exports.ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></button></div>`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/AmountCounter.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const meta$9 = void 0;
const meta$8 = void 0;
const meta$7 = void 0;
const meta$6 = void 0;
const meta$5 = void 0;
const meta$4 = void 0;
const meta$3 = void 0;
const useMenuToggler = defineStore("menu", {
  state: () => {
    return {
      isExpandMenuOpen: false
    };
  },
  actions: {
    toggleMenu(value) {
      this.isExpandMenuOpen = value;
    }
  }
});
const meta$2 = void 0;
const meta$1 = void 0;
const deepmerge = (a, b) => {
  const result = __spreadValues({}, a);
  for (const key in b) {
    if (typeof b[key] === "object" && b[key] !== null) {
      result[key] = deepmerge(result[key] || {}, b[key]);
    } else {
      result[key] = b[key];
    }
  }
  return result;
};
const DEFAULT_STATE = { proxyCookies: true };
const useGqlState = (state, reset) => {
  var _a, _b;
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._gqlState) {
    nuxtApp._gqlState = vue_cjs_prod.ref(Object.assign({}, DEFAULT_STATE));
  }
  if (state) {
    if (state.options) {
      const optionKeys = Object.keys(state.options || {});
      for (const k of optionKeys) {
        if (!((_a = nuxtApp._gqlState.value.clients) == null ? void 0 : _a[k])) {
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
      nuxtApp._gqlState.value = deepmerge(nuxtApp._gqlState.value, state);
    }
    const clients = nuxtApp._gqlState.value.clients;
    if (clients) {
      for (const [k, v] of Object.entries(clients)) {
        if (reset) {
          v.options = {};
          continue;
        }
        if (!((_b = state == null ? void 0 : state.options) == null ? void 0 : _b[k])) {
          continue;
        }
        v.options = nuxtApp._gqlState.value.options[k];
      }
    }
  }
  return nuxtApp._gqlState;
};
const initClients = () => {
  var _a, _b, _c, _d, _e, _f;
  const state = useGqlState();
  const config = useRuntimeConfig();
  const { clients } = deepmerge({}, defu(config == null ? void 0 : config["graphql-client"], (_a = config == null ? void 0 : config.public) == null ? void 0 : _a["graphql-client"]));
  state.value.clients = ((_b = state.value) == null ? void 0 : _b.clients) || {};
  state.value.options = ((_c = state.value) == null ? void 0 : _c.options) || {};
  for (const [name, v] of Object.entries(clients)) {
    if ((_d = state.value) == null ? void 0 : _d.clients[name]) {
      continue;
    }
    if (!((_e = state.value) == null ? void 0 : _e.options[name])) {
      state.value.options[name] = {};
    }
    const c = new GraphQLClient(v.host, state.value.options[name]);
    state.value.clients[name] = c;
    if ((_f = v == null ? void 0 : v.token) == null ? void 0 : _f.value) {
      useGqlToken(v.token.value, { client: name });
    }
  }
};
const getClient = (client) => {
  var _a, _b, _c, _d, _e;
  const state = useGqlState();
  if (client && ((_b = (_a = state.value) == null ? void 0 : _a.clients) == null ? void 0 : _b[client])) {
    return client;
  }
  const { clients } = (_d = (_c = useRuntimeConfig()) == null ? void 0 : _c.public) == null ? void 0 : _d["graphql-client"];
  if (!state.value.clients || !state.value.options) {
    initClients();
  }
  if (!client && ((_e = Object.keys(clients)) == null ? void 0 : _e.length)) {
    const defaultClient = Object.entries(clients).find(([k, v]) => k === "default" || (v == null ? void 0 : v.default));
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
const DEFAULT_AUTH = { type: "Bearer", name: "Authorization" };
const useGqlToken = (token, opts) => {
  var _a, _b, _c, _d, _e, _f;
  if (!token) {
    return;
  }
  let { client, config } = opts || {};
  client = getClient(client);
  const clientConfig = (_d = (_c = (_b = (_a = useRuntimeConfig()) == null ? void 0 : _a.public) == null ? void 0 : _b["graphql-client"]) == null ? void 0 : _c.clients) == null ? void 0 : _d[client];
  config = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, DEFAULT_AUTH), ((_e = clientConfig == null ? void 0 : clientConfig.token) == null ? void 0 : _e.name) && { name: clientConfig.token.name }), ((_f = clientConfig == null ? void 0 : clientConfig.token) == null ? void 0 : _f.type) !== void 0 && { type: clientConfig.token.type }), config);
  useGqlState({
    options: {
      [client]: {
        headers: { [config.name || DEFAULT_AUTH.name]: `${config.type} ${token}`.trim() }
      }
    }
  });
};
const useGql = (client) => {
  var _a;
  const state = useGqlState();
  const gqlClient = useGqlClient(client);
  if ((_a = state.value) == null ? void 0 : _a.proxyCookies) {
    const { cookie } = useRequestHeaders(["cookie"]);
    if (cookie) {
      gqlClient.setHeader("cookie", cookie);
    }
  }
  const $gql = getSdk(gqlClient);
  return __spreadValues({}, $gql);
};
const CatalogMenuDocument = gql`
    query CatalogMenu {
  sections(filters: {showInNav: {eq: true}}) {
    data {
      id
      attributes {
        name
        navIcon {
          data {
            attributes {
              url
            }
          }
        }
        categories {
          data {
            id
            attributes {
              title
              name
              slug
              subcategories {
                data {
                  id
                  attributes {
                    title
                    name
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
const ProductByArticleDocument = gql`
    query ProductByArticle($article: String) {
  products(filters: {article: {eq: $article}}) {
    data {
      id
      attributes {
        title
        article
        price
        tags {
          data {
            attributes {
              name
            }
          }
        }
        colors {
          name
          hexColor
          disabled
        }
        section {
          data {
            id
            attributes {
              title
              slug
            }
          }
        }
        category {
          data {
            id
            attributes {
              title
              slug
            }
          }
        }
        subcategory {
          data {
            id
            attributes {
              title
              slug
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
const defaultWrapper = (action, _operationName, _operationType) => action();
function getSdk(client, withWrapper = defaultWrapper) {
  return {
    CatalogMenu(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(CatalogMenuDocument, variables, __spreadValues(__spreadValues({}, requestHeaders), wrappedRequestHeaders)), "CatalogMenu", "query");
    },
    ProductByArticle(variables, requestHeaders) {
      return withWrapper((wrappedRequestHeaders) => client.request(ProductByArticleDocument, variables, __spreadValues(__spreadValues({}, requestHeaders), wrappedRequestHeaders)), "ProductByArticle", "query");
    }
  };
}
const GqlCatalogMenu = (...params) => useGql()["CatalogMenu"](...params);
const GqlProductByArticle = (...params) => useGql()["ProductByArticle"](...params);
const _sfc_main$o = {
  name: "image-viewer",
  props: {
    modelValue: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const images = props.modelValue;
    const config = useRuntimeConfig();
    const getImageLink = (image) => {
      const link = image.attributes.url;
      return `${config.API_URL}${link}`;
    };
    const imagesWithImageLink = images.map((image) => __spreadValues({
      imageLink: getImageLink(image)
    }, image));
    const currentImage = vue_cjs_prod.ref({});
    const selectImage = (image) => {
      currentImage.value = image;
    };
    if (imagesWithImageLink && imagesWithImageLink.length) {
      selectImage(imagesWithImageLink[0]);
    }
    return { currentImage, selectImage, imagesWithImageLink };
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "w-[400px]" }, _attrs))}><div class="w-full h-[400px] bg-center bg-cover mb-[10px] rounded-[4px]" style="${serverRenderer.exports.ssrRenderStyle(`background-image: url('${$setup.currentImage.imageLink}')`)}"></div><div class="flex gap-[10px]"><!--[-->`);
  serverRenderer.exports.ssrRenderList($setup.imagesWithImageLink, (imageItem) => {
    _push(`<button class="${serverRenderer.exports.ssrRenderClass([{
      "border-[2px] border-primary": $setup.currentImage.id === imageItem.id
    }, "w-[86px] h-[86px] flex items-center justify-center rounded-[4px]"])}"><div class="w-[70px] h-[70px] bg-center bg-cover" style="${serverRenderer.exports.ssrRenderStyle(`background-image: url('${imageItem.imageLink}')`)}"> \u2013 </div></button>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/ImageViewer.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const ImageViewer = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$7]]);
const meta = void 0;
const routes = [
  {
    name: "address",
    path: "/address",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/address/index.vue",
    children: [],
    meta: meta$a,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return index$b;
    })
  },
  {
    name: "cart",
    path: "/cart",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/cart/index.vue",
    children: [],
    meta: meta$9,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return index$9;
    })
  },
  {
    name: "catalog-slug",
    path: "/catalog/:slug",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/catalog/[slug].vue",
    children: [],
    meta: meta$8,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return _slug_;
    })
  },
  {
    name: "catalog",
    path: "/catalog",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/catalog/index.vue",
    children: [],
    meta: meta$7,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return index$8;
    })
  },
  {
    name: "categories-slug-slug",
    path: "/categories/:slug/:slug",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/categories/[slug]/[slug]/index.vue",
    children: [],
    meta: meta$6,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return index$7;
    })
  },
  {
    name: "categories-slug",
    path: "/categories/:slug",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/categories/[slug]/index.vue",
    children: [],
    meta: meta$5,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return index$6;
    })
  },
  {
    name: "categories",
    path: "/categories",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/categories/index.vue",
    children: [],
    meta: meta$4,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return index$5;
    })
  },
  {
    name: "delivery",
    path: "/delivery",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/delivery/index.vue",
    children: [],
    meta: meta$3,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return index$4;
    })
  },
  {
    name: "index",
    path: "/",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/index.vue",
    children: [],
    meta: meta$2,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return index$2;
    })
  },
  {
    name: "payments",
    path: "/payments",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/payments/index.vue",
    children: [],
    meta: meta$1,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return index$1;
    })
  },
  {
    name: "products-article",
    path: "/products/:article",
    file: "/Users/andrewstt/Projects/personal/strapi/eccomerce-preview/ui/pages/products/[article].vue",
    children: [],
    meta,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return _article_$1;
    })
  }
];
const configRouterOptions = {};
const routerOptions = __spreadValues({}, configRouterOptions);
const globalMiddleware = [];
const namedMiddleware = {};
const router_8af68712 = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtNestedPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtChild", NuxtPage);
  const { baseURL: baseURL2 } = useRuntimeConfig().app;
  const routerHistory = vueRouter_cjs_prod.createMemoryHistory(baseURL2);
  const router = vueRouter_cjs_prod.createRouter(__spreadProps(__spreadValues({}, routerOptions), {
    history: routerHistory,
    routes
  }));
  nuxtApp.vueApp.use(router);
  const previousRoute = vue_cjs_prod.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = vue_cjs_prod.computed(() => router.currentRoute.value[key]);
  }
  const path = nuxtApp.ssrContext.url;
  const _activeRoute = vue_cjs_prod.shallowRef(router.resolve(path));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a, _b, _c, _d;
    if (((_b = (_a = to.matched[0]) == null ? void 0 : _a.components) == null ? void 0 : _b.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = vue_cjs_prod.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = vue_cjs_prod.reactive(route);
  nuxtApp._activeRoute = vue_cjs_prod.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  router.beforeEach(async (to, from) => {
    var _a;
    to.meta = vue_cjs_prod.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a = namedMiddleware[entry2]) == null ? void 0 : _a.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error = result || createError({
            statusMessage: `Route navigation aborted: ${nuxtApp.ssrContext.url}`
          });
          return callWithNuxt(nuxtApp, throwError, [error]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(() => {
    delete nuxtApp._processingMiddleware;
  });
  nuxtApp.hook("app:created", async () => {
    router.afterEach((to) => {
      if (to.matched.length === 0) {
        callWithNuxt(nuxtApp, throwError, [createError({
          statusCode: 404,
          statusMessage: `Page not found: ${to.fullPath}`
        })]);
      } else if (to.matched[0].name === "404" && nuxtApp.ssrContext) {
        nuxtApp.ssrContext.res.statusCode = 404;
      }
    });
    {
      router.afterEach(async (to) => {
        if (to.fullPath !== nuxtApp.ssrContext.url) {
          await navigateTo(to.fullPath);
        }
      });
    }
    try {
      if (true) {
        await router.push(nuxtApp.ssrContext.url);
      }
      await router.isReady();
    } catch (error) {
      callWithNuxt(nuxtApp, throwError, [error]);
    }
  });
  return { provide: { router } };
});
const PiniaNuxtPlugin = (context, inject2) => {
  const pinia = createPinia();
  {
    context.vueApp.use(pinia);
  }
  inject2("pinia", pinia);
  context.pinia = pinia;
  setActivePinia(pinia);
  pinia._p.push(({ store }) => {
    Object.defineProperty(store, "$nuxt", { value: context });
  });
  {
    {
      context.nuxtState.pinia = pinia.state.value;
    }
  }
};
const _plugins = [
  preload,
  componentsPlugin_31fe6802,
  vueuseHead_ca41ef0e,
  plugin_f8825b26,
  router_8af68712,
  PiniaNuxtPlugin
];
const _sfc_main$n = {
  __ssrInlineRender: true,
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
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-b11ad3a6><div class="fixed left-0 right-0 spotlight z-10" data-v-b11ad3a6></div><div class="max-w-520px text-center z-20" data-v-b11ad3a6><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-b11ad3a6>${__props.statusCode}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-b11ad3a6>${__props.description}</p><div class="w-full flex items-center justify-center" data-v-b11ad3a6>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(__props.backHome)}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(__props.backHome), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const Error404 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-b11ad3a6"]]);
const _sfc_main$m = {
  __ssrInlineRender: true,
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
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-18181656><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-18181656></div><div class="max-w-520px text-center" data-v-18181656><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-18181656>${__props.statusCode}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-18181656>${__props.description}</p></div></div>`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const Error500 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-18181656"]]);
const _sfc_main$k = {
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    var _a;
    const props = __props;
    const error = props.error;
    (error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = String(error.statusCode || 500);
    const is404 = statusCode === "404";
    const statusMessage = ((_a = error.statusMessage) != null ? _a : is404) ? "Page Not Found" : "Internal Server Error";
    const description = error.message || error.toString();
    const stack = void 0;
    const ErrorTemplate = is404 ? Error404 : Error500;
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ErrorTemplate), vue_cjs_prod.mergeProps({ statusCode: vue_cjs_prod.unref(statusCode), statusMessage: vue_cjs_prod.unref(statusMessage), description: vue_cjs_prod.unref(description), stack: vue_cjs_prod.unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = {
  __ssrInlineRender: true,
  setup(__props) {
    const nuxtApp = useNuxtApp();
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    vue_cjs_prod.onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, throwError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = vue_cjs_prod.resolveComponent("App");
      serverRenderer.exports.ssrRenderSuspense(_push, {
        default: () => {
          if (vue_cjs_prod.unref(error)) {
            _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(_sfc_main$k), { error: vue_cjs_prod.unref(error) }, null, _parent));
          } else {
            _push(serverRenderer.exports.ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0$1;
  const _component_NuxtPage = vue_cjs_prod.resolveComponent("NuxtPage");
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$6]]);
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = vue_cjs_prod.createApp(_sfc_main$j);
    vueApp.component("App", AppComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);
const _imports_0$1 = buildAssetsURL("header-logo.e9023532.svg");
const _sfc_main$h = {
  props: {
    title: {
      type: String,
      default: "\u041F\u0443\u043D\u043A\u0442 \u043C\u0435\u043D\u044E"
    },
    content: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(props) {
    const categories = vue_cjs_prod.computed(() => {
      return props.content.categories.data;
    });
    return { categories };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "mt-[60px] text-secondary" }, _attrs))}><div class="text-[36px] text-primary font-bold mb-[35px]">${serverRenderer.exports.ssrInterpolate($props.title)}</div><div class="subcategory"><ul class="flex gap-[60px]"><!--[-->`);
  serverRenderer.exports.ssrRenderList($setup.categories, (category) => {
    _push(`<li>`);
    if (category.attributes) {
      _push(`<!--[--><div class="text-[21px] hover:text-orange mb-[30px]">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
        to: {
          path: `/categories/${category.attributes.slug}`
        }
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(category.attributes.title)}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(category.attributes.title), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div><ul><!--[-->`);
      serverRenderer.exports.ssrRenderList(category.attributes.subcategories.data, (subcategory) => {
        _push(`<li class="hover:text-orange mb-[20px]">`);
        _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
          to: `/categories/${category.attributes.slug}/${subcategory.attributes.slug}`
        }, {
          default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.exports.ssrInterpolate(subcategory.attributes.title)}`);
            } else {
              return [
                vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(subcategory.attributes.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul><!--]-->`);
    } else {
      _push(`<!---->`);
    }
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExpandMenu/ExpandMenuContentItem.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$g = {
  props: {
    column: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    const config = useRuntimeConfig();
    const isColumn = vue_cjs_prod.ref(props.column);
    const tabSmall = vue_cjs_prod.ref(false);
    const toggleSize = (value) => {
      tabSmall.value = value;
    };
    const tabs = vue_cjs_prod.ref(slots.default()[0].children.map((tab) => tab.props.settings));
    const selectedTabID = vue_cjs_prod.ref(tabs.value[0].id);
    vue_cjs_prod.provide("selectedTabID", selectedTabID);
    const tabIcon = (icon) => {
      if (!icon || icon && !icon.data) {
        return "none";
      }
      const url = icon.data.attributes.url;
      if (!url) {
        return "none";
      }
      console.log(config.API_URL + url);
      return `${config.API_URL}${url}`;
    };
    return { selectedTabID, tabs, tabIcon, isColumn, tabSmall, toggleSize };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: ["tabs", { flex: $setup.isColumn }]
  }, _attrs))} data-v-f043090a><ul class="${serverRenderer.exports.ssrRenderClass([{
    "flex-col  min-w-[350px]": $setup.isColumn
  }, "tabs__header"])}" data-v-f043090a><!--[-->`);
  serverRenderer.exports.ssrRenderList($setup.tabs, (tab) => {
    _push(`<li class="tabs__header-item" data-v-f043090a><button class="${serverRenderer.exports.ssrRenderClass([{
      active: tab.id == $setup.selectedTabID
    }, "tabs__header-item__button"])}" data-v-f043090a>`);
    if (tab.attributes.navIcon) {
      _push(`<div class="icon mr-[20px] w-full max-w-[22px] h-[22px] bg-center bg-contain bg-no-repeat" style="${serverRenderer.exports.ssrRenderStyle({
        backgroundImage: `url(${$setup.tabIcon(tab.attributes.navIcon)})`
      })}" data-v-f043090a></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="text text-left grow mr-[10px]" data-v-f043090a>${serverRenderer.exports.ssrInterpolate(tab.attributes.name)}</div><svg class="${serverRenderer.exports.ssrRenderClass([{ "text-orange": tab.id == $setup.selectedTabID }, "arrow w-4 h-4 text-grey-text"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-f043090a><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-f043090a></path></svg></button></li>`);
  });
  _push(`<!--]--></ul><div class="tabs-content" data-v-f043090a><div class="divider mr-[60px] bg-grey-light w-[2px] rounded shadow-divider h-full min-h-screen" data-v-f043090a></div>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TabsWrapper.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const TabsWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-f043090a"]]);
const _sfc_main$f = {
  props: {
    settings: {
      type: Object,
      default: () => {
      }
    }
  },
  setup() {
    const selectedTabID = vue_cjs_prod.inject("selectedTabID");
    return {
      selectedTabID
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "flex" }, _attrs))} data-v-f23fe5bc><div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: "left top absolute",
    style: $setup.selectedTabID == $props.settings.id ? null : { display: "none" }
  }, _attrs))} data-v-f23fe5bc>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Tab.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Tab = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-f23fe5bc"]]);
const _sfc_main$e = {
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { data, error } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useAsyncData(`catalog-menu`, () => GqlCatalogMenu())), __temp = await __temp, __restore(), __temp);
    const menu = data;
    const isExpandMenuOpen = vue_cjs_prod.computed(() => {
      return props.show;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ExpandMenuContentItem = __nuxt_component_0;
      if (vue_cjs_prod.unref(isExpandMenuOpen)) {
        _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
          class: ["expand-menu", { hidden: !vue_cjs_prod.unref(isExpandMenuOpen) }]
        }, _attrs))} data-v-d161511e><div class="max-w-screen-xl w-full mx-auto flex items-center" data-v-d161511e>`);
        if (vue_cjs_prod.unref(menu).sections) {
          _push(serverRenderer.exports.ssrRenderComponent(TabsWrapper, { column: "" }, {
            default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(menu).sections.data, (section) => {
                  _push2(serverRenderer.exports.ssrRenderComponent(Tab, {
                    settings: section,
                    hello: true
                  }, {
                    default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(serverRenderer.exports.ssrRenderComponent(_component_ExpandMenuContentItem, {
                          title: section.attributes.name,
                          content: section.attributes
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          vue_cjs_prod.createVNode(_component_ExpandMenuContentItem, {
                            title: section.attributes.name,
                            content: section.attributes
                          }, null, 8, ["title", "content"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(menu).sections.data, (section) => {
                    return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(Tab, {
                      settings: section,
                      hello: true
                    }, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode(_component_ExpandMenuContentItem, {
                          title: section.attributes.name,
                          content: section.attributes
                        }, null, 8, ["title", "content"])
                      ]),
                      _: 2
                    }, 1032, ["settings"]);
                  }), 256))
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExpandMenu/ExpandMenu.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const ExpandMenu = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-d161511e"]]);
const _sfc_main$d = {
  __ssrInlineRender: true,
  setup(__props) {
    const cartItemsCounter = vue_cjs_prod.ref(0);
    const cart = useCart();
    const cartItems = vue_cjs_prod.computed(() => {
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
    const menuStore = useMenuToggler();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<header${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "bg-white w-full pt-[10px] pb-[20px] fixed z-20 left-0 right-0 top-0 border-b-[2px] border-grey font-medium" }, _attrs))}><div class="max-w-screen-xl w-full mx-auto flex justify-between items-center">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${serverRenderer.exports.ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId}>`);
          } else {
            return [
              vue_cjs_prod.createVNode("img", {
                src: _imports_0$1,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="navigation flex items-center"><button class="h-[50px] px-[24px] mr-[16px] rounded-[4px] flex justify-center items-center text-white bg-primary"><span class="mr-[7px]">\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0442\u043E\u0432\u0430\u0440\u043E\u0432</span><span><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg></span></button><div class="h-[50px] w-[500px] flex justify-between items-center border-primary border-[2px] rounded-[4px]"><input type="text" class="w-[360px] ml-[21px] rounded-[4px] outline-none placeholder:text-grey-text" placeholder="\u041F\u043E\u0438\u0441\u043A \u0442\u043E\u0432\u0430\u0440\u043E\u0432"><button class="m-[-1px] h-[50px] px-[27px] rounded-r-[4px] flex justify-center items-center text-white bg-primary"> \u041D\u0430\u0439\u0442\u0438 </button></div></div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/cart",
        class: "cart h-[50px] px-[18px] bg-white hover:bg-grey-light focus:bg-grey-text text-secondary flex flex-col justify-center items-center rounded-[4px] outline-none"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative"${_scopeId}><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"${_scopeId}></path></svg>`);
            if (cartItemsCounter.value > 0) {
              _push2(`<span class="absolute top-[-5px] right-[-10px] text-white bg-primary w-[20px] h-[20px] text-[13px] flex items-center justify-center rounded-full"${_scopeId}>${serverRenderer.exports.ssrInterpolate(cartItemsCounter.value)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><span class="mt-[-4px]"${_scopeId}>\u041A\u043E\u0440\u0437\u0438\u043D\u0430</span>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "relative" }, [
                (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                  class: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  vue_cjs_prod.createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  })
                ])),
                cartItemsCounter.value > 0 ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("span", {
                  key: 0,
                  class: "absolute top-[-5px] right-[-10px] text-white bg-primary w-[20px] h-[20px] text-[13px] flex items-center justify-center rounded-full"
                }, vue_cjs_prod.toDisplayString(cartItemsCounter.value), 1)) : vue_cjs_prod.createCommentVNode("", true)
              ]),
              vue_cjs_prod.createVNode("span", { class: "mt-[-4px]" }, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(ExpandMenu, {
        show: vue_cjs_prod.unref(menuStore).$state.isExpandMenuOpen
      }, null, _parent));
      _push(`</div></header>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrometeiHeader.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _imports_0 = buildAssetsURL("footer-logo.53d32569.svg");
const _sfc_main$c = {
  __ssrInlineRender: true,
  setup(__props) {
    const footerData = {
      phones: [
        {
          call: "799910020030",
          title: "+7 (999) 100 200 30"
        },
        {
          call: "792122814880",
          title: "+7 (921) 228 148 80"
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<footer${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "bg-secondary w-full pt-[40px] pb-[50px]" }, _attrs))}><div class="text-white max-w-screen-xl w-full mx-auto flex justify-between items-start">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "footer-logo"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${serverRenderer.exports.ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}>`);
          } else {
            return [
              vue_cjs_prod.createVNode("img", {
                src: _imports_0,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="footer-columns flex items-start"><div class="footer-column mr-[120px] last:mr-0"><h6 class="text-primary text-[21px]">\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F</h6><ul class="mt-[20px]"><li class="hover:text-orange mb-[20px] last:mb-0">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: "/payments" }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0421\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u043F\u043B\u0430\u0442\u044B`);
          } else {
            return [
              vue_cjs_prod.createTextVNode("\u0421\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u043F\u043B\u0430\u0442\u044B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="hover:text-orange mb-[20px] last:mb-0">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: "/delivery" }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430`);
          } else {
            return [
              vue_cjs_prod.createTextVNode("\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="footer-column mr-[120px] last:mr-0"><h6 class="text-primary text-[21px]">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</h6><ul class="mt-[20px]"><!--[-->`);
      serverRenderer.exports.ssrRenderList(footerData.phones, (phone, index2) => {
        _push(`<li class="hover:text-orange mb-[20px] last:mb-0"><a${serverRenderer.exports.ssrRenderAttr("href", `tel:${phone.call}`)}>${serverRenderer.exports.ssrInterpolate(phone.title)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="footer-column mr-[120px] last:mr-0"><h6 class="text-primary text-[21px]">\u0410\u0434\u0440\u0435\u0441</h6><ul class="mt-[20px]"><li class="hover:text-orange mb-[20px] last:mb-0">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: "/address" }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0421\u0435\u0432\u0435\u0440\u043E\u0434\u0432\u0438\u043D\u0441\u043A,<br${_scopeId}>\u041F\u0440\u043E\u0444\u0441\u043E\u044E\u0437\u043D\u0430\u044F 7\u0430`);
          } else {
            return [
              vue_cjs_prod.createTextVNode("\u0421\u0435\u0432\u0435\u0440\u043E\u0434\u0432\u0438\u043D\u0441\u043A,"),
              vue_cjs_prod.createVNode("br"),
              vue_cjs_prod.createTextVNode("\u041F\u0440\u043E\u0444\u0441\u043E\u044E\u0437\u043D\u0430\u044F 7\u0430")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="footer-column mr-[120px] last:mr-0"><h6 class="text-primary text-[21px]">\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0438</h6><ul class="mt-[20px] flex justify-start items-center"><li class="mr-[27px] last:mr-0">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="url(#paint0_linear_1507_24)"${_scopeId}></path><path d="M10.1538 16.0967L11.9334 21.0224C11.9334 21.0224 12.1559 21.4833 12.3942 21.4833C12.6324 21.4833 16.1761 17.7968 16.1761 17.7968L20.1167 10.1855L10.2173 14.8252L10.1538 16.0967Z" fill="#C8DAEA"${_scopeId}></path><path d="M12.5131 17.3594L12.1715 20.9901C12.1715 20.9901 12.0285 22.1026 13.1408 20.9901C14.253 19.8776 15.3176 19.0197 15.3176 19.0197" fill="#A9C6D8"${_scopeId}></path><path d="M10.1855 16.2724L6.52477 15.0796C6.52477 15.0796 6.08727 14.9021 6.22814 14.4996C6.25714 14.4166 6.31564 14.346 6.49064 14.2246C7.30177 13.6592 21.5039 8.55461 21.5039 8.55461C21.5039 8.55461 21.9049 8.41949 22.1414 8.50936C22.1999 8.52747 22.2525 8.5608 22.2939 8.60593C22.3353 8.65107 22.364 8.70639 22.377 8.76624C22.4026 8.87194 22.4133 8.9807 22.4088 9.08936C22.4076 9.18336 22.3963 9.27049 22.3876 9.40711C22.3011 10.8027 19.7126 21.2187 19.7126 21.2187C19.7126 21.2187 19.5578 21.8282 19.0029 21.8491C18.8665 21.8535 18.7307 21.8304 18.6034 21.7812C18.4762 21.732 18.3602 21.6576 18.2623 21.5626C17.1734 20.626 13.4099 18.0967 12.5783 17.5405C12.5595 17.5277 12.5437 17.511 12.5319 17.4916C12.5202 17.4722 12.5127 17.4505 12.51 17.428C12.4984 17.3694 12.5621 17.2967 12.5621 17.2967C12.5621 17.2967 19.1154 11.4717 19.2898 10.8602C19.3033 10.8129 19.2523 10.7895 19.1838 10.8102C18.7485 10.9704 11.2033 15.7352 10.3705 16.2611C10.3106 16.2792 10.2472 16.2831 10.1855 16.2724V16.2724Z" fill="white"${_scopeId}></path><defs${_scopeId}><linearGradient id="paint0_linear_1507_24" x1="15" y1="30" x2="15" y2="0" gradientUnits="userSpaceOnUse"${_scopeId}><stop stop-color="#1D93D2"${_scopeId}></stop><stop offset="1" stop-color="#38B0E3"${_scopeId}></stop></linearGradient></defs></svg>`);
          } else {
            return [
              (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                width: "30",
                height: "30",
                viewBox: "0 0 30 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                vue_cjs_prod.createVNode("path", {
                  d: "M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z",
                  fill: "url(#paint0_linear_1507_24)"
                }),
                vue_cjs_prod.createVNode("path", {
                  d: "M10.1538 16.0967L11.9334 21.0224C11.9334 21.0224 12.1559 21.4833 12.3942 21.4833C12.6324 21.4833 16.1761 17.7968 16.1761 17.7968L20.1167 10.1855L10.2173 14.8252L10.1538 16.0967Z",
                  fill: "#C8DAEA"
                }),
                vue_cjs_prod.createVNode("path", {
                  d: "M12.5131 17.3594L12.1715 20.9901C12.1715 20.9901 12.0285 22.1026 13.1408 20.9901C14.253 19.8776 15.3176 19.0197 15.3176 19.0197",
                  fill: "#A9C6D8"
                }),
                vue_cjs_prod.createVNode("path", {
                  d: "M10.1855 16.2724L6.52477 15.0796C6.52477 15.0796 6.08727 14.9021 6.22814 14.4996C6.25714 14.4166 6.31564 14.346 6.49064 14.2246C7.30177 13.6592 21.5039 8.55461 21.5039 8.55461C21.5039 8.55461 21.9049 8.41949 22.1414 8.50936C22.1999 8.52747 22.2525 8.5608 22.2939 8.60593C22.3353 8.65107 22.364 8.70639 22.377 8.76624C22.4026 8.87194 22.4133 8.9807 22.4088 9.08936C22.4076 9.18336 22.3963 9.27049 22.3876 9.40711C22.3011 10.8027 19.7126 21.2187 19.7126 21.2187C19.7126 21.2187 19.5578 21.8282 19.0029 21.8491C18.8665 21.8535 18.7307 21.8304 18.6034 21.7812C18.4762 21.732 18.3602 21.6576 18.2623 21.5626C17.1734 20.626 13.4099 18.0967 12.5783 17.5405C12.5595 17.5277 12.5437 17.511 12.5319 17.4916C12.5202 17.4722 12.5127 17.4505 12.51 17.428C12.4984 17.3694 12.5621 17.2967 12.5621 17.2967C12.5621 17.2967 19.1154 11.4717 19.2898 10.8602C19.3033 10.8129 19.2523 10.7895 19.1838 10.8102C18.7485 10.9704 11.2033 15.7352 10.3705 16.2611C10.3106 16.2792 10.2472 16.2831 10.1855 16.2724V16.2724Z",
                  fill: "white"
                }),
                vue_cjs_prod.createVNode("defs", null, [
                  vue_cjs_prod.createVNode("linearGradient", {
                    id: "paint0_linear_1507_24",
                    x1: "15",
                    y1: "30",
                    x2: "15",
                    y2: "0",
                    gradientUnits: "userSpaceOnUse"
                  }, [
                    vue_cjs_prod.createVNode("stop", { "stop-color": "#1D93D2" }),
                    vue_cjs_prod.createVNode("stop", {
                      offset: "1",
                      "stop-color": "#38B0E3"
                    })
                  ])
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="mr-[27px] last:mr-0">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M0 30.1346L2.1192 22.3969C0.81215 20.1325 0.124495 17.5635 0.125333 14.9317C0.128683 6.69834 6.82899 0 15.0627 0C19.0582 0.00194894 22.8084 1.55688 25.629 4.37939C28.4487 7.20191 30.0014 10.9535 30 14.9438C29.9964 23.1766 23.2949 29.8761 15.0627 29.8761C15.0621 29.8761 15.0633 29.8761 15.0627 29.8761H15.0562C12.5566 29.875 10.1002 29.248 7.91838 28.0582L0 30.1346Z" fill="white"${_scopeId}></path><path d="M15.0675 2.52246C8.21924 2.52246 2.64998 8.08969 2.64746 14.9327C2.64645 17.2776 3.3027 19.5616 4.5454 21.5378L4.84083 22.0073L3.58631 26.587L8.28526 25.3549L8.739 25.6238C10.6447 26.7549 12.8297 27.353 15.058 27.3541H15.0627C21.9057 27.3541 27.4749 21.7863 27.4777 14.9427C27.479 11.6264 26.1889 8.50793 23.8448 6.16213C21.5007 3.81633 18.3838 2.52386 15.0675 2.52246Z" fill="url(#paint0_linear_1507_23)"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.3295 8.68869C11.0497 8.06734 10.7554 8.05475 10.4896 8.04384C10.272 8.0346 10.023 8.03516 9.77426 8.03516C9.52527 8.03516 9.12101 8.1286 8.77915 8.50209C8.437 8.87557 7.47266 9.77836 7.47266 11.6147C7.47266 13.4511 8.8102 15.2253 8.99652 15.4746C9.18312 15.7236 11.5784 19.6123 15.3723 21.1082C18.5249 22.3514 19.1664 22.1041 19.851 22.042C20.5353 21.9799 22.0592 21.1392 22.37 20.2678C22.6811 19.3963 22.6811 18.6496 22.5879 18.4935C22.4945 18.3377 22.2458 18.2445 21.8723 18.0579C21.4991 17.8713 19.6641 16.9682 19.322 16.8437C18.9798 16.7193 18.7311 16.6571 18.4821 17.0306C18.2334 17.4041 17.5186 18.2445 17.3007 18.4935C17.083 18.7428 16.8654 18.7738 16.4919 18.5872C16.1187 18.4001 14.9166 18.0064 13.4906 16.7349C12.3811 15.7457 11.6322 14.524 11.4142 14.1505C11.1966 13.777 11.391 13.575 11.5782 13.389C11.7457 13.2217 11.9514 12.9531 12.1382 12.7352C12.3243 12.5172 12.3867 12.3617 12.5109 12.113C12.6354 11.8637 12.5733 11.6458 12.4798 11.4592C12.3867 11.2726 11.6613 9.4267 11.3295 8.68869" fill="white"${_scopeId}></path><defs${_scopeId}><linearGradient id="paint0_linear_1507_23" x1="14.8098" y1="4.01263" x2="14.9358" y2="25.2327" gradientUnits="userSpaceOnUse"${_scopeId}><stop stop-color="#57D163"${_scopeId}></stop><stop offset="1" stop-color="#23B33A"${_scopeId}></stop></linearGradient></defs></svg>`);
          } else {
            return [
              (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                width: "30",
                height: "31",
                viewBox: "0 0 30 31",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                vue_cjs_prod.createVNode("path", {
                  d: "M0 30.1346L2.1192 22.3969C0.81215 20.1325 0.124495 17.5635 0.125333 14.9317C0.128683 6.69834 6.82899 0 15.0627 0C19.0582 0.00194894 22.8084 1.55688 25.629 4.37939C28.4487 7.20191 30.0014 10.9535 30 14.9438C29.9964 23.1766 23.2949 29.8761 15.0627 29.8761C15.0621 29.8761 15.0633 29.8761 15.0627 29.8761H15.0562C12.5566 29.875 10.1002 29.248 7.91838 28.0582L0 30.1346Z",
                  fill: "white"
                }),
                vue_cjs_prod.createVNode("path", {
                  d: "M15.0675 2.52246C8.21924 2.52246 2.64998 8.08969 2.64746 14.9327C2.64645 17.2776 3.3027 19.5616 4.5454 21.5378L4.84083 22.0073L3.58631 26.587L8.28526 25.3549L8.739 25.6238C10.6447 26.7549 12.8297 27.353 15.058 27.3541H15.0627C21.9057 27.3541 27.4749 21.7863 27.4777 14.9427C27.479 11.6264 26.1889 8.50793 23.8448 6.16213C21.5007 3.81633 18.3838 2.52386 15.0675 2.52246Z",
                  fill: "url(#paint0_linear_1507_23)"
                }),
                vue_cjs_prod.createVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M11.3295 8.68869C11.0497 8.06734 10.7554 8.05475 10.4896 8.04384C10.272 8.0346 10.023 8.03516 9.77426 8.03516C9.52527 8.03516 9.12101 8.1286 8.77915 8.50209C8.437 8.87557 7.47266 9.77836 7.47266 11.6147C7.47266 13.4511 8.8102 15.2253 8.99652 15.4746C9.18312 15.7236 11.5784 19.6123 15.3723 21.1082C18.5249 22.3514 19.1664 22.1041 19.851 22.042C20.5353 21.9799 22.0592 21.1392 22.37 20.2678C22.6811 19.3963 22.6811 18.6496 22.5879 18.4935C22.4945 18.3377 22.2458 18.2445 21.8723 18.0579C21.4991 17.8713 19.6641 16.9682 19.322 16.8437C18.9798 16.7193 18.7311 16.6571 18.4821 17.0306C18.2334 17.4041 17.5186 18.2445 17.3007 18.4935C17.083 18.7428 16.8654 18.7738 16.4919 18.5872C16.1187 18.4001 14.9166 18.0064 13.4906 16.7349C12.3811 15.7457 11.6322 14.524 11.4142 14.1505C11.1966 13.777 11.391 13.575 11.5782 13.389C11.7457 13.2217 11.9514 12.9531 12.1382 12.7352C12.3243 12.5172 12.3867 12.3617 12.5109 12.113C12.6354 11.8637 12.5733 11.6458 12.4798 11.4592C12.3867 11.2726 11.6613 9.4267 11.3295 8.68869",
                  fill: "white"
                }),
                vue_cjs_prod.createVNode("defs", null, [
                  vue_cjs_prod.createVNode("linearGradient", {
                    id: "paint0_linear_1507_23",
                    x1: "14.8098",
                    y1: "4.01263",
                    x2: "14.9358",
                    y2: "25.2327",
                    gradientUnits: "userSpaceOnUse"
                  }, [
                    vue_cjs_prod.createVNode("stop", { "stop-color": "#57D163" }),
                    vue_cjs_prod.createVNode("stop", {
                      offset: "1",
                      "stop-color": "#23B33A"
                    })
                  ])
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="mr-[27px] last:mr-0">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4 0H19.6C28 0 30 2 30 10.4V19.6C30 28 28 30 19.6 30H10.4C2 30 0 28 0 19.6V10.4C0 2 2 0 10.4 0Z" fill="#2787F5"${_scopeId}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.5678 10.3353C24.7068 9.87184 24.5678 9.53125 23.9063 9.53125H21.7188C21.1625 9.53125 20.9061 9.82547 20.7671 10.1499C20.7671 10.1499 19.6546 12.8614 18.0787 14.6227C17.5689 15.1325 17.3371 15.2947 17.059 15.2947C16.92 15.2947 16.7187 15.1325 16.7187 14.6691V10.3353C16.7187 9.77914 16.5573 9.53125 16.0938 9.53125H12.6563C12.3087 9.53125 12.0996 9.7894 12.0996 10.0341C12.0996 10.5613 12.8875 10.6829 12.9688 12.1662V15.3875C12.9688 16.0937 12.8412 16.2218 12.5631 16.2218C11.8215 16.2218 10.0177 13.4982 8.94778 10.3817C8.73812 9.77594 8.52782 9.53125 7.96876 9.53125H5.78126C5.15626 9.53125 5.03125 9.82547 5.03125 10.1499C5.03125 10.7293 5.77286 13.603 8.48431 17.4037C10.2919 19.9993 12.8388 21.4062 15.1563 21.4062C16.5467 21.4062 16.7188 21.0937 16.7188 20.5555V18.5938C16.7188 17.9688 16.8505 17.844 17.2908 17.844C17.6152 17.844 18.1715 18.0062 19.4693 19.2577C20.9525 20.7409 21.197 21.4062 22.0313 21.4062H24.2188C24.8438 21.4062 25.1563 21.0938 24.976 20.477C24.7787 19.8624 24.0706 18.9706 23.1309 17.9135C22.621 17.311 21.8563 16.6621 21.6245 16.3376C21.3001 15.9205 21.3928 15.7351 21.6245 15.3643C21.6245 15.3643 24.2897 11.6099 24.5678 10.3353V10.3353Z" fill="white"${_scopeId}></path></svg>`);
          } else {
            return [
              (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                width: "30",
                height: "30",
                viewBox: "0 0 30 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                vue_cjs_prod.createVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M10.4 0H19.6C28 0 30 2 30 10.4V19.6C30 28 28 30 19.6 30H10.4C2 30 0 28 0 19.6V10.4C0 2 2 0 10.4 0Z",
                  fill: "#2787F5"
                }),
                vue_cjs_prod.createVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M24.5678 10.3353C24.7068 9.87184 24.5678 9.53125 23.9063 9.53125H21.7188C21.1625 9.53125 20.9061 9.82547 20.7671 10.1499C20.7671 10.1499 19.6546 12.8614 18.0787 14.6227C17.5689 15.1325 17.3371 15.2947 17.059 15.2947C16.92 15.2947 16.7187 15.1325 16.7187 14.6691V10.3353C16.7187 9.77914 16.5573 9.53125 16.0938 9.53125H12.6563C12.3087 9.53125 12.0996 9.7894 12.0996 10.0341C12.0996 10.5613 12.8875 10.6829 12.9688 12.1662V15.3875C12.9688 16.0937 12.8412 16.2218 12.5631 16.2218C11.8215 16.2218 10.0177 13.4982 8.94778 10.3817C8.73812 9.77594 8.52782 9.53125 7.96876 9.53125H5.78126C5.15626 9.53125 5.03125 9.82547 5.03125 10.1499C5.03125 10.7293 5.77286 13.603 8.48431 17.4037C10.2919 19.9993 12.8388 21.4062 15.1563 21.4062C16.5467 21.4062 16.7188 21.0937 16.7188 20.5555V18.5938C16.7188 17.9688 16.8505 17.844 17.2908 17.844C17.6152 17.844 18.1715 18.0062 19.4693 19.2577C20.9525 20.7409 21.197 21.4062 22.0313 21.4062H24.2188C24.8438 21.4062 25.1563 21.0938 24.976 20.477C24.7787 19.8624 24.0706 18.9706 23.1309 17.9135C22.621 17.311 21.8563 16.6621 21.6245 16.3376C21.3001 15.9205 21.3928 15.7351 21.6245 15.3643C21.6245 15.3643 24.2897 11.6099 24.5678 10.3353V10.3353Z",
                  fill: "white"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrometeiFooter.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __ssrInlineRender: true,
  setup(__props) {
    const cookieCartData = useCookie("cart");
    const cart = useCart();
    cart.$onAction(({ after, store, name }) => {
      after(() => {
        if (name !== "initCart") {
          cookieCartData.value = store.items;
        }
      });
    });
    if (cookieCartData.value && cookieCartData.value.length && !cart.items.length) {
      cart.initCart(cookieCartData.value);
    }
    const route = useRoute();
    const menuStore = useMenuToggler();
    const closeMenu = () => {
      menuStore.toggleMenu(false);
    };
    vue_cjs_prod.watch(route, () => {
      closeMenu();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "flex flex-col h-screen" }, _attrs))}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$d, null, null, _parent));
      serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(serverRenderer.exports.ssrRenderComponent(_sfc_main$c, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/shop.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const shop = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0$1;
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, vue_cjs_prod.mergeProps({ name: "shop" }, _attrs), {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex-grow"${_scopeId}><main class="mt-[135px] mb-[40px] flex-grow"${_scopeId}>address</main></div>`);
      } else {
        return [
          vue_cjs_prod.createVNode("div", { class: "flex-grow" }, [
            vue_cjs_prod.createVNode("main", { class: "mt-[135px] mb-[40px] flex-grow" }, "address")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/address/index.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const index$a = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$2]]);
const index$b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  __ssrInlineRender: true,
  setup(__props) {
    const cart = useCart();
    const cartItems = vue_cjs_prod.computed(() => {
      return cart.items;
    });
    const updateCartItemAmount = (item) => {
      cart.updateCartItem(item);
    };
    const deleteItem = (item) => {
      cart.removeFromCart(item);
    };
    const config = useRuntimeConfig();
    const getImageLink = (imageUrl) => {
      return `${config.API_URL}${imageUrl}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_1;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, vue_cjs_prod.mergeProps({ name: "shop" }, _attrs), {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-grow"${_scopeId}><main class="mt-[102px] mb-[40px] flex-grow"${_scopeId}><div class="max-w-screen-xl w-full mx-auto"${_scopeId}><div class="page-header flex items-center"${_scopeId}><div class="flex items-center"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"${_scopeId2}></path></svg><span class="ml-[5px]"${_scopeId2}>\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</span>`);
                } else {
                  return [
                    (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                      class: "w-6 h-6",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      vue_cjs_prod.createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      })
                    ])),
                    vue_cjs_prod.createVNode("span", { class: "ml-[5px]" }, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="page-header mb-[20px] flex items-center"${_scopeId}><h1 class="flex-grow text-primary text-[36px] font-bold"${_scopeId}> \u041A\u043E\u0440\u0437\u0438\u043D\u0430 </h1></div><div class="flex gap-[40px]"${_scopeId}><div class="flex-1"${_scopeId}><ul${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(cartItems), (item) => {
              _push2(`<li class="flex items-center justify-between rounded-[4px] border-[2px] border-grey-text mb-[20px] p-[50px]"${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
                to: `/products/${item.article}`,
                class: "breadcrumb flex items-start"
              }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="image w-[120px] h-[120px] bg-center bg-cover bg-no-repeat mr-[40px]" style="${serverRenderer.exports.ssrRenderStyle(`background-image: url('${getImageLink(item.imageUrl)}')`)}"${_scopeId2}></div><div class="flex flex-col max-w-[180px]"${_scopeId2}><span class="text-[16px] text-grey-text"${_scopeId2}> \u0410\u0440\u0442\u0438\u043A\u0443\u043B ${serverRenderer.exports.ssrInterpolate(item.article)}</span><span class="text-[21px] text-secondary leading-[25px]"${_scopeId2}>${serverRenderer.exports.ssrInterpolate(item.title)}</span><span${_scopeId2}>${serverRenderer.exports.ssrInterpolate(item.color)}</span></div>`);
                  } else {
                    return [
                      vue_cjs_prod.createVNode("div", {
                        class: "image w-[120px] h-[120px] bg-center bg-cover bg-no-repeat mr-[40px]",
                        style: `background-image: url('${getImageLink(item.imageUrl)}')`
                      }, null, 4),
                      vue_cjs_prod.createVNode("div", { class: "flex flex-col max-w-[180px]" }, [
                        vue_cjs_prod.createVNode("span", { class: "text-[16px] text-grey-text" }, " \u0410\u0440\u0442\u0438\u043A\u0443\u043B " + vue_cjs_prod.toDisplayString(item.article), 1),
                        vue_cjs_prod.createVNode("span", { class: "text-[21px] text-secondary leading-[25px]" }, vue_cjs_prod.toDisplayString(item.title), 1),
                        vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(item.color), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<div class="ml-[40px] flex flex-1 justify-between items-center"${_scopeId}><div class="relative"${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_sfc_main$p, {
                modelValue: item.amount,
                "onUpdate:modelValue": ($event) => item.amount = $event
              }, null, _parent2, _scopeId));
              _push2(`<span class="absolute bottom-[calc(-100%+5px)] left-0 text-[21px] text-grey-text font-medium"${_scopeId}>${serverRenderer.exports.ssrInterpolate(item.price)} \u20BD/ \u0448\u0442</span></div><div class="text-[21px] text-secondary font-medium"${_scopeId}>${serverRenderer.exports.ssrInterpolate(item.price)} \u20BD </div><button class="text-secondary hover:text-orange hover:bg-grey-light rounded-[4px] p-[5px] h-[40px] w-[40px] transition-colors"${_scopeId}><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"${_scopeId}></path></svg></button></div></li>`);
            });
            _push2(`<!--]--></ul></div><div class="w-[300px] relative"${_scopeId}><div class="left-0 top-0 sidebar"${_scopeId}>total</div></div></div></div></main></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "flex-grow" }, [
                vue_cjs_prod.createVNode("main", { class: "mt-[102px] mb-[40px] flex-grow" }, [
                  vue_cjs_prod.createVNode("div", { class: "max-w-screen-xl w-full mx-auto" }, [
                    vue_cjs_prod.createVNode("div", { class: "page-header flex items-center" }, [
                      vue_cjs_prod.createVNode("div", { class: "flex items-center" }, [
                        vue_cjs_prod.createVNode(_component_NuxtLink, {
                          to: "/",
                          class: "breadcrumb flex justify-center items-center text-[21px] text-grey-text hover:bg-grey-light hover:text-orange p-[5px] rounded-[4px]"
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                              class: "w-6 h-6",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              vue_cjs_prod.createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                              })
                            ])),
                            vue_cjs_prod.createVNode("span", { class: "ml-[5px]" }, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    vue_cjs_prod.createVNode("div", { class: "page-header mb-[20px] flex items-center" }, [
                      vue_cjs_prod.createVNode("h1", { class: "flex-grow text-primary text-[36px] font-bold" }, " \u041A\u043E\u0440\u0437\u0438\u043D\u0430 ")
                    ]),
                    vue_cjs_prod.createVNode("div", { class: "flex gap-[40px]" }, [
                      vue_cjs_prod.createVNode("div", { class: "flex-1" }, [
                        vue_cjs_prod.createVNode("ul", null, [
                          (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(cartItems), (item) => {
                            return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("li", { class: "flex items-center justify-between rounded-[4px] border-[2px] border-grey-text mb-[20px] p-[50px]" }, [
                              vue_cjs_prod.createVNode(_component_NuxtLink, {
                                to: `/products/${item.article}`,
                                class: "breadcrumb flex items-start"
                              }, {
                                default: vue_cjs_prod.withCtx(() => [
                                  vue_cjs_prod.createVNode("div", {
                                    class: "image w-[120px] h-[120px] bg-center bg-cover bg-no-repeat mr-[40px]",
                                    style: `background-image: url('${getImageLink(item.imageUrl)}')`
                                  }, null, 4),
                                  vue_cjs_prod.createVNode("div", { class: "flex flex-col max-w-[180px]" }, [
                                    vue_cjs_prod.createVNode("span", { class: "text-[16px] text-grey-text" }, " \u0410\u0440\u0442\u0438\u043A\u0443\u043B " + vue_cjs_prod.toDisplayString(item.article), 1),
                                    vue_cjs_prod.createVNode("span", { class: "text-[21px] text-secondary leading-[25px]" }, vue_cjs_prod.toDisplayString(item.title), 1),
                                    vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(item.color), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["to"]),
                              vue_cjs_prod.createVNode("div", { class: "ml-[40px] flex flex-1 justify-between items-center" }, [
                                vue_cjs_prod.createVNode("div", { class: "relative" }, [
                                  vue_cjs_prod.createVNode(_sfc_main$p, {
                                    modelValue: item.amount,
                                    "onUpdate:modelValue": [($event) => item.amount = $event, ($event) => updateCartItemAmount(item)]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  vue_cjs_prod.createVNode("span", { class: "absolute bottom-[calc(-100%+5px)] left-0 text-[21px] text-grey-text font-medium" }, vue_cjs_prod.toDisplayString(item.price) + " \u20BD/ \u0448\u0442", 1)
                                ]),
                                vue_cjs_prod.createVNode("div", { class: "text-[21px] text-secondary font-medium" }, vue_cjs_prod.toDisplayString(item.price) + " \u20BD ", 1),
                                vue_cjs_prod.createVNode("button", {
                                  class: "text-secondary hover:text-orange hover:bg-grey-light rounded-[4px] p-[5px] h-[40px] w-[40px] transition-colors",
                                  onClick: ($event) => deleteItem(item)
                                }, [
                                  (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg"
                                  }, [
                                    vue_cjs_prod.createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    })
                                  ]))
                                ], 8, ["onClick"])
                              ])
                            ]);
                          }), 256))
                        ])
                      ]),
                      vue_cjs_prod.createVNode("div", { class: "w-[300px] relative" }, [
                        vue_cjs_prod.createVNode("div", { class: "left-0 top-0 sidebar" }, "total")
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart/index.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const index$9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const sectionSlug = route.params.slug;
    const { data: currentSection } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useFetch(`http://localhost:1337/api/sections?filters[slug][$eq]=${sectionSlug}`)), __temp = await __temp, __restore(), __temp);
    const { data: sectionCategoriesData } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useFetch(`http://localhost:1337/api/categories?filters[section][slug][$eq]=${sectionSlug}&populate=image`)), __temp = await __temp, __restore(), __temp);
    console.log("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0440\u0430\u0437\u0434\u0435\u043B\u0430: ", sectionCategoriesData.value);
    const sectionTitle = currentSection.value.data[0].attributes.name;
    useHead({
      title: `Prometei \u2013 ${sectionTitle}`
    });
    const sectionCategories = sectionCategoriesData.value.data;
    const config = useRuntimeConfig();
    const imageUrl = (category) => {
      const url = category.attributes.image.data.attributes.url;
      return `${config.API_URL}${url}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_1;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, vue_cjs_prod.mergeProps({ name: "shop" }, _attrs), {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-grow"${_scopeId}><main class="mt-[102px] mb-[40px] flex-grow"${_scopeId}><div class="max-w-screen-xl w-full mx-auto"${_scopeId}><div class="inline-flex"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="w-6 h-6 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId2}></path></svg><span${_scopeId2}>\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</span>`);
                } else {
                  return [
                    (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                      class: "w-6 h-6 mt-[2px]",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      vue_cjs_prod.createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M15 19l-7-7 7-7"
                      })
                    ])),
                    vue_cjs_prod.createVNode("span", null, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<code class="text-grey-text text-[24px] ml-[5px] mr-[5px]"${_scopeId}> / </code>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              to: "/catalog",
              class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438</span>`);
                } else {
                  return [
                    vue_cjs_prod.createVNode("span", null, "\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<code class="text-grey-text text-[24px] ml-[5px] mr-[5px]"${_scopeId}> / </code><span disabled class="breadcrumb flex items-center text-[21px] text-grey-text cursor-default"${_scopeId}><span${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(sectionTitle))}</span></span></div><div class="page-header mb-[20px] flex items-center"${_scopeId}><h1 class="flex-grow text-primary text-[36px] font-bold"${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(sectionTitle))}</h1></div><div class="cards flex items-center gap-[20px]"${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(sectionCategories), (category) => {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
                to: {
                  path: `/categories/${category.attributes.slug}`
                },
                class: "card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
              }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain" style="${serverRenderer.exports.ssrRenderStyle(`background-image: url('${imageUrl(category)}')`)}"${_scopeId2}></div><div class="flex flex-grow card-text text-[21px]"${_scopeId2}>${serverRenderer.exports.ssrInterpolate(category.attributes.name)}</div>`);
                  } else {
                    return [
                      vue_cjs_prod.createVNode("div", {
                        class: "card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",
                        style: `background-image: url('${imageUrl(category)}')`
                      }, null, 4),
                      vue_cjs_prod.createVNode("div", { class: "flex flex-grow card-text text-[21px]" }, vue_cjs_prod.toDisplayString(category.attributes.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></main></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "flex-grow" }, [
                vue_cjs_prod.createVNode("main", { class: "mt-[102px] mb-[40px] flex-grow" }, [
                  vue_cjs_prod.createVNode("div", { class: "max-w-screen-xl w-full mx-auto" }, [
                    vue_cjs_prod.createVNode("div", { class: "inline-flex" }, [
                      vue_cjs_prod.createVNode(_component_NuxtLink, {
                        to: "/",
                        class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                      }, {
                        default: vue_cjs_prod.withCtx(() => [
                          (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                            class: "w-6 h-6 mt-[2px]",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            vue_cjs_prod.createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M15 19l-7-7 7-7"
                            })
                          ])),
                          vue_cjs_prod.createVNode("span", null, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")
                        ]),
                        _: 1
                      }),
                      vue_cjs_prod.createVNode("code", { class: "text-grey-text text-[24px] ml-[5px] mr-[5px]" }, " / "),
                      vue_cjs_prod.createVNode(_component_NuxtLink, {
                        to: "/catalog",
                        class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                      }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode("span", null, "\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438")
                        ]),
                        _: 1
                      }),
                      vue_cjs_prod.createVNode("code", { class: "text-grey-text text-[24px] ml-[5px] mr-[5px]" }, " / "),
                      vue_cjs_prod.createVNode("span", {
                        disabled: "",
                        class: "breadcrumb flex items-center text-[21px] text-grey-text cursor-default"
                      }, [
                        vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(sectionTitle)), 1)
                      ])
                    ]),
                    vue_cjs_prod.createVNode("div", { class: "page-header mb-[20px] flex items-center" }, [
                      vue_cjs_prod.createVNode("h1", { class: "flex-grow text-primary text-[36px] font-bold" }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(sectionTitle)), 1)
                    ]),
                    vue_cjs_prod.createVNode("div", { class: "cards flex items-center gap-[20px]" }, [
                      (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(sectionCategories), (category) => {
                        return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_NuxtLink, {
                          to: {
                            path: `/categories/${category.attributes.slug}`
                          },
                          class: "card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode("div", {
                              class: "card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",
                              style: `background-image: url('${imageUrl(category)}')`
                            }, null, 4),
                            vue_cjs_prod.createVNode("div", { class: "flex flex-grow card-text text-[21px]" }, vue_cjs_prod.toDisplayString(category.attributes.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"]);
                      }), 256))
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/[slug].vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: sections } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useFetch("http://localhost:1337/api/sections?populate=*")), __temp = await __temp, __restore(), __temp);
    const sectionsList = sections.value.data;
    const config = useRuntimeConfig();
    const imageUrl = (section) => {
      const url = section.attributes.image.data.attributes.url;
      return `${config.API_URL}${url}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_1;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, vue_cjs_prod.mergeProps({ name: "shop" }, _attrs), {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-grow"${_scopeId}><main class="mt-[102px] mb-[40px] flex-grow"${_scopeId}><div class="max-w-screen-xl w-full mx-auto"${_scopeId}><div class="inline-block"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="w-6 h-6 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId2}></path></svg><span${_scopeId2}>\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</span>`);
                } else {
                  return [
                    (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                      class: "w-6 h-6 mt-[2px]",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      vue_cjs_prod.createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M15 19l-7-7 7-7"
                      })
                    ])),
                    vue_cjs_prod.createVNode("span", null, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="page-header mb-[20px] flex items-center"${_scopeId}><h1 class="flex-grow text-primary text-[36px] font-bold"${_scopeId}> \u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 </h1></div><div class="cards flex items-center gap-[20px]"${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(sectionsList), (section) => {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
                to: {
                  path: `/catalog/${section.attributes.slug}`
                },
                class: "card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
              }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain" style="${serverRenderer.exports.ssrRenderStyle(`background-image: url('${imageUrl(section)}')`)}"${_scopeId2}></div><div class="flex flex-grow card-text text-[21px]"${_scopeId2}>${serverRenderer.exports.ssrInterpolate(section.attributes.name)}</div>`);
                  } else {
                    return [
                      vue_cjs_prod.createVNode("div", {
                        class: "card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",
                        style: `background-image: url('${imageUrl(section)}')`
                      }, null, 4),
                      vue_cjs_prod.createVNode("div", { class: "flex flex-grow card-text text-[21px]" }, vue_cjs_prod.toDisplayString(section.attributes.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></main></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "flex-grow" }, [
                vue_cjs_prod.createVNode("main", { class: "mt-[102px] mb-[40px] flex-grow" }, [
                  vue_cjs_prod.createVNode("div", { class: "max-w-screen-xl w-full mx-auto" }, [
                    vue_cjs_prod.createVNode("div", { class: "inline-block" }, [
                      vue_cjs_prod.createVNode(_component_NuxtLink, {
                        to: "/",
                        class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                      }, {
                        default: vue_cjs_prod.withCtx(() => [
                          (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                            class: "w-6 h-6 mt-[2px]",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            vue_cjs_prod.createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M15 19l-7-7 7-7"
                            })
                          ])),
                          vue_cjs_prod.createVNode("span", null, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")
                        ]),
                        _: 1
                      })
                    ]),
                    vue_cjs_prod.createVNode("div", { class: "page-header mb-[20px] flex items-center" }, [
                      vue_cjs_prod.createVNode("h1", { class: "flex-grow text-primary text-[36px] font-bold" }, " \u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 ")
                    ]),
                    vue_cjs_prod.createVNode("div", { class: "cards flex items-center gap-[20px]" }, [
                      (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(sectionsList), (section) => {
                        return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_NuxtLink, {
                          to: {
                            path: `/catalog/${section.attributes.slug}`
                          },
                          class: "card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode("div", {
                              class: "card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",
                              style: `background-image: url('${imageUrl(section)}')`
                            }, null, 4),
                            vue_cjs_prod.createVNode("div", { class: "flex flex-grow card-text text-[21px]" }, vue_cjs_prod.toDisplayString(section.attributes.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"]);
                      }), 256))
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const index$8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const subcategorySlug = route.params.slug;
    const { data: currentSubcategoryData } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useFetch(`http://localhost:1337/api/subcategories?filters[slug][$eq]=${subcategorySlug}&populate=section,category`)), __temp = await __temp, __restore(), __temp);
    const currentSubcategory = currentSubcategoryData.value.data[0].attributes;
    const currentCategory = currentSubcategory.category.data.attributes;
    const currentSection = currentSubcategory.section.data.attributes;
    const { data: products } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useFetch(`http://localhost:1337/api/products?filters[subcategory][slug][$eq]=${subcategorySlug}&populate=images`)), __temp = await __temp, __restore(), __temp);
    useMeta({
      title: `Prometei \u2013 ${currentSubcategory.name}`
    });
    const config = useRuntimeConfig();
    const imageUrl = (product) => {
      console.log(product);
      const url = product.attributes.images.data[0].attributes.url;
      return `${config.API_URL}${url}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_1;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, vue_cjs_prod.mergeProps({ name: "shop" }, _attrs), {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-grow"${_scopeId}><main class="mt-[102px] mb-[40px] flex-grow"${_scopeId}><div class="max-w-screen-xl w-full mx-auto"${_scopeId}><div class="page-header flex items-center"${_scopeId}><div class="inline-flex"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="w-6 h-6 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId2}></path></svg><span${_scopeId2}>\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</span>`);
                } else {
                  return [
                    (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                      class: "w-6 h-6 mt-[2px]",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      vue_cjs_prod.createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M15 19l-7-7 7-7"
                      })
                    ])),
                    vue_cjs_prod.createVNode("span", null, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<code class="text-grey-text text-[24px] ml-[5px] mr-[5px]"${_scopeId}> / </code>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              to: "/catalog",
              class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438</span>`);
                } else {
                  return [
                    vue_cjs_prod.createVNode("span", null, "\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<code class="text-grey-text text-[24px] ml-[5px] mr-[5px]"${_scopeId}> / </code>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              to: {
                path: `/catalog/${vue_cjs_prod.unref(currentSection).slug}`
              },
              class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(currentSection).name)}</span>`);
                } else {
                  return [
                    vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(currentSection).name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<code class="text-grey-text text-[24px] ml-[5px] mr-[5px]"${_scopeId}> / </code>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              to: {
                path: `/categories/${vue_cjs_prod.unref(currentCategory).slug}`
              },
              class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(currentCategory).name)}</span>`);
                } else {
                  return [
                    vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(currentCategory).name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<code class="text-grey-text text-[24px] ml-[5px] mr-[5px]"${_scopeId}> / </code><span disabled class="breadcrumb flex items-center text-[21px] text-grey-text cursor-default"${_scopeId}><span${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(currentSubcategory).title)}</span></span></div></div><div class="page-header mb-[20px] flex items-center"${_scopeId}><h1 class="flex-grow text-primary text-[36px] font-bold"${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(currentSubcategory).title)}</h1></div><div class="flex justify-between items-start gap-[40px]"${_scopeId}><aside class="catalog-filter w-[300px] flex flex-col"${_scopeId}><div class="filter-block mb-[20px]"${_scopeId}><div class="filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]"${_scopeId}> \u0411\u0440\u0435\u043D\u0434 </div><ul class="filter-block-content py-[10px] mx-[30px]"${_scopeId}><li class="px-[18px] py-[10px] border-2 border-white text-[16px] rounded-[4px] hover:bg-grey-light active:border-primary active:bg-white flex justify-center items-center active:text-primary cursor-pointer"${_scopeId}><span class="flex-grow"${_scopeId}>Demix</span><span${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"${_scopeId}></path></svg></span></li></ul></div><div class="filter-block"${_scopeId}><div class="filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]"${_scopeId}> \u0426\u0435\u043D\u0430, \u0440\u0443\u0431. </div><div class="filter-block-content py-[10px] mx-[30px]"${_scopeId}><div class="mt-[20px] flex justify-between items-center w-full"${_scopeId}><input class="py-[10px] px-[5px] bg-grey-light rounded-[4px] max-w-[100px] text-[16px] shadow-inner outline-none text-center" type="text" placeholder="799"${_scopeId}><span class="w-[20px] h-[2px] bg-grey-light"${_scopeId}></span><input class="py-[10px] px-[5px] bg-grey-light rounded-[4px] max-w-[100px] text-[16px] shadow-inner outline-none text-center" type="text" placeholder="13000"${_scopeId}></div></div></div></aside><div class="catalog-list flex-grow flex gap-[25px]"${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(products).data, (product, index2) => {
              _push2(`<div class="catalog-list-item font-medium text-[21px] w-1/3 h-[450px] shadow-card hover:shadow-card-hover rounded-[4px] relative flex flex-col p-[30px]"${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
                to: `/products/${product.attributes.article}`,
                class: "item-image flex-grow bg-center bg-no-repeat bg-contain",
                style: `background-image: url('${imageUrl(product)}')`
              }, null, _parent2, _scopeId));
              _push2(`<div class="item-content flex flex-col items-stretch text-center"${_scopeId}><div class="item-title mb-[30px] font-medium"${_scopeId}>${serverRenderer.exports.ssrInterpolate(product.attributes.title)}</div><button class="item-button border-[2px] py-[4px] border-primary rounded-[4px] flex justify-center items-center"${_scopeId}>${serverRenderer.exports.ssrInterpolate(product.attributes.price)} \u0440\u0443\u0431. </button></div></div>`);
            });
            _push2(`<!--]--></div></div></div></main></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "flex-grow" }, [
                vue_cjs_prod.createVNode("main", { class: "mt-[102px] mb-[40px] flex-grow" }, [
                  vue_cjs_prod.createVNode("div", { class: "max-w-screen-xl w-full mx-auto" }, [
                    vue_cjs_prod.createVNode("div", { class: "page-header flex items-center" }, [
                      vue_cjs_prod.createVNode("div", { class: "inline-flex" }, [
                        vue_cjs_prod.createVNode(_component_NuxtLink, {
                          to: "/",
                          class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                              class: "w-6 h-6 mt-[2px]",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              vue_cjs_prod.createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M15 19l-7-7 7-7"
                              })
                            ])),
                            vue_cjs_prod.createVNode("span", null, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")
                          ]),
                          _: 1
                        }),
                        vue_cjs_prod.createVNode("code", { class: "text-grey-text text-[24px] ml-[5px] mr-[5px]" }, " / "),
                        vue_cjs_prod.createVNode(_component_NuxtLink, {
                          to: "/catalog",
                          class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode("span", null, "\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438")
                          ]),
                          _: 1
                        }),
                        vue_cjs_prod.createVNode("code", { class: "text-grey-text text-[24px] ml-[5px] mr-[5px]" }, " / "),
                        vue_cjs_prod.createVNode(_component_NuxtLink, {
                          to: {
                            path: `/catalog/${vue_cjs_prod.unref(currentSection).slug}`
                          },
                          class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(currentSection).name), 1)
                          ]),
                          _: 1
                        }, 8, ["to"]),
                        vue_cjs_prod.createVNode("code", { class: "text-grey-text text-[24px] ml-[5px] mr-[5px]" }, " / "),
                        vue_cjs_prod.createVNode(_component_NuxtLink, {
                          to: {
                            path: `/categories/${vue_cjs_prod.unref(currentCategory).slug}`
                          },
                          class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(currentCategory).name), 1)
                          ]),
                          _: 1
                        }, 8, ["to"]),
                        vue_cjs_prod.createVNode("code", { class: "text-grey-text text-[24px] ml-[5px] mr-[5px]" }, " / "),
                        vue_cjs_prod.createVNode("span", {
                          disabled: "",
                          class: "breadcrumb flex items-center text-[21px] text-grey-text cursor-default"
                        }, [
                          vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(currentSubcategory).title), 1)
                        ])
                      ])
                    ]),
                    vue_cjs_prod.createVNode("div", { class: "page-header mb-[20px] flex items-center" }, [
                      vue_cjs_prod.createVNode("h1", { class: "flex-grow text-primary text-[36px] font-bold" }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(currentSubcategory).title), 1)
                    ]),
                    vue_cjs_prod.createVNode("div", { class: "flex justify-between items-start gap-[40px]" }, [
                      vue_cjs_prod.createVNode("aside", { class: "catalog-filter w-[300px] flex flex-col" }, [
                        vue_cjs_prod.createVNode("div", { class: "filter-block mb-[20px]" }, [
                          vue_cjs_prod.createVNode("div", { class: "filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]" }, " \u0411\u0440\u0435\u043D\u0434 "),
                          vue_cjs_prod.createVNode("ul", { class: "filter-block-content py-[10px] mx-[30px]" }, [
                            vue_cjs_prod.createVNode("li", { class: "px-[18px] py-[10px] border-2 border-white text-[16px] rounded-[4px] hover:bg-grey-light active:border-primary active:bg-white flex justify-center items-center active:text-primary cursor-pointer" }, [
                              vue_cjs_prod.createVNode("span", { class: "flex-grow" }, "Demix"),
                              vue_cjs_prod.createVNode("span", null, [
                                (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                  class: "w-6 h-6",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  vue_cjs_prod.createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M5 13l4 4L19 7"
                                  })
                                ]))
                              ])
                            ])
                          ])
                        ]),
                        vue_cjs_prod.createVNode("div", { class: "filter-block" }, [
                          vue_cjs_prod.createVNode("div", { class: "filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]" }, " \u0426\u0435\u043D\u0430, \u0440\u0443\u0431. "),
                          vue_cjs_prod.createVNode("div", { class: "filter-block-content py-[10px] mx-[30px]" }, [
                            vue_cjs_prod.createVNode("div", { class: "mt-[20px] flex justify-between items-center w-full" }, [
                              vue_cjs_prod.createVNode("input", {
                                class: "py-[10px] px-[5px] bg-grey-light rounded-[4px] max-w-[100px] text-[16px] shadow-inner outline-none text-center",
                                type: "text",
                                placeholder: "799"
                              }),
                              vue_cjs_prod.createVNode("span", { class: "w-[20px] h-[2px] bg-grey-light" }),
                              vue_cjs_prod.createVNode("input", {
                                class: "py-[10px] px-[5px] bg-grey-light rounded-[4px] max-w-[100px] text-[16px] shadow-inner outline-none text-center",
                                type: "text",
                                placeholder: "13000"
                              })
                            ])
                          ])
                        ])
                      ]),
                      vue_cjs_prod.createVNode("div", { class: "catalog-list flex-grow flex gap-[25px]" }, [
                        (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(products).data, (product, index2) => {
                          return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                            key: index2,
                            class: "catalog-list-item font-medium text-[21px] w-1/3 h-[450px] shadow-card hover:shadow-card-hover rounded-[4px] relative flex flex-col p-[30px]"
                          }, [
                            vue_cjs_prod.createVNode(_component_NuxtLink, {
                              to: `/products/${product.attributes.article}`,
                              class: "item-image flex-grow bg-center bg-no-repeat bg-contain",
                              style: `background-image: url('${imageUrl(product)}')`
                            }, null, 8, ["to", "style"]),
                            vue_cjs_prod.createVNode("div", { class: "item-content flex flex-col items-stretch text-center" }, [
                              vue_cjs_prod.createVNode("div", { class: "item-title mb-[30px] font-medium" }, vue_cjs_prod.toDisplayString(product.attributes.title), 1),
                              vue_cjs_prod.createVNode("button", { class: "item-button border-[2px] py-[4px] border-primary rounded-[4px] flex justify-center items-center" }, vue_cjs_prod.toDisplayString(product.attributes.price) + " \u0440\u0443\u0431. ", 1)
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/[slug]/[slug]/index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const index$7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const categorySlug = route.params.slug;
    const { data: currentCategoryData } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useFetch(`http://localhost:1337/api/categories?filters[slug][$eq]=${categorySlug}&populate=section`)), __temp = await __temp, __restore(), __temp);
    const currentCategory = currentCategoryData.value.data[0].attributes;
    useMeta({
      title: `Prometei \u2013 ${currentCategory.name}`
    });
    const currentSection = currentCategory.section.data.attributes;
    const { data: categorySubcategoriesData } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useFetch(`http://localhost:1337/api/subcategories?filters[category][slug][$eq]=${currentCategory.slug}&populate=image`)), __temp = await __temp, __restore(), __temp);
    const categorySubcategories = categorySubcategoriesData.value.data;
    const config = useRuntimeConfig();
    const imageUrl = (subcategory) => {
      var _a;
      if (!subcategory.attributes.image.data) {
        return "";
      }
      const url = (_a = subcategory.attributes.image.data[0].attributes) == null ? void 0 : _a.url;
      return `${config.API_URL}${url}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_1;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, vue_cjs_prod.mergeProps({ name: "shop" }, _attrs), {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-grow"${_scopeId}><main class="mt-[102px] mb-[40px] flex-grow"${_scopeId}><div class="max-w-screen-xl w-full mx-auto"${_scopeId}><div class="inline-flex"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="w-6 h-6 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId2}></path></svg><span${_scopeId2}>\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</span>`);
                } else {
                  return [
                    (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                      class: "w-6 h-6 mt-[2px]",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      vue_cjs_prod.createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M15 19l-7-7 7-7"
                      })
                    ])),
                    vue_cjs_prod.createVNode("span", null, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<code class="text-grey-text text-[24px] ml-[5px] mr-[5px]"${_scopeId}> / </code>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              to: "/catalog",
              class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438</span>`);
                } else {
                  return [
                    vue_cjs_prod.createVNode("span", null, "\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<code class="text-grey-text text-[24px] ml-[5px] mr-[5px]"${_scopeId}> / </code>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              to: {
                path: `/catalog/${vue_cjs_prod.unref(currentSection).slug}`
              },
              class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(currentSection).name)}</span>`);
                } else {
                  return [
                    vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(currentSection).name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<code class="text-grey-text text-[24px] ml-[5px] mr-[5px]"${_scopeId}> / </code><span disabled class="breadcrumb flex items-center text-[21px] text-grey-text cursor-default"${_scopeId}><span${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(currentCategory).name)}</span></span></div><div class="page-header mb-[20px] flex items-center"${_scopeId}><h1 class="flex-grow text-primary text-[36px] font-bold"${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(currentCategory).name)}</h1></div><div class="cards flex items-center gap-[20px]"${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(categorySubcategories), (subcategory) => {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
                to: {
                  path: `/categories/${vue_cjs_prod.unref(currentCategory).slug}/${subcategory.attributes.slug}`
                },
                class: "card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
              }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain" style="${serverRenderer.exports.ssrRenderStyle(`background-image: url('${imageUrl(subcategory)}')`)}"${_scopeId2}></div><div class="flex flex-grow card-text text-[21px]"${_scopeId2}>${serverRenderer.exports.ssrInterpolate(subcategory.attributes.title)}</div>`);
                  } else {
                    return [
                      vue_cjs_prod.createVNode("div", {
                        class: "card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",
                        style: `background-image: url('${imageUrl(subcategory)}')`
                      }, null, 4),
                      vue_cjs_prod.createVNode("div", { class: "flex flex-grow card-text text-[21px]" }, vue_cjs_prod.toDisplayString(subcategory.attributes.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></main></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "flex-grow" }, [
                vue_cjs_prod.createVNode("main", { class: "mt-[102px] mb-[40px] flex-grow" }, [
                  vue_cjs_prod.createVNode("div", { class: "max-w-screen-xl w-full mx-auto" }, [
                    vue_cjs_prod.createVNode("div", { class: "inline-flex" }, [
                      vue_cjs_prod.createVNode(_component_NuxtLink, {
                        to: "/",
                        class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                      }, {
                        default: vue_cjs_prod.withCtx(() => [
                          (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                            class: "w-6 h-6 mt-[2px]",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            vue_cjs_prod.createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M15 19l-7-7 7-7"
                            })
                          ])),
                          vue_cjs_prod.createVNode("span", null, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")
                        ]),
                        _: 1
                      }),
                      vue_cjs_prod.createVNode("code", { class: "text-grey-text text-[24px] ml-[5px] mr-[5px]" }, " / "),
                      vue_cjs_prod.createVNode(_component_NuxtLink, {
                        to: "/catalog",
                        class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                      }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode("span", null, "\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438")
                        ]),
                        _: 1
                      }),
                      vue_cjs_prod.createVNode("code", { class: "text-grey-text text-[24px] ml-[5px] mr-[5px]" }, " / "),
                      vue_cjs_prod.createVNode(_component_NuxtLink, {
                        to: {
                          path: `/catalog/${vue_cjs_prod.unref(currentSection).slug}`
                        },
                        class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                      }, {
                        default: vue_cjs_prod.withCtx(() => [
                          vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(currentSection).name), 1)
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      vue_cjs_prod.createVNode("code", { class: "text-grey-text text-[24px] ml-[5px] mr-[5px]" }, " / "),
                      vue_cjs_prod.createVNode("span", {
                        disabled: "",
                        class: "breadcrumb flex items-center text-[21px] text-grey-text cursor-default"
                      }, [
                        vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(currentCategory).name), 1)
                      ])
                    ]),
                    vue_cjs_prod.createVNode("div", { class: "page-header mb-[20px] flex items-center" }, [
                      vue_cjs_prod.createVNode("h1", { class: "flex-grow text-primary text-[36px] font-bold" }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(currentCategory).name), 1)
                    ]),
                    vue_cjs_prod.createVNode("div", { class: "cards flex items-center gap-[20px]" }, [
                      (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(categorySubcategories), (subcategory) => {
                        return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_NuxtLink, {
                          to: {
                            path: `/categories/${vue_cjs_prod.unref(currentCategory).slug}/${subcategory.attributes.slug}`
                          },
                          class: "card flex flex-col items-center w-1/5 h-[300px] bg-grey-light rounded-[4px] border-[2px] border-grey-text relative"
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode("div", {
                              class: "card-image flex-grow w-[200px] h-[200px] bg-no-repeat bg-center bg-contain",
                              style: `background-image: url('${imageUrl(subcategory)}')`
                            }, null, 4),
                            vue_cjs_prod.createVNode("div", { class: "flex flex-grow card-text text-[21px]" }, vue_cjs_prod.toDisplayString(subcategory.attributes.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"]);
                      }), 256))
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/[slug]/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const index$6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: products } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useFetch("http://localhost:1337/api/products")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_1;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, vue_cjs_prod.mergeProps({ name: "shop" }, _attrs), {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-grow"${_scopeId}><main class="mt-[102px] mb-[40px] flex-grow"${_scopeId}><div class="max-w-screen-xl w-full mx-auto"${_scopeId}><div class="page-header flex items-center"${_scopeId}><div class="inline-block"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              to: "/categories",
              class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="w-6 h-6 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId2}></path></svg><span${_scopeId2}>\u041A \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C</span>`);
                } else {
                  return [
                    (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                      class: "w-6 h-6 mt-[2px]",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      vue_cjs_prod.createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M15 19l-7-7 7-7"
                      })
                    ])),
                    vue_cjs_prod.createVNode("span", null, "\u041A \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="page-header mb-[20px] flex items-center"${_scopeId}><h1 class="flex-grow text-primary text-[36px] font-bold"${_scopeId}> \u0424\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0435 \u043C\u044F\u0447\u0438 </h1></div><div class="flex justify-between items-start gap-[40px]"${_scopeId}><aside class="catalog-filter w-[300px] flex flex-col"${_scopeId}><div class="filter-block mb-[20px]"${_scopeId}><div class="filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]"${_scopeId}> \u0411\u0440\u0435\u043D\u0434 </div><ul class="filter-block-content py-[10px] mx-[30px]"${_scopeId}><li class="px-[18px] py-[10px] border-2 border-white text-[16px] rounded-[4px] hover:bg-grey-light active:border-primary active:bg-white flex justify-center items-center active:text-primary cursor-pointer"${_scopeId}><span class="flex-grow"${_scopeId}>Puma</span><span${_scopeId}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"${_scopeId}></path></svg></span></li></ul></div><div class="filter-block"${_scopeId}><div class="filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]"${_scopeId}> \u0426\u0435\u043D\u0430, \u0440\u0443\u0431. </div><div class="filter-block-content py-[10px] mx-[30px]"${_scopeId}><div class="mt-[20px] flex justify-between items-center w-full"${_scopeId}><input class="py-[10px] px-[5px] bg-grey-light rounded-[4px] max-w-[100px] text-[16px] shadow-inner outline-none text-center" type="text" placeholder="799"${_scopeId}><span class="w-[20px] h-[2px] bg-grey-light"${_scopeId}></span><input class="py-[10px] px-[5px] bg-grey-light rounded-[4px] max-w-[100px] text-[16px] shadow-inner outline-none text-center" type="text" placeholder="13000"${_scopeId}></div></div></div></aside><div class="catalog-list flex-grow flex gap-[25px]"${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(products).data, (product, index2) => {
              _push2(`<div class="catalog-list-item font-medium text-[21px] w-1/3 h-[450px] shadow-card hover:shadow-card-hover rounded-[4px] relative flex flex-col p-[30px]"${_scopeId}>`);
              _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
                to: `/product/${product.id}`,
                class: "item-image flex-grow bg-center bg-no-repeat bg-contain",
                style: { "background-image": "url('assets/images/product-item.png')" }
              }, null, _parent2, _scopeId));
              _push2(`<div class="item-content flex flex-col items-stretch text-center"${_scopeId}><div class="item-title mb-[30px] font-medium"${_scopeId}>${serverRenderer.exports.ssrInterpolate(product.attributes.Title)}</div><button class="item-button border-[2px] py-[4px] border-primary rounded-[4px] flex justify-center items-center"${_scopeId}>${serverRenderer.exports.ssrInterpolate(product.attributes.Price)} \u0440\u0443\u0431. </button></div></div>`);
            });
            _push2(`<!--]--></div></div></div></main></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "flex-grow" }, [
                vue_cjs_prod.createVNode("main", { class: "mt-[102px] mb-[40px] flex-grow" }, [
                  vue_cjs_prod.createVNode("div", { class: "max-w-screen-xl w-full mx-auto" }, [
                    vue_cjs_prod.createVNode("div", { class: "page-header flex items-center" }, [
                      vue_cjs_prod.createVNode("div", { class: "inline-block" }, [
                        vue_cjs_prod.createVNode(_component_NuxtLink, {
                          to: "/categories",
                          class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                              class: "w-6 h-6 mt-[2px]",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              vue_cjs_prod.createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M15 19l-7-7 7-7"
                              })
                            ])),
                            vue_cjs_prod.createVNode("span", null, "\u041A \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    vue_cjs_prod.createVNode("div", { class: "page-header mb-[20px] flex items-center" }, [
                      vue_cjs_prod.createVNode("h1", { class: "flex-grow text-primary text-[36px] font-bold" }, " \u0424\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0435 \u043C\u044F\u0447\u0438 ")
                    ]),
                    vue_cjs_prod.createVNode("div", { class: "flex justify-between items-start gap-[40px]" }, [
                      vue_cjs_prod.createVNode("aside", { class: "catalog-filter w-[300px] flex flex-col" }, [
                        vue_cjs_prod.createVNode("div", { class: "filter-block mb-[20px]" }, [
                          vue_cjs_prod.createVNode("div", { class: "filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]" }, " \u0411\u0440\u0435\u043D\u0434 "),
                          vue_cjs_prod.createVNode("ul", { class: "filter-block-content py-[10px] mx-[30px]" }, [
                            vue_cjs_prod.createVNode("li", { class: "px-[18px] py-[10px] border-2 border-white text-[16px] rounded-[4px] hover:bg-grey-light active:border-primary active:bg-white flex justify-center items-center active:text-primary cursor-pointer" }, [
                              vue_cjs_prod.createVNode("span", { class: "flex-grow" }, "Puma"),
                              vue_cjs_prod.createVNode("span", null, [
                                (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                  class: "w-6 h-6",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  vue_cjs_prod.createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M5 13l4 4L19 7"
                                  })
                                ]))
                              ])
                            ])
                          ])
                        ]),
                        vue_cjs_prod.createVNode("div", { class: "filter-block" }, [
                          vue_cjs_prod.createVNode("div", { class: "filter-block-title bg-grey-light border-[1px] border-grey-text rounded-[4px] h-[60px] flex items-center px-[28px] text-[21px]" }, " \u0426\u0435\u043D\u0430, \u0440\u0443\u0431. "),
                          vue_cjs_prod.createVNode("div", { class: "filter-block-content py-[10px] mx-[30px]" }, [
                            vue_cjs_prod.createVNode("div", { class: "mt-[20px] flex justify-between items-center w-full" }, [
                              vue_cjs_prod.createVNode("input", {
                                class: "py-[10px] px-[5px] bg-grey-light rounded-[4px] max-w-[100px] text-[16px] shadow-inner outline-none text-center",
                                type: "text",
                                placeholder: "799"
                              }),
                              vue_cjs_prod.createVNode("span", { class: "w-[20px] h-[2px] bg-grey-light" }),
                              vue_cjs_prod.createVNode("input", {
                                class: "py-[10px] px-[5px] bg-grey-light rounded-[4px] max-w-[100px] text-[16px] shadow-inner outline-none text-center",
                                type: "text",
                                placeholder: "13000"
                              })
                            ])
                          ])
                        ])
                      ]),
                      vue_cjs_prod.createVNode("div", { class: "catalog-list flex-grow flex gap-[25px]" }, [
                        (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(products).data, (product, index2) => {
                          return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                            key: index2,
                            class: "catalog-list-item font-medium text-[21px] w-1/3 h-[450px] shadow-card hover:shadow-card-hover rounded-[4px] relative flex flex-col p-[30px]"
                          }, [
                            vue_cjs_prod.createVNode(_component_NuxtLink, {
                              to: `/product/${product.id}`,
                              class: "item-image flex-grow bg-center bg-no-repeat bg-contain",
                              style: { "background-image": "url('assets/images/product-item.png')" }
                            }, null, 8, ["to"]),
                            vue_cjs_prod.createVNode("div", { class: "item-content flex flex-col items-stretch text-center" }, [
                              vue_cjs_prod.createVNode("div", { class: "item-title mb-[30px] font-medium" }, vue_cjs_prod.toDisplayString(product.attributes.Title), 1),
                              vue_cjs_prod.createVNode("button", { class: "item-button border-[2px] py-[4px] border-primary rounded-[4px] flex justify-center items-center" }, vue_cjs_prod.toDisplayString(product.attributes.Price) + " \u0440\u0443\u0431. ", 1)
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const index$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0$1;
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, vue_cjs_prod.mergeProps({ name: "shop" }, _attrs), {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex-grow"${_scopeId}><main class="mt-[135px] mb-[40px] flex-grow"${_scopeId}>delivery</main></div>`);
      } else {
        return [
          vue_cjs_prod.createVNode("div", { class: "flex-grow" }, [
            vue_cjs_prod.createVNode("main", { class: "mt-[135px] mb-[40px] flex-grow" }, "delivery")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/delivery/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const index$3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const index$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const menuStore = useMenuToggler();
    const isExpandMenuShow = vue_cjs_prod.computed(() => {
      return menuStore.$state.isExpandMenuOpen;
    });
    const url = "/api/stuff";
    [__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useFetch(url, {
      transform: (response) => {
        response = JSON.parse(response);
        const res = [];
        for (const person in response) {
          console.log(person);
          if (response.hasOwnProperty(person)) {
            res.push({ name: person, message: response[person] });
          }
        }
        return res;
      }
    })), __temp = await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_1;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, vue_cjs_prod.mergeProps({ name: "shop" }, _attrs), {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${serverRenderer.exports.ssrRenderClass([{
              "overflow-hidden": vue_cjs_prod.unref(isExpandMenuShow)
            }, "flex-grow"])}"${_scopeId}><main class="mt-[136px] mb-[40px] flex-grow"${_scopeId}><div class="max-w-screen-xl w-full mx-auto"${_scopeId}><div class="page-header flex items-center"${_scopeId}><h1 class="flex-grow text-primary text-[36px] font-bold"${_scopeId}> \u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 </h1><div${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              to: "/catalog",
              class: "flex items-center justify-center text-[21px] text-primary hover:text-orange"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="mr-[5px]"${_scopeId2}>\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438</span><svg class="w-6 h-6 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    vue_cjs_prod.createVNode("span", { class: "mr-[5px]" }, "\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"),
                    (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                      class: "w-6 h-6 mt-[2px]",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      vue_cjs_prod.createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M9 5l7 7-7 7"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="slider-image mt-[40px] image-slider flex justify-between gap-[25px]"${_scopeId}><div class="cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative" style="${serverRenderer.exports.ssrRenderStyle({ "background-image": "url('/assets/images/basketball.png')" })}"${_scopeId}><span class="absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider"${_scopeId}>\u0411\u0430\u0441\u043A\u0435\u0442<br${_scopeId}>\u0431\u043E\u043B</span></div><div class="cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative" style="${serverRenderer.exports.ssrRenderStyle({ "background-image": "url('/assets/images/football.png')" })}"${_scopeId}><span class="absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider"${_scopeId}>\u0424\u0443\u0442<br${_scopeId}>\u0431\u043E\u043B</span></div><div class="cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative" style="${serverRenderer.exports.ssrRenderStyle({ "background-image": "url('/assets/images/voleyball.png')" })}"${_scopeId}><span class="absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider"${_scopeId}>\u0412\u043E\u043B\u0435\u0439<br${_scopeId}>\u0431\u043E\u043B</span></div></div><div class="slider-category"${_scopeId}></div></div></main></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", {
                class: ["flex-grow", {
                  "overflow-hidden": vue_cjs_prod.unref(isExpandMenuShow)
                }]
              }, [
                vue_cjs_prod.createVNode("main", { class: "mt-[136px] mb-[40px] flex-grow" }, [
                  vue_cjs_prod.createVNode("div", { class: "max-w-screen-xl w-full mx-auto" }, [
                    vue_cjs_prod.createVNode("div", { class: "page-header flex items-center" }, [
                      vue_cjs_prod.createVNode("h1", { class: "flex-grow text-primary text-[36px] font-bold" }, " \u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 "),
                      vue_cjs_prod.createVNode("div", null, [
                        vue_cjs_prod.createVNode(_component_NuxtLink, {
                          to: "/catalog",
                          class: "flex items-center justify-center text-[21px] text-primary hover:text-orange"
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode("span", { class: "mr-[5px]" }, "\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"),
                            (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                              class: "w-6 h-6 mt-[2px]",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              vue_cjs_prod.createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M9 5l7 7-7 7"
                              })
                            ]))
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    vue_cjs_prod.createVNode("div", { class: "slider-image mt-[40px] image-slider flex justify-between gap-[25px]" }, [
                      vue_cjs_prod.createVNode("div", {
                        class: "cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative",
                        style: { "background-image": "url('/assets/images/basketball.png')" }
                      }, [
                        vue_cjs_prod.createVNode("span", { class: "absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider" }, [
                          vue_cjs_prod.createTextVNode("\u0411\u0430\u0441\u043A\u0435\u0442"),
                          vue_cjs_prod.createVNode("br"),
                          vue_cjs_prod.createTextVNode("\u0431\u043E\u043B")
                        ])
                      ]),
                      vue_cjs_prod.createVNode("div", {
                        class: "cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative",
                        style: { "background-image": "url('/assets/images/football.png')" }
                      }, [
                        vue_cjs_prod.createVNode("span", { class: "absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider" }, [
                          vue_cjs_prod.createTextVNode("\u0424\u0443\u0442"),
                          vue_cjs_prod.createVNode("br"),
                          vue_cjs_prod.createTextVNode("\u0431\u043E\u043B")
                        ])
                      ]),
                      vue_cjs_prod.createVNode("div", {
                        class: "cursor-pointer w-1/3 h-[500px] bg-no-repeat bg-cover rounded-[10px] hover:drop-shadow-card z-0 hover:z-10 relative",
                        style: { "background-image": "url('/assets/images/voleyball.png')" }
                      }, [
                        vue_cjs_prod.createVNode("span", { class: "absolute left-[20px] bottom-[70px] text-[100px] font-extrabold italic uppercase text-white leading-[84px] drop-shadow-slider" }, [
                          vue_cjs_prod.createTextVNode("\u0412\u043E\u043B\u0435\u0439"),
                          vue_cjs_prod.createVNode("br"),
                          vue_cjs_prod.createTextVNode("\u0431\u043E\u043B")
                        ])
                      ])
                    ]),
                    vue_cjs_prod.createVNode("div", { class: "slider-category" })
                  ])
                ])
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const index$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0$1;
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, vue_cjs_prod.mergeProps({ name: "shop" }, _attrs), {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex-grow"${_scopeId}><main class="mt-[135px] mb-[40px] flex-grow"${_scopeId}>payments</main></div>`);
      } else {
        return [
          vue_cjs_prod.createVNode("div", { class: "flex-grow" }, [
            vue_cjs_prod.createVNode("main", { class: "mt-[135px] mb-[40px] flex-grow" }, "payments")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/payments/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const routeArticle = route.params.article;
    const { data, error } = ([__temp, __restore] = vue_cjs_prod.withAsyncContext(() => useAsyncData(`single-product-${routeArticle}`, () => GqlProductByArticle({ article: routeArticle }))), __temp = await __temp, __restore(), __temp);
    const currentProduct = vue_cjs_prod.computed(() => {
      return data.value.products.data[0];
    });
    console.log(currentProduct.value);
    if (error.value || !currentProduct.value) {
      router.push("/404");
    }
    const productTitle = vue_cjs_prod.computed(() => {
      var _a;
      return ((_a = currentProduct.value) == null ? void 0 : _a.attributes.title) || "";
    });
    const productPrice = vue_cjs_prod.computed(() => {
      var _a;
      return ((_a = currentProduct.value) == null ? void 0 : _a.attributes.price) || null;
    });
    const productImages = vue_cjs_prod.computed(() => {
      var _a;
      return ((_a = currentProduct.value) == null ? void 0 : _a.attributes.images.data) || [];
    });
    const productArticle = vue_cjs_prod.computed(() => {
      var _a;
      return ((_a = currentProduct.value) == null ? void 0 : _a.attributes.article) || "\u2013";
    });
    const productTags = vue_cjs_prod.computed(() => {
      var _a;
      return ((_a = currentProduct.value) == null ? void 0 : _a.attributes.tags.data) || [];
    });
    const productSection = vue_cjs_prod.computed(() => {
      var _a;
      return ((_a = currentProduct.value) == null ? void 0 : _a.attributes.section.data) || null;
    });
    const productCategory = vue_cjs_prod.computed(() => {
      var _a;
      return ((_a = currentProduct.value) == null ? void 0 : _a.attributes.category.data) || null;
    });
    const productSubcategory = vue_cjs_prod.computed(() => {
      var _a;
      return ((_a = currentProduct.value) == null ? void 0 : _a.attributes.subcategory.data) || null;
    });
    const productColors = vue_cjs_prod.computed(() => {
      var _a;
      return ((_a = currentProduct.value) == null ? void 0 : _a.attributes.colors) || null;
    });
    const selectedColor = vue_cjs_prod.ref({});
    const selectColor = (color) => {
      if (!color || !color.hexColor || !color.name || color && color.disabled) {
        return false;
      }
      selectedColor.value = { name: color.name, hexColor: color.hexColor };
    };
    if (productColors.value && productColors.value.length) {
      selectColor(productColors.value[0]);
    }
    const selectedAmount = vue_cjs_prod.ref(1);
    const cart = useCart();
    const cartItems = vue_cjs_prod.computed(() => {
      console.log("cart items:", cart.items);
      return cart.items;
    });
    const productInCart = vue_cjs_prod.computed(() => {
      const foundItem = cartItems.value.find((item) => item.id === currentProduct.value.id);
      if (foundItem) {
        selectedAmount.value = foundItem.amount;
        return true;
      }
      return false;
    });
    const setCorrectNumber = () => {
      const string = selectedAmount.value;
      selectedAmount.value = string.toString().replace(/[^0-9]/g, "");
    };
    const setNotNullNumber = () => {
      if (selectedAmount.value === null || selectedAmount.value === "") {
        selectedAmount.value = 1;
      }
    };
    const selectAmount = (value) => {
      const newValue = Number(selectedAmount.value) + value;
      if (selectedAmount.value > 0 && newValue > 0) {
        selectedAmount.value = newValue;
      }
    };
    const removeFromCart = vue_cjs_prod.ref(false);
    const toggleRemoveFromCart = (value) => {
      removeFromCart.value = value;
    };
    const addToCartButton = vue_cjs_prod.computed(() => {
      if (productInCart.value) {
        if (removeFromCart.value) {
          return "\u0423\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u044B";
        }
        return "\u0423\u0436\u0435 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435";
      }
      return "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443";
    });
    const addToCart = () => {
      cart.addToCart({
        id: currentProduct.value.id,
        amount: Number(selectedAmount.value),
        article: currentProduct.value.attributes.article,
        title: currentProduct.value.attributes.title,
        price: currentProduct.value.attributes.price,
        imageUrl: productImages.value[0].attributes.url
      });
    };
    const removeFromStateCart = () => {
      cart.removeFromCart(currentProduct.value);
    };
    const cartHandler = () => {
      if (productInCart.value) {
        removeFromStateCart();
      } else {
        addToCart();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_1;
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, vue_cjs_prod.mergeProps({ name: "shop" }, _attrs), {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex-grow" data-v-62b01795${_scopeId}><main class="mt-[102px] mb-[40px] flex-grow" data-v-62b01795${_scopeId}><div class="max-w-screen-xl w-full mx-auto" data-v-62b01795${_scopeId}><div class="page-header flex items-center" data-v-62b01795${_scopeId}><div class="inline-flex" data-v-62b01795${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="w-6 h-6 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-62b01795${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-62b01795${_scopeId2}></path></svg><span data-v-62b01795${_scopeId2}>\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E</span>`);
                } else {
                  return [
                    (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                      class: "w-6 h-6 mt-[2px]",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      vue_cjs_prod.createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M15 19l-7-7 7-7"
                      })
                    ])),
                    vue_cjs_prod.createVNode("span", null, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<code class="text-grey-text text-[24px] ml-[5px] mr-[5px]" data-v-62b01795${_scopeId}> / </code>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
              to: "/catalog",
              class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
            }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-62b01795${_scopeId2}>\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438</span>`);
                } else {
                  return [
                    vue_cjs_prod.createVNode("span", null, "\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<code class="text-grey-text text-[24px] ml-[5px] mr-[5px]" data-v-62b01795${_scopeId}> / </code>`);
            if (vue_cjs_prod.unref(productSection)) {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
                to: {
                  path: `/catalog/${vue_cjs_prod.unref(productSection).attributes.slug}`
                },
                class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
              }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-62b01795${_scopeId2}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(productSection).attributes.title)}</span>`);
                  } else {
                    return [
                      vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(productSection).attributes.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<code class="text-grey-text text-[24px] ml-[5px] mr-[5px]" data-v-62b01795${_scopeId}> / </code>`);
            if (vue_cjs_prod.unref(productCategory)) {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
                to: {
                  path: `/categories/${vue_cjs_prod.unref(productCategory).attributes.slug}`
                },
                class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
              }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-62b01795${_scopeId2}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(productCategory).attributes.title)}</span>`);
                  } else {
                    return [
                      vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(productCategory).attributes.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<code class="text-grey-text text-[24px] ml-[5px] mr-[5px]" data-v-62b01795${_scopeId}> / </code>`);
            if (vue_cjs_prod.unref(productCategory) && vue_cjs_prod.unref(productSubcategory)) {
              _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
                to: {
                  path: `/categories/${vue_cjs_prod.unref(productCategory).attributes.slug}/${vue_cjs_prod.unref(productSubcategory).attributes.slug}`
                },
                class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
              }, {
                default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-62b01795${_scopeId2}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(productSubcategory).attributes.title)}</span>`);
                  } else {
                    return [
                      vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(productSubcategory).attributes.title), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<code class="text-grey-text text-[24px] ml-[5px] mr-[5px]" data-v-62b01795${_scopeId}> / </code><span disabled class="breadcrumb flex items-center text-[21px] text-grey-text cursor-default" data-v-62b01795${_scopeId}></span></div></div><div class="product flex items-start gap-[190px]" data-v-62b01795${_scopeId}><div class="product-card flex-grow" data-v-62b01795${_scopeId}><div class="product-title text-[36px] font-bold text-secondary" data-v-62b01795${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(productTitle))}</div><div class="product-content flex items-start justify-between" data-v-62b01795${_scopeId}><div class="product-info" data-v-62b01795${_scopeId}><div class="product-article text-grey-text mb-[40px]" data-v-62b01795${_scopeId}> \u041A\u043E\u0434 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430: ${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(productArticle))}</div><ul class="product-specifics flex flex-col text-left justify-start items-start gap-[15px]" data-v-62b01795${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(productTags), (tag) => {
              _push2(`<li class="product-specific px-[13px] py-[10px] border-[2px] rounded-[4px] border-primary text-primary" data-v-62b01795${_scopeId}>${serverRenderer.exports.ssrInterpolate(tag.attributes.name)}</li>`);
            });
            _push2(`<!--]--></ul></div><div class="product-image" data-v-62b01795${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(ImageViewer, {
              modelValue: vue_cjs_prod.unref(productImages),
              "onUpdate:modelValue": ($event) => vue_cjs_prod.isRef(productImages) ? productImages.value = $event : null
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><aside class="product-action w-1/5" data-v-62b01795${_scopeId}><div class="flex flex-col" data-v-62b01795${_scopeId}><span class="text-[36px] font-bold text-secondary" data-v-62b01795${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(productPrice))} \u0440\u0443\u0431.</span>`);
            if (vue_cjs_prod.unref(productColors) && vue_cjs_prod.unref(productColors).length) {
              _push2(`<div class="divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full" data-v-62b01795${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex flex-col" data-v-62b01795${_scopeId}><span class="text-[21px] text-secondary mb-[10px]" data-v-62b01795${_scopeId}>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0446\u0432\u0435\u0442</span><div class="grid grid-cols-2 gap-[10px]" data-v-62b01795${_scopeId}><!--[-->`);
            serverRenderer.exports.ssrRenderList(vue_cjs_prod.unref(productColors), (color) => {
              _push2(`<button class="${serverRenderer.exports.ssrRenderClass([{
                "opacity-50": color.disabled,
                "active:bg-opacity-40": !color.disabled,
                "active:border-primary": !color.disabled,
                "active:border-opacity-0": !color.disabled,
                "cursor-not-allowed": color.disabled,
                disabled: color.disabled,
                "hover:bg-primary": !color.disabled,
                "hover:bg-opacity-20": !color.disabled && selectedColor.value.hexColor !== color.hexColor,
                "bg-grey-light": selectedColor.value.hexColor !== color.hexColor,
                "bg-primary text-white border-primary border-opacity-90 bg-opacity-90 cursor-default border-4": selectedColor.value.hexColor === color.hexColor
              }, "w-[120px] h-[80px] rounded-[4px] flex flex-col justify-center items-center transition-colors"])}" data-v-62b01795${_scopeId}><span class="w-[36px] h-[36px] rounded-[4px] shadow-product-color" style="${serverRenderer.exports.ssrRenderStyle({
                backgroundColor: `${color.hexColor}`
              })}" data-v-62b01795${_scopeId}></span><span data-v-62b01795${_scopeId}>${serverRenderer.exports.ssrInterpolate(color.name)}</span></button>`);
            });
            _push2(`<!--]--></div></div><div class="divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full" data-v-62b01795${_scopeId}></div><div class="w-full mb-[20px]" data-v-62b01795${_scopeId}><div class="text-[21px] text-secondary mb-[10px]" data-v-62b01795${_scopeId}>\u041A\u043E\u043B-\u0432\u043E</div><div class="flex justify-between items-center gap-[10px] h-[50px]" data-v-62b01795${_scopeId}><button class="${serverRenderer.exports.ssrRenderClass([{
              "cursor-pointer hover:text-white hover:bg-orange": !vue_cjs_prod.unref(productInCart)
            }, "w-full h-full p-[2px] text-grey-text transition-colors rounded-[4px] bg-grey-light"])}"${serverRenderer.exports.ssrIncludeBooleanAttr(vue_cjs_prod.unref(productInCart)) ? " disabled" : ""} data-v-62b01795${_scopeId}><svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-62b01795${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" data-v-62b01795${_scopeId}></path></svg></button><input${serverRenderer.exports.ssrRenderAttr("value", selectedAmount.value)} class="w-full h-full text-center text-[26px] focus:border-primary focus:border-[2px] outline-none text-secondary border-grey-light border-[2px] rounded-[4px]"${serverRenderer.exports.ssrRenderAttr("onchange", setCorrectNumber())}${serverRenderer.exports.ssrIncludeBooleanAttr(vue_cjs_prod.unref(productInCart)) ? " disabled" : ""} data-v-62b01795${_scopeId}><button class="${serverRenderer.exports.ssrRenderClass([{
              "cursor-pointer hover:bg-primary hover:text-white": !vue_cjs_prod.unref(productInCart)
            }, "w-full h-full p-[2px] text-grey-text transition-colors rounded-[4px] bg-grey-light"])}"${serverRenderer.exports.ssrIncludeBooleanAttr(vue_cjs_prod.unref(productInCart)) ? " disabled" : ""} data-v-62b01795${_scopeId}><svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-62b01795${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-62b01795${_scopeId}></path></svg></button></div></div><button class="${serverRenderer.exports.ssrRenderClass([{
              "bg-grey-light text-secondary hover:bg-primary hover:bg-opacity-50": vue_cjs_prod.unref(productInCart)
            }, "bg-primary h-[70px] text-[21px] font-medium text-white rounded-[4px] transition-all"])}" data-v-62b01795${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(addToCartButton))}</button></div></aside></div></div></main></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "flex-grow" }, [
                vue_cjs_prod.createVNode("main", { class: "mt-[102px] mb-[40px] flex-grow" }, [
                  vue_cjs_prod.createVNode("div", { class: "max-w-screen-xl w-full mx-auto" }, [
                    vue_cjs_prod.createVNode("div", { class: "page-header flex items-center" }, [
                      vue_cjs_prod.createVNode("div", { class: "inline-flex" }, [
                        vue_cjs_prod.createVNode(_component_NuxtLink, {
                          to: "/",
                          class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                              class: "w-6 h-6 mt-[2px]",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              vue_cjs_prod.createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M15 19l-7-7 7-7"
                              })
                            ])),
                            vue_cjs_prod.createVNode("span", null, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")
                          ]),
                          _: 1
                        }),
                        vue_cjs_prod.createVNode("code", { class: "text-grey-text text-[24px] ml-[5px] mr-[5px]" }, " / "),
                        vue_cjs_prod.createVNode(_component_NuxtLink, {
                          to: "/catalog",
                          class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode("span", null, "\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438")
                          ]),
                          _: 1
                        }),
                        vue_cjs_prod.createVNode("code", { class: "text-grey-text text-[24px] ml-[5px] mr-[5px]" }, " / "),
                        vue_cjs_prod.unref(productSection) ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_NuxtLink, {
                          key: 0,
                          to: {
                            path: `/catalog/${vue_cjs_prod.unref(productSection).attributes.slug}`
                          },
                          class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(productSection).attributes.title), 1)
                          ]),
                          _: 1
                        }, 8, ["to"])) : vue_cjs_prod.createCommentVNode("", true),
                        vue_cjs_prod.createVNode("code", { class: "text-grey-text text-[24px] ml-[5px] mr-[5px]" }, " / "),
                        vue_cjs_prod.unref(productCategory) ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_NuxtLink, {
                          key: 1,
                          to: {
                            path: `/categories/${vue_cjs_prod.unref(productCategory).attributes.slug}`
                          },
                          class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(productCategory).attributes.title), 1)
                          ]),
                          _: 1
                        }, 8, ["to"])) : vue_cjs_prod.createCommentVNode("", true),
                        vue_cjs_prod.createVNode("code", { class: "text-grey-text text-[24px] ml-[5px] mr-[5px]" }, " / "),
                        vue_cjs_prod.unref(productCategory) && vue_cjs_prod.unref(productSubcategory) ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_NuxtLink, {
                          key: 2,
                          to: {
                            path: `/categories/${vue_cjs_prod.unref(productCategory).attributes.slug}/${vue_cjs_prod.unref(productSubcategory).attributes.slug}`
                          },
                          class: "breadcrumb flex items-center text-[21px] text-grey-text hover:text-orange"
                        }, {
                          default: vue_cjs_prod.withCtx(() => [
                            vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(productSubcategory).attributes.title), 1)
                          ]),
                          _: 1
                        }, 8, ["to"])) : vue_cjs_prod.createCommentVNode("", true),
                        vue_cjs_prod.createVNode("code", { class: "text-grey-text text-[24px] ml-[5px] mr-[5px]" }, " / "),
                        vue_cjs_prod.createVNode("span", {
                          disabled: "",
                          class: "breadcrumb flex items-center text-[21px] text-grey-text cursor-default"
                        })
                      ])
                    ]),
                    vue_cjs_prod.createVNode("div", { class: "product flex items-start gap-[190px]" }, [
                      vue_cjs_prod.createVNode("div", { class: "product-card flex-grow" }, [
                        vue_cjs_prod.createVNode("div", { class: "product-title text-[36px] font-bold text-secondary" }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(productTitle)), 1),
                        vue_cjs_prod.createVNode("div", { class: "product-content flex items-start justify-between" }, [
                          vue_cjs_prod.createVNode("div", { class: "product-info" }, [
                            vue_cjs_prod.createVNode("div", { class: "product-article text-grey-text mb-[40px]" }, " \u041A\u043E\u0434 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430: " + vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(productArticle)), 1),
                            vue_cjs_prod.createVNode("ul", { class: "product-specifics flex flex-col text-left justify-start items-start gap-[15px]" }, [
                              (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(productTags), (tag) => {
                                return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("li", { class: "product-specific px-[13px] py-[10px] border-[2px] rounded-[4px] border-primary text-primary" }, vue_cjs_prod.toDisplayString(tag.attributes.name), 1);
                              }), 256))
                            ])
                          ]),
                          vue_cjs_prod.createVNode("div", { class: "product-image" }, [
                            vue_cjs_prod.createVNode(ImageViewer, {
                              modelValue: vue_cjs_prod.unref(productImages),
                              "onUpdate:modelValue": ($event) => vue_cjs_prod.isRef(productImages) ? productImages.value = $event : null
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ])
                      ]),
                      vue_cjs_prod.createVNode("aside", { class: "product-action w-1/5" }, [
                        vue_cjs_prod.createVNode("div", { class: "flex flex-col" }, [
                          vue_cjs_prod.createVNode("span", { class: "text-[36px] font-bold text-secondary" }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(productPrice)) + " \u0440\u0443\u0431.", 1),
                          vue_cjs_prod.unref(productColors) && vue_cjs_prod.unref(productColors).length ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("div", {
                            key: 0,
                            class: "divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full"
                          })) : vue_cjs_prod.createCommentVNode("", true),
                          vue_cjs_prod.createVNode("div", { class: "flex flex-col" }, [
                            vue_cjs_prod.createVNode("span", { class: "text-[21px] text-secondary mb-[10px]" }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0446\u0432\u0435\u0442"),
                            vue_cjs_prod.createVNode("div", { class: "grid grid-cols-2 gap-[10px]" }, [
                              (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(vue_cjs_prod.unref(productColors), (color) => {
                                return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("button", {
                                  class: [{
                                    "opacity-50": color.disabled,
                                    "active:bg-opacity-40": !color.disabled,
                                    "active:border-primary": !color.disabled,
                                    "active:border-opacity-0": !color.disabled,
                                    "cursor-not-allowed": color.disabled,
                                    disabled: color.disabled,
                                    "hover:bg-primary": !color.disabled,
                                    "hover:bg-opacity-20": !color.disabled && selectedColor.value.hexColor !== color.hexColor,
                                    "bg-grey-light": selectedColor.value.hexColor !== color.hexColor,
                                    "bg-primary text-white border-primary border-opacity-90 bg-opacity-90 cursor-default border-4": selectedColor.value.hexColor === color.hexColor
                                  }, "w-[120px] h-[80px] rounded-[4px] flex flex-col justify-center items-center transition-colors"],
                                  onClick: ($event) => selectColor(color)
                                }, [
                                  vue_cjs_prod.createVNode("span", {
                                    class: "w-[36px] h-[36px] rounded-[4px] shadow-product-color",
                                    style: {
                                      backgroundColor: `${color.hexColor}`
                                    }
                                  }, null, 4),
                                  vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(color.name), 1)
                                ], 10, ["onClick"]);
                              }), 256))
                            ])
                          ]),
                          vue_cjs_prod.createVNode("div", { class: "divider my-[20px] w-full h-[2px] bg-grey-light shadow-divider rounded-full" }),
                          vue_cjs_prod.createVNode("div", { class: "w-full mb-[20px]" }, [
                            vue_cjs_prod.createVNode("div", { class: "text-[21px] text-secondary mb-[10px]" }, "\u041A\u043E\u043B-\u0432\u043E"),
                            vue_cjs_prod.createVNode("div", { class: "flex justify-between items-center gap-[10px] h-[50px]" }, [
                              vue_cjs_prod.createVNode("button", {
                                class: ["w-full h-full p-[2px] text-grey-text transition-colors rounded-[4px] bg-grey-light", {
                                  "cursor-pointer hover:text-white hover:bg-orange": !vue_cjs_prod.unref(productInCart)
                                }],
                                disabled: vue_cjs_prod.unref(productInCart),
                                onClick: ($event) => selectAmount(-1)
                              }, [
                                (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                  class: "w-full h-full",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  vue_cjs_prod.createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M20 12H4"
                                  })
                                ]))
                              ], 10, ["disabled", "onClick"]),
                              vue_cjs_prod.withDirectives(vue_cjs_prod.createVNode("input", {
                                "onUpdate:modelValue": ($event) => selectedAmount.value = $event,
                                class: "w-full h-full text-center text-[26px] focus:border-primary focus:border-[2px] outline-none text-secondary border-grey-light border-[2px] rounded-[4px]",
                                onchange: setCorrectNumber(),
                                disabled: vue_cjs_prod.unref(productInCart),
                                onBlur: ($event) => setNotNullNumber()
                              }, null, 40, ["onUpdate:modelValue", "onchange", "disabled", "onBlur"]), [
                                [vue_cjs_prod.vModelText, selectedAmount.value]
                              ]),
                              vue_cjs_prod.createVNode("button", {
                                class: ["w-full h-full p-[2px] text-grey-text transition-colors rounded-[4px] bg-grey-light", {
                                  "cursor-pointer hover:bg-primary hover:text-white": !vue_cjs_prod.unref(productInCart)
                                }],
                                disabled: vue_cjs_prod.unref(productInCart),
                                onClick: ($event) => selectAmount(1)
                              }, [
                                (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("svg", {
                                  class: "w-full h-full",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                }, [
                                  vue_cjs_prod.createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                  })
                                ]))
                              ], 10, ["disabled", "onClick"])
                            ])
                          ]),
                          vue_cjs_prod.createVNode("button", {
                            class: ["bg-primary h-[70px] text-[21px] font-medium text-white rounded-[4px] transition-all", {
                              "bg-grey-light text-secondary hover:bg-primary hover:bg-opacity-50": vue_cjs_prod.unref(productInCart)
                            }],
                            onMouseenter: ($event) => toggleRemoveFromCart(true),
                            onMouseleave: ($event) => toggleRemoveFromCart(false),
                            onClick: ($event) => cartHandler()
                          }, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(addToCartButton)), 43, ["onMouseenter", "onMouseleave", "onClick"])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[article].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _article_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-62b01795"]]);
const _article_$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _article_
}, Symbol.toStringTag, { value: "Module" }));

export { entry$1 as default };
//# sourceMappingURL=server.mjs.map
