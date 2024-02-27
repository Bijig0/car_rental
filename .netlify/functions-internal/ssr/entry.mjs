import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CAi3YXuj.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BgVVcfxZ.mjs');
const _page1 = () => import('./chunks/contact_DMDhNBnM.mjs');
const _page2 = () => import('./chunks/_listing__XA362LiX.mjs');
const _page3 = () => import('./chunks/listings_DSCGCeX7.mjs');
const _page4 = () => import('./chunks/index_DarlJtQx.mjs');
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
    "middlewareSecret": "0c16e27d-65aa-4f43-879f-cd17b39a0e8a"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
