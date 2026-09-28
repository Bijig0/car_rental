import { zodResolver } from "@hookform/resolvers/zod";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { useForm, type SubmitHandler } from "react-hook-form";
import validator from "validator";
import { z } from "zod";
import { HEARD_ABOUT_OPTIONS } from "../analytics/heardAboutOptions";
import { sendEnquiry } from "./sendEnquiry";

const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().refine(validator.isMobilePhone),
  heardAbout: z.string().optional(),
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

type EmailFormProps = {
  car?: string;
};

const EmailForm = ({ car }: EmailFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const sendEmail = (inputs: Inputs) =>
    sendEnquiry({ form: "listing", car, inputs });

  const {
    mutate: sendEmailMutate,
    isPending,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: sendEmail,
    mutationKey: ["sendEmail"],
  });

  const onSubmit: SubmitHandler<Inputs> = (inputs) => {
    console.log(inputs);
    sendEmailMutate(inputs);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="seller_offer_form mt-40"
      >
        <div className="row g-3">
          <div className="col-6">
            <div className="input-field">
              <label>First Name</label>
              <input
                required
                className="color-secondary"
                {...register("firstName", { required: true })}
                type="text"
              />
              {errors.firstName && (
                <ErrorText>First name is required</ErrorText>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="input-field">
              <label>Last Name</label>
              <input
                required
                className="color-secondary"
                {...register("lastName", { required: true })}
                type="text"
              />
              {errors.lastName && <ErrorText>Last name is required</ErrorText>}
            </div>
          </div>
          <div className="col-6">
            <div className="input-field">
              <label>Email</label>
              <input
                className="color-secondary"
                {...register("email", { required: true })}
                type="email"
              />
              {errors.email && <ErrorText>Email is required</ErrorText>}
            </div>
          </div>
          <div className="col-6">
            <div className="input-field">
              <label>Phone</label>
              <input
                className="color-secondary"
                {...register("phoneNumber", { required: true })}
                type="tel"
              />
              {errors.phoneNumber && (
                <ErrorText>Phone Number is required</ErrorText>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="input-field">
              <label>How did you hear about us?</label>
              <select
                className="form-select color-secondary"
                defaultValue=""
                {...register("heardAbout")}
              >
                <option value="">Select one (optional)</option>
                {HEARD_ABOUT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="input-field">
              <label>Message</label>
              <textarea
                className="color-secondary"
                {...register("message")}
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-md mt-30">
          {isPending ? (
            <div className="spinner-border text-light" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Request a quote"
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

const queryClient = new QueryClient();

const Main = ({ car }: EmailFormProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <EmailForm car={car} />
    </QueryClientProvider>
  );
};

export default Main;
