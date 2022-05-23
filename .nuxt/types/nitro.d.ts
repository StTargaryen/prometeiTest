// Generated by nitro
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/stuff': Awaited<ReturnType<typeof import('../../server/api/stuff').default>>
    '/api/products': Awaited<ReturnType<typeof import('../../server/api/products').default>>
    '/api/categories': Awaited<ReturnType<typeof import('../../server/api/categories').default>>
    '/__nuxt_error': Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>
  }
}
declare global {
  const defineCachedFunction: typeof import('#internal/nitro')['defineCachedFunction']
  const defineCachedEventHandler: typeof import('#internal/nitro')['defineCachedEventHandler']
  const cachedFunction: typeof import('#internal/nitro')['cachedFunction']
  const cachedEventHandler: typeof import('#internal/nitro')['cachedEventHandler']
  const useRuntimeConfig: typeof import('#internal/nitro')['useRuntimeConfig']
  const useStorage: typeof import('#internal/nitro')['useStorage']
  const useNitroApp: typeof import('#internal/nitro')['useNitroApp']
  const defineNitroPlugin: typeof import('#internal/nitro')['defineNitroPlugin']
  const nitroPlugin: typeof import('#internal/nitro')['nitroPlugin']
  const defineEventHandler: typeof import('h3')['defineEventHandler']
  const defineLazyEventHandler: typeof import('h3')['defineLazyEventHandler']
  const eventHandler: typeof import('h3')['eventHandler']
  const lazyEventHandler: typeof import('h3')['lazyEventHandler']
  const dynamicEventHandler: typeof import('h3')['dynamicEventHandler']
  const appendHeader: typeof import('h3')['appendHeader']
  const assertMethod: typeof import('h3')['assertMethod']
  const createError: typeof import('h3')['createError']
  const handleCacheHeaders: typeof import('h3')['handleCacheHeaders']
  const isMethod: typeof import('h3')['isMethod']
  const sendRedirect: typeof import('h3')['sendRedirect']
  const useCookies: typeof import('h3')['useCookies']
  const useCookie: typeof import('h3')['useCookie']
  const deleteCookie: typeof import('h3')['deleteCookie']
  const setCookie: typeof import('h3')['setCookie']
  const useBody: typeof import('h3')['useBody']
  const useMethod: typeof import('h3')['useMethod']
  const useQuery: typeof import('h3')['useQuery']
  const useRawBody: typeof import('h3')['useRawBody']
}
export {}