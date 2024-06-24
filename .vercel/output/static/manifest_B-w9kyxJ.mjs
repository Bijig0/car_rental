import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro/server_ExnHLPWg.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/static","routes":[{"file":"file:///Users/a61403/Desktop/car_rental/.vercel/output/static/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/a61403/Desktop/car_rental/.vercel/output/static/faq/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/a61403/Desktop/car_rental/.vercel/output/static/listings/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/listings","isIndex":false,"type":"page","pattern":"^\\/listings\\/?$","segments":[[{"content":"listings","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/listings.astro","pathname":"/listings","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/a61403/Desktop/car_rental/.vercel/output/static/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/a61403/Desktop/car_rental/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/a61403/Desktop/car_rental/src/pages/listings/[listing].astro",{"propagation":"none","containsHead":true}],["/Users/a61403/Desktop/car_rental/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/a61403/Desktop/car_rental/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["/Users/a61403/Desktop/car_rental/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/a61403/Desktop/car_rental/src/pages/listings.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/listings/[listing]@_@astro":"pages/listings/_listing_.astro.mjs","\u0000@astro-page:src/pages/listings@_@astro":"pages/listings.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_B-w9kyxJ.mjs","/Users/a61403/Desktop/car_rental/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/node_modules/@sanity/astro/dist/studio/studio-route.astro":"chunks/studio-route_ByuzlzEx.mjs","/src/pages/contact.astro":"chunks/contact_9HI3NlHH.mjs","/src/pages/faq.astro":"chunks/faq_8o3ujfbd.mjs","/src/pages/listings/[listing].astro":"chunks/_listing__CQxx2Ico.mjs","/src/pages/listings.astro":"chunks/listings_DZdIQ5DM.mjs","/src/pages/index.astro":"chunks/index_DsfyKfXg.mjs","/Users/a61403/Desktop/car_rental/src/metadata.json":"chunks/metadata_BbPXXa3r.mjs","/Users/a61403/Desktop/car_rental/src/components/Features":"_astro/Features.C-jYk12W.js","/Users/a61403/Desktop/car_rental/src/components/ContactForm":"_astro/ContactForm.CFDlfvLN.js","/Users/a61403/Desktop/car_rental/src/components/EmailForm":"_astro/EmailForm.BOL9ARON.js","/Users/a61403/Desktop/car_rental/src/components/FAQ":"_astro/FAQ.CApryKi-.js","/Users/a61403/Desktop/car_rental/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.CLh3CTgo.js","/Users/a61403/Desktop/car_rental/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.CkFMtGRC.js","/Users/a61403/Desktop/car_rental/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.DViWvb7D.js","/Users/a61403/Desktop/car_rental/node_modules/@sanity/vision/lib/_chunks-es/resources.mjs":"_astro/resources.DFCnvBog.js","@astrojs/react/client.js":"_astro/client.DUX4Rtma.js","/Users/a61403/Desktop/car_rental/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.BMVeDsnT.js","/Users/a61403/Desktop/car_rental/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.DpwqohRK.js","/Users/a61403/Desktop/car_rental/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.DyWnuS-f.js","/Users/a61403/Desktop/car_rental/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.C2sueZ4J.js","/Users/a61403/Desktop/car_rental/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.D1ExLOpx.js","/Users/a61403/Desktop/car_rental/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.mjs":"_astro/SanityVision.DChEjX5u.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///Users/a61403/Desktop/car_rental/.vercel/output/static/contact/index.html","/file:///Users/a61403/Desktop/car_rental/.vercel/output/static/faq/index.html","/file:///Users/a61403/Desktop/car_rental/.vercel/output/static/listings/index.html","/file:///Users/a61403/Desktop/car_rental/.vercel/output/static/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
