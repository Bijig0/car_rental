import './page-ssr_DDgu3XPF.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_ExnHLPWg.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Picture, a as $$MainLayout } from './MainLayout_DVhaic_z.mjs';
import { T as TirePrintLeft, a as TirePrintRight } from './tire-print-right_CEoPlw5h.mjs';

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "body-content": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="main-wrapper"> <!--breadcrumb section start--> <!--breadcrumb section start--> <section class="breadcrumb-section position-relative z-2 overflow-hidden mt--75"> ${renderComponent($$result2, "Picture", $$Picture, { "formats": ["avif", "webp"], "src": TirePrintLeft, "alt": "tire print", "class": "position-absolute start-0 z-1 tire-print" })} ${renderComponent($$result2, "Picture", $$Picture, { "formats": ["avif", "webp"], "src": TirePrintRight, "alt": "tire print", "class": "position-absolute end-0 z-1 tire-print" })} <div class="container"> <div class="row"> <div class="col-sm-12"> <div class="breadcrumb-content-wrapper text-center position-relative z-3"> <h1 class="text-white">FAQs</h1> <ol class="breadcrumb justify-content-center"> <li class="breadcrumb-item text-white fw-500"> <a href="/">Home</a> </li> <li class="breadcrumb-item text-white fw-500">FAQs</li> </ol> </div> </div> </div> </div> </section> <!--breadcrumb section end--> <!--contact section end--> ${renderComponent($$result2, "FAQ", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/a61403/Desktop/car_rental/src/components/FAQ", "client:component-export": "default" })} </div>` })}`;
}, "/Users/a61403/Desktop/car_rental/src/pages/faq.astro", void 0);

const $$file = "/Users/a61403/Desktop/car_rental/src/pages/faq.astro";
const $$url = "/faq";

export { $$Faq as default, $$file as file, $$url as url };
