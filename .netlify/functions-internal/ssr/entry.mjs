import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D8HxgeNU.mjs';
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
    "middlewareSecret": "86981050-a8c8-4834-acdd-6bad101a3118"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
