import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { useMemo } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import validator from "validator";
import { z } from "zod";

const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().refine(validator.isMobilePhone),
  message: z.string().nullable(),
});

type ErrorTextProps = {
  children: React.ReactNode;
};

const ErrorText = (props: ErrorTextProps) => {
  return (
    <p className="text-danger text-3" style={{ fontSize: "12px" }}>
      {props.children}
    </p>
  );
};

type Inputs = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    const serviceId = "service_010xydf";
    const templateName = "template_1dcm4rn";
    const publicKey = "Yd6r5t5etWEKD3GNh";
    const form = e.target as HTMLFormElement;
    return emailjs.sendForm(serviceId, templateName, form, publicKey);
  };

  const {
    mutate: sendEmailMutate,
    isPending,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: sendEmail,
    mutationKey: ["sendEmail"],
  });

  const onSubmit: SubmitHandler<Inputs> = (_, e) => {
    console.log(_);
    if (e === undefined) throw new Error("Form event is undefined");
    sendEmailMutate(e as React.FormEvent<HTMLFormElement>);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="ct-form-wrapper">
        <div className="row g-4">
          <div className="col-sm-6">
            <div className="input-field">
              <label className="fw-semibold text-secondary mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="border w-100 rounded"
                {...register("firstName")}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="input-field">
              <label className="fw-semibold text-secondary mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="border w-100 rounded"
                {...register("lastName")}
              />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="input-field">
              <label className="fw-semibold text-secondary mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="border w-100 rounded"
                {...register("email")}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="input-field">
              <label className="fw-semibold text-secondary mb-1">Phone</label>
              <input
                type="tel"
                placeholder="Full Name"
                className="border w-100 rounded"
                {...register("phoneNumber")}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-field">
              <label className="fw-semibold text-secondary mb-1">Message</label>
              <textarea
                placeholder="Message"
                className="border w-100 rounded"
                rows={5}
                {...register("message")}
              ></textarea>
            </div>
          </div>
        </div>

        <button className="btn btn-primary btn-md mt-4" type="submit">
          {isPending ? (
            <div className="spinner-border text-light" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Get in touch"
          )}
        </button>
      </form>
      {isSuccess ? <SuccessToast /> : null}
      {error ? <ErrorToast /> : null}
    </>
  );
};

const SuccessToast = () => {
  return (
    <div className="alert alert-success" role="alert">
      We have received your quote request and will be in touch soon!
    </div>
  );
};

const ErrorToast = () => {
  return (
    <div className="alert alert-danger" role="alert">
      Something went wrong, please try again
    </div>
  );
};

const Main = () => {
  const queryClient = useMemo(() => new QueryClient(), []);
  return (
    <QueryClientProvider client={queryClient}>
      <ContactForm />
    </QueryClientProvider>
  );
};

export default Main;
