import { c as createAstro, d as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, A as AstroError, g as UnknownContentCollectionError, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent, k as renderComponent, u as unescapeHTML, m as maybeRenderHead, l as addAttribute } from '../astro_lQ-cMOEa.mjs';
import 'kleur/colors';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import path from 'path';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useCollapse } from 'react-collapsed';
import 'clsx';
import { assert } from 'console';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const metadata = await Astro2.glob(/* #__PURE__ */ Object.assign({"../metadata.json": () => import('../metadata_BbPXXa3r.mjs')}), () => "../metadata.json");
  assert(metadata.length === 1);
  const phoneNumber = metadata[0]["phoneNumber"];
  const email = metadata[0]["email"];
  const address = metadata[0]["address"];
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><!--required meta tags--><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><!--twitter og--><meta name="twitter:site" content="@gifleet"><meta name="twitter:creator" content="@gifleet"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Gifleet Melbourne Car Rental"><meta name="twitter:description" content="Gifleet Melbourne Car Rental"><meta name="twitter:image" content="#"><!--facebook og--><meta property="og:url" content="#"><meta name="twitter:title" content="Gifleet Melbourne Car Rental"><meta property="og:description" content="Gifleet Melbourne Car Rental"><meta property="og:image" content="#"><meta property="og:image:secure_url" content="#"><meta property="og:image:type" content="image/png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="600"><!--meta--><meta name="description" content="Gifleet Melbourne Car Rental"><meta name="author" content="Gifleet"><!--favicon icon--><link rel="icon" href="img/favicon.png" type="image/png" sizes="16x16"><!--title--><title>Gifleet Melbourne Car Rental</title><!--build:css--><link rel="stylesheet" href="/dist/css/main.css"><!-- endbuild --><!--custom css--><link rel="stylesheet" href="/dist/css/custom.css">', `</head> <body> <!--header area start--> <header class="header-style-one header-sticky"> <div class="at_topbar d-none d-sm-block bg-white"> <div class="container"> <div class="row align-items-center"> <div class="col-xl-4 col-lg-5 col-8"> <div class="tp-info"> <p class="mb-0">Welcome... Melbourne's Prime Car Rental Shop</p> </div> </div> <div class="col-xl-8 col-lg-7 col-4"> <div class="tp-info-wrapper d-flex align-items-center justify-content-end"> <div class="d-none tp-info d-xl-inline-flex align-items-center"> <span class="icon-wrapper me-2"> <i class="flaticon-location"></i> </span> <p class="mb-0">`, '</p> </div> <div class="tp-info d-inline-flex align-items-center"> <span class="icon-wrapper me-2"> <i class="flaticon-phone-call"></i> </span> <p class="mb-0">Whatsapp: ', '</p> </div> <div class="d-none tp-info d-xl-inline-flex align-items-center"> <span class="icon-wrapper me-2"> <i class="flaticon-email"></i> </span> <p class="mb-0">', '</p> </div> </div> </div> </div> </div> </div> <div class="at_header_nav"> <div class="container"> <div class="row align-items-center"> <div class="col-6 col-lg-3"> <div class="logo-wrapper"> <a href="/"><img src="/img/logo.png" alt="logo"></a> </div> </div> <div class="col-6 col-lg-9"> <div class="at_header_right d-flex align-items-center justify-content-end"> <nav class="at_nav_menu d-none d-lg-block"> <ul> <li class=""> <a href="/">Home</a> </li> <li> <a href="/#:~:text=Land%20Rover%20Sport%202018">Listings</a> </li> <li class=""> <a href="/contact">Contact</a> </li> </ul> </nav> <button class="ofcanvus-toggle header-toggle-btn ms-4 d-none d-lg-block"> <span></span> <span></span> <span></span> </button> <button class="mobile-menu-toggle header-toggle-btn ms-4 d-lg-none"> <span></span> <span></span> <span></span> </button> </div> </div> </div> </div> </div> </header> <!--header area end--> <!--mobile menu start--> <div class="mobile-menu position-fixed bg-white deep-shadow"> <button class="close-menu position-absolute"><i class="fa-solid fa-xmark"></i></button> <a href="index.html" class="logo-wrapper bg-secondary d-block mt-4 p-3 rounded-1 text-center"><img src="/img/logo.png" alt="logo" class="img-fluid"></a> <nav class="mobile-menu-wrapper mt-40"> <ul> <li class=""> <a href="/">Home</a> </li> <li class="has-submenu"> <a href="/#:~:text=Land%20Rover%20Sport%202018">Listing</a> </li> <li><a href="/contact">Contact</a></li> </ul> </nav> <div class="contact-info mt-60"> <h4 class="mb-20">Contact Info</h4> <p>', "</p> <p>Whatsapp: ", "</p> <p>", `</p> <div class="social-contact"> <a href="#"><i class="fab fa-facebook-f"></i></a> <a href="#"><i class="fab fa-twitter"></i></a> <a href="#"><i class="fab fa-instagram"></i></a> <a href="#"><i class="fab fa-linkedin-in"></i></a> </div> </div> </div> <!--mobile menu end--> <!--ofcanvus menu start--> <div class="at_offcanvus_menu position-fixed"> <button class="at-offcanvus-close"><i class="fa-solid fa-xmark"></i></button> <a href="#" class="logo-wrapper d-inline-block mb-5"><img src="/img/logo.png" alt="logo"></a> <div class="offcanvus-content"> <h4 class="mb-4">About Us</h4> <p>
Welcome to Melbourne's premier luxury car rental service, where
          sophistication meets unparalleled customer service. At Gifleet , we
          pride ourselves on providing an exquisite selection of high-end
          vehicles coupled with a dedication to exceeding our customers'
          expectations at every turn.
</p> <p>
So why choose us? At Gifleet, we offer the finest luxury vehicles and
          exceptional service, ensuring complete satisfaction. Experience the
          fusion of luxury and service with Gifleet, creating unforgettable road
          moments.
</p> <!-- <a href="#" class="btn btn-primary mt-4">About Us</a> --> </div> <div class="offcanvus-contact"> <h4 class="mb-4 mt-5">Contact Info</h4> <ul class="at_canvus_address"> <li>`, "</li> <li>Whatsapp: ", "</li> <li>", '</li> </ul> </div> <div class="at_canvus_social mt-4"> <a href="#" class="social-btn"><i class="fab fa-facebook-f"></i></a> <a href="#" class="social-btn"><i class="fab fa-instagram"></i></a> <a href="#" class="social-btn"><i class="fab fa-linkedin"></i></a> <a href="#" class="social-btn"><i class="fab fa-twitter"></i></a> <a href="#" class="social-btn"><i class="fab fa-youtube"></i></a> </div> </div> <!--ofcanvus menu end--> ', ` <footer class="footer-section"> <div class="footer-wrapper pt-120 position-relative z-1 overflow-hidden" data-background="img/shapes/texture-bg.png"> <div class="container"> <div class="row justify-content-between"> <div class="col-xl-5 col-lg-5"> <div class="footer-widget widget-basic"> <h3 class="widget-title-large mb-4 text-white">
Have a Question? Don't hesitate to ask
</h3> <section class="mb-40"> <p>Available Monday-Saturday: 10am-8pm</p> <p>Available Sundays: 11am - 8pm</p> </section> <div class="phone-box d-flex align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white"><i class="flaticon-phone-call"></i></span> <h4 class="text-white ms-3 mb-0">
Whatsapp : `, ' </h4> </div> </div> </div> <div class="col-xl-6 col-lg-7"> <div class="ms-lg-5 ms-xl-0 mt-5 mt-lg-0"> <div class="row align-items-center"> <div class="col-6"> <a href="/" class="footer-logo d-inline-block"><img src="/img/logo.png" alt="logo"></a> </div> </div> <div class="row mt-30"> <div class="col-sm-4"> <div class="footer-widget footer-nav-widget mb-5 mb-sm-0"> <h6 class="widget-title text-white mb-3">\nAbout Company\n</h6> <ul class="footer-nav"> <li><a href="/">Home</a></li> <li> <a href="/#:~:text=Land%20Rover%20Sport%202018">Listings</a> </li> <li><a href="/contact">Contact Us</a></li> </ul> </div> </div> <div class="col-sm-4"> <div class="footer-widget footer-nav-widget mb-5 mb-sm-0"> <h6 class="widget-title text-white mb-3">\nTerms and Privacy\n</h6> <ul class="footer-nav"> <li><a href="#">Terms of Use</a></li> <li><a href="#">Privacy Policy</a></li> </ul> </div> </div> <div class="col-sm-4"> <div class="footer-widget footer-nav-widget mb-5 mb-sm-0"> <h6 class="widget-title text-white mb-3">\nConnect With Us\n</h6> <ul class="footer-nav"> <li class="w-75 d-flex justify-content-between align-items-center"> <a href="#">Facebook</a> <i class="fab fa-facebook-f"></i> </li> <li class="w-75 d-flex justify-content-between align-items-center"> <a href="#">Instagram</a> <i class="fab fa-linkedin"></i> </li> <li class="w-75 d-flex justify-content-between align-items-center"> <a href="#">Turo</a> <i class="fab fa-twitter"></i> </li> </ul> </div> </div> </div> </div> </div> </div> <div class="footer-copyright pb-5"> <div class="container"> <div class="row align-items-center"> <div class="col-sm-7"> <div class="copyright-text"> <p class="mb-0">\n&copy; All rights reserved. Made by <a href="index.html">Gifleet</a> </p> </div> </div> </div> </div> </div> </div> </div> <!--footer section end--> </footer> <!--build:js--> <script src="/js/vendors/jquery.min.js"><\/script> <script src="/js/vendors/jquery-ui.min.js"><\/script> <script src="/js/vendors/popper.min.js"><\/script> <script src="/js/vendors/bootstrap.min.js"><\/script> <script src="/js/vendors/easing.min.js"><\/script> <script src="/js/vendors/swiper.min.js"><\/script> <script src="/js/vendors/massonry.min.js"><\/script> <script src="/js/vendors/bootstrap-slider.js"><\/script> <script src="/js/vendors/magnific-popup.js"><\/script> <script src="/js/vendors/waypoints.js"><\/script> <script src="/js/vendors/appear.js"><\/script> <script src="/js/vendors/counterup.js"><\/script> <script src="/js/vendors/isotop.pkgd.min.js"><\/script> <script src="/js/vendors/date-picker.min.js"><\/script> <script src="/js/vendors/progressbar.js"><\/script> <script src="/js/vendors/slick.js"><\/script> <script src="/js/vendors/countdown.min.js"><\/script> <script src="/js/vendors/custom-scrollbar.js"><\/script> <script src="/js/vendors/price-range.js"><\/script> <script src="/js/vendors/image-rotate.min.js"><\/script> <script src="/js/app.js"><\/script> <!--endbuild--> </body></html>'])), renderHead(), address, phoneNumber, email, address, phoneNumber, email, address, phoneNumber, email, renderSlot($$result, $$slots["body-content"]), phoneNumber);
}, "/Users/a61403/Desktop/car_rental/src/layouts/MainLayout.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/inventory/land-rover-sport-2018.json": () => import('../land-rover-sport-2018_CPyqqaeq.mjs'),"/src/content/inventory/land-rover-velar-2017.json": () => import('../land-rover-velar-2017_DHBVPDZ0.mjs'),"/src/content/inventory/mercedes-c-class-2016.json": () => import('../mercedes-c-class-2016_Dy_FsoRJ.mjs'),"/src/content/inventory/mercedes-x-class-2020.json": () => import('../mercedes-x-class-2020_BRJfLZpp.mjs'),"/src/content/inventory/porsche-911-2013.json": () => import('../porsche-911-2013_BDhv6Zmv.mjs'),"/src/content/inventory/toyota-landcruiser-2022.json": () => import('../toyota-landcruiser-2022_ChoTwkV2.mjs'),"/src/content/inventory/toyota-supra-2019.json": () => import('../toyota-supra-2019_Dosr-EyC.mjs')});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"inventory":{"type":"data","entries":{"land-rover-sport-2018":"/src/content/inventory/land-rover-sport-2018.json","land-rover-velar-2017":"/src/content/inventory/land-rover-velar-2017.json","mercedes-c-class-2016":"/src/content/inventory/mercedes-c-class-2016.json","mercedes-x-class-2020":"/src/content/inventory/mercedes-x-class-2020.json","porsche-911-2013":"/src/content/inventory/porsche-911-2013.json","toyota-landcruiser-2022":"/src/content/inventory/toyota-landcruiser-2022.json","toyota-supra-2019":"/src/content/inventory/toyota-supra-2019.json"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const Description = (props) => {
  const { getCollapseProps, getToggleProps } = useCollapse();
  const paragraphs = props.description.split("\n");
  const firstParagraph = paragraphs[0];
  const remainingParagraphs = paragraphs.slice(1);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { children: firstParagraph }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("section", { ...getCollapseProps(), children: remainingParagraphs.map((paragraph) => {
      return /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { children: paragraph }),
        /* @__PURE__ */ jsx("br", {})
      ] }, paragraph);
    }) }),
    /* @__PURE__ */ jsxs("a", { ...getToggleProps(), className: "iv-expand-btn", children: [
      /* @__PURE__ */ jsx("span", { className: "me-2", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-plus" }) }),
      "Show More"
    ] })
  ] });
};

function splitIntoThree(array) {
  const chunkSize = Math.ceil(array.length / 3);
  let chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    let chunk = array.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  return chunks;
}
const Features = (props) => {
  const featureChunks = splitIntoThree(props.features);
  return /* @__PURE__ */ jsx(Fragment, { children: [0, 1, 2].map((chunkIndex) => {
    const selectedChunk = featureChunks[chunkIndex];
    return /* @__PURE__ */ jsx("div", { className: "col-sm-4", children: /* @__PURE__ */ jsx("ul", { className: "iv_ft_list", children: selectedChunk.map((feature) => {
      return /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { className: "me-2", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-check" }) }),
        feature
      ] });
    }) }) });
  }) });
};

const $$Astro$2 = createAstro();
const $$MightAlsoLikeCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MightAlsoLikeCard;
  const { listing } = Astro2.props;
  const listingDetail = listing.data.data;
  const {
    name,
    drive,
    seats,
    doors,
    fuelUsage,
    fuelType,
    year,
    pricePerDay,
    transmission,
    cc,
    shortName,
    shortFuelType,
    cardImageUrl
  } = listingDetail;
  const listingUrl = `/listings/${listing.id}`;
  return renderTemplate`${maybeRenderHead()}<div class="filter-card-item position-relative overflow-hidden rounded bg-white swiper-slide"> <a href="#" class="icon-btn compare-btn position-absolute"><i class="fa-solid fa-compress"></i></a> <a href="#" class="icon-btn wish-btn position-absolute"><i class="fa-solid fa-heart"></i></a> <span class="date position-absolute">${year}</span> <div class="feature-thumb position-relative overflow-hidden"> <a${addAttribute(listingUrl, "href")}><img${addAttribute(cardImageUrl, "src")} alt="car" class="img-fluid"></a> </div> <div class="filter-card-content"> <div class="price-btn text-end position-relative"> <span class="small-btn-meta">${pricePerDay}/day</span> </div> <a${addAttribute(listingUrl, "href")} class="mt-4 d-block"> <h5>${shortName ?? name} ${year}</h5> </a> <span class="meta-content"><strong>Drive Type:</strong> <a href="#">${drive}</a></span> <div class="mt-2"></div> <div class="card-feature-box d-flex align-items-center mb-4"> <div class="icon-box d-flex align-items-center text-capitalize"> <span class="me-2"><i class="flaticon-speedometer"></i></span> ${cc}cc
</div> <div class="icon-box d-flex align-items-center text-capitalize"> <span class="me-2"><i class="flaticon-steering-wheel"></i></span> ${transmission} </div> <div class="icon-box d-flex align-items-center text-capitalize"> <span class="me-2"><i class="flaticon-petrol"></i></span> ${shortFuelType ?? fuelType} </div> </div> <a${addAttribute(listingUrl, "href")} class="btn outline-btn btn-sm d-block">View Details</a> </div> </div>`;
}, "/Users/a61403/Desktop/car_rental/src/components/MightAlsoLikeCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$CarListingLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CarListingLayout;
  function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
      ans.push(i);
    }
    return ans;
  }
  const { listing } = Astro2.props;
  const listingDetail = listing.data.data;
  const {
    name,
    drive,
    seats,
    doors,
    fuelUsage,
    fuelType,
    year,
    pricePerDay,
    transmission,
    cc,
    shortName,
    shortFuelType,
    features,
    description,
    listingImages
  } = listingDetail;
  const { mainImage, subImagesCount } = listingImages;
  const allInventoryListings = await getCollection("inventory");
  console.log({ mainImage });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "body-content": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="main-wrapper"> <!--breadcrumb section start--> <section class="breadcrumb-section position-relative z-2 overflow-hidden mt--75" data-background="img/shapes/texture-bg.png"> <img src="/img/shapes/tire-print-left.png" alt="tire print" class="position-absolute start-0 z-1 tire-print"> <img src="/img/shapes/tire-print-right.png" alt="tire print" class="position-absolute end-0 z-1 tire-print"> <div class="container"> <div class="row"> <div class="col-sm-12"> <div class="breadcrumb-content-wrapper text-center position-relative z-3"> <h1 class="text-white">${name}</h1> <ol class="breadcrumb justify-content-center"> <li class="breadcrumb-item text-white fw-500"> <a href="index.html">Home</a> </li> <li class="breadcrumb-item text-white fw-500">Page</li> <li class="breadcrumb-item text-white fw-500">
Inventory Details
</li> </ol> </div> </div> </div> </div> </section> <!--breadcrumb section end--> <!--inventory details--> <section class="inventory-details-area ptb-120"> <div class="container"> <div class="row"> <div class="col-xl-8"> <div class="inventory-details"> <div class="product_details widget-padding bg-white rounded"> <span class="btn-meta bg-primary text-white">Available</span> <h3 class="mt-2">${name}</h3> <div class="iv-meta"> <span><i class="fa-solid fa-clock"></i>Listed on: Feb 24 2024</span> </div> <div class="iv_double_slider mt-30"> <div class="iv_thumb_slider swiper"> <div class="swiper-wrapper"> <div class="swiper-slide thumb-wrapper rounded overflow-hidden"> <img${addAttribute(mainImage, "src")} alt="car" class="img-fluid"> </div> ${range(1, subImagesCount).map((index) => {
    const createSubImageUrl = (index2) => {
      return `/img/listing/${listing.id}/${index2}.jpg`;
    };
    const subImageUrl = createSubImageUrl(index);
    return renderTemplate`<div class="swiper-slide thumb-wrapper rounded overflow-hidden"> <img${addAttribute(subImageUrl, "src")} alt="car" class="img-fluid"> </div>`;
  })} </div> </div> <div class="iv_thumb_control_slider swiper mt-3 mt-lg-4"> <div class="swiper-wrapper"> ${range(1, subImagesCount).map((index) => {
    const createSubImageUrl = (index2) => {
      return `/img/listing/${listing.id}/${index2}.jpg`;
    };
    const subImageUrl = createSubImageUrl(index);
    return renderTemplate`<div class="swiper-slide rounded overflow-hidden"> <img${addAttribute(subImageUrl, "src")} alt="car" class="img-fluid"> </div>`;
  })} </div> </div> </div> </div> <div class="product_info bg-white rounded widget-padding mt-30"> <h4 class="mb-5">Key Information</h4> <div class="row g-4"> <div class="col-lg-3 col-md-4 col-sm-6"> <div class="iv_info_item d-flex align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center border rounded flex-shrink-0"> <i class="flaticon-energy"></i> </span> <div class="info_content"> <span class="meta">Transmission</span> <span class="title text-capitalize">${transmission === "auto" ? "Automatic" : transmission}</span> </div> </div> </div> <div class="col-lg-3 col-md-4 col-sm-6"> <div class="iv_info_item d-flex align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center border rounded flex-shrink-0"> <i class="flaticon-engine"></i> </span> <div class="info_content"> <span class="meta">Engine Size</span> <span class="title">${cc} (cc)</span> </div> </div> </div> <div class="col-lg-3 col-md-4 col-sm-6"> <div class="iv_info_item d-flex align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center border rounded flex-shrink-0"> <i class="flaticon-new-year"></i> </span> <div class="info_content"> <span class="meta">Year</span> <span class="title">${year}</span> </div> </div> </div> <div class="col-lg-3 col-md-4 col-sm-6"> <div class="iv_info_item d-flex align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center border rounded flex-shrink-0"> <i class="flaticon-petrol"></i> </span> <div class="info_content"> <span class="meta">Fuel Type</span> <span class="title text-capitalize">${fuelType}</span> </div> </div> </div> <div class="col-lg-3 col-md-4 col-sm-6"> <div class="iv_info_item d-flex align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center border rounded flex-shrink-0"> <i class="flaticon-drive"></i> </span> <div class="info_content"> <span class="meta">Color</span> <span class="title">Black</span> </div> </div> </div> <div class="col-lg-3 col-md-4 col-sm-6"> <div class="iv_info_item d-flex align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center border rounded flex-shrink-0"> <i class="flaticon-gas-tank"></i> </span> <div class="info_content"> <span class="meta">Seats</span> <span class="title">${seats}</span> </div> </div> </div> <div class="col-lg-3 col-md-4 col-sm-6"> <div class="iv_info_item d-flex align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center border rounded flex-shrink-0"> <i class="flaticon-car-door"></i> </span> <div class="info_content"> <span class="meta">Doors</span> <span class="title">${doors} Doors</span> </div> </div> </div> </div> <hr class="mt-40 mb-30"> <h4 class="mb-40">About This Listing</h4> <!-- Description --> ${renderComponent($$result2, "Description", Description, { "client:load": true, "description": description, "client:component-hydration": "load", "client:component-path": "/Users/a61403/Desktop/car_rental/src/components/Description", "client:component-export": "default" })} <hr class="mt-30 mb-30"> <h4 class="mb-30">Car Features</h4> <div class="iv_feature_accordion"> <div class="accordion" id="iv_ft_accordion"> <div class="accordion-item"> <div class="accordion-header"> <a href="#features" class="accordion-button" data-bs-toggle="collapse">Features</a> </div> <div class="accordion-collapse collapse show" id="interior" data-bs-parent="#iv_ft_accordion"> <div class="accordion-body"> <div class="row"> ${renderComponent($$result2, "Features", Features, { "client:load": true, "features": features, "client:component-hydration": "load", "client:component-path": "/Users/a61403/Desktop/car_rental/src/components/Features", "client:component-export": "default" })} </div> </div> </div> </div> </div> </div> <hr class="mt-30 mb-30"> </div> </div> </div> <div class="col-xl-4"> <div class="iv_sidebar mt-5 mt-xl-0"> <div class="iv_sidebar_widget iv_pricing_widget widget-padding bg-secondary rounded"> <h3 class="mb-2 text-white">${pricePerDay}/day</h3> <div class="widget_meta d-flex align-items-center"> <span class="text-white"><i class="fa-solid fa-gauge-high"></i>Melbourne, Vic</span> <span class="text-white"><i class="fa-solid fa-eye"></i>Australia</span> </div> </div> <div class="iv_sidebar_widget iv_seller_widget widget-padding bg-white rounded pt-4"> <h4 class="mb-0">Create a reservation</h4> ${renderComponent($$result2, "EmailForm", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/a61403/Desktop/car_rental/src/components/EmailForm", "client:component-export": "default" })} <a href="https://turo.com" class="btn btn-secondary btn-md mt-30">Book now on Turo</a> </div> </div> </div> </div> </div> </section> <!--inventory details end--> <!--inventory slider start--> <section class="inventory-slider"> <div class="container overflow-hidden"> <div class="row"> <div class="col-lg-8"> <div class="section-title"> <h2 class="h1">You May be Interested in</h2> </div> </div> </div> <div class="inventroy-slider swiper mt-40 pb-120 overflow-visible"> <div class="swiper-wrapper"> ${allInventoryListings.map((listing2) => {
    return renderTemplate`${renderComponent($$result2, "MightAlsoLikeCard", $$MightAlsoLikeCard, { "listing": listing2 })}`;
  })} </div> <div class="slider-btn-prev swiper-btn"> <i class="fa-solid fa-arrow-left"></i> </div> <div class="slider-btn-next swiper-btn"> <i class="fa-solid fa-arrow-right"></i> </div> </div> </div> </section> <!--inventory slider end--> </div>` })}`;
}, "/Users/a61403/Desktop/car_rental/src/layouts/CarListingLayout.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const allListings = /* #__PURE__ */ Object.assign({"../../content/inventory/land-rover-sport-2018.json": () => import('../land-rover-sport-2018_DxCATocK.mjs'),"../../content/inventory/land-rover-velar-2017.json": () => import('../land-rover-velar-2017_DZhFi9Hg.mjs'),"../../content/inventory/mercedes-c-class-2016.json": () => import('../mercedes-c-class-2016_gux-8TXI.mjs'),"../../content/inventory/mercedes-x-class-2020.json": () => import('../mercedes-x-class-2020_duqSaEgr.mjs'),"../../content/inventory/porsche-911-2013.json": () => import('../porsche-911-2013_QNvDrCtV.mjs'),"../../content/inventory/toyota-landcruiser-2022.json": () => import('../toyota-landcruiser-2022_CR12t20c.mjs'),"../../content/inventory/toyota-supra-2019.json": () => import('../toyota-supra-2019_BdM888da.mjs')});
  const listingPaths = Object.keys(allListings);
  const extractFileName = (filePath) => path.basename(filePath, path.extname(filePath));
  const fileNames = listingPaths.map(extractFileName);
  const asStaticPath = fileNames.map((fileName) => {
    return {
      params: { listing: fileName }
    };
  });
  return asStaticPath;
}
const $$listing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$listing;
  const { listing: listingId } = Astro2.params;
  const listingDetail = await getEntry("inventory", listingId);
  if (listingDetail === void 0)
    throw new Error("listingDetail is undefined");
  return renderTemplate`${renderComponent($$result, "CarListingLayout", $$CarListingLayout, { "listing": listingDetail })}`;
}, "/Users/a61403/Desktop/car_rental/src/pages/listings/[listing].astro", void 0);

const $$file = "/Users/a61403/Desktop/car_rental/src/pages/listings/[listing].astro";
const $$url = "/listings/[listing]";

const _listing_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$listing,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MainLayout as $, _listing_ as _, getCollection as g };
