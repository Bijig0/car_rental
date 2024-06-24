import './page-ssr_DDgu3XPF.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, e as createAstro, m as maybeRenderHead, a as addAttribute } from './astro/server_ExnHLPWg.mjs';
import 'kleur/colors';
import 'html-escaper';
import assert from 'assert';
import { $ as $$Picture, a as $$MainLayout } from './MainLayout_DVhaic_z.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { QueryClient, QueryClientProvider, useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import { z } from 'zod';
import { T as TirePrintLeft, a as TirePrintRight } from './tire-print-right_CEoPlw5h.mjs';

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

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const metadataList = await Astro2.glob(/* #__PURE__ */ Object.assign({"../metadata.json": () => import('./metadata_BbPXXa3r.mjs')}), () => "../metadata.json");
  assert(metadataList.length === 1);
  const metadata = metadataList[0];
  const email = metadata["email"];
  const phoneNumber = metadata["phoneNumber"];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "body-content": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="main-wrapper"> <!--breadcrumb section start--> <section class="breadcrumb-section position-relative z-2 overflow-hidden mt--75"> ${renderComponent($$result2, "Picture", $$Picture, { "formats": ["avif", "webp"], "src": TirePrintLeft, "alt": "tire print", "class": "position-absolute start-0 z-1 tire-print" })} ${renderComponent($$result2, "Picture", $$Picture, { "formats": ["avif", "webp"], "src": TirePrintRight, "alt": "tire print", "class": "position-absolute end-0 z-1 tire-print" })} <div class="container"> <div class="row"> <div class="col-sm-12"> <div class="breadcrumb-content-wrapper text-center position-relative z-3"> <h1 class="text-white">Get In Touch</h1> <ol class="breadcrumb justify-content-center"> <li class="breadcrumb-item text-white fw-500"> <a href="/">Home</a> </li> <li class="breadcrumb-item text-white fw-500">Contact</li> </ol> </div> </div> </div> </div> </section> <!--breadcrumb section end--> <!--contact section start--> <section class="contact-section ptb-120"> <div class="container"> <div class="row"> <div class="col-xl-8"> <div class="contact-form-area bg-white rounded"> <h4 class="mb-3">Need Help? Send Message</h4> <p class="mb-4">
Our highly trained personnel are available 24/7 to help answer
                any questions
</p> ${renderComponent($$result2, "ContactForm", Main, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/a61403/Desktop/car_rental/src/components/ContactForm", "client:component-export": "default" })} </div> </div> <div class="col-xl-4"> <div class="contact-sidebar-widget py-5 px-4 bg-white rounded mt-5 mt-xl-0"> <h4 class="mb-4">Contact Details</h4> <ul class="fs-md"> <li class="fw-500"> <strong class="fw-bold text-secondary">Location
</strong>Melbourne, Victoria, Australia. <br><br>Please
                  contact our whatsapp or email for enquiries
</li> </ul> <hr class="mt-4 mb-4"> <ul class="contact-info"> <li class="d-flex align-items-center"> <span class="icon-wrapper d-flex align-items-center justify-content-center rounded bg-light-primary rounded-circle flex-shrink-0"><i class="fa-brands fa-whatsapp"></i></span> <div class="ms-3 info-content"> <span class="d-block">Whatsapp:</span> <a${addAttribute(phoneNumber, "href")}>${phoneNumber}</a> </div> </li> <li class="d-flex align-items-center"> <span class="icon-wrapper d-flex align-items-center justify-content-center rounded bg-light-primary rounded-circle flex-shrink-0"><i class="fa-regular fa-envelope"></i></span> <div class="ms-3 info-content"> <span class="d-block">General communication</span> <a${addAttribute(email, "href")}>${email}</a> </div> </li> </ul> <hr class="mt-30 mb-40"> <h6 class="mb-3">Social Share</h6> <div class="contact-social"> <a href="#"><i class="fab fa-facebook-f"></i></a> <a href="#"><i class="fab fa-twitter"></i></a> </div> </div> </div> </div> </div> </section> <!--contact section end--> </div>` })}`;
}, "/Users/a61403/Desktop/car_rental/src/pages/contact.astro", void 0);

const $$file = "/Users/a61403/Desktop/car_rental/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
