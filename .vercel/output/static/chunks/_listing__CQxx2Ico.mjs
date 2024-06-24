import { s as sanityClient } from './page-ssr_DDgu3XPF.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, e as createAstro } from './astro/server_ExnHLPWg.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { T as TirePrintLeft, a as TirePrintRight } from './tire-print-right_CEoPlw5h.mjs';
import { C as CARS_QUERY, s as slugify } from './createSlug_BuF4LW8J.mjs';
import { $ as $$Picture, a as $$MainLayout } from './MainLayout_DVhaic_z.mjs';

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
      ] }, feature);
    }) }) }, chunkIndex);
  }) });
};

const $$Astro$2 = createAstro();
const $$MightAlsoLikeCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MightAlsoLikeCard;
  const { listing } = Astro2.props;
  const listingDetail = listing.data;
  const {
    name,
    drive,
    seats,
    doors,
    fuelUsage,
    fuelType,
    year,
    pricePerWeek,
    transmission,
    cc,
    shortName,
    shortFuelType,
    cardImageUrl
  } = listingDetail;
  const listingUrl = "/";
  return renderTemplate`${maybeRenderHead()}<div class="filter-card-item position-relative overflow-hidden rounded bg-white swiper-slide"> <a href="#" class="icon-btn compare-btn position-absolute"><i class="fa-solid fa-compress"></i></a> <a href="#" class="icon-btn wish-btn position-absolute"><i class="fa-solid fa-heart"></i></a> <span class="date position-absolute">${year}</span> <div class="feature-thumb position-relative overflow-hidden"> <a${addAttribute(listingUrl, "href")}>${renderComponent($$result, "Picture", $$Picture, { "loading": "eager", "formats": ["avif", "webp"], "src": cardImageUrl, "alt": "car", "width": 300, "height": 160, "style": {
    objectFit: "cover",
    minWidth: "100%",
    minHeight: "auto"
  } })}</a> </div> <div class="filter-card-content"> <div class="price-btn text-end position-relative"> <span class="small-btn-meta">${pricePerWeek}/day</span> </div> <a${addAttribute(listingUrl, "href")} class="mt-4 d-block"> <h5>${shortName ?? name} ${year}</h5> </a> <span class="meta-content"><strong>Drive Type:</strong> <a href="#">${drive}</a></span> <div class="mt-2"></div> <div class="card-feature-box d-flex align-items-center mb-4"> <div class="icon-box d-flex align-items-center text-capitalize"> <span class="me-2"><i class="flaticon-speedometer"></i></span> ${cc}cc
</div> <div class="icon-box d-flex align-items-center text-capitalize"> <span class="me-2"><i class="flaticon-steering-wheel"></i></span> ${transmission} </div> <div class="icon-box d-flex align-items-center text-capitalize"> <span class="me-2"><i class="flaticon-petrol"></i></span> ${shortFuelType ?? fuelType} </div> </div> <a${addAttribute(listingUrl, "href")} class="btn outline-btn btn-sm d-block">View Details</a> </div> </div>`;
}, "/Users/a61403/Desktop/car_rental/src/components/MightAlsoLikeCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$CarListingLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CarListingLayout;
  const { listing } = Astro2.props;
  const listingDetail = listing;
  const {
    name,
    drive,
    seats,
    doors,
    fuelUsage,
    fuelType,
    year,
    pricePerWeek,
    transmission,
    cc,
    shortName,
    shortFuelType,
    features,
    description,
    listingImages
  } = listingDetail;
  const otherCars = await sanityClient.fetch(CARS_QUERY);
  console.log({ listingImages });
  console.log({ otherCars });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "body-content": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="main-wrapper"> <!--breadcrumb section start--> <section class="breadcrumb-section position-relative z-2 overflow-hidden mt--75"> ${renderComponent($$result2, "Picture", $$Picture, { "formats": ["avif", "webp"], "src": TirePrintLeft, "alt": "tire print", "class": "position-absolute start-0 z-1 tire-print" })} ${renderComponent($$result2, "Picture", $$Picture, { "formats": ["avif", "webp"], "src": TirePrintRight, "alt": "tire print", "class": "position-absolute end-0 z-1 tire-print" })} <div class="container"> <div class="row"> <div class="col-sm-12"> <div class="breadcrumb-content-wrapper text-center position-relative z-3"> <h1 class="text-white">${name}</h1> <ol class="breadcrumb justify-content-center"> <li class="breadcrumb-item text-white fw-500"> <a href="/">Home</a> </li> <li class="breadcrumb-item text-white fw-500">Page</li> <li class="breadcrumb-item text-white fw-500">
Inventory Details
</li> </ol> </div> </div> </div> </div> </section> <!--breadcrumb section end--> <!--inventory details--> <section class="inventory-details-area ptb-120"> <div class="container"> <div class="row"> <div class="col-xl-8"> <div class="inventory-details"> <div class="product_details widget-padding bg-white rounded"> <span class="btn-meta bg-primary text-white">Available</span> <h3 class="mt-2">${name}</h3> <div class="iv-meta"> <span><i class="fa-solid fa-clock"></i>Listed on: Feb 24 2024</span> </div> <div class="iv_double_slider mt-30"> <div class="iv_thumb_slider swiper"> <div class="swiper-wrapper"> ${listingImages.subImages.map((image) => {
    console.log(image);
    return renderTemplate`<div class="swiper-slide thumb-wrapper rounded overflow-hidden"> ${renderComponent($$result2, "Picture", $$Picture, { "loading": "eager", "formats": ["avif", "webp"], "src": image, "alt": "car", "width": 1e3, "height": 300, "class": "img-fluid" })} </div>`;
  })} </div> </div> <div class="iv_thumb_control_slider swiper mt-3 mt-lg-4"> <div class="swiper-wrapper"> ${listingImages.subImages.map((image) => {
    return renderTemplate`<div class="swiper-slide rounded overflow-hidden"> ${renderComponent($$result2, "Picture", $$Picture, { "loading": "eager", "formats": ["avif", "webp"], "src": image, "alt": "car", "width": 300, "height": 300, "class": "img-fluid" })} </div>`;
  })} </div> </div> </div> </div> <div class="product_info bg-white rounded widget-padding mt-30"> <h4 class="mb-5">Key Information</h4> <div class="row g-4"> <div class="col-lg-3 col-md-4 col-sm-6"> <div class="iv_info_item d-flex align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center border rounded flex-shrink-0"> <i class="flaticon-energy"></i> </span> <div class="info_content"> <span class="meta">Transmission</span> <span class="title text-capitalize">${transmission === "auto" ? "Automatic" : transmission}</span> </div> </div> </div> <div class="col-lg-3 col-md-4 col-sm-6"> <div class="iv_info_item d-flex align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center border rounded flex-shrink-0"> <i class="flaticon-engine"></i> </span> <div class="info_content"> <span class="meta">Engine Size</span> <span class="title">${cc} (cc)</span> </div> </div> </div> <div class="col-lg-3 col-md-4 col-sm-6"> <div class="iv_info_item d-flex align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center border rounded flex-shrink-0"> <i class="flaticon-new-year"></i> </span> <div class="info_content"> <span class="meta">Year</span> <span class="title">${year}</span> </div> </div> </div> <div class="col-lg-3 col-md-4 col-sm-6"> <div class="iv_info_item d-flex align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center border rounded flex-shrink-0"> <i class="flaticon-petrol"></i> </span> <div class="info_content"> <span class="meta">Fuel Type</span> <span class="title text-capitalize">${fuelType}</span> </div> </div> </div> <div class="col-lg-3 col-md-4 col-sm-6"> <div class="iv_info_item d-flex align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center border rounded flex-shrink-0"> <i class="flaticon-drive"></i> </span> <div class="info_content"> <span class="meta">Color</span> <span class="title">Black</span> </div> </div> </div> <div class="col-lg-3 col-md-4 col-sm-6"> <div class="iv_info_item d-flex align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center border rounded flex-shrink-0"> <i class="flaticon-gas-tank"></i> </span> <div class="info_content"> <span class="meta">Seats</span> <span class="title">${seats}</span> </div> </div> </div> <div class="col-lg-3 col-md-4 col-sm-6"> <div class="iv_info_item d-flex align-items-center"> <span class="icon-wrapper d-inline-flex align-items-center justify-content-center border rounded flex-shrink-0"> <i class="flaticon-car-door"></i> </span> <div class="info_content"> <span class="meta">Doors</span> <span class="title">${doors} Doors</span> </div> </div> </div> </div> <hr class="mt-40 mb-30"> <h4 class="mb-40">About This Listing</h4> <!-- Description --> <!-- <Description
                  client:load
                  description={description}
                  delimiter="\\\\n"
                /> --> <hr class="mt-30 mb-30"> <h4 class="mb-30">Car Features</h4> <div class="iv_feature_accordion"> <div class="accordion" id="iv_ft_accordion"> <div class="accordion-item"> <div class="accordion-header"> <a href="#features" class="accordion-button" data-bs-toggle="collapse">Features</a> </div> <div class="accordion-collapse collapse show" id="interior" data-bs-parent="#iv_ft_accordion"> <div class="accordion-body"> <div class="row"> ${renderComponent($$result2, "Features", Features, { "client:load": true, "features": features, "client:component-hydration": "load", "client:component-path": "/Users/a61403/Desktop/car_rental/src/components/Features", "client:component-export": "default" })} </div> </div> </div> </div> </div> </div> <hr class="mt-30 mb-30"> </div> </div> </div> <div class="col-xl-4"> <div class="iv_sidebar mt-5 mt-xl-0"> <div class="iv_sidebar_widget iv_pricing_widget widget-padding bg-secondary rounded"> <h3 class="mb-2 text-white">$${pricePerWeek} / week</h3> <div class="widget_meta d-flex align-items-center"> <span class="text-white"><i class="fa-solid fa-gauge-high"></i>Melbourne, Vic</span> <span class="text-white"><i class="fa-solid fa-eye"></i>Australia</span> </div> </div> <div class="iv_sidebar_widget iv_seller_widget widget-padding bg-white rounded pt-4"> <h4 class="mb-0">Create a reservation</h4> ${renderComponent($$result2, "EmailForm", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/a61403/Desktop/car_rental/src/components/EmailForm", "client:component-export": "default" })} <a href="https://turo.com/au/en/drivers/29391881" class="btn btn-secondary btn-md mt-30">Book now on Turo</a> </div> </div> </div> </div> </div> </section> <!--inventory details end--> <!--inventory slider start--> <section class="inventory-slider"> <div class="container overflow-hidden"> <div class="row"> <div class="col-lg-8"> <div class="section-title"> <h2 class="h1">You May be Interested in</h2> </div> </div> </div> <div class="inventroy-slider swiper mt-40 pb-120 overflow-visible"> <div class="swiper-wrapper"> ${otherCars.map((otherCarListing) => {
    return renderTemplate`${renderComponent($$result2, "MightAlsoLikeCard", $$MightAlsoLikeCard, { "listing": otherCarListing })}`;
  })} </div> <div class="slider-btn-prev swiper-btn"> <i class="fa-solid fa-arrow-left"></i> </div> <div class="slider-btn-next swiper-btn"> <i class="fa-solid fa-arrow-right"></i> </div> </div> </div> </section> <!--inventory slider end--> </div>` })}`;
}, "/Users/a61403/Desktop/car_rental/src/layouts/CarListingLayout.astro", void 0);

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  const cars = await sanityClient.fetch(CARS_QUERY);
  const asStaticPath = cars.map((car) => {
    const slug = slugify(car);
    console.log({ slug });
    return {
      params: { listing: slug },
      props: { listing: car }
    };
  });
  return asStaticPath;
}
const $$listing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$listing;
  const { listing } = Astro2.props;
  const listingData = listing.data;
  if (listingData === void 0)
    throw new Error("listingDetail is undefined");
  return renderTemplate`${renderComponent($$result, "CarListingLayout", $$CarListingLayout, { "listing": listingData })}`;
}, "/Users/a61403/Desktop/car_rental/src/pages/listings/[listing].astro", void 0);

const $$file = "/Users/a61403/Desktop/car_rental/src/pages/listings/[listing].astro";
const $$url = "/listings/[listing]";

export { $$listing as default, $$file as file, getStaticPaths, prerender, $$url as url };
