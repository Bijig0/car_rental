import emailjs from "@emailjs/browser";
import { classifySource } from "../analytics/classifySource/classifySource";
import {
  formatEnquiry,
  type EnquiryInputs,
} from "../analytics/formatEnquiry/formatEnquiry";
import { getReplayUrl, trackEnquiry } from "../analytics/posthog";
import { getVisits } from "../analytics/visits";

const serviceId = "service_010xydf";
const templateName = "template_1dcm4rn";
const publicKey = "Yd6r5t5etWEKD3GNh";

export const sendEnquiry = async ({
  form,
  car,
  inputs,
}: {
  form: "contact" | "listing";
  car?: string;
  inputs: EnquiryInputs;
}) => {
  const { firstVisit, thisVisit } = getVisits();
  const { subject, message } = formatEnquiry({
    inputs,
    car,
    sentFrom: window.location.pathname,
    thisVisit,
    firstVisit,
    replayUrl: getReplayUrl(),
  });

  const templateParams = {
    to_name: "Brady",
    from_name: "Gifleet Car Rental",
    subject,
    message,
  };
  const response = await emailjs.send(serviceId, templateName, templateParams, publicKey);

  trackEnquiry({
    form,
    car: car ?? null,
    heard_about: inputs.heardAbout || null,
    source: thisVisit ? classifySource(thisVisit) : null,
    first_visit_source: firstVisit ? classifySource(firstVisit) : null,
    landing_page: thisVisit?.landingPage ?? null,
  });

  return response;
};
