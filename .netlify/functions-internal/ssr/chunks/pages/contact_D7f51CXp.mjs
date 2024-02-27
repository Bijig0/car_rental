import { c as createAstro, d as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, g as renderComponent, m as maybeRenderHead } from '../astro_Br5ZkQlp.mjs';
import 'kleur/colors';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { QueryClient, QueryClientProvider, useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import { z } from 'zod';
import 'clsx';
import { assert } from 'console';

const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().refine(validator.isMobilePhone),
  message: z.string().nullable()
});
const ErrorText = (props) => {
  return /* @__PURE__ */ jsx("p", { className: "text-danger text-3", style: { fontSize: "12px" }, children: props.children });
};
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  });
  const sendEmail = async (e) => {
    const serviceId = "service_010xydf";
    const templateName = "template_1dcm4rn";
    const publicKey = "Yd6r5t5etWEKD3GNh";
    const form = e.target;
    return emailjs.sendForm(serviceId, templateName, form, publicKey);
  };
  const {
    mutate: sendEmailMutate,
    isPending,
    error,
    isSuccess
  } = useMutation({
    mutationFn: sendEmail,
    mutationKey: ["sendEmail"]
  });
  const onSubmit = (_, e) => {
    console.log(_);
    if (e === void 0)
      throw new Error("Form event is undefined");
    sendEmailMutate(e);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "ct-form-wrapper", children: [
      /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-sm-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "input-field", children: [
            /* @__PURE__ */ jsx("label", { className: "fw-semibold text-secondary mb-1", children: "First Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "First Name",
                className: "border w-100 rounded color-secondary",
                ...register("firstName")
              }
            )
          ] }),
          errors.firstName ? /* @__PURE__ */ jsx(ErrorText, { children: errors.firstName.message }) : null
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-sm-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "input-field", children: [
            /* @__PURE__ */ jsx("label", { className: "fw-semibold text-secondary mb-1", children: "Last Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Last Name",
                className: "border w-100 rounded color-secondary",
                ...register("lastName")
              }
            )
          ] }),
          errors.lastName ? /* @__PURE__ */ jsx(ErrorText, { children: errors.lastName.message }) : null
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-sm-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "input-field", children: [
            /* @__PURE__ */ jsx("label", { className: "fw-semibold text-secondary mb-1", children: "Email" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                placeholder: "Email",
                className: "border w-100 rounded color-secondary",
                ...register("email")
              }
            )
          ] }),
          errors.email ? /* @__PURE__ */ jsx(ErrorText, { children: errors.email.message }) : null
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-sm-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "input-field", children: [
            /* @__PURE__ */ jsx("label", { className: "fw-semibold text-secondary mb-1", children: "Phone" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                placeholder: "Full Name",
                className: "border w-100 rounded color-secondary",
                ...register("phoneNumber")
              }
            )
          ] }),
          errors.phoneNumber ? /* @__PURE__ */ jsx(ErrorText, { children: errors.phoneNumber.message }) : null
        ] }),
        /* @__PURE__ */ jsx("div", { className: "col-sm-12", children: /* @__PURE__ */ jsxs("div", { className: "input-field", children: [
          /* @__PURE__ */ jsx("label", { className: "fw-semibold text-secondary mb-1", children: "Message" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              placeholder: "Message",
              className: "border w-100 rounded color-secondary",
              rows: 5,
              ...register("message")
            }
          ),
          errors.message ? /* @__PURE__ */ jsx(ErrorText, { children: errors.message.message }) : null
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "btn btn-primary btn-md mt-4", type: "submit", children: isPending ? /* @__PURE__ */ jsx("div", { className: "spinner-border text-light", role: "status", children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Loading..." }) }) : "Get in touch" })
    ] }),
    isSuccess ? /* @__PURE__ */ jsx(SuccessToast, {}) : null,
    error ? /* @__PURE__ */ jsx(ErrorToast, {}) : null
  ] });
};
const SuccessToast = () => {
  return /* @__PURE__ */ jsx("div", { className: "alert alert-success", role: "alert", children: "We have received your quote request and will be in touch soon!" });
};
const ErrorToast = () => {
  return /* @__PURE__ */ jsx("div", { className: "alert alert-danger", role: "alert", children: "Something went wrong, please try again" });
};
const queryClient = new QueryClient();
const Main = () => {
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(ContactForm, {}) });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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
Whatsapp : `, ' </h4> </div> </div> </div> <div class="col-xl-6 col-lg-7"> <div class="ms-lg-5 ms-xl-0 mt-5 mt-lg-0"> <div class="row align-items-center"> <div class="col-6"> <a href="/" class="footer-logo d-inline-block"><img src="/img/logo.png" alt="logo"></a> </div> </div> <div class="row mt-30"> <div class="col-sm-4"> <div class="footer-widget footer-nav-widget mb-5 mb-sm-0"> <h6 class="widget-title text-white mb-3">\nAbout Company\n</h6> <ul class="footer-nav"> <li><a href="/">Home</a></li> <li> <a href="/#:~:text=Land%20Rover%20Sport%202018">Listings</a> </li> <li><a href="/contact">Contact Us</a></li> </ul> </div> </div> <div class="col-sm-4"> <div class="footer-widget footer-nav-widget mb-5 mb-sm-0"> <h6 class="widget-title text-white mb-3">\nTerms and Privacy\n</h6> <ul class="footer-nav"> <li><a href="#">Terms of Use</a></li> <li><a href="#">Privacy Policy</a></li> </ul> </div> </div> <div class="col-sm-4"> <div class="footer-widget footer-nav-widget mb-5 mb-sm-0"> <h6 class="widget-title text-white mb-3">\nConnect With Us\n</h6> <ul class="footer-nav"> <li class="w-75 d-flex justify-content-between align-items-center"> <a href="#">Facebook</a> <i class="fab fa-facebook-f"></i> </li> <li class="w-75 d-flex justify-content-between align-items-center"> <a href="#">Instagram</a> <i class="fab fa-linkedin"></i> </li> <li class="w-75 d-flex justify-content-between align-items-center"> <a href="#">Turo</a> <i class="fab fa-twitter"></i> </li> </ul> </div> </div> </div> </div> </div> </div> <div class="footer-copyright pb-5"> <div class="container"> <div class="row align-items-center"> <div class="col-sm-7"> <div class="copyright-text"> <p class="mb-0">\n&copy; All rights reserved. Made by <a href="index.html">Gifleet</a> </p> </div> </div> </div> </div> </div> </div> </div> <!--footer section end--> </footer> <!--build:js--> <script src="/js/vendors/jquery.min.js"><\/script> <script src="/js/vendors/jquery-ui.min.js"><\/script> <script src="/js/vendors/popper.min.js"><\/script> <script src="/js/vendors/bootstrap.min.js"><\/script> <script src="/js/vendors/easing.min.js"><\/script> <script src="/js/vendors/swiper.min.js"><\/script> <script src="/js/vendors/massonry.min.js"><\/script> <script src="/js/vendors/bootstrap-slider.js"><\/script> <script src="/js/vendors/magnific-popup.js"><\/script> <script src="/js/vendors/waypoints.js"><\/script> <script src="/js/vendors/appear.js"><\/script> <script src="/js/vendors/counterup.js"><\/script> <script src="/js/vendors/isotop.pkgd.min.js"><\/script> <script src="/js/vendors/progressbar.js"><\/script> <script src="/js/vendors/slick.js"><\/script> <script src="/js/vendors/countdown.min.js"><\/script> <script src="/js/vendors/custom-scrollbar.js"><\/script> <script src="/js/vendors/price-range.js"><\/script> <script src="/js/vendors/image-rotate.min.js"><\/script> <script src="/js/app.js"><\/script> <!--endbuild--> </body></html>'])), renderHead(), address, phoneNumber, email, address, phoneNumber, email, address, phoneNumber, email, renderSlot($$result, $$slots["body-content"]), phoneNumber);
}, "/Users/a61403/Desktop/car_rental/src/layouts/MainLayout.astro", void 0);

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "body-content": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="main-wrapper"> <!--breadcrumb section start--> <section class="breadcrumb-section position-relative z-2 overflow-hidden mt--75" data-background="assets/img/shapes/texture-bg.png"> <img src="/img/shapes/tire-print-left.png" alt="tire print" class="position-absolute start-0 z-1 tire-print"> <img src="/img/shapes/tire-print-right.png" alt="tire print" class="position-absolute end-0 z-1 tire-print"> <div class="container"> <div class="row"> <div class="col-sm-12"> <div class="breadcrumb-content-wrapper text-center position-relative z-3"> <h1 class="text-white">Get In Touch</h1> <ol class="breadcrumb justify-content-center"> <li class="breadcrumb-item text-white fw-500"> <a href="index.html">Home</a> </li> <li class="breadcrumb-item text-white fw-500">Page</li> <li class="breadcrumb-item text-white fw-500">Shop Grid</li> </ol> </div> </div> </div> </div> </section> <!--breadcrumb section end--> <!--contact section start--> <section class="contact-section ptb-120"> <div class="container"> <div class="row"> <div class="col-xl-8"> <div class="contact-form-area bg-white rounded"> <h4 class="mb-3">Need Help? Send Message</h4> <p class="mb-4">
Our highly trained personnel are available 24/7 to help answer
                any questions
</p> ${renderComponent($$result2, "ContactForm", Main, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/a61403/Desktop/car_rental/src/components/ContactForm", "client:component-export": "default" })} </div> </div> <div class="col-xl-4"> <div class="contact-sidebar-widget py-5 px-4 bg-white rounded mt-5 mt-xl-0"> <h4 class="mb-4">Contact Details</h4> <ul class="fs-md"> <li class="fw-500"> <strong class="fw-bold text-secondary">Office Address-1:
</strong>Autohive Car Delarship Agency (United Estate Of
                  America) Co., Ltd. Bridge 8, Room 9201,
</li> <li class="mt-30 fw-500"> <strong class="fw-bold text-secondary">Office Address-2:
</strong>#25 Jocker Goru Zhong Road, NYPD 200025 USA
</li> </ul> <hr class="mt-4 mb-4"> <ul class="contact-info"> <li class="d-flex align-items-center"> <span class="icon-wrapper d-flex align-items-center justify-content-center rounded bg-light-primary rounded-circle flex-shrink-0"><i class="fa-brands fa-whatsapp"></i></span> <div class="ms-3 info-content"> <span class="d-block">Emergency Call:</span> <a href="tel:905431478798">+90 54 3147 8789</a> </div> </li> <li class="d-flex align-items-center"> <span class="icon-wrapper d-flex align-items-center justify-content-center rounded bg-light-primary rounded-circle flex-shrink-0"><i class="fa-regular fa-envelope"></i></span> <div class="ms-3 info-content"> <span class="d-block">General communication</span> <a href="maito:exampleautohive@gmail.com">exampleautohive@gmail.com</a> </div> </li> </ul> <hr class="mt-30 mb-40"> <h6 class="mb-3">Social Share</h6> <div class="contact-social"> <a href="#"><i class="fab fa-facebook-f"></i></a> <a href="#"><i class="fab fa-twitter"></i></a> <a href="#"><i class="fab fa-behance"></i></a> <a href="#"><i class="fab fa-dribbble"></i></a> </div> </div> </div> </div> </div> </section> <!--contact section end--> </div>` })}`;
}, "/Users/a61403/Desktop/car_rental/src/pages/contact.astro", void 0);

const $$file = "/Users/a61403/Desktop/car_rental/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MainLayout as $, contact as c };
