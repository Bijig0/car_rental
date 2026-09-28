import { classifySource } from "../classifySource/classifySource";
import type { Landing } from "../parseLanding/parseLanding";

export type EnquiryInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string | null;
  heardAbout?: string;
};

export type Enquiry = {
  inputs: EnquiryInputs;
  car?: string;
  sentFrom: string;
  thisVisit: Landing | null;
  firstVisit: Landing | null;
  replayUrl?: string | null;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Australia/Melbourne",
  });

const describeVisit = (visit: Landing) => {
  const campaign = visit.utm.campaign ? `, campaign "${visit.utm.campaign}"` : "";
  return `${classifySource(visit)}${campaign}, landed on ${visit.landingPage}`;
};

// Subject and body for the enquiry email, including where the visitor came from.
export const formatEnquiry = ({
  inputs,
  car,
  sentFrom,
  thisVisit,
  firstVisit,
  replayUrl,
}: Enquiry): { subject: string; message: string } => {
  const source = thisVisit ? classifySource(thisVisit) : "unknown source";
  const earlierFirstVisit =
    firstVisit && thisVisit && firstVisit.at !== thisVisit.at ? firstVisit : null;

  const lines = [
    car ? `New enquiry about the ${car}` : "New enquiry from the website",
    "",
    `Name: ${inputs.firstName} ${inputs.lastName}`,
    `Email: ${inputs.email}`,
    `Phone: ${inputs.phoneNumber}`,
    `Message: ${inputs.message?.trim() || "(none)"}`,
    "",
    "Where they came from",
    `They said they heard about us from: ${inputs.heardAbout || "(not answered)"}`,
    `This visit: ${thisVisit ? describeVisit(thisVisit) : "unknown"}`,
    ...(earlierFirstVisit
      ? [
          `First visit: ${formatDate(earlierFirstVisit.at)}, ${describeVisit(earlierFirstVisit)}`,
        ]
      : []),
    `Sent from: ${sentFrom}`,
    ...(replayUrl ? [`Session recording: ${replayUrl}`] : []),
  ];

  return {
    subject: `New car rental enquiry${car ? ` – ${car}` : ""} (via ${source})`,
    message: lines.join("\n"),
  };
};
