import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Resend } from "resend";
import validator from "validator";
import { z } from "zod";

const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().refine(validator.isMobilePhone),
  message: z.string().nullable(),
});

type Inputs = z.infer<typeof schema>;

const resend = new Resend("re_Yq4L26Sj_4wh8MfGnsktu6xE1H2ydrXPb");

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="seller_offer_form mt-40">
      <div className="row g-3">
        <div className="col-6">
          <div className="input-field">
            <label>First Name</label>
            <input
              className="color-secondary"
              {...register("firstName", { required: true })}
              type="text"
            />
            {errors.firstName && <p>First name is required</p>}
          </div>
        </div>
        <div className="col-6">
          <div className="input-field">
            <label>Last Name</label>
            <input
              className="color-secondary"
              {...register("lastName", { required: true })}
              type="text"
            />
            {errors.lastName && <p>Last name is required</p>}
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
            {errors.email && <p>Email is required</p>}
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
            {errors.phoneNumber && <p>Phone Number is required</p>}
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
        Request a quote
      </button>
    </form>
  );
};

export default EmailForm;
