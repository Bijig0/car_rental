import { A as AstroError, l as UnknownContentCollectionError, d as createComponent, n as renderUniqueStylesheet, o as renderScriptElement, p as createHeadAndContent, r as renderTemplate, g as renderComponent, u as unescapeHTML, c as createAstro, m as maybeRenderHead, e as addAttribute } from '../astro_BUxd-_F3.mjs';
import 'kleur/colors';
import assert from 'assert';
import { $ as $$Picture } from './generic_Cn4ZX84T.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { useState } from 'react';
import { $ as $$MainLayout } from './contact_De96W_dn.mjs';

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

const dataEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/inventory/land-rover-sport-2018.json": () => import('../land-rover-sport-2018_CPyqqaeq.mjs'),"/src/content/inventory/land-rover-velar-2017.json": () => import('../land-rover-velar-2017_DHBVPDZ0.mjs'),"/src/content/inventory/mercedes-c-class-2016.json": () => import('../mercedes-c-class-2016_Dy_FsoRJ.mjs'),"/src/content/inventory/mercedes-x-class-2020.json": () => import('../mercedes-x-class-2020_BRJfLZpp.mjs'),"/src/content/inventory/porsche-911-2013.json": () => import('../porsche-911-2013_CZWAwG45.mjs'),"/src/content/inventory/toyota-landcruiser-2022.json": () => import('../toyota-landcruiser-2022_bDniMcsS.mjs'),"/src/content/inventory/toyota-supra-2019.json": () => import('../toyota-supra-2019_Dosr-EyC.mjs')});
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

function filterObjectByKeysContaining(obj, prefixes) {
  return Object.keys(obj).filter((key) => prefixes.some((prefix) => key.includes(prefix))).reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
}

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
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
    shortFuelType
    // cardImageUrl,
  } = listingDetail;
  const listingUrl = `/listings/${listing.id}`;
  const cardImagesDir = "../images/car-cards";
  const cardImages = /* #__PURE__ */ Object.assign({"../images/car-cards/land-rover-sport-2018.png": () => import('../land-rover-sport-2018_BvvJ95Rw.mjs'),"../images/car-cards/land-rover-velar-2017.png": () => import('../land-rover-velar-2017_C20AJE8b.mjs'),"../images/car-cards/mercedes-c-class-2016.png": () => import('../mercedes-c-class-2016_B38BhXGb.mjs'),"../images/car-cards/mercedes-x-class-2020.png": () => import('../mercedes-x-class-2020_B_Pv2zQy.mjs'),"../images/car-cards/porsche-911-2013.png": () => import('../porsche-911-2013_C1MJp6j_.mjs'),"../images/car-cards/toyota-landcruiser-2022.png": () => import('../toyota-landcruiser-2022_i1wrBYkQ.mjs'),"../images/car-cards/toyota-supra-2019.png": () => import('../toyota-supra-2019_C0FIOhgu.mjs')

});
  const cardImageUrl = `${cardImagesDir}/${listing.id}.png`;
  const cardImage = cardImages[cardImageUrl];
  return renderTemplate`${maybeRenderHead()}<div class="col-xxl-3 col-lg-4 col-md-6 col-sm-12 latest"> <div class="filter-card-item position-relative overflow-hidden rounded bg-white"> <a href="#" class="icon-btn compare-btn position-absolute"><i class="fa-solid fa-compress"></i></a> <a href="#" class="icon-btn wish-btn position-absolute"><i class="fa-solid fa-heart"></i></a> <span class="date position-absolute">${year}</span> <div class="feature-thumb position-relative overflow-hidden"> <a${addAttribute(listingUrl, "href")}>${renderComponent($$result, "Picture", $$Picture, { "src": cardImage(), "formats": ["avif", "webp"], "alt": "car", "class": "img-fluid" })}</a> </div> <div class="filter-card-content"> <div class="price-btn text-end position-relative"> <span class="small-btn-meta">${pricePerDay}/day</span> </div> <a${addAttribute(listingUrl, "href")} class="mt-4 d-block"> <h5>${shortName ?? name} ${year}</h5> </a> <span class="meta-content"><strong>Drive Type:</strong> <a href="#">${drive}</a></span> <hr class="spacer mt-3 mb-3"> <div class="card-feature-box d-flex align-items-center mb-4"> <div class="icon-box d-flex align-items-center text-capitalize"> <span class="me-2"><i class="flaticon-speedometer"></i></span> ${cc}cc
</div> <div class="icon-box d-flex align-items-center text-capitalize"> <span class="me-2"><i class="flaticon-steering-wheel"></i></span> ${transmission} </div> <div class="icon-box d-flex align-items-center text-capitalize"> <span class="me-2"><i class="flaticon-petrol"></i></span> ${shortFuelType ?? fuelType} </div> </div> <a${addAttribute(listingUrl, "href")} class="btn outline-btn btn-sm d-block">View Details</a> </div> </div> </div>`;
}, "/Users/a61403/Desktop/car_rental/src/components/Card.astro", void 0);

const faqList = [
  {
    title: "01 What do I need to book a car with Gifleet?",
    text: "To book a car with Gifleet, you simple need to be  21 years or older with a valid Australian driver's licence. When booking your first trip, we will go through a quick approval process by entering some personal details. Once approved, you'll be all set!"
  },
  {
    title: "02 Do I need my own insurance?",
    text: "No, you don’t need personal insurance coverage to book a car with Gifleet. When booking a car in Australia, you’ll choose between the Premier (if available), Standard, and Minimum protection plans. Each plan includes varying limits on financial responsibility for damage to a host’s vehicle. All trips include $20,000,000 in legal liability protection for damage to other people’s property. All protection is provided by Gifleet's insurance policy.*"
  },
  {
    title: "03 Can other people drive a car that I booked?",
    text: "Yes, multiple guests can drive the car you booked with Gifleet, as long as they are all approved to drive. The primary driver (whoever booked the car) can add additional drivers with no fees or additional charges. Only the primary driver can request to add drivers; Turo hosts cannot do it for you. We encourage you to request to add additional drivers before your trip starts, though you can request to add a driver while a trip is in progress. To speed up the process, have your additional driver create a Turo account and get approved to drive before you request to add them. All drivers must have a valid driver’s licence and meet the age requirements for the car you’ve booked. Please let a representative know of any further enquiries."
  },
  {
    title: "04 What is the cancellation policy?",
    text: "You can cancel and get a full refund up to  24 hours before your trip starts. If you book a trip with less than  24 hours’ notice, you have one hour after booking to cancel free of charge. If you cancel after the free cancellation period ends, you will be charged a small cancellation fee. In the rare event a host cancels, you’ll be notified immediately so you can book another car, or we’ll help you find one. Your refund can be temporarily held to expedite rebooking, or the funds can be returned to your bank account — your choice."
  },
  {
    title: "05 What happens if I have an accident?",
    text: "If there’s an emergency or an issue with the car, call our emergency roadside assistance provider, available  24/7. We’ll make sure you’re safe, then help you get back on your way."
  },
  {
    title: "06 Can I get my car delivered to me?",
    text: "Cars are available for delivery depending on location and availability. Please let us know when and where the car needs to be delivered for further clarification."
  }
];

const createUUID = (title) => title.replaceAll(" ", "");
const SingleAccordion = (props) => {
  const { title, text, isExpanded } = props;
  const uuid = createUUID(title);
  console.log({ uuid, isExpanded });
  return /* @__PURE__ */ jsxs(AccordionItem, { uuid, className: "accordion-item", children: [
    /* @__PURE__ */ jsx(AccordionItemHeading, { className: `accordion-header`, children: /* @__PURE__ */ jsx(
      AccordionItemButton,
      {
        className: `accordion-button ${isExpanded ? void 0 : "collapsed"}`,
        children: title
      }
    ) }),
    /* @__PURE__ */ jsx(
      AccordionItemPanel,
      {
        className: "accordion-collapse collapse show",
        id: "ac_1",
        "data-bs-parent": "#accordion_1",
        children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: /* @__PURE__ */ jsx("p", { children: text }) })
      }
    )
  ] }, title);
};
const FAQ = () => {
  const faqFirstHalf = faqList.slice(0, 3);
  const faqSecondHalf = faqList.slice(3);
  const [expandedTitles, setExpandedTitles] = useState([]);
  console.log({ expandedTitles });
  return /* @__PURE__ */ jsx("div", { className: "faq-section pt-120 pb-120", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-xl-7 col-lg-8", children: /* @__PURE__ */ jsxs("div", { className: "at-section-title text-center", children: [
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "at-subtitle position-relative text-primary lead",
          children: "FAQs"
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "h1 mb-0 mt-2", children: "Frequently Asked Questions" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-xl-10", children: /* @__PURE__ */ jsxs("div", { className: "faq-tabs mt-5 brands-filter", children: [
      /* @__PURE__ */ jsxs("div", { className: "tab-content mt-60", children: [
        /* @__PURE__ */ jsx("div", { className: "tab-pane fade show active", id: "general", children: /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
          /* @__PURE__ */ jsx("div", { className: "col-xl-6", children: /* @__PURE__ */ jsx(
            Accordion,
            {
              allowZeroExpanded: true,
              onChange: (expanded) => {
                const expandedAsUUID = expanded.map((each) => createUUID(each));
                setExpandedTitles(expandedAsUUID);
              },
              className: "accordion theme-accordion",
              id: "accordion_1",
              children: faqFirstHalf.map(({ title, text }) => {
                console.log({ title, text });
                const isExpanded = expandedTitles.includes(createUUID(title));
                return /* @__PURE__ */ jsx(SingleAccordion, { isExpanded, title, text });
              })
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-xl-6", children: /* @__PURE__ */ jsx(
            Accordion,
            {
              allowZeroExpanded: true,
              onChange: (expanded) => {
                const expandedAsUUID = expanded.map((each) => createUUID(each));
                setExpandedTitles(expandedAsUUID);
              },
              className: "accordion theme-accordion",
              id: "accordion_1",
              children: faqSecondHalf.map(({ title, text }) => {
                const isExpanded = expandedTitles.includes(createUUID(title));
                return /* @__PURE__ */ jsx(SingleAccordion, { isExpanded, title, text });
              })
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "tab-pane fade", id: "features", children: /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
          /* @__PURE__ */ jsx("div", { className: "col-xl-6", children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: "accordion theme-accordion",
              id: "accordion_3",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "accordion-header", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#accc_1",
                      className: "accordion-button",
                      "data-bs-toggle": "collapse",
                      children: "01 How long does it take to inspect your car?"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "accordion-collapse collapse show",
                      id: "accc_1",
                      "data-bs-parent": "#accordion_3",
                      children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: /* @__PURE__ */ jsx("p", { children: "Dynamically reintermediate virtual functionalities for bandwidth. Uniquely expedite cooperative strategic theme areas and sticky e-markets. Holisticly synergize alternative metrics for multifunctional outsourcing without ubiquitous total linkage." }) })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "accordion-header", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#accc_2",
                      className: "accordion-button collapsed",
                      "data-bs-toggle": "collapse",
                      children: "02 Will dealers let you take car mechanic?"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "accordion-collapse collapse",
                      id: "accc_2",
                      "data-bs-parent": "#accordion_3",
                      children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: /* @__PURE__ */ jsx("p", { children: "Dynamically reintermediate virtual functionalities for bandwidth. Uniquely expedite cooperative strategic theme areas and sticky e-markets. Holisticly synergize alternative metrics for multifunctional outsourcing without ubiquitous total linkage." }) })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "accordion-header", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#accc_3",
                      className: "accordion-button collapsed",
                      "data-bs-toggle": "collapse",
                      children: "03 How long does it take a mechanic to inspect a used car?"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "accordion-collapse collapse",
                      id: "accc_3",
                      "data-bs-parent": "#accordion_3",
                      children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: /* @__PURE__ */ jsx("p", { children: "Dynamically reintermediate virtual functionalities for bandwidth. Uniquely expedite cooperative strategic theme areas and sticky e-markets. Holisticly synergize alternative metrics for multifunctional outsourcing without ubiquitous total linkage." }) })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "accordion-header", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#accc_4",
                      className: "accordion-button collapsed",
                      "data-bs-toggle": "collapse",
                      children: "04 How long does it take a mechanic to inspect a used car?"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "accordion-collapse collapse",
                      id: "accc_4",
                      "data-bs-parent": "#accordion_3",
                      children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: /* @__PURE__ */ jsx("p", { children: "Dynamically reintermediate virtual functionalities for bandwidth. Uniquely expedite cooperative strategic theme areas and sticky e-markets. Holisticly synergize alternative metrics for multifunctional outsourcing without ubiquitous total linkage." }) })
                    }
                  )
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-xl-6", children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: "accordion theme-accordion",
              id: "accordion_4",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "accordion-header", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#a4_1",
                      className: "accordion-button",
                      "data-bs-toggle": "collapse",
                      children: "01 How long does it take to inspect your car?"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "accordion-collapse collapse show",
                      id: "a4_1",
                      "data-bs-parent": "#accordion_4",
                      children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: /* @__PURE__ */ jsx("p", { children: "Dynamically reintermediate virtual functionalities for bandwidth. Uniquely expedite cooperative strategic theme areas and sticky e-markets. Holisticly synergize alternative metrics for multifunctional outsourcing without ubiquitous total linkage." }) })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "accordion-header", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#a4_2",
                      className: "accordion-button collapsed",
                      "data-bs-toggle": "collapse",
                      children: "02 Will dealers let you take car mechanic?"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "accordion-collapse collapse",
                      id: "a4_2",
                      "data-bs-parent": "#accordion_4",
                      children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: /* @__PURE__ */ jsx("p", { children: "Dynamically reintermediate virtual functionalities for bandwidth. Uniquely expedite cooperative strategic theme areas and sticky e-markets. Holisticly synergize alternative metrics for multifunctional outsourcing without ubiquitous total linkage." }) })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "accordion-header", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#a4_3",
                      className: "accordion-button collapsed",
                      "data-bs-toggle": "collapse",
                      children: "03 How long does it take a mechanic to inspect a used car?"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "accordion-collapse collapse",
                      id: "a4_3",
                      "data-bs-parent": "#accordion_4",
                      children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: /* @__PURE__ */ jsx("p", { children: "Dynamically reintermediate virtual functionalities for bandwidth. Uniquely expedite cooperative strategic theme areas and sticky e-markets. Holisticly synergize alternative metrics for multifunctional outsourcing without ubiquitous total linkage." }) })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "accordion-header", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#a4_4",
                      className: "accordion-button collapsed",
                      "data-bs-toggle": "collapse",
                      children: "04 How long does it take a mechanic to inspect a used car?"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "accordion-collapse collapse",
                      id: "a4_4",
                      "data-bs-parent": "#accordion_4",
                      children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: /* @__PURE__ */ jsx("p", { children: "Dynamically reintermediate virtual functionalities for bandwidth. Uniquely expedite cooperative strategic theme areas and sticky e-markets. Holisticly synergize alternative metrics for multifunctional outsourcing without ubiquitous total linkage." }) })
                    }
                  )
                ] })
              ]
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "tab-pane fade", id: "technical", children: /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
          /* @__PURE__ */ jsx("div", { className: "col-xl-6", children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: "accordion theme-accordion",
              id: "accordion_5",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "accordion-header", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#a5_1",
                      className: "accordion-button",
                      "data-bs-toggle": "collapse",
                      children: "01 How long does it take to inspect your car?"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "accordion-collapse collapse show",
                      id: "a5_1",
                      "data-bs-parent": "#accordion_5",
                      children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: /* @__PURE__ */ jsx("p", { children: "Dynamically reintermediate virtual functionalities for bandwidth. Uniquely expedite cooperative strategic theme areas and sticky e-markets. Holisticly synergize alternative metrics for multifunctional outsourcing without ubiquitous total linkage." }) })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "accordion-header", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#a5_2",
                      className: "accordion-button collapsed",
                      "data-bs-toggle": "collapse",
                      children: "02 Will dealers let you take car mechanic?"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "accordion-collapse collapse",
                      id: "a5_2",
                      "data-bs-parent": "#accordion_5",
                      children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: /* @__PURE__ */ jsx("p", { children: "Dynamically reintermediate virtual functionalities for bandwidth. Uniquely expedite cooperative strategic theme areas and sticky e-markets. Holisticly synergize alternative metrics for multifunctional outsourcing without ubiquitous total linkage." }) })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "accordion-header", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#a5_3",
                      className: "accordion-button collapsed",
                      "data-bs-toggle": "collapse",
                      children: "03 How long does it take a mechanic to inspect a used car?"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "accordion-collapse collapse",
                      id: "a5_3",
                      "data-bs-parent": "#accordion_5",
                      children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: /* @__PURE__ */ jsx("p", { children: "Dynamically reintermediate virtual functionalities for bandwidth. Uniquely expedite cooperative strategic theme areas and sticky e-markets. Holisticly synergize alternative metrics for multifunctional outsourcing without ubiquitous total linkage." }) })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "accordion-header", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#a5_4",
                      className: "accordion-button collapsed",
                      "data-bs-toggle": "collapse",
                      children: "04 How long does it take a mechanic to inspect a used car?"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "accordion-collapse collapse",
                      id: "a5_4",
                      "data-bs-parent": "#accordion_5",
                      children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: /* @__PURE__ */ jsx("p", { children: "Dynamically reintermediate virtual functionalities for bandwidth. Uniquely expedite cooperative strategic theme areas and sticky e-markets. Holisticly synergize alternative metrics for multifunctional outsourcing without ubiquitous total linkage." }) })
                    }
                  )
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-xl-6", children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: "accordion theme-accordion",
              id: "accordion_6",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "accordion-header", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#a6_1",
                      className: "accordion-button",
                      "data-bs-toggle": "collapse",
                      children: "01 How long does it take to inspect your car?"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "accordion-collapse collapse show",
                      id: "a6_1",
                      "data-bs-parent": "#accordion_6",
                      children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: /* @__PURE__ */ jsx("p", { children: "Dynamically reintermediate virtual functionalities for bandwidth. Uniquely expedite cooperative strategic theme areas and sticky e-markets. Holisticly synergize alternative metrics for multifunctional outsourcing without ubiquitous total linkage." }) })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "accordion-header", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#a6_2",
                      className: "accordion-button collapsed",
                      "data-bs-toggle": "collapse",
                      children: "02 Will dealers let you take car mechanic?"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "accordion-collapse collapse",
                      id: "a6_2",
                      "data-bs-parent": "#accordion_6",
                      children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: /* @__PURE__ */ jsx("p", { children: "Dynamically reintermediate virtual functionalities for bandwidth. Uniquely expedite cooperative strategic theme areas and sticky e-markets. Holisticly synergize alternative metrics for multifunctional outsourcing without ubiquitous total linkage." }) })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "accordion-header", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#a6_3",
                      className: "accordion-button collapsed",
                      "data-bs-toggle": "collapse",
                      children: "03 How long does it take a mechanic to inspect a used car?"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "accordion-collapse collapse",
                      id: "a6_3",
                      "data-bs-parent": "#accordion_6",
                      children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: /* @__PURE__ */ jsx("p", { children: "Dynamically reintermediate virtual functionalities for bandwidth. Uniquely expedite cooperative strategic theme areas and sticky e-markets. Holisticly synergize alternative metrics for multifunctional outsourcing without ubiquitous total linkage." }) })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "accordion-header", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#a6_4",
                      className: "accordion-button collapsed",
                      "data-bs-toggle": "collapse",
                      children: "04 How long does it take a mechanic to inspect a used car?"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "accordion-collapse collapse",
                      id: "a6_4",
                      "data-bs-parent": "#accordion_6",
                      children: /* @__PURE__ */ jsx("div", { className: "accordion-body", children: /* @__PURE__ */ jsx("p", { children: "Dynamically reintermediate virtual functionalities for bandwidth. Uniquely expedite cooperative strategic theme areas and sticky e-markets. Holisticly synergize alternative metrics for multifunctional outsourcing without ubiquitous total linkage." }) })
                    }
                  )
                ] })
              ]
            }
          ) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-5", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/contact",
          className: "btn btn-secondary",
          children: [
            /* @__PURE__ */ jsx("span", { className: "me-2", children: /* @__PURE__ */ jsx("i", { className: "flaticon-chat" }) }),
            "Have an unanswered question?"
          ]
        }
      ) })
    ] }) }) })
  ] }) });
};

const WhyChooseUsImage = new Proxy({"src":"/_astro/car-red.DQL45Q91.png","width":1440,"height":625,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/a61403/Desktop/car_rental/src/images/car-red.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allInventoryListings = await getCollection("inventory");
  const featuredListings = allInventoryListings.filter(
    (listing) => [1, 2, 3].includes(listing.data.metadata.rank)
  );
  const cardImagesDir = "../images/car-cards";
  const cardImages = /* #__PURE__ */ Object.assign({"../images/car-cards/land-rover-sport-2018.png": () => import('../land-rover-sport-2018_BvvJ95Rw.mjs'),"../images/car-cards/land-rover-velar-2017.png": () => import('../land-rover-velar-2017_C20AJE8b.mjs'),"../images/car-cards/mercedes-c-class-2016.png": () => import('../mercedes-c-class-2016_B38BhXGb.mjs'),"../images/car-cards/mercedes-x-class-2020.png": () => import('../mercedes-x-class-2020_B_Pv2zQy.mjs'),"../images/car-cards/porsche-911-2013.png": () => import('../porsche-911-2013_C1MJp6j_.mjs'),"../images/car-cards/toyota-landcruiser-2022.png": () => import('../toyota-landcruiser-2022_i1wrBYkQ.mjs'),"../images/car-cards/toyota-supra-2019.png": () => import('../toyota-supra-2019_C0FIOhgu.mjs')

});
  const featuredCardImages = filterObjectByKeysContaining(
    cardImages,
    featuredListings.map((listing) => listing.id)
  );
  const createFeaturedCardImageUrl = (listingId) => {
    return `${cardImagesDir}/${listingId}.png`;
  };
  console.log(featuredCardImages);
  const metadataList = await Astro2.glob(/* #__PURE__ */ Object.assign({"../metadata.json": () => import('../metadata_BbPXXa3r.mjs')}), () => "../metadata.json");
  assert(metadataList.length === 1);
  const metadata = metadataList[0];
  const turoReviewUrl = "https://turo.com/au/en/drivers/29391881#:~:text=4.96,(90%20reviews)";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "body-content": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="main-wrapper"> <!--hero section start--> <section class="dealership-hero position-relative overflow-hidden"> <div class="swiper at-hero-slider-wrapper" data-speed="900"> <div class="swiper-wrapper"> ${featuredListings.map((listing) => {
    const listingDetail = listing.data.data;
    const { name, description, features } = listingDetail;
    const listingUrl = `/listings/${listing.id}`;
    const threeFeatures = features.slice(0, 3);
    const featuredCardImageUrl = createFeaturedCardImageUrl(
      listing.id
    );
    return renderTemplate`<div class="swiper-slide"> <div class="dl-hero-single" data-background="/img/shapes/texture-bg.png"> <div class="container"> <div class="at_hero_slider"> <div class="row"> <div class="col-xl-7"> <div class="at-hero-title"> <span class="at-subtitle text-primary position-relative fw-bold"> ${metadata["shortBusinessName"]} </span> <h1 class="text-white mb-4 mt-3 display-4"> ${name} </h1> <p class="mb-30">${description.split("\n")[0]}</p> <ul class="car-info mt-3 mb-30 fs-md fw-500"> ${threeFeatures.map((feature) => {
      return renderTemplate`<li class="pt-1"> <span class="me-2"> <i class="fa-regular fa-circle-check"></i> </span> ${feature} </li>`;
    })} </ul> <a${addAttribute(`${listingUrl}`, "href")} class="at-explore-btn"> <span class="me-2"> <svg width="49" height="28" viewBox="0 0 49 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M42.5 9L47.715 14.1189M47.715 14.1189L42.5 19.3339M47.715 14.1189H19.5" stroke="#FC0012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="1" y="1" width="32" height="26" rx="13" stroke="#FC0012" stroke-width="2"></rect> </svg> </span>
Explore More
</a> </div> </div> <div class="col-xl-5"> <div class="at-hero-banner position-relative mt-4 mt-sm-0 right-5"> ${renderComponent($$result2, "Picture", $$Picture, { "src": featuredCardImages[featuredCardImageUrl](), "alt": "car", "formats": ["avif", "webp"], "class": "at_hero_car" })} </div> </div> </div> </div> </div> </div> </div>`;
  })} <div class="swiper-pagination"></div> </div> <!--hero section end--> <!--latest collection start--> <section class="latest-collection pb-120"> <div class="container"> <div class="row align-items-center justify-content-between"> <div class="col-lg-6"> <div class="at-section-title text-center text-lg-start"> <span class="at-subtitle position-relative lead text-primary">Luxury Car Rentals</span> <h2 class="h1 mt-2 mb-0">Select from our finest choices</h2> </div> </div> <div class="col-lg-6 align-self-end"> <div class="collection-filter-controls d-flex align-items-center justify-content-center justify-content-lg-end flex-wrap mt-5 mt-lg-0"> <button class="at-filter-btn active" data-filter="*">Our Fleet</button> <!-- <button class="at-filter-btn" data-filter=".featured"
                >Featured</button
              >
              <button class="at-filter-btn" data-filter=".popular"
                >Popular</button
              > --> </div> </div> </div> <div class="filter-items-wrapper mt-5"> <div class="row g-4 justify-content-center filter-grid"> ${allInventoryListings.map((listing) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "listing": listing })}`)} </div> </div> </div> <!-- <div class="text-center mt-5">
        <a href="/listings" class="at-explore-btn color-secondary"
          ><span class="me-2">
            <svg
              width="39"
              height="26"
              viewBox="0 0 39 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.7143 7.85706L37.5142 12.9999M37.5142 12.9999L32.7143 18.1428M37.5142 12.9999H18.1428"
                stroke="#FC0012"
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"></path>
              <circle
                cx="13"
                cy="13"
                r="12"
                stroke="#FC0012"
                stroke-width="1.71429"></circle>
            </svg>
          </span>View More
        </a>
      </div> --> </section> </div> <!--latest collection end--> <!--about section start--> <section class="about-section pt-120 pb-220 bg-primary-light position-relative z-1 overflow-hidden" data-background="/img/shapes/about-bg.jpg"> <img src="/img/shapes/tire-primary-light.png" alt="tire" class="tire-primary-light position-absolute end-0 top-0 z--1"> <span class="small-circle-shape position-absolute z--1"></span> <div class="container"> <div class="row align-items-center"> <div class="col-xl-6 col-lg-6"> <div class="about-left position-relative z-1"> <span class="circle-large position-absolute z--1"></span> <div class="at-section-title mb-20"> <span class="at-subtitle position-relative lead text-primary">Why Choose Us</span> <h2 class="h1 mt-2 mb-4">
Renting Luxury Cars <br> Without The Hassle
</h2> <p>
We specialize in luxury car rentals all around the Melbourne
                    Victoria area for all purposes from photoshoots to tours
                    down the Mt Dandenong range. Select a car from our selective
                    range and enjoy your drive!
</p> </div> ${renderComponent($$result2, "Picture", $$Picture, { "formats": ["avif", "webp"], "src": WhyChooseUsImage, "alt": "car", "class": "img-fluid" })} </div> </div> <div class="col-xl-6 col-lg-6"> <div class="about-right mt-5 mt-lg-0"> <div class="about-icon-box bg-white shadow rounded"> <div class="ab-icon-box-top d-flex align-items-center mb-3"> <span class="icon-wrapper d-flex align-items-center justify-content-center rounded"><i class="flaticon-shield"></i></span> <h5 class="mb-0 ms-3">3+ years of car rental experience</h5> </div> <p class="mb-0"> ${metadata["shortBusinessName"]} has been proudly serving satisfied
                    renters for 3+ years all around Melbourne, Victoria.
</p> </div> <div class="about-icon-box bg-white shadow rounded mt-20 ms-md-5"> <div class="ab-icon-box-top d-flex align-items-center mb-3"> <span class="icon-wrapper d-flex align-items-center justify-content-center rounded"><i class="flaticon-shield"></i></span> <h5 class="mb-0 ms-3">Customer service that cares</h5> </div> <p class="mb-0">
Our highly trained staff are available throughout our
                    business hours to answer any enquiries or support you in any
                    emergencies
</p> </div> <div class="about-icon-box bg-white shadow rounded mt-20"> <div class="ab-icon-box-top d-flex align-items-center mb-3"> <span class="icon-wrapper d-flex align-items-center justify-content-center rounded"><i class="flaticon-price-tag"></i></span> <h5 class="mb-0 ms-3">Rent at reasonable Prices</h5> </div> <p class="mb-0">
We here at Gifleet believe in fair pricing. Our prices are
                    competitive and amongst the lowest in the Melbourne,
                    Victoria area.
</p> </div> </div> </div> </div> </div> </section> <!--about section end--> <!--feedback section start--> <section class="feedback-section position-relative" data-background="/img/home1/video-bg.jpg"> <div class="countdown-area"> <div class="main-countdown-wrapper d-inline-flex align-items-center bg-white"> <div class="countdown-box d-xl-flex text-center text-xl-start align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle text-primary"><i class="flaticon-heart"></i></span> <div class="countdown-box-content ms-xl-3 mt-3 mt-xl-0"> <h3 class="mb-1"> <span class="counter">500</span><span>+</span> </h3> <span class="subtitle">Happy Customers</span> </div> </div> <div class="countdown-box d-xl-flex text-center text-xl-start align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle text-primary"><i class="flaticon-car-repair"></i></span> <div class="countdown-box-content ms-xl-3 mt-3 mt-xl-0"> <h3 class="mb-1"> <span class="counter">7</span><span>+</span> </h3> <span class="subtitle">Cars Available</span> </div> </div> <div class="countdown-box d-xl-flex text-center text-xl-start align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle text-primary"><i class="flaticon-speedometer-1"></i></span> <div class="countdown-box-content ms-xl-3 mt-3 mt-xl-0"> <h3 class="mb-1"> <span class="counter">4.95</span><span> ★</span> </h3> <a> <span class="subtitle">Average Rating (Turo)</span> </a> </div> </div> <div class="countdown-box d-xl-flex text-center text-xl-start align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle text-primary"><i class="flaticon-drive"></i></span> <div class="countdown-box-content ms-xl-3 mt-3 mt-xl-0"> <h3 class="mb-1"> <span class="">24/7</span><span></span> </h3> <span class="subtitle">Emergency Support</span> </div> </div> </div> </div> <div class="container"> <div class="video-content-wrapper"> <div class="row align-items-center"> <div class="col-6"> <div class="quote-icon"> <img src="/img/icons/quote-icon.svg" alt="quote" class="img-fluid"> </div> </div> <div class="col-6"> <div class="video-content text-center"> <a href="https://www.youtube.com/watch?v=6WZOxnYi4Cs" class="video-popup-btn bg-primary text-white"><i class="fa-solid fa-play"></i></a> </div> </div> </div> </div> </div> <div class="feedback-slider-area mt-5"> <div class="container"> <div class="row"> <div class="col-lg-12"> <div class="feedback-slider position-relative"> <div class="swiper at_feedback_slider"> <div class="swiper-wrapper"> <div class="swiper-slide feedback-single bg-white position-relative rounded"> <a${addAttribute(turoReviewUrl, "href")} class="color-secondary"> <div class="rating-box position-absolute rounded-1"> <span class="me-1"><i class="fa-solid fa-star"></i></span>5.0
</div> <h4 class="mb-3">Another Awesome Experience!</h4> <p class="mb-4">
Another awesome experience with Gifleet! The car is
                            absolutely beautiful. Had a blast and thoroughly
                            enjoyed the car. Hand over and pick up was stress
                            free and easy, communication was on point at all
                            times. Very professional! Thanks again !
</p> </a><div class="d-flex justify-content-between"><a${addAttribute(turoReviewUrl, "href")} class="color-secondary"> <div class="author-info d-flex align-items-center"> <img src="/img/author/author-1.jpg" alt="author" class="rounded-circle flex-shrink-0 border border-2"> <div class="author-info-content ms-3"> <h6 class="mb-1 text-secondary">Thomas H</h6> <span>15 January 2024</span> </div> </div> </a><a href="https://turo.com/au/en/drivers/29391881#:~:text=4.96-,(90%20reviews),-Deborah%20L." class="btn btn-primary mt-50 hide-on-mobile">View more reviews
</a> </div> </div> <div class="swiper-slide feedback-single bg-white position-relative rounded"> <a${addAttribute(turoReviewUrl, "href")} class="color-secondary"> <div class="rating-box position-absolute rounded-1"> <span class="me-1"><i class="fa-solid fa-star"></i></span>5.0
</div> <h4 class="mb-3">Great Experience!</h4> <p class="mb-4">
I had a great experience renting this car. Dealing
                            with the owner was easy, and the car was in good
                            condition. Highly recommended!
</p> </a><div class="d-flex justify-content-between"><a${addAttribute(turoReviewUrl, "href")} class="color-secondary"> <div class="author-info d-flex align-items-center"> <img src="/img/author/author-3.jpg" alt="author" class="rounded-circle flex-shrink-0 border border-2"> <div class="author-info-content ms-3"> <h6 class="mb-1 text-secondary">Imesh A</h6> <span>23 September 2023</span> </div> </div> </a><a href="https://turo.com/au/en/drivers/29391881#:~:text=4.96-,(90%20reviews),-Deborah%20L." class="btn btn-primary mt-50 hide-on-mobile">View more reviews
</a> </div> </div> <div class="swiper-slide feedback-single bg-white position-relative rounded"> <a${addAttribute(turoReviewUrl, "href")} class="color-secondary"> <div class="rating-box position-absolute rounded-1"> <span class="me-1"><i class="fa-solid fa-star"></i></span>5.0
</div> <h4 class="mb-3">Great Car!</h4> <p class="mb-4">
Great car, really enjoyed it. For a 2013 Porsche it
                            presented very well, close to new. The modified
                            exhaust is amazing, the sound really enhanced the
                            unique Porsche sound. Would hire again!!
</p> </a><div class="d-flex justify-content-between"><a${addAttribute(turoReviewUrl, "href")} class="color-secondary"> <div class="author-info d-flex align-items-center"> <img src="/img/author/author-2.jpg" alt="author" class="rounded-circle flex-shrink-0 border border-2"> <div class="author-info-content ms-3"> <h6 class="mb-1 text-secondary">Sam K</h6> <span>18 December 2023</span> </div> </div> </a><a href="https://turo.com/au/en/drivers/29391881#:~:text=4.96-,(90%20reviews),-Deborah%20L." class="btn btn-primary mt-50 hide-on-mobile">View more reviews
</a> </div> </div> </div> <div class="slide-arrow-btn position-absolute slide-btn-next"> <i class="fa-solid fa-arrow-right"></i> </div> <div class="slide-arrow-btn position-absolute slide-btn-prev"> <i class="fa-solid fa-arrow-left"></i> </div> </div> </div> </div> </div> </div> </div> </section> <!--feedback section end--> <!--faq & app section start--> <section class="merge-section position-relative z-1 overflow-hidden"> <img src="/img/shapes/net-shape.png" alt="net shape" class="position-absolute end-0 top-0 z--1"> <img src="/img/shapes/net-left.png" alt="net shape" class="position-absolute start-0 bottom-0 z--1"> ${renderComponent($$result2, "FAQ", FAQ, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/a61403/Desktop/car_rental/src/components/FAQ", "client:component-export": "default" })} <!-- main content wrapper ends --> </section> </section> </div>` })}`;
}, "/Users/a61403/Desktop/car_rental/src/pages/index.astro", void 0);

const $$file = "/Users/a61403/Desktop/car_rental/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { getEntry as a, filterObjectByKeysContaining as f, getCollection as g, index as i };
