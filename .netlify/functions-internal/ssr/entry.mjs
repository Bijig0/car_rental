import { renderers } from './renderers.mjs';
import { manifest } from './manifest_IeBMjN6N.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CBRgiINV.mjs');
const _page1 = () => import('./chunks/contact_BWAvf-R5.mjs');
const _page2 = () => import('./chunks/_listing__BUDk3XmK.mjs');
const _page3 = () => import('./chunks/listings_CW6o2w4b.mjs');
const _page4 = () => import('./chunks/index_BigjNNKK.mjs');
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
    "middlewareSecret": "088900b2-2444-401a-a16e-bd1125b3267f"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
