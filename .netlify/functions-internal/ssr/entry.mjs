import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BNtwRZVc.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BlaDeWNA.mjs');
const _page1 = () => import('./chunks/contact_B4ho_-tt.mjs');
const _page2 = () => import('./chunks/_listing__BhlLLydy.mjs');
const _page3 = () => import('./chunks/listings_CSq8APon.mjs');
const _page4 = () => import('./chunks/index_CaDiqrP3.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/contact.astro", _page1],
    ["src/pages/listings/[listing].astro", _page2],
    ["src/pages/listings.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "831b1e64-a712-442f-b977-3946210d7e06"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
