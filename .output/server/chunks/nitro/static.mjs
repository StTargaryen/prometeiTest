import { eventHandler, createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3c2e-+6P2giJcDPmUub9+PUYuO3eUQTw\"",
    "mtime": "2022-05-07T00:10:29.489Z",
    "path": "../public/favicon.ico"
  },
  "/_nuxt/_article_-fa33cc8d.mjs": {
    "type": "application/javascript",
    "etag": "\"2c8e-ecEw+gKfm2o36pomvSr7dJcdfAw\"",
    "mtime": "2022-05-07T00:10:29.489Z",
    "path": "../public/_nuxt/_article_-fa33cc8d.mjs"
  },
  "/_nuxt/_slug_-c65860bf.mjs": {
    "type": "application/javascript",
    "etag": "\"bd8-/yOk8sgwO/JTZ9Srh6NJrUTp7B4\"",
    "mtime": "2022-05-07T00:10:29.489Z",
    "path": "../public/_nuxt/_slug_-c65860bf.mjs"
  },
  "/_nuxt/asyncData-c2770651.mjs": {
    "type": "application/javascript",
    "etag": "\"8b1-O2P5ZAoLm3mSWJxioz8hLxQTzxs\"",
    "mtime": "2022-05-07T00:10:29.488Z",
    "path": "../public/_nuxt/asyncData-c2770651.mjs"
  },
  "/_nuxt/entry-6033a8be.mjs": {
    "type": "application/javascript",
    "etag": "\"306e7-ALUeHo03SPyk4HxJrCFga61X05Q\"",
    "mtime": "2022-05-07T00:10:29.488Z",
    "path": "../public/_nuxt/entry-6033a8be.mjs"
  },
  "/_nuxt/entry.c4ba62b8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5b6f-fG2rJsIWzJtPSZX2cT43lAVcElM\"",
    "mtime": "2022-05-07T00:10:29.488Z",
    "path": "../public/_nuxt/entry.c4ba62b8.css"
  },
  "/_nuxt/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3c2e-+6P2giJcDPmUub9+PUYuO3eUQTw\"",
    "mtime": "2022-05-07T00:10:29.488Z",
    "path": "../public/_nuxt/favicon.ico"
  },
  "/_nuxt/fetch-00bb1a3c.mjs": {
    "type": "application/javascript",
    "etag": "\"179f-EuBWlj8/HLiw5I8xU431aOv8/NE\"",
    "mtime": "2022-05-07T00:10:29.487Z",
    "path": "../public/_nuxt/fetch-00bb1a3c.mjs"
  },
  "/_nuxt/gql-e9cfd887.mjs": {
    "type": "application/javascript",
    "etag": "\"ad6-dInVdsLiSsVwJeEFWdWgdUk4ZYM\"",
    "mtime": "2022-05-07T00:10:29.487Z",
    "path": "../public/_nuxt/gql-e9cfd887.mjs"
  },
  "/_nuxt/index-092ab3e4.mjs": {
    "type": "application/javascript",
    "etag": "\"15bc-lSZGAeT/kN0IL5AjUJuoYeyYPSs\"",
    "mtime": "2022-05-07T00:10:29.487Z",
    "path": "../public/_nuxt/index-092ab3e4.mjs"
  },
  "/_nuxt/index-21af7147.mjs": {
    "type": "application/javascript",
    "etag": "\"135-aCA3Kak4rNzIqo2WQwEznfddU8E\"",
    "mtime": "2022-05-07T00:10:29.486Z",
    "path": "../public/_nuxt/index-21af7147.mjs"
  },
  "/_nuxt/index-31438e8c.mjs": {
    "type": "application/javascript",
    "etag": "\"c09-XZWJMsEgrJuQDiub0K4AXRplABg\"",
    "mtime": "2022-05-07T00:10:29.486Z",
    "path": "../public/_nuxt/index-31438e8c.mjs"
  },
  "/_nuxt/index-5487ebcc.mjs": {
    "type": "application/javascript",
    "etag": "\"f4f-lEO9q4cx3M2arf00pusWrXDdi3A\"",
    "mtime": "2022-05-07T00:10:29.486Z",
    "path": "../public/_nuxt/index-5487ebcc.mjs"
  },
  "/_nuxt/index-5b6323e5.mjs": {
    "type": "application/javascript",
    "etag": "\"139-hWRFJz8AI/BKJSM0ShtfVBBQQlc\"",
    "mtime": "2022-05-07T00:10:29.486Z",
    "path": "../public/_nuxt/index-5b6323e5.mjs"
  },
  "/_nuxt/index-9572f07e.mjs": {
    "type": "application/javascript",
    "etag": "\"16b2-tu7fAquSScZ1wh+r53L7+wZ0QKE\"",
    "mtime": "2022-05-07T00:10:29.486Z",
    "path": "../public/_nuxt/index-9572f07e.mjs"
  },
  "/_nuxt/index-a092be5c.mjs": {
    "type": "application/javascript",
    "etag": "\"d42-vtDopxlhbVnH19W6CjGcXbWUgbc\"",
    "mtime": "2022-05-07T00:10:29.485Z",
    "path": "../public/_nuxt/index-a092be5c.mjs"
  },
  "/_nuxt/index-b93b768a.mjs": {
    "type": "application/javascript",
    "etag": "\"13a-dVGXDDwrLel0cyYZIDEGH+ffiA4\"",
    "mtime": "2022-05-07T00:10:29.485Z",
    "path": "../public/_nuxt/index-b93b768a.mjs"
  },
  "/_nuxt/index-c857d9c8.mjs": {
    "type": "application/javascript",
    "etag": "\"837-4uHGO3Ijt+VrRKZP/wdJMP2YH20\"",
    "mtime": "2022-05-07T00:10:29.485Z",
    "path": "../public/_nuxt/index-c857d9c8.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"1016-HqLvMUx/Y/m6ySqL51CK8o2R+Y0\"",
    "mtime": "2022-05-07T00:10:29.485Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/shop-74db6147.mjs": {
    "type": "application/javascript",
    "etag": "\"4931-WgV/b1JBW3vZETz8XkF9D8mj68M\"",
    "mtime": "2022-05-07T00:10:29.484Z",
    "path": "../public/_nuxt/shop-74db6147.mjs"
  },
  "/_nuxt/shop.34c92c56.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"818-G10Z3IGu3s7H7sG17X6dS5ys4E0\"",
    "mtime": "2022-05-07T00:10:29.484Z",
    "path": "../public/_nuxt/shop.34c92c56.css"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));
function readAsset (id) {
  return promises.readFile(resolve(mainDir, assets[id].path)).catch(() => {})
}

const publicAssetBases = ["/_nuxt"];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const _static = eventHandler(async (event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end("Not Modified (etag)");
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end("Not Modified (mtime)");
      return;
    }
  }
  if (asset.type) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  const contents = await readAsset(id);
  event.res.end(contents);
});

export { _static as default };
//# sourceMappingURL=static.mjs.map
